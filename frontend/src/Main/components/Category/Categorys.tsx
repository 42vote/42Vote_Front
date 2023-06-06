import { SkeletonTag, TagConatiner, Tags } from "../../styles/styleComponents";
import { useTags } from "../../customHooks/useTags";
import Category from "./Category";
import { useResponsive } from "../../customHooks/useResponsive";
import DropDownCategorys from "./DropDownCategorys";

interface categorysProps {
  selectedTag: string[];
  handleSelect: (tagId: string) => void;
}

const Categorys = (props: categorysProps) => {
  const { data, isLoading } = useTags("false");
  const responsiveVar = useResponsive();
  const handleTagSelect = props.handleSelect;
  const selectedTag = props.selectedTag;

  return (
    <TagConatiner responsiveVar={responsiveVar}>
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
    </TagConatiner>
  );
};

export default Categorys;
