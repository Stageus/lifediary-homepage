// Slice
import { S } from "./style";
import { useRoute } from "../model/useRoute";
import { SubscribeList } from "./subscribeList";
import { ComplainAlarm  } from "./complainAlarm"; 
// Layer
import { useGetAuth } from "@features/auth";
import { DefaultBtn } from "@shared/ui";

export const Aside = ( props ) => {

    const { currentPage } = props;
    const [ userInfo ] = useGetAuth();
    const { onClickRoute } = useRoute();
    console.log(currentPage);
    
  return (
    <>
      <S.Aside>
        <S.BtnList>

          <S.BtnWrap>
            <DefaultBtn 
            text="홈"
            onClick={ ()=>onClickRoute("/") }
             />
          </S.BtnWrap>

          <S.BtnWrap>
            <DefaultBtn 
              text="둘러 보기"
              onClick={ ()=>onClickRoute("diary") }
              type={ currentPage ? "select" : null }
               />
          </S.BtnWrap>

          <S.BtnWrap>
            { userInfo && userInfo.permission === 1 && <ComplainAlarm/>}
          </S.BtnWrap>
        </S.BtnList>

        <S.SubscribeListWrap>
          { userInfo && <SubscribeList/> }
        </S.SubscribeListWrap>
      </S.Aside>
    </>
  );
};
