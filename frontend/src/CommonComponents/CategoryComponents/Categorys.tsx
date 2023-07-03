import { SkeletonTag, Tags } from "../../Main/styles/styleComponents";
import { useTags } from "../../Main/customHooks/useTags";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import Category from "./Category";
import DropDownCategorys from "./DropDownCategorys";

interface categorysProps {
  selectedTag: string[];
  handleSelect: (tagId: string) => void;
  isMain: boolean;
  isExpired: string;
}

const Categorys = (props: categorysProps) => {
  const { data, isLoading } = useTags(props.isExpired);
  let responsiveVar = useResponsive();
  const handleTagSelect = props.handleSelect;
  const selectedTag = props.selectedTag;

  if (!props.isMain) {
    responsiveVar = {
      isFiveCards: false,
      isFourCards: false,
      isThreeCards: false,
      isTwoCards: true,
      isScreen: false,
      isDesktop: true,
      isMobile: false,
      isSmallScreen: false,
      isMediumScreen: false,
      isBigScreen: false 
    }
  }

  return (
      <Tags responsiveVar={responsiveVar}>
        {!isLoading && data ? (
          responsiveVar.isDesktop ? (
            data.map((tag) => (
              <Category
                key={tag.id}
                tagId={tag.id}
                label={tag.title}
                onSelect={handleTagSelect}
                isSelected={selectedTag.includes(tag.id)}
              />
            ))
          ) : (
            <DropDownCategorys
              data={data}
              selectedTag={selectedTag}
              handleSelect={handleTagSelect}
            />
          )
        ) : (
          Array.from({ length: responsiveVar.isDesktop ? 4 : 1 }).map((_, index) => (
            <SkeletonTag key={index} />
          ))
        )}
      </Tags>
  );
};

export default Categorys;
