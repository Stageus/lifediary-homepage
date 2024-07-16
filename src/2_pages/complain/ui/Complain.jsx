import { S } from "./style";
import { useModel } from "../model/useModel";
import { divideToArray } from "../lib/divideToArray";
import { ComplainItem } from "@widgets/complainItem";
import { DefaultBtn, Icon } from "@shared/ui";

// merge 오류난곳
export const Complain = () => {
  const { currentPage, complainList, onClickNum, onClickLeft, onClickRight } = useModel();

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
            {complainList?.result?.map((list) => {
              return <ComplainItem key={list.idx} list={list}/>;
            })}
          </tbody>
        </S.Table>
        <S.PageBtnContainer>
          <S.PageNextBtn>
            {+currentPage() !== 1 ? (
              <span onClick={onClickLeft}>
                <Icon type="leftArrow" color="#FF6767" size="30px" />
              </span>
            ) : null}
          </S.PageNextBtn>
          <S.PageBtnList>
            {complainList?.reportCnt &&
              divideToArray(complainList.reportCnt, 5).map((num) => {
                return (
                  <DefaultBtn
                    text={num}
                    key={num}
                    type={+currentPage() === num ? "select" : null}
                    onClick={() => onClickNum(num)}
                  />
                );
              })}
          </S.PageBtnList>
          <S.PageNextBtn>
            {complainList.reportCnt && divideToArray(complainList?.reportCnt,5).length !== +currentPage() ? (
              <span onClick={onClickRight}>
                <Icon type="rightArrow" color="#FF6767" size="30px" />
              </span>
            ) : null}
          </S.PageNextBtn>
        </S.PageBtnContainer>
      </S.ComplainContent>
    </>
  );
};
