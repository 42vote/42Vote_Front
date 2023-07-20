import { selectTagProps } from "../../Main/types";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import { CardsArea, CardsContainersDiv } from "../../Main/styles/styleComponents";
import CardsContainer from "./CardsContainer";

const LineCardsContainers = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const responsiveVar = useResponsive();

  return (
    <CardsContainersDiv>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <CardsArea key={tag} responsiveVar={responsiveVar}>
            <CardsContainer tag={tag} isMain={props.isMain} />
          </CardsArea>
        </div>
      ))}
    </CardsContainersDiv>
  );
};

export default LineCardsContainers;
