import { useState } from "react";
import { useLocation } from "react-router-dom";
import { S } from "./style";
import { Picker } from "../../tab/ui/picker";
import { paths } from "@shared/consts/paths";
import { DefaultBtn, Thumbnail } from "@shared/ui";

export const Tab = () => {

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

  const location = useLocation();
  const { MYPROFILE } = paths;
  const isMyprifle = location.pathname === `/${MYPROFILE}`;
  const [tabNum, settabNum] = useState(0);
  const tagChange = (num) => settabNum(num);

  return (
    <S.tabArea>
      <S.tabHeader>
        <S.tabBtnWrap>
          <S.tabBtn onClick={() => tagChange(0)} $tabNum={tabNum === 0}>
            작성한일기
          </S.tabBtn>
          {isMyprifle ? (
            <S.tabBtn onClick={() => tagChange(1)} $tabNum={tabNum === 1}>
              좋아요 표시한 일기
            </S.tabBtn>
          ) : null}
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
                {isMyprifle && tabNum !== 1 && <span>공개중</span>}
              </S.diaryInfoWrap>
            </S.diaryItem>
          );
        })}
      </S.tabContent>
    </S.tabArea>
  );
};
