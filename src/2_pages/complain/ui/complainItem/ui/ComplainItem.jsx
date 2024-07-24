// Slice
import { S } from "./style";
import { useRoute } from "../model/useRoute";
import { usePutComplain } from "../api/usePutComplain";
// Layer
import { DefaultBtn } from "@shared/ui";

export const ComplainItem = ( props ) => {

  const { onClickRoute } = useRoute();
  const { idx, textContent, nickname, createdAt, diaryIdx, isInvalid } = props.list;
  const [ putComplain ] = usePutComplain();
  
  return (
    <>
      <tr>
        <td>{ idx + 1 }</td>
        <td>{ textContent }</td>
        <td>{ nickname }</td>
        <td>{ createdAt }</td>
        <td>
          { isInvalid === true ? "삭제" : null }
          { isInvalid === false ? "통과" : null }
          { isInvalid === null ? "대기중" : null }
        </td>
        <td>
          <S.BtnContainter>
            <div>
              <DefaultBtn
                text="상세보기"
                size="medium"
                onClick={() => onClickRoute( diaryIdx )}
              />
            </div>
            {isInvalid === true || isInvalid === false 
            ? (
              <div>
                <DefaultBtn
                  text="복구"
                  size="medium"
                  onClick={() => putComplain( diaryIdx, null )}
                />
              </div>) 
            : null}

            {isInvalid === null 
            ? (
              <>
                <div>
                  <DefaultBtn
                    text="통과"
                    size="medium"
                    onClick={() => putComplain( diaryIdx, false )}
                  />
                </div>
                <div>
                  <DefaultBtn
                    text="삭제"
                    size="medium"
                    onClick={() => putComplain( diaryIdx, true )}
                  />
                </div>
              </>) 
            : null}

          </S.BtnContainter>
        </td>
      </tr>
    </>
  );
};
