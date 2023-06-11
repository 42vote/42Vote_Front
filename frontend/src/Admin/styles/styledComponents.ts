import styled from "styled-components";

export const AdminContainer = styled.div`
  margin-top: 4%;
  height: 100vh;
  display: grid;
  grid-template-columns: 12.6rem 1.618fr;
`;

export const AdminCategoryListContainer = styled.div`
  overflow: hidden;
  grid-column: 1;
  // border: 1px solid black;
`;

export const SelectedCategoryInfoContainer = styled.div`
  grid-column: 2;
  margin-left: 2rem;
  border: 1px solid black;
`;
