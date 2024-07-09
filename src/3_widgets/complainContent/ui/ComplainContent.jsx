import { S } from "./style";
import { useModel } from "../model/useModel";
import { DefaultBtn, Icon } from "@shared/ui";
import { ComplainItem } from "./complainItem/ui";
import { divideToArray } from "../lib/divideToArray";

export const ComplainContent = () => {
  const { currentPage, complainList, onClickNum, onClickLeft, onClickRight } = useModel();

  return (
    <>
      <S.ComplainContent>
        <S.Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>사유</th>
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
            {currentPage() !== 1 ? (
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
                    type={currentPage() === String(num) ? "select" : null}
                    onClick={() => onClickNum(num)}
                  />
                );
              })}
          </S.PageBtnList>
          <S.PageNextBtn>
            {complainList?.reportCnt !== currentPage() ? (
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
