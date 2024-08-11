// Npm
import { useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
import { useRoute } from "../model/useRoute";
import { SubscribeList } from "./subscribeList";
import { ComplainAlarm  } from "./complainAlarm"; 
// Layer
import { DefaultBtn } from "@shared/ui";

export const Aside = ( props ) => {

  const [ userInfo ] = props;
  const loaction = useLocation();
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
              type={ loaction.pathname === "diary" ? "select" : null }
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
