// Npm
import { useNavigate } from "react-router-dom";
// Slice
import { S } from "./style";
import { usePutComplain } from "../api/usePutComplain";
// Layer
import { DefaultBtn } from "@shared/ui";

export const ComplainItem = ( props ) => {

  const navigate = useNavigate();
  const onClickRoute = ( diaryIdx ) => navigate(`/diary/${diaryIdx}`);
  const { idx, textContent, nickname, createdAt, diaryIdx, isInvalid } = props.list;
  const [ itemState, putComplain ] = usePutComplain(isInvalid);
  
  return (
    <>
      <tr>
        <td>{ idx + 1 }</td>
        <td>{ textContent }</td>
        <td>{ nickname }</td>
        <td>{ createdAt }</td>
        <td>
          { itemState === true ? "삭제" : null }
          { itemState === false ? "통과" : null }
          { itemState === null ? "대기중" : null }
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
            {itemState === true || itemState === false 
            ? (
              <div>
                <DefaultBtn
                  text="복구"
                  size="medium"
                  onClick={() => putComplain( diaryIdx, null )}
                />
              </div>) 
            : null}

            {itemState === null 
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
