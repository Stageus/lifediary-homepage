// Slice
import { S } from "./style";
import { useRoute } from "@shared/hook";
import { usePutComplain } from "../api/usePutComplain";
// Layer
import { DefaultBtn } from "@shared/ui";

export const ComplainItem = ( props ) => {

  const { diaryRoute } = useRoute();
  const { idx, textContent, nickname, createdAt, diaryIdx, isInvalid } = props;
  const order = props.order;
  const [ putComplain ] = usePutComplain();
  
  return (
    <>
      <tr>
        <td>{ order + 1 }</td>
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
                onClick={() => diaryRoute( diaryIdx )}
              />
            </div>
            {isInvalid === true || isInvalid === false 
            ? (
              <div>
                <DefaultBtn
                  text="복구"
                  size="medium"
                  onClick={() => putComplain( idx, null )}
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
                    onClick={() => putComplain( idx, false )}
                  />
                </div>
                <div>
                  <DefaultBtn
                    text="삭제"
                    size="medium"
                    onClick={() => putComplain( idx, true )}
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
