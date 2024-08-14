// Slice
import { useGetDiaryInfo } from "../api/useGetDiaryInfo";
import { usePutDiaryInfo } from "../api/usePutDiaryInfo";

// Layer
import { DiarySet } from "@widgets/diarySet";
 
export const DiaryUpdate = () => {

  const [ diaryInfo ] = useGetDiaryInfo();
  const [ putDiaryInfo ] = usePutDiaryInfo();
  // http://localhost:5173/diaryupdate/78
  return(
    <>
      { diaryInfo && <DiarySet diaryInfo={diaryInfo} submit={putDiaryInfo}/>}
    </>
  );
};
