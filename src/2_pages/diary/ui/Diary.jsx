import { S } from "./style";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { DiaryInfo } from "@widgets/diaryInfo";

export const Diary = () => {
    const [diaryList, nextPage] = useGetDiaryList();
  return (
    <>
      <S.Diary>
        {diaryList &&
          diaryList.map((diary) => {
            console.log(diary)
            return (
              <DiaryInfo
              key={diary.idx}
              diary={diary}
              />
            );
          })}
      </S.Diary>
    </>
  );
};
