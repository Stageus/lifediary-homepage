// Npm
import { useSearchParams } from "react-router-dom";
// Slice
import { S } from "./style";
import { useGetComplainList } from "../api/useGetComplainList";
import { numberToArray } from "../lib/numberToArray";
// Layer
import { ComplainItem } from "./complainItem";
import { DefaultBtn } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const Complain = () => {

  const [ complainList ] = useGetComplainList();
  const { complainRoute } = useRoute();
  const [ searchParams ] = useSearchParams();
  const currentPageNum = +searchParams.get( "page" );

  return (
    <>
      <S.ComplainContent>
        {/* 열 제목들 */}
        <S.Table>
          <thead>
            <tr>
              <S.number>번호</S.number>
              <S.Content>사유</S.Content>
              <th>작성자</th>
              <th>날짜</th>
              <S.thState>상태</S.thState>
              <th />
            </tr>
          </thead>
          <tbody>
            {/* 신고 리스트*/}
            {complainList?.reports.map((list, idx) => {
              return <ComplainItem key={idx} {...list} order={idx} />;
            })}
          </tbody>
        </S.Table>
        <S.PageBtnContainer>
          {/* 왼쪽버튼 */}
          <S.leftBtn 
            $isdisabled={currentPageNum === 1}
            onClick={() => currentPageNum === 1 ?  "" : complainRoute( currentPageNum - 1 )}
            >
            {"◀️"}
          </S.leftBtn>

          {/* 신고리스트 개수에 대한 번호들 */}
          <S.PageBtnList>
            {complainList &&
              numberToArray(complainList.maxPage).map((num) => {
                return (
                  <DefaultBtn
                    text={num}
                    key={num}
                    type={ currentPageNum === num ? "select" : ""}
                    onClick={() => complainRoute(num)}
                  />
                );
              })}
          </S.PageBtnList>

          {/* 오른쪽 버튼 */}
          <S.rightBtn 
            $isdisabled={ currentPageNum >= +complainList?.maxPage}
            onClick={() => currentPageNum >= +complainList?.maxPage ? "" : complainRoute( currentPageNum + 1)}
            >
            {"▶️"}
          </S.rightBtn>
        </S.PageBtnContainer>
      </S.ComplainContent>
    </>
  );
};
