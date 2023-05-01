import React, { useEffect, useState } from "react";
import FixedTop from "../Etc/FixedTop";
import CategoryContainer from "./components/Category/CategoryContainer";
import CardsContainers from "./components/Card/CardsContainers";
import "./styles/style.css";
import { useTags } from "./customHooks/useTags";

const MainPage: React.FC = () => {
  //need to fix. tags to [].
  const { data, isLoading } = useTags();
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  useEffect(()=>{
    let tagList:string[] = [];
    if (!isLoading && data){
      for (let i = 0; i < data.length; i++){
        tagList.push(data[i].id);
      }
    }
    setSelectedTag(tagList);
  },[isLoading, data])

  return (
    <div>
      <div id="mobile">
        <FixedTop />
      </div>
      <CategoryContainer selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <CardsContainers
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
    </div>
  );
};

export default MainPage;
