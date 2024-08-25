// Npm
import { useParams } from "react-router-dom";
// Slice
import { S } from "./style";
import { useGetSubscribeList } from "../api/useGetSubscribeList";
// Layer
import { useRoute } from "@shared/hook";
import { Profile } from "@shared/ui";
import { useSubscribe } from "@shared/store";

export const SubscribeList = () => {

  const [ isLoading, watchRef ] = useGetSubscribeList();
  const { userProfileRoute } = useRoute();
  const { accountIdx } = useParams();
  const addSubscribeList = useSubscribe((state) => state.addSubscribeList);
  console.log("구독리스트 스크롤 임시감시")


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
        </S.SubscribeList>
          { !isLoading && <div ref={ watchRef }/> }
          {isLoading ? <S.Loading>로딩중...</S.Loading> : null}
      </S.SubscribeInfo>
    </>
  );
};
