// Npm
import { useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
import { SubscribeList } from "./subscribeList";
import { ComplainAlarm  } from "./complainAlarm"; 
// Layer
import { DefaultBtn } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const Aside = ( props ) => {

  const { userInfo } = props;
  const loaction = useLocation();
  const { homeRoute, diaryRoute } = useRoute();
    
  return (
    <>
      <S.Aside>
        <S.BtnList>

          <S.BtnWrap>
            <DefaultBtn 
            text="홈"
            onClick={homeRoute}
             />
          </S.BtnWrap>

          <S.BtnWrap>
            <DefaultBtn 
              text="둘러 보기"
              onClick={diaryRoute}
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
