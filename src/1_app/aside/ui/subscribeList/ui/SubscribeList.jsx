// Npm
import { useParams } from "react-router-dom";
// Slice
import { S } from "./style";
import { useGetSubscribeList } from "../api/useGetSubscribeList";
// Layer
import { useScroll, useRoute } from "@shared/hook";
import { Profile } from "@shared/ui";
import { useSubscribe } from "@shared/store";

export const SubscribeList = () => {
  const [getSubscribeList, subscribeList, isLoading, isEnd] =
    useGetSubscribeList();
  const [watchRef] = useScroll(getSubscribeList);
  const { userProfileRoute } = useRoute();
  const { accountIdx } = useParams();
  const addSubscribeList = useSubscribe((state) => state.addSubscribeList);

  console.log(addSubscribeList);

  return (
    <>
      <S.SubscribeInfo>
        <S.SubscribeTitle>구독목록</S.SubscribeTitle>

        <S.SubscribeList>
            {/* {subscribeList ? (
              subscribeList.map((item) => {
                return (
                  <S.SubscribeItem
                    key={item.toAccountIdx}
                    onClick={() => userProfileRoute(item.toAccountIdx)}
                    $isSame={+accountIdx === item.toAccountIdx}
                  >
                    <Profile img={item.profileImg} />
                    <span>{item.nickname}</span>
                    <div>{item.toAccountIdx}</div>
                  </S.SubscribeItem>
                );
              })
            ) : (
              <S.message>구독중인 유저가 없습니다</S.message>
            )} */}

            {addSubscribeList.length !== 0 &&
              addSubscribeList.map((addItem) => {
                return (
                  <S.SubscribeItem
                    key={addItem.accountIdx}
                    onClick={() => userProfileRoute(addItem.accountIdx)}
                    $isSame={+accountIdx === addItem.accountIdx}
                  >
                    <Profile img={addItem.profileImg} />
                    <span>{addItem.nickname}</span>
                    <div>{addItem.accountIdx}</div>
                  </S.SubscribeItem>
                );
              })}

          {/* <div ref={ watchRef }>옵저버</div> */}
          {/* { !isLoading && subscribeList && <div ref={ watchRef }>옵저버</div>} */}

          {isLoading ? <S.Loading>로딩중...</S.Loading> : null}
        </S.SubscribeList>
      </S.SubscribeInfo>
    </>
  );
};
