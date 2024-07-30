import { useState } from "react";
import { useAlarm } from "@shared/store";

export const useModel = () => {

    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const alarmText = useAlarm( state => state.alarmText );

    const onClickModal = () => setIsOpenModal( !isOpenModal );

    const clipBoard = async ( path ) => {      
      try{
          await navigator.clipboard.writeText(`${import.meta.env.VITE_API_URL}/${path}`);
          alarmText("클립보드에 복사되었습니다.");

      } catch{
        alarmText("잠시후에 다시 시도해주세요!");
      }   
    };
    
    return { isOpenModal, onClickModal, clipBoard };
}