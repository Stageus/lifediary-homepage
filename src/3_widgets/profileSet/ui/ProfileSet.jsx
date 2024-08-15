// Slice
import { S } from "./style";
import { Picker } from "./picker";
// Layer
import { Profile, DefaultBtn, Icon, Thumbnail } from "@shared/ui";


export const ProfileSet = () => {
  const testData = [
    {
      idx: 0,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDrnaoaTgWNNn6hUvTdTLyWNYjFxC2aRqlg&s",
      isPublic: false,
    },
    {
      idx: 0,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDrnaoaTgWNNn6hUvTdTLyWNYjFxC2aRqlg&s",
      isPublic: false,
    },
    {
      idx: 0,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDrnaoaTgWNNn6hUvTdTLyWNYjFxC2aRqlg&s",
      isPublic: false,
    },
    {
      idx: 0,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDrnaoaTgWNNn6hUvTdTLyWNYjFxC2aRqlg&s",
      isPublic: false,
    },
    {
      idx: 0,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDrnaoaTgWNNn6hUvTdTLyWNYjFxC2aRqlg&s",
      isPublic: false,
    },
    {
      idx: 0,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDrnaoaTgWNNn6hUvTdTLyWNYjFxC2aRqlg&s",
      isPublic: false,
    },
  ];


  return (
    <S.profileSet>
      {/* 유저 정보영역 */}
      <S.userInfoArea>
        {/* 유저 이미지 영역 회원가입부분그대로 활용 단! 이미지 변경감지시 저장, 되돌리기 버튼 노출 */}
        <S.imgWrap>
          <Profile />
          {/* 사진이 변경되었을때 노출 */}
          <S.imgBtnWrap>
            <DefaultBtn text="저장하기" size="smail" type="select" />
            <DefaultBtn text="되돌리기" size="smail" />
          </S.imgBtnWrap>
        </S.imgWrap>
        {/* 유저 이름 및 구독자 및 작성한일기 개수 */}
        <S.infoWrap>
          {/* 유저이름 */}
          <S.userInfo>
            {/* 수정 input 들어와야함 */}
            <S.name>유저이름최대20글자입니다다다다다다다다</S.name>
            <S.iconWrap>
              <Icon type="edit" />
            </S.iconWrap>
          </S.userInfo>
          <S.pageInfo>{`구독자 110명 ・ 작성 일기 50개`}</S.pageInfo>
          <S.btnWrap>
            <DefaultBtn text="회원탈퇴" size="medium" />
            <DefaultBtn text="구독하기" size="medium" />
            <DefaultBtn text="구독중" type="select" size="medium" />
          </S.btnWrap>
        </S.infoWrap>
      </S.userInfoArea>

      <S.tapArea>
        <S.tapHeader>
          <S.tapBtnWrap>
            <button>작성한일기</button>
            <button>좋아요 표시한 일기</button>
          </S.tapBtnWrap>
          <S.tapDateWrap>
            <Picker placeholderText="날짜선택" />
            <DefaultBtn text="조회" size="medium" />
          </S.tapDateWrap>
        </S.tapHeader>
        <S.tapContent>
          {testData?.map((item,idx) => {
            return (
              <S.diaryItem key={idx}>
                <S.thumbnailWrap>
                  <Thumbnail />
                </S.thumbnailWrap>
                <S.diaryInfoWrap>
                  <span>2024-06-01</span>
                  <span>공개중</span>
                </S.diaryInfoWrap>
              </S.diaryItem>
            );
          })}
        </S.tapContent>
      </S.tapArea>
    </S.profileSet>
  );
};
