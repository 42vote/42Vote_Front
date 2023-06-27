import { DragDropContext, Draggable, Droppable, DropResult, DraggableLocation } from "react-beautiful-dnd";
import CategoryColumn from "./CategoryColumn";
import {
  Column,
  Task,
  columnOrder,
  initialDataColumns,
  initialDataTasks,
} from "./initialData";
import { useState } from "react";

const ReorderCategory = () => {
  const TaskData: initialDataTasks = Task;
  const [ColumnData, setColumnData] = useState(Column);
  const columnOrderData: string[] = columnOrder;
  const onDragStart = () => {};
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
    }

    const newColumnData = {
      columns: {
        ...ColumnData.columns,
        [newColumn.id]: newColumn,
      }
    }
    setColumnData(newColumnData);
  };

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      {columnOrderData.map((columnId) => {
        const column = ColumnData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => TaskData.tasks[taskId]);

        return <CategoryColumn key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default ReorderCategory;
