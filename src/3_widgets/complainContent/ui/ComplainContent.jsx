import { S } from "./style";
import { useModel } from "../model/useModel";
import { DefaultBtn, Icon } from "@shared/ui";
import { ComplainItem } from "./complainItem/ui";
import { divideToArray } from "../lib/divideToArray";

export const ComplainContent = () => {
  const { page, complainList, onClickNum, onClickLeft, onClickRight } = useModel();

  return (
    <>
      <S.ComplainContent>
        <S.Table>
          <thead>
            <tr>
              <S.ThNumber>번호</S.ThNumber>
              <S.ThContent>사유</S.ThContent>
              <S.ThUser>작성자</S.ThUser>
              <S.ThDate>날짜</S.ThDate>
              <S.ThState>상태</S.ThState>
              <S.ThBtn />
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
            {page !== 1 ? (
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
                    type={page === num ? "select" : null}
                    onClick={() => onClickNum(num)}
                  />
                );
              })}
          </S.PageBtnList>
          <S.PageNextBtn>
            {complainList?.reportCnt !== page ? (
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
