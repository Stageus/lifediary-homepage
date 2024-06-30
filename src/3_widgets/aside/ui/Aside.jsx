import { useLocation } from "react-router-dom";
import { S } from "./style";
import { createTestData } from "../model/createTestData";
import { DefaultBtn } from "@shared/ui";


export const Aside = () => {
    const testData = createTestData();
    const test = useLocation();
    
    /*
        Aside의 상황
        1. 홈에서 특정일기를 클릭하면 둘러보기 버튼 색상활성화
        2. 구독목록에서 내가 구동중이 유저페이지로 이동하면 해당 리스트 색상활성화
        3. 신고알림에 대해서는 Aside 부모에 작성
        4. 구독목록의 경우에는 ? 따로 분리하거나, 같이 작성해야하는데...
        여기서 문제는 메인페이지 or 유저페이지에서 구독을 누를수 있다는점인데
        기본적으로 구독을 누르면 post 요청을 보내고 해당 리스트가 추가 되었다는걸 유저에
        알리기위해서는 다시 get해야한다. 해당부분은 비효율적이라고 생각,
        기본적으로 post요청을 보내고 난후에, 구독리스트의 state를 가지고 있는 상황에서
        삭제,추가 처리를 해주어야한다. 이러한 부분을 볼때, 상태관리로 해야 이를 효울적으로 할수가 있다고판단

        상태관리 자체에서 해당 api에 대한 요청을 처리한다면? 예를들면 Delete,Post 등등 ?

    */ 
  return (
    <>
      <S.Aside>
        <S.BtnList>
          <div><DefaultBtn text="홈" /></div>
          <div><DefaultBtn text="둘러보기" /></div>
          <div><DefaultBtn text="신고보기" /></div>
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
