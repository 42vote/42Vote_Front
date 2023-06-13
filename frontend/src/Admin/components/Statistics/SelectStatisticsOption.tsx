import { useState, useContext, useEffect } from "react";
import {
  categoryDocuments,
  categoryDocumentsContext,
} from "../../contexts/setDocuments";
import { useResponsive } from "../../../Main/customHooks/useResponsive";
import { Tag } from "../../../Main/styles/styleComponents";
import {
  StatisticsOptionContainer,
  SelectedCategorys,
} from "../../styles/styledComponents";

const sortByVote = (DocContext: categoryDocuments) => {
  const sortedDoc = DocContext.categoryDocuments.sort((card1, card2) => {
    const voteRate1: number = parseInt(card1.voteCnt) / parseInt(card1.goal);
    const voteRate2: number = parseInt(card2.voteCnt) / parseInt(card2.goal);
    return voteRate1 < voteRate2 ? 1 : -1;
  });
  return sortedDoc;
};
const sortById = (DocContext: categoryDocuments) => {
  const sortedDoc = DocContext.categoryDocuments.sort((card1, card2) => {
    return card1.id < card2.id ? 1 : -1;
  });
  return sortedDoc;
};

const StatisticsOption = () => {
  const responsiveVar = useResponsive();
  const [isSelected, setIsSelected] = useState(false);
  const DocContext = useContext(categoryDocumentsContext);
  const selectedClick = () => {
    if (isSelected) {
      setIsSelected(false);
      const sortedDoc = sortById(DocContext);
      DocContext.setCategoryDocuments(sortedDoc);
    } else {
      setIsSelected(true);
      const sortedDoc = sortByVote(DocContext);
      DocContext.setCategoryDocuments(sortedDoc);
    }
  };

  useEffect(()=>{
    console.log(DocContext.categoryDocuments);
  },[DocContext, DocContext.categoryDocuments])

  return (
    <StatisticsOptionContainer responsiveVar={responsiveVar}>
      <SelectedCategorys responsiveVar={responsiveVar}>
        <Tag isSelected={isSelected} onClick={selectedClick}>
          추천수 정렬
        </Tag>
      </SelectedCategorys>
    </StatisticsOptionContainer>
  );
};

export default StatisticsOption;
