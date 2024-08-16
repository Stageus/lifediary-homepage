// Npm
import { useLocation } from "react-router-dom";

// Slice
import { S } from "./style";
import { Picker } from "./picker";
import { useProfileImg } from "../model/useProfileImg";
// Layer
import { Profile, DefaultBtn, Icon, Thumbnail } from "@shared/ui";
import { paths } from "@shared/consts/paths";
import { useState } from "react";

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

  const { selectImg, previewImg, onClickImg, onClickReset } = useProfileImg(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDrnaoaTgWNNn6hUvTdTLyWNYjFxC2aRqlg&s"
  );
  const location = useLocation();
  const { MYPROFILE } = paths;
  const isMyprifle = location.pathname === `/${MYPROFILE}`;
  const [ tabNum, settabNum ] = useState(0);

  const tagChange = ( num ) => settabNum(num);

  return (
    <S.profileSet>
      <S.userInfoArea>
        <S.imgWrap>
          {isMyprifle ? (
            <>
              <S.profileWrap>
                <Profile img={previewImg} />
              </S.profileWrap>
              <label htmlFor="file" />
              <input
                id="file"
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                onChange={onClickImg}
              />
              {selectImg && (
                <S.imgBtnWrap>
                  <DefaultBtn text="저장하기" size="smail" type="select" />
                  <DefaultBtn
                    onClick={onClickReset}
                    text="되돌리기"
                    size="smail"
                  />
                </S.imgBtnWrap>
              )}
            </>
          ) : (
            <S.profileWrap $isMyprifle={isMyprifle}>
              <Profile img={previewImg}/>
            </S.profileWrap>
          )}
        </S.imgWrap>
        {/* 유저 이름 및 구독자 및 작성한일기 개수 */}
        <S.infoWrap>
          {/* 유저이름 */}
          <S.userInfo>
            {/* 수정 input 들어와야함 */}
            {isMyprifle ? (
              <>
                <S.name>유저이름최대20글자입니다다다다다다다다</S.name>
                <S.iconWrap>
                  <Icon type="edit" />
                </S.iconWrap>
              </>
            ) : (
              <S.name>유저이름최대20글자입니다다다다다다다다</S.name>
            )}
          </S.userInfo>
          <S.pageInfo>{`구독자 110명 ・ 작성 일기 50개`}</S.pageInfo>
          <S.btnWrap>
            {isMyprifle ? (
              <DefaultBtn text="회원탈퇴" size="medium" />
            ) : (
              <>
                {/* api명세의 isSubscribed에 따라 버튼 변경 */}
                <DefaultBtn text="구독하기" size="medium" />
                <DefaultBtn text="구독중" type="select" size="medium" />
              </>
            )}
          </S.btnWrap>
        </S.infoWrap>
      </S.userInfoArea>

      <S.tabArea>
        <S.tabHeader>
          <S.tabBtnWrap>
            <S.tabBtn 
            onClick={() => tagChange(0)}
            $tabNum={tabNum === 0}>작성한일기</S.tabBtn>
            {isMyprifle 
            ? <S.tabBtn 
            onClick={() => tagChange(1)}
            $tabNum={tabNum === 1} >좋아요 표시한 일기</S.tabBtn> 
            : null}
          </S.tabBtnWrap>
          <S.tabDateWrap>
            <Picker placeholderText="날짜선택" />
            <DefaultBtn text="조회" size="medium" />
          </S.tabDateWrap>
        </S.tabHeader>
        <S.tabContent>
          {testData?.map((item, idx) => {
            return (
              <S.diaryItem key={idx}>
                <S.thumbnailWrap>
                  <Thumbnail />
                </S.thumbnailWrap>
                <S.diaryInfoWrap>
                  <span>2024-06-01</span>
                  { isMyprifle && tabNum !== 1 && <span>공개중</span> }
                </S.diaryInfoWrap>
              </S.diaryItem>
            );
          })}
        </S.tabContent>
      </S.tabArea>
    </S.profileSet>
  );
};
