// Npm
import { useNavigate, useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
// Layer
import { DefaultBtn } from "@shared/ui";
import { ComplainAlarm  } from "@features/complainAlarm"; 
import { SubscribeList } from "@features/subscribeList";

export const Aside = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const isRoute = pathname.startsWith("/diary");
    const navigate = useNavigate();
    const onClickRoute = ( path ) => navigate( path );

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
            <ComplainAlarm/>
          </S.BtnWrap>
        </S.BtnList>

        <S.SubscribeListWrap>
          <SubscribeList/>
        </S.SubscribeListWrap>
      </S.Aside>
    </>
  );
};
