import React from "react";
import { selectTagProps } from "../types";
import Cards from "./Cards";

const TagCardContainers = (props: selectTagProps) => {
    const selectedTag = props.selectedTag;
  
    return (
      <>
        {selectedTag.map((tag) => (
          <div key={tag}>
            <h1 className="tagHeader">#{tag}</h1>
            <div className="cards_area">
              <Cards tag={tag}/>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default TagCardContainers;