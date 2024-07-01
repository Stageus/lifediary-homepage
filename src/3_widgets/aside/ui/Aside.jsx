import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { ComplainAlarm  } from "@features/complainAlarm"; 
import { SubscribeList } from "@features/subscribeList";

export const Aside = () => {
  return (
    <>
      <S.Aside>
        <S.BtnList>
          <DefaultBtn text="홈" />
          <DefaultBtn text="둘러 보기" />
          <ComplainAlarm/>
        </S.BtnList>
        <SubscribeList/>
      </S.Aside>
    </>
  );
};
