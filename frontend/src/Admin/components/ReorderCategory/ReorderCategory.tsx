import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CategoryColumn from "./CategoryColumn";
import { Column, Task, columnOrder, initialDataColumns, initialDataTasks } from "./initialData";

const ReorderCategory = () => {
const TaskData: initialDataTasks = Task;
const ColumnData: initialDataColumns = Column;
const columnOrderData: string[] = columnOrder; 
  const onDragStart = () => {};
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {columnOrderData.map(columnId => {
          const column = ColumnData.columns[columnId];
          const tasks = column.taskIds.map(taskId => TaskData.tasks[taskId]);

          return <CategoryColumn key={column.id} column={column} tasks={tasks} />;
        })}
    </DragDropContext>
  );
};

export default ReorderCategory;
