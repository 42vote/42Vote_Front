import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CategoryColumn from "./CategoryColumn";
import {
  Column,
  Task,
  columnOrder,
  initialDataColumns,
  initialDataTasks,
} from "./initialData";

const ReorderCategory = () => {
  const TaskData: initialDataTasks = Task;
  const ColumnData: initialDataColumns = Column;
  const columnOrderData: string[] = columnOrder;
  const onDragStart = () => {};
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.droppableId &&
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

    const newData = {
      columns: {
        ...ColumnData.columns,
        [newColumn.id]: newColumn,
      }
    }
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
