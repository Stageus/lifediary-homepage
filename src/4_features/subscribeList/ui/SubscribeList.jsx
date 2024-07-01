import { S } from "./style";
import { useGetSubscribeList } from "../api/useGetSubscribeList";

export const SubscribeList = ()=>{
    const [fetchData, getSubscribeList] = useGetSubscribeList();
    return(
        <>
            <S.SubscribeInfo>
          <S.SubscribeTitle>구독목록</S.SubscribeTitle>

          <S.SubscribeList>
          {fetchData && fetchData.map((item)=>{
            return(
                <S.SubscribeItem key={item.idx}>
                    <img src={item.profileImg} alt="#" />
                    <span>{item.nickname}</span>
                </S.SubscribeItem>
            );
          })}
          </S.SubscribeList>
          
        </S.SubscribeInfo>
        </>
    );
}