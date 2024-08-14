// Slice
import { useGetDiaryInfo } from "../api/useGetDiaryInfo";
import { usePutDiaryInfo } from "../api/usePutDiaryInfo";

// Layer
import { DiarySet } from "@widgets/diarySet";
 
export const DiaryUpdate = () => {

  const [ diaryInfo ] = useGetDiaryInfo();
  const [ putDiaryInfo ] = usePutDiaryInfo();
  
  return(
    <>
      { diaryInfo && <DiarySet diaryInfo={diaryInfo} submit={putDiaryInfo}/>}
    </>
  );
};
