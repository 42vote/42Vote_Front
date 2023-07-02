import { useState, useContext, useEffect, useRef } from "react";
import { categoryDocumentsContext } from "../../contexts/setDocuments";
import { useResponsive } from "../../../Main/customHooks/useResponsive";
import { Tag } from "../../../Main/styles/styleComponents";
import {
  StatisticsOptionContainer,
  SelectedCategorys,
} from "../../styles/styledComponents";
import { documentListRes } from "../../../Types/common";

const sortByVote = (docList: documentListRes[]) => {
  const sortedDoc = [...docList].sort((card1, card2) => {
    const voteRate1: number = parseInt(card1.voteCnt) / parseInt(card1.goal);
    const voteRate2: number = parseInt(card2.voteCnt) / parseInt(card2.goal);
    return voteRate1 < voteRate2 ? 1 : -1;
  });
  return sortedDoc;
};

const completeOnes = (docList: documentListRes[]) => {
  const completeDoc = [...docList].filter(
    (Doc) => parseInt(Doc.voteCnt) / parseInt(Doc.goal) >= 1
  );
  return completeDoc;
};

const sortById = (docList: documentListRes[]) => {
  const sortedDoc = [...docList].sort((card1, card2) => {
    return card1.id < card2.id ? 1 : -1;
  });
  return sortedDoc;
};

const StatisticsOption = () => {
  const responsiveVar = useResponsive();
  const [isSelected, setIsSelected] = useState("id");
  const DocContext = useContext(categoryDocumentsContext);
  const DocContextRef = useRef(DocContext);
  const tempContext = useRef<documentListRes[]>([]);

  useEffect(() => {
    tempContext.current = [...DocContextRef.current.categoryDocuments];
  }, []);

  const selectedClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isSelected === event.currentTarget.id) {
      setIsSelected("id");
      const sortedDoc = sortById(tempContext.current);
      DocContext.setCategoryDocuments(sortedDoc);
    } else if (event.currentTarget.id === "voteCnt") {
      setIsSelected("voteCnt");
      const sortedDoc = sortByVote(tempContext.current);
      DocContext.setCategoryDocuments(sortedDoc);
    } else if (event.currentTarget.id === "goalComplete") {
      setIsSelected("goalComplete");
      const completeDoc = completeOnes(tempContext.current);
      DocContext.setCategoryDocuments(completeDoc);
    }
  };

  return (
    <StatisticsOptionContainer responsiveVar={responsiveVar}>
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
    </StatisticsOptionContainer>
  );
};

export default StatisticsOption;
