import { useState, useContext, useEffect } from "react";
import { Tag } from "../../../Main/styles/styleComponents";
import { categoryDocumentsContext } from "../../contexts/setDocuments";
import { useResponsive } from "../../../Main/customHooks/useResponsive";
import {
  StatisticsOptionContainer,
  SelectedCategorys,
} from "../../styles/styledComponents";
import { useDocSize } from "../../../Main/customHooks/useDocSize";
import { documentListQuery } from "../../../Main/types";
import { useCards } from "../../../Main/customHooks/useCards";
import { documentListRes } from "../../../Types/common";

const sortByVote = (DocList: documentListRes[]) => {
  const sortedDoc = [...DocList].sort((card1, card2) => {
    const voteRate1: number = parseInt(card1.voteCnt) / parseInt(card1.goal);
    const voteRate2: number = parseInt(card2.voteCnt) / parseInt(card2.goal);
    return voteRate1 < voteRate2 ? 1 : -1;
  });
  return sortedDoc;
};

const completeOnes = (DocList: documentListRes[]) => {
  const completeDoc = [...DocList].filter(
    (Doc) => parseInt(Doc.voteCnt) / parseInt(Doc.goal) >= 1
  );
  return completeDoc;
};

const sortById = (DocList: documentListRes[]) => {
  const sortedDoc = [...DocList].sort((card1, card2) => {
    return card1.id < card2.id ? 1 : -1;
  });
  return sortedDoc;
};

interface TagId {
  tagId: string;
}

const StatisticsOption = (prop: TagId) => {
  const responsiveVar = useResponsive();
  const [isSelected, setIsSelected] = useState("id");
  const DocContext = useContext(categoryDocumentsContext);

  const docSize = useDocSize(prop.tagId);
  const docSizeNum = docSize.data ? (docSize.data.categorySize + 1) * 5 : null;
  const documentQuery: documentListQuery = {
    categoryId: prop.tagId,
    listSize: docSizeNum ? docSizeNum.toString() : "50",
    expired: "all",
    myPost: "false",
    myVote: "false",
  };
  const { getCards, getCardsIsSuccess } = useCards(
    documentQuery,
    docSize.data ? docSize.data.categorySize : -1
  );
  useEffect(()=>{
    setIsSelected("id");
  },[prop.tagId])

  const selectedClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (getCards) {
      if (isSelected === event.currentTarget.id) {
        setIsSelected("id");
        const sortedDoc = sortById(getCards.pages[0].cardArrary);
        DocContext.setCategoryDocuments(sortedDoc);
      } else if (event.currentTarget.id === "voteCnt") {
        setIsSelected("voteCnt");
        const sortedDoc = sortByVote(getCards.pages[0].cardArrary);
        DocContext.setCategoryDocuments(sortedDoc);
      } else if (event.currentTarget.id === "goalComplete") {
        setIsSelected("goalComplete");
        const completeDoc = completeOnes(getCards.pages[0].cardArrary);
        DocContext.setCategoryDocuments(completeDoc);
      }
    }
  };

  return (
    <StatisticsOptionContainer responsiveVar={responsiveVar}>
      {getCards && getCardsIsSuccess && (
        <SelectedCategorys responsiveVar={responsiveVar}>
          <Tag
            id="voteCnt"
            isSelected={isSelected === "voteCnt"}
            onClick={selectedClick}
          >
            추천수 정렬
          </Tag>
          <Tag
            id="goalComplete"
            isSelected={isSelected === "goalComplete"}
            onClick={selectedClick}
          >
            목표 달성
          </Tag>
        </SelectedCategorys>
      )}
    </StatisticsOptionContainer>
  );
};

export default StatisticsOption;
