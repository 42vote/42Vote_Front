import styled from "styled-components";

export const AdminContainer = styled.div`
  padding-top: calc(clamp(30px, 3%, 50px) + 20px);
  min-height: 100vh;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 12.6rem 1.618fr;
`;

export const AdminCategoryListContainer = styled.div`
  overflow: hidden;
  grid-column: 1;
  border: 1px solid black;
`;

export const SelectedCategoryInfoContainer = styled.div`
  grid-column: 2;
  border: 1px solid black;
`;
