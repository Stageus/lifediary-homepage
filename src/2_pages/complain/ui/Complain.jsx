// Slice
import { S } from "./style";
import { useUpdatePageUrl } from "../model/useUpdatePageUrl";
import { useGetComplainList } from "../api/useGetComplainList";
import { divideToArray } from "../lib/divideToArray";
// Layer
import { ComplainItem } from "./complainItem";
import { DefaultBtn, Icon } from "@shared/ui";

export const Complain = () => {

  const [ complainList ] = useGetComplainList();
  const { currentPage, onClickNum, onClickLeft, onClickRight } = useUpdatePageUrl();

  return (
    <>
      <S.ComplainContent>
        {/* 열 제목들 */}
        <S.Table>
          <thead>
            <tr>
              <th>번호</th>
              <S.Content>사유</S.Content>
              <th>작성자</th>
              <th>날짜</th>
              <th>상태</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {/* 신고 리스트*/}
            {complainList?.data.map(( list ) => {
              return <ComplainItem key={ list.idx } list={ list }/>;
            })}
          </tbody>
        </S.Table>

        {/* 페이지네이션 컴포넌트
          button 비활성화 적용해야함
        */}
        <S.PageBtnContainer>

              {/* 왼쪽버튼 */}
              <S.PageArrowBtn>
                {complainList
                && <span onClick={ onClickLeft }>
                    <Icon type="leftArrow" color="#FF6767" size="30px" />
                  </span>}
                  
              </S.PageArrowBtn>

              {/* 신고리스트 개수에 대한 번호들 */}
              <S.PageBtnList>
                {complainList
                && divideToArray( complainList.reportCnt, 5 ).map(( num ) => {
                    return (
                      <DefaultBtn
                        text={ num }
                        key={ num }
                        type={ currentPage() === num ? "select" : null }
                        onClick={ () => onClickNum(num) }
                      />
                    );
                  })}
              </S.PageBtnList>

              {/* 오른쪽 버튼 */}
              <S.PageArrowBtn>
                {complainList 
                && <span onClick={ () => onClickRight( divideToArray( complainList?.reportCnt,5 ).length )}>
                      <Icon type="rightArrow" color="#FF6767" size="30px" />
                  </span>}
                    
              </S.PageArrowBtn>

          </S.PageBtnContainer>
        
      </S.ComplainContent>
    </>
  );
};
