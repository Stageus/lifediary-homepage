// Slice
import { S } from "./stlye";
import { useGetDiaryInfo } from "../api/useGetDiaryInfo";
import { usePutDiaryInfo } from "../api/usePutDiaryInfo";

// Layer
import { DiarySet } from "@widgets/diarySet";
 
export const DiaryUpdate = () => {

  const [ diaryInfo ] = useGetDiaryInfo();
  const [ putDiaryInfo ] = usePutDiaryInfo();
  
  return(
    <S.diaryUpdate>
      <S.componentsTitle>일기를 어떻게 수정하시겠어요?</S.componentsTitle>
      { diaryInfo && <DiarySet diaryInfo={diaryInfo} submit={putDiaryInfo}/>}
    </S.diaryUpdate>
  );
};
