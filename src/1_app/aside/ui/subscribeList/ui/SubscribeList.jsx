// Npm
import { useParams } from "react-router-dom";
// Slice
import { S } from "./style";
import { useGetSubscribeList } from "../api/useGetSubscribeList";
// Layer
import { useRoute, useScroll } from "@shared/hook";
import { Profile } from "@shared/ui";
import { useSubscribe } from "@shared/store";

export const SubscribeList = () => {

  const [ getSubscribeList, isLoading ] = useGetSubscribeList();
  const { userProfileRoute } = useRoute();
  const { accountIdx } = useParams();
  const addSubscribeList = useSubscribe((state) => state.addSubscribeList);
  const [ watchRef ] = useScroll(getSubscribeList);

  return (
    <>
      <S.SubscribeInfo>
        <S.SubscribeTitle>구독목록</S.SubscribeTitle>

        <S.SubscribeList>
            {addSubscribeList.length !== 0 ?
              addSubscribeList.map((addItem) => {
                return (
                  <S.SubscribeItem
                    key={addItem.accountIdx}
                    onClick={() => userProfileRoute(addItem.accountIdx)}
                    $isSame={+accountIdx === addItem.accountIdx}
                  >
                    <Profile img={addItem.profileImg} />
                    <span>{addItem.nickname}</span>
                  </S.SubscribeItem>
                );
              }): <S.message>구독중인 유저가 없습니다</S.message>}
          { !isLoading && <div ref={ watchRef }/>}
        </S.SubscribeList>
          {isLoading ? <S.Loading>로딩중...</S.Loading> : null}
      </S.SubscribeInfo>
    </>
  );
};
