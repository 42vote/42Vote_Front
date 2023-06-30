import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { columnType } from "./initialData";
import TaskCom from "./Task";
import { categoryRes } from "../../../Types/common";

const Container = styled.div`
  width: 60%;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
  width: 80%;
  text-align: center;
  font-family: "Lora-Bold", "kbiz-Bold";
  font-size: max(30px, 2.5vw);
  color: black;
  background-color: transparent;
  border: none;
  resize: none;
  word-break: keep-all;
  margin-top: 10px;
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
    <>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <Container>
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {props.tasks.map((category, index) => (
                <TaskCom
                  key={category.title}
                  category={category}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </TaskList>
          </Container>
        )}
      </Droppable>
    </>
  );
};
export default CategoryColumn;
