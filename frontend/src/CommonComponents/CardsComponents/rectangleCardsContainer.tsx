import { useCards } from "../../Main/customHooks/useCards";
import { useDocSize } from "../../Main/customHooks/useDocSize";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import { useTags } from "../../Main/customHooks/useTags";
import { documentListQuery, selectTagProps } from "../../Main/types";
import {
  StatisticsCardsArea,
  StatisticsCardsContainer,
  StatisticsDocListContainer,
  StatisticsTagHeader,
} from "../../Admin/styles/styledComponents";
import { TagHeader } from "../../Main/styles/styleComponents";
import NoCards from "./NoCards";
import Card from "./Card";
import { getShownCardsNum } from "./utils";
import SkeletonCards from "./SkeletonCards";

const RectangleCardsContainer = (props: selectTagProps) => {
  const tagId = props.selectedTag[0];
  const docSize = useDocSize(tagId);
  const responsiveVar = useResponsive();
  const tagInfo = useTags("false").data?.filter((arr) => arr.id === tagId);
  const title = tagInfo?.length ? tagInfo[0].title : "Loading...";
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

  return (
    <StatisticsDocListContainer>
      <StatisticsCardsArea responsiveVar={responsiveVar}>
        <StatisticsTagHeader responsiveVar={responsiveVar}>
          #{title}
        </StatisticsTagHeader>
        <StatisticsCardsContainer>
          {getCardsIsSuccess && getCards ? (
            getCards.pages[0].cardArrary.length > 0 ? (
              getCards.pages[0].cardArrary.map((card) => (
                <Card key={card.id} {...card} />
              ))
            ) : (
              <NoCards />
            )
          ) : (
            Array.from({ length: getShownCardsNum(responsiveVar) }).map(
              (_, index) => <SkeletonCards key={index} />
            )
          )}
        </StatisticsCardsContainer>
      </StatisticsCardsArea>
    </StatisticsDocListContainer>
  );
};

export default RectangleCardsContainer;
