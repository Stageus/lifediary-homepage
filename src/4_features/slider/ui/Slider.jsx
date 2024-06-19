import { useState } from "react";
import { S } from "./style";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { Icon } from "@shared/ui";
export const Slider = () => {
    const [diaryList, page, setPage] = useGetDiaryList();
  const [postionUnit, setPostionUnit] = useState(0);

  const onClickLeft = () => {
    if(!postionUnit) return;
    setPostionUnit(postionUnit + 1);
  };

  const onClickRight = () => {
    if(diaryList.length - 1 === -postionUnit) setPage(page + 1);
    setPostionUnit(postionUnit - 1)
  };

  return (
    <>
      <S.Slider>
        <S.Button onClick={onClickLeft}>
          {postionUnit ? (
            <Icon color="" size={"40px"} type={"leftArrow"} />
          ) : null}
        </S.Button>
        <S.ItemList>
          {diaryList &&
            diaryList?.map((diaryContainer, idx) => {
              return (
                <S.ItemContainer key={idx} $postionUnit={postionUnit}>
                  {Array.isArray(diaryContainer) && diaryContainer?.map((diary, idx) => {
                    return (
                      <S.Item key={idx}>
                        <img src={diary.url} />
                        <S.UserInfo>
                          <img src="#" alt="#" />
                          <span>피카츄</span>
                        </S.UserInfo>
                      </S.Item>
                    );
                  })}
                </S.ItemContainer>
              );
            })}
        </S.ItemList>
        <S.Button onClick={onClickRight}>
          <Icon size={"40px"} type={"rightArrow"} />
        </S.Button>
      </S.Slider>
    </>
  );
};
