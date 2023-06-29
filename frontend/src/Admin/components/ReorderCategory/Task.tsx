import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { categoryRes } from '../../../Types/common';

interface test {
  isDragging: boolean
}

const Container = styled.div<test>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'black' : 'white')};
  color: ${props => (props.isDragging ? 'white' : 'black')};

`;

interface taskprops {
    category: categoryRes
    index: number
}

const TaskCom = (props: taskprops) => {
    return (
      <Draggable draggableId={props.category.id + props.category.title} index={props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {props.category.title}
          </Container>
        )}
      </Draggable>
    );
}

export default TaskCom;
