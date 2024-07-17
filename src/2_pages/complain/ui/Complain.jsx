// Slice
import { S } from "./style";
import { useGetComplainList } from "../api/useGetComplainList";
import { divideToArray } from "../lib/divideToArray";
// Layer
import { ComplainItem } from "@widgets/complainItem";
import { DefaultBtn, Icon } from "@shared/ui";

export const Complain = () => {

  const [ complainList, currentPage, changePage ] = useGetComplainList();
  const onClickNum = ( num ) => changePage( num );

  const onClickLeft = () => {

      if ( +currentPage() === 1 ) return;

      changePage( +currentPage() - 1 )
  };

  const onClickRight = () => {

      if ( complainList.reportCnt === currentPage() ) return;

      changePage( +currentPage() + 1 );
  };

  return (
    <>
      <S.ComplainContent>
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
            {complainList?.result?.map(( list ) => {
              return <ComplainItem key={ list.idx } list={ list }/>;
            })}
          </tbody>
        </S.Table>
        { complainList && complainList.reportCnt !== 0
          ? (<S.PageBtnContainer>
              <S.PageArrowBtn>
                {+currentPage() !== 1 
                ? (
                  <span onClick={ onClickLeft }>
                    <Icon type="leftArrow" color="#FF6767" size="30px" />
                  </span>) 
                : null}
              </S.PageArrowBtn>

              <S.PageBtnList>
                {complainList
                && divideToArray( complainList.reportCnt, 5 ).map(( num ) => {
                    return (
                      <DefaultBtn
                        text={ num }
                        key={ num }
                        type={ +currentPage() === num ? "select" : null }
                        onClick={ () => onClickNum(num) }
                      />
                    );
                  })}
              </S.PageBtnList>

              <S.PageArrowBtn>
                { complainList 
                  && divideToArray( complainList?.reportCnt,5 ).length !== +currentPage() 
                    ? (
                      <span onClick={onClickRight}>
                        <Icon type="rightArrow" color="#FF6767" size="30px" />
                      </span>) 
                    : null}
              </S.PageArrowBtn>

          </S.PageBtnContainer>) 
          : null
          }
        
      </S.ComplainContent>
    </>
  );
};
