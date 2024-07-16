import { useModel } from "../model/useModel";
import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { ComplainAlarm  } from "@features/complainAlarm"; 
import { SubscribeList } from "@features/subscribeList";

export const Aside = () => {
<<<<<<< HEAD
  const {pachName, onClickRoute} = useModel();
  
=======
  const {pathname, onClickRoute} = useModel();
>>>>>>> 1d72f744db868ca8f858a28a63baf687a22362d2
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
<<<<<<< HEAD
            type={pachName === "/diary" ? "select" : null}
=======
            type={pathname === "/diary" ? "select" : null}
>>>>>>> 1d72f744db868ca8f858a28a63baf687a22362d2
             />
          <ComplainAlarm/>
        </S.BtnList>
        <SubscribeList/>
      </S.Aside>
    </>
  );
};
