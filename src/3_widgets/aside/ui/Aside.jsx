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
<<<<<<< HEAD
        
        <S.SubscribeInfo>
          <S.SubscribeTitle>구독목록</S.SubscribeTitle>

          <S.SubscribeList>
          {testData && testData.map((value)=>{
            return(
                <S.SubscribeItem key={value.idx}>
                    <img src={value.profileImg} alt="#" />
                    <span>{value.nickname}</span>
                </S.SubscribeItem>
            );
          })}
          </S.SubscribeList>
          
        </S.SubscribeInfo>
=======
        <SubscribeList/>
>>>>>>> 9694e9f2a4fcd70113df83109e3dfdecb4beb974
      </S.Aside>
    </>
  );
};
