export interface taskType {
  id: string;
  content: string;
}

interface initialDataTasksProps {
  [tasks: string]: taskType;
}

export interface initialDataTasks {
  tasks: initialDataTasksProps;
}

export interface columnType {
  id: string;
  title: string;
  taskIds: string[];
}

interface initialDataColumnsProps {
  [columns: string]: columnType;
}

export interface initialDataColumns {
  columns: initialDataColumnsProps;
}

export const Task: initialDataTasks = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
};

export const Column: initialDataColumns = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
};

export const columnOrder = ["column-1"];

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1"],
};

export default initialData;
