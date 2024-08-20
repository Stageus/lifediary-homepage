// Npm
import { useState, useRef } from "react";
// Layer
import { tagValidation } from "@shared/consts/validation";
import { useMessage } from "@shared/store";

export const useTag = () => {

    const [ tag, setTag ] = useState([]);
    const inputRef = useRef(null);
    const setMessage = useMessage( state => state.setMessage);

    const onKeyUp = ( e ) => {
        const target = e.target.value;
        if (e.key === "Enter" && target.trim() !== "") {
          if ( !tagValidation(target) ) {
            setMessage("#은 사용할수 없으며,최대20자까지만 입력이 가능해요"); 
            return;
          }
          setTag([...tag, target]);
          e.target.value = "";
        }
      };
    
      const onBlur = ( e ) => {
        const target = e.target.value;
        if (target.trim() !== "") {
          if ( !tagValidation(target) ) {
            inputRef.current.focus();
            return;
          }
          setTag([...tag, target]);
          e.target.value = "";
        }
      };
    
      const deleteTag = ( text ) => {
        const deleteTagList = tag.filter((item) => item !== text);
        setTag(deleteTagList);
      };

    return { tag, inputRef, onKeyUp, onBlur, deleteTag };
}