import { S } from "./style";
import { createTestData } from "../model/createTestData";

export const SubscribeList = ()=>{
    const testData = createTestData();
    return(
        <>
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
        </>
    );
}