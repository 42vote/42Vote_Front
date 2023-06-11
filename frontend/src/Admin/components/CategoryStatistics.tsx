import CardsContainers from "../../CommonComponents/CardsComponents/CardsContainers";
import { selectTagProps } from "../../Main/types";

const CategoryStatistics = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;

  return (
    <>
    <button>추천순 정렬</button>
      <CardsContainers
        selectedTag={selectedTag}
        setSelectedTag={() => {}}
        isMain={props.isMain}
      />
    </>
  );
};

export default CategoryStatistics;
