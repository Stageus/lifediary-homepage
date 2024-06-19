import { useState } from "react";
import { S } from "./style";
import { Icon } from "@shared/ui";
export const Slider = () => {
  const diaryData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const [postionUnit, setPostionUnit] = useState(0);

  const onClickLeft = () => {
    if (!postionUnit) {
      return;
    }
    setPostionUnit(postionUnit + 100);
  };
  const onClickRight = () => setPostionUnit(postionUnit - 100);

  return (
    <>
      <S.Slider>
        <S.Button onClick={onClickLeft}>
          {postionUnit ? (
            <Icon color="" size={"40px"} type={"leftArrow"} />
          ) : null}
        </S.Button>
        <S.ItemList>
          {diaryData &&
            diaryData.map((diaryList, idx) => {
              return (
                <S.ItemContainer key={idx} $postionUnit={postionUnit}>
                  {diaryList.map((diary, idx) => {
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
