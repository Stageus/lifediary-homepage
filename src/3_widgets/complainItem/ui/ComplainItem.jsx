import { S } from "./style";
import { useItemModel } from "../model/useItemModel";
import { DefaultBtn } from "@shared/ui";

export const ComplainItem = (props) => {
  const { list } = props;
  const { onClickRoute, itemState, changeState} = useItemModel(list.isInvalid);
  
  return (
    <>
      <tr>
        <td>{list.idx + 1}</td>
        <td>{list.textContent}</td>
        <td>{list.nickname}</td>
        <td>{list.createdAt}</td>
        <td>
          {itemState === true ? "삭제" : null}
          {itemState === false ? "통과" : null}
          {itemState === null ? "대기중" : null}
        </td>
        <td>
          <S.BtnContainter>
            <div>
              <DefaultBtn
                text="상세보기"
                size="medium"
                onClick={() => onClickRoute(list.diaryIdx)}
              />
            </div>
            {itemState === true || itemState === false ? (
              <div>
                <DefaultBtn
                  text="복구"
                  size="medium"
                  onClick={() => changeState(list.diaryIdx, null)}
                />
              </div>
            ) : null}
            {itemState === null ? (
              <>
                <div>
                  <DefaultBtn
                    text="통과"
                    size="medium"
                    onClick={() => changeState(list.diaryIdx, false)}
                  />
                </div>
                <div>
                  <DefaultBtn
                    text="삭제"
                    size="medium"
                    onClick={() => changeState(list.diaryIdx, true)}
                  />
                </div>
              </>
            ) : null}
          </S.BtnContainter>
        </td>
      </tr>
    </>
  );
};
