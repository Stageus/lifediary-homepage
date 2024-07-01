import { useLocation } from "react-router-dom";
import { S } from "./style";
import { createTestData } from "../model/createTestData";
import { DefaultBtn } from "@shared/ui";

export const Aside = () => {
    const testData = createTestData();
    const test = useLocation();
    
  return (
    <>
      <S.Aside>
        <S.BtnList>
          <DefaultBtn text="홈" />
          <DefaultBtn text="둘러보기" />
          <DefaultBtn text="신고보기" />
        </S.BtnList>
        
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
      </S.Aside>
    </>
  );
};
