import { DragDropContext, DropResult } from "react-beautiful-dnd";
import CategoryColumn from "./CategoryColumn";
import { columnOrder, initialDataColumns } from "./initialData";
import { useEffect, useState } from "react";
import { useTags } from "../../../../Main/customHooks/useTags";
import { categoryRes } from "../../../../Types/common";
import { patchCategoryOrder } from "../../../apis/adminApis";
import { AdminButton, ReorderContainer } from "../../../styles/styledComponents";
import { queryClient } from "../../../../App";

const ReorderCategory = () => {
  const { data, isLoading } = useTags("false");
  const [categorys, setCategorys] = useState<categoryRes[]>([]);
  const [ColumnData, setColumnData] = useState<initialDataColumns>({
    columns: {
      categoryReorder: {
        id: "categoryReorder",
        title: "Category Reorder",
        taskIds: [],
      },
    },
  });
  const [isPatching, setIsPatching] = useState(false);
  const [patchingArr, setPatchingArr] = useState<boolean[]>([]);

  useEffect(() => {
    if (
      !isLoading &&
      data &&
      ColumnData.columns["categoryReorder"].taskIds.length < 1
    ) {
      let tempList: categoryRes[] = [];
      let tempTaskIds: string[] = [];
      for (let i = 0; i < data.length; i++) {
        tempList.push(data[i]);
        tempTaskIds.push(data[i].id + data[i].title);
      }
      setCategorys(tempList);
      setColumnData({
        columns: {
          categoryReorder: {
            id: "categoryReorder",
            title: "Category Reorder",
            taskIds: tempTaskIds,
          },
        },
      });
    }
  }, [data, isLoading, ColumnData]);

  const columnOrderData: string[] = columnOrder;
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = ColumnData.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newColumnData = {
      columns: {
        ...ColumnData.columns,
        [newColumn.id]: newColumn,
      },
    };
    setColumnData(newColumnData);
  };

  const getInfo = () => {
    const column = ColumnData.columns["categoryReorder"];
    setIsPatching(true);
    for (let i = 0; i < column.taskIds.length; i++) {
      const id = categorys.filter(
        (category) => category.id + category.title === column.taskIds[i]
      )[0].id;
      patchCategoryOrder(i, id).then(() => {
        setPatchingArr(x => [...x, true]);
      });
    }
  };

  useEffect(() => {
    if (
      patchingArr.length ===
        ColumnData.columns["categoryReorder"].taskIds.length &&
      patchingArr.filter((res) => res === false).length === 0
    ) {
      setIsPatching(false);
      setPatchingArr([]);
      queryClient.invalidateQueries(["tags", "false"]);
    }
  }, [patchingArr, ColumnData]);

  return (
    <ReorderContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {columnOrderData.map((columnId) => {
          const column = ColumnData.columns[columnId];
          const tasks = column.taskIds.map((taskId) => {
            return categorys.filter((x) => x.id + x.title === taskId)[0];
          });

          return (
            <CategoryColumn key={column.id} column={column} tasks={tasks} />
          );
        })}
      </DragDropContext>
      <AdminButton
        isPatching={isPatching}
        onClick={getInfo}
        disabled={isPatching}
      >
        {isPatching ? "잠시만 기다려 주세요." : "수정 저장"}
      </AdminButton>
    </ReorderContainer>
  );
};

export default ReorderCategory;
