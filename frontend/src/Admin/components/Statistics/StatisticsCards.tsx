import { useContext, useEffect, useRef } from "react";
import { useCards } from "../../../Main/customHooks/useCards";
import { useDocSize } from "../../../Main/customHooks/useDocSize";
import { useResponsive } from "../../../Main/customHooks/useResponsive";
import { useTags } from "../../../Main/customHooks/useTags";
import { TagHeader } from "../../../Main/styles/styleComponents";
import { documentListQuery } from "../../../Main/types";
import { categoryDocumentsContext } from "../../contexts/setDocuments";
import {
  StatisticsCardsArea,
  StatisticsCardsContainer,
  StatisticsDocListContainer,
} from "../../styles/styledComponents";
import Card from "../../../CommonComponents/CardsComponents/Card";
import NoCards from "../../../CommonComponents/CardsComponents/NoCards";
import SkeletonCards from "../../../CommonComponents/CardsComponents/SkeletonCards";
import { getShownCardsNum } from "../../../CommonComponents/CardsComponents/utils";

interface TagId {
  tagId: string;
}

const StatisticsCards = (prop: TagId) => {
  const tagId = prop.tagId;
  const docSize = useDocSize(tagId);
  const responsiveVar = useResponsive();
  const tagInfo = useTags("all").data?.filter((arr) => arr.id === tagId);
  const title = tagInfo?.length ? tagInfo[0].title : "Category";
  const docSizeNum = docSize.data ? (docSize.data.categorySize + 1) * 5 : null;
  const documentQuery: documentListQuery = {
    categoryId: tagId,
    listSize: docSizeNum ? docSizeNum.toString() : "50",
    expired: "all",
    myPost: "false",
    myVote: "false",
  };
  const { getCards, getCardsIsSuccess } = useCards(
    documentQuery,
    docSize.data ? docSize.data.categorySize : -1
  );

  const DocContext = useContext(categoryDocumentsContext);
  const isMounted = useRef(false);

  useEffect(()=>{
    isMounted.current = false;
  },[prop.tagId])
  
  useEffect(() => {
    if (getCards && getCardsIsSuccess && !isMounted.current) {
      DocContext.setCategoryDocuments(getCards.pages[0].cardArrary);
      isMounted.current = true;
    }
  }, [getCards, getCardsIsSuccess, DocContext]);


  return (
    <StatisticsDocListContainer>
      <StatisticsCardsArea responsiveVar={responsiveVar}>
        <TagHeader responsiveVar={responsiveVar}>#{title}</TagHeader>
        <StatisticsCardsContainer>
          {getCardsIsSuccess && getCards ? (
            DocContext.categoryDocuments.length > 0 ? (
              DocContext.categoryDocuments.map((card) => (
                <Card key={card.id} {...card} />
              ))
            ) : (
              <NoCards />
            )
          ) : (
            Array.from({ length: getShownCardsNum(responsiveVar) }).map((_, index) => (
              <SkeletonCards key={index} />
            ))
          )}
        </StatisticsCardsContainer>
      </StatisticsCardsArea>
    </StatisticsDocListContainer>
  );
};

export default StatisticsCards;
