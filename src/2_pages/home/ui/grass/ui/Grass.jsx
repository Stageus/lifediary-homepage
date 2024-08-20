// Slice
import { S } from "./style";
import { GrassItem } from "./grassItem/ui";
import { useGetGrassList } from "../api/useGetGrassList";
import { useYearsList } from "../model/useYearsList";
// Layer
import { DefaultBtn } from "@shared/ui";

export const Grass = () => {

  const { yearsList, selectYear, changeYear } = useYearsList();
  const [ grassList, onClickYears, isLoading ] = useGetGrassList( changeYear );

  return (
    <>
      {grassList ? (
        <S.GrassWrap>
          {/* Grass 년도 버튼리스트 */}
          <S.YearList>
            <h1>{ selectYear ? `${selectYear}년도에 작성한 일기` : "지난과거 1년까지 내가 작성한 일기"}</h1>
            <div>
              {yearsList.map((year, idx) => {
                return (
                  <div key={idx}>
                    <DefaultBtn
                      onClick={() => onClickYears(year)}
                      text={year}
                      type={ selectYear === year ? "select" : ""}
                    />
                  </div>
                );
              })}
            </div>
          </S.YearList>

          {/* Grass 각 요소 리스트 */}
          {isLoading ? (
            <S.Loading>로딩중....</S.Loading>
          ) : (
            <S.Grass>
              {grassList?.map((dayOfWeek, idx) => {
                return (
                  // 한주에 대한 부모
                  <S.DayOfWeekItem key={idx}>
                    {/* 요일 */}
                    <S.DayName>{Object.keys(dayOfWeek)}</S.DayName>
                    {/* 요일에 속한 일수 */}
                    <S.DayList>
                      {dayOfWeek[Object.keys(dayOfWeek)]?.map((day, idx) => {
                        return <GrassItem day={day} key={idx} />;
                      })}
                    </S.DayList>
                  </S.DayOfWeekItem>
                );
              })}
            </S.Grass>
          )}
        </S.GrassWrap>
      ) : null}
    </>
  );
};
