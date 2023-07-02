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

export const columnOrder = ["categoryReorder"];
