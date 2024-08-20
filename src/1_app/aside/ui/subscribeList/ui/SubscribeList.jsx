// Slice
import { S } from "./style";
// import { useRoute } from "../model/useRoute";
import { useGetSubscribeList } from "../api/useGetSubscribeList";
// Layer
import { useScroll, useRoute } from "@shared/hook";

export const SubscribeList = () => {

    const [ getSubscribeList, subscribeList, isLoading, isEnd ] = useGetSubscribeList();
    const [ watchRef ] = useScroll( getSubscribeList );
    const { userProfileRoute } = useRoute();

    return(
        <>
        <S.SubscribeInfo>
            <S.SubscribeTitle>구독목록</S.SubscribeTitle>

            <S.SubscribeList>
                {subscribeList ? subscribeList.map(( item )=>{
                return(
                    <S.SubscribeItem key={ item.toAccountIdx } onClick={ () => userProfileRoute( item.toAccountIdx ) }>
                        <img src={ item.profileImg } alt="#" />
                        <span>{ item.nickname }</span>
                    </S.SubscribeItem>
                );
                }): <S.message>구독중인 유저가 없습니다</S.message>}

                { !isEnd && subscribeList && subscribeList.length >= 20 
                    && <div ref={ watchRef }></div>
                }

                { isLoading ? <S.Loading>로딩중...</S.Loading> : null}


            </S.SubscribeList>

            
          
        </S.SubscribeInfo>
        </>
    );
}