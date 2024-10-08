import { useAlarm } from "@shared/store";

export const useClipBoard = () => {

    const alarmText = useAlarm( state => state.alarmText );
    const clipBoard = async () => {      
        try{
            await navigator.clipboard.writeText(location.href);
            alarmText("클립보드에 복사되었습니다.");
  
        } catch{
          alarmText("잠시후에 다시 시도해주세요!");
        }   
      };

    return { clipBoard };
}