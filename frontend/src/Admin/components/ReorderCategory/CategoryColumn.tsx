import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { columnType } from "./initialData";
import TaskCom from "./Task";
import { categoryRes } from "../../../Types/common";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

interface orderCategory {
  column: columnType;
  tasks: categoryRes[];
}

const CategoryColumn = (props: orderCategory) => {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((category, index) => (
              <TaskCom key={category.title} category={category} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};
export default CategoryColumn;
