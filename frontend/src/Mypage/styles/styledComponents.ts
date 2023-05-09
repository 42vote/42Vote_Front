import styled from "styled-components";
import { responsiveVariable } from "../../Main/types";

export const MyPageHeader = styled.h1`
    text-align: center;
    margin-top: 5rem;
    font-size: 4rem;
`;

export const UserInfoList = styled.div`
    grid-column: 2;
    display: grid;
    justify-items: end;
    grid-template-row: 1.5rem 1rem;
`

export const UserName = styled.div`
    font-size: 1.5rem;
    gird-row: 1;
`

export const UserWallet = styled.div`
    font-size: 1.rem;
    gird-row: 2;
`

export const MyPageUserInfoContainer = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  grid-template-columns: 1fr ${(props) =>
      props.responsiveVar.isFiveCards
        ? "59.375rem"
        : props.responsiveVar.isFourCards
        ? "47.5rem"
        : props.responsiveVar.isThreeCards
        ? "35.625rem"
        : "65%"} 1fr;

`;