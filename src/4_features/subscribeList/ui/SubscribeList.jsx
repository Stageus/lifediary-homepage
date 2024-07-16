// Npm
import { useEffect } from "react";
// Slice
import { S } from "./style";
import { useGetSubscribeList } from "../api/useGetSubscribeList";
// Layer
import { useScroll } from "@shared/hook";

export const SubscribeList = () => {

    const [ subscribeList, addPage ] = useGetSubscribeList();
    const [ lastScroll, scrollRef, onScrollNext, onScrollReset ] = useScroll();

    useEffect(() => {

        if ( lastScroll ){
            addPage();
            onScrollReset();
        }

    },[lastScroll])

    

    return(
        <>
        <S.SubscribeInfo>
            <S.SubscribeTitle>구독목록</S.SubscribeTitle>

            <S.SubscribeList  ref={scrollRef} onScroll={onScrollNext}>
            {subscribeList && subscribeList.map(( item )=>{
              return(
                  <S.SubscribeItem key={ item.toAccountIdx }>
                      <img src={ item.profileImg } alt="#" />
                      <span>{ item.nickname }</span>
                  </S.SubscribeItem>
              );
            })}
            </S.SubscribeList>
          
        </S.SubscribeInfo>
        </>
    );
}