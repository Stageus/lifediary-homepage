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

        if ( e.key === "Enter" && target.trim() !== "" ) {
          if ( !tagValidation(target) ) {
            setMessage("#은 사용할수 없습니다. \n\n태그는 최대 20자입니다."); 
            return;
          }
          setTagList([...tagList, target]);
          e.target.value = "";
        }
      };
    
    const onBlur = ( e ) => {
        const target = e.target.value;

        if ( target.trim() !== "" ) {
          if ( !tagValidation(target) ) {
            setMessage("#은 사용할수 없습니다. \n\n태그는 최대 20자입니다."); 
            e.target.value = "";
            inputRef.current.focus();
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