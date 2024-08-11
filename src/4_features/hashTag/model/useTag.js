// Npm
import { useRef } from "react";
// Layer
import { tagValidation } from "@shared/consts/validation";
import { useMessage } from "@shared/store";

export const useTag = ( props ) => {


    const { tagList, setTagList } = props ?? [];
    const inputRef = useRef(null);
    const setMessage = useMessage( state => state.setMessage);

    const onKeyUp = ( e ) => {
        const target = e.target.value;
        if (e.key === "Enter" && target.trim() !== "") {
          if ( !tagValidation(target) ) {
            setMessage("#은 사용할수 없으며,최대20자까지만 입력이 가능해요"); 
            return;
          }

          if ( tagList.length === 20){
            setMessage("태그는 최대 20개까지만 가능해요"); 
            return
          }
          
          setTagList([...tagList, target]);
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

          if ( tagList.length === 20){
            e.target.value = "";
            return;
          }
          
          setTagList([...tagList, target]);
          e.target.value = "";
        }
      };
    
      const deleteTag = ( text ) => {
        const deleteTagList = tagList.filter((item) => item !== text);
        setTagList(deleteTagList);
      };

    return { tagList, inputRef, onKeyUp, onBlur, deleteTag };
}