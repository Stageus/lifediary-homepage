import { useModel } from "../model/useModel";
import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { ComplainAlarm  } from "@features/complainAlarm"; 
import { SubscribeList } from "@features/subscribeList";

export const Aside = () => {
  const {pachName, onClickRoute} = useModel();
  
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
            type={pachName === "/diary" ? "select" : null}
             />
          <ComplainAlarm/>
        </S.BtnList>
        <SubscribeList/>
      </S.Aside>
    </>
  );
};
