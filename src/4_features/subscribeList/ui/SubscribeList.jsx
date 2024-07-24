// Slice
import { S } from "./style";
import { useRoute } from "../model/useRoute";
import { useGetSubscribeList } from "../api/useGetSubscribeList";
// Layer
import { useScroll } from "@shared/hook";

export const SubscribeList = () => {

    const [ getSubscribeList, subscribeList, isLoading, errorMessage ] = useGetSubscribeList();
    const [ rootRef, watchRef ] = useScroll( getSubscribeList );
    const { onClickRoute } = useRoute();

    return(
        <>
        <S.SubscribeInfo>
            <S.SubscribeTitle>구독목록</S.SubscribeTitle>

            <S.SubscribeList ref={ rootRef }>
                {subscribeList && subscribeList.map(( item )=>{
                return(
                    <S.SubscribeItem key={ item.toAccountIdx } onClick={ () => onClickRoute( item.toAccountIdx ) }>
                        <img src={ item.profileImg } alt="#" />
                        <span>{ item.nickname }</span>
                    </S.SubscribeItem>
                );
                })}

                {subscribeList && subscribeList.length >= 20 
                    && <div ref={ watchRef }></div>
                }

                { isLoading ? <S.Loading>로딩중...</S.Loading> : null}

                { errorMessage ?? <div>{ errorMessage }</div>}

            </S.SubscribeList>

            
          
        </S.SubscribeInfo>
        </>
    );
}