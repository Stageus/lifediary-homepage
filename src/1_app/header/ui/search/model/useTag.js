import { useState } from "react";

export const useTag = () => {

    const [ tag, setTag ] = useState([]);

    const onKeyUp = ( e ) => {
        const target = e.target.value;
        if (e.key === "Enter" && target.trim() !== "") {
          setTag([...tag, target]);
          e.target.value = "";
        }
      };
    
      const onBlur = ( e ) => {
        const target = e.target.value;
        if (target.trim() !== "") {
          setTag([...tag, target]);
          e.target.value = "";
        }
      };
    
      const deleteTag = ( text ) => {
        const deleteTagList = tag.filter((item) => item !== text);
        setTag(deleteTagList);
      };

    return { tag, onKeyUp, onBlur, deleteTag };
}