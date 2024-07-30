// Slice
import { S } from "./style";
import { useRoute } from "../model/useRoute";
import { useCurrentPage } from "../model/useCurrentPage";
import { SubscribeList } from "./subscribeList";
import { ComplainAlarm  } from "./complainAlarm"; 
// Layer
import { useGetAuth } from "@features/auth";
import { DefaultBtn } from "@shared/ui";

export const Aside = () => {
  
    const [ userInfo ] = useGetAuth();
    const { isRoute } = useCurrentPage();
    const { onClickRoute } = useRoute();
    
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
              type={ isRoute ? "select" : null }
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
