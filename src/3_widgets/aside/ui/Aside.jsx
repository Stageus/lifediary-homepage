import { useNavigate, useLocation } from "react-router-dom";
import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { ComplainAlarm  } from "@features/complainAlarm"; 
import { SubscribeList } from "@features/subscribeList";

export const Aside = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickRoute = (path) => navigate(path)
  
  return (
    <>
      <S.Aside>
        <S.BtnList>
          <DefaultBtn 
          text="홈"
          onClick={()=>onClickRoute("/")}
           />
          <DefaultBtn 
            text="둘러 보기"
            onClick={()=>onClickRoute("diary")}
            type={location.pathname === "/diary" ? "select" : null}
             />
          <ComplainAlarm/>
        </S.BtnList>
        <SubscribeList/>
      </S.Aside>
    </>
  );
};
