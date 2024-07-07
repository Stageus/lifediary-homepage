import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { S } from "./style";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { Icon, DynamicImage } from "@shared/ui";



export const Slider = () => {
  const [diaryList, addPage] = useGetDiaryList();
  const [postionUnit, setPostionUnit] = useState(0);
  const navigate = useNavigate();
  const onClickRoute = (diaryIdx) => navigate(`diary/${diaryIdx}`);

  const onClickLeft = () => {
    if (!postionUnit) return;
    setPostionUnit(postionUnit + 1);
  };

  const onClickRight = () => {
    if (diaryList.length - 1 === -postionUnit) addPage();
    setPostionUnit(postionUnit - 1);
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
          { diaryList?.map((diaryContainer, idx) => {
              return (
                <S.ItemContainer key={idx} $postionUnit={postionUnit}>
                  {Array.isArray(diaryContainer) &&
                    diaryContainer?.map((diary, idx) => {
                      return (
                        <S.Item 
                        key={idx}
                        onClick={()=>onClickRoute(diary.idx)}
                        >
                          <S.ContentImgContainer>
                            <DynamicImage src={diary.thumbnailImg} />
                          </S.ContentImgContainer>
                          <S.UserInfo>
                            <S.ProfileImgContainer>
                              <DynamicImage src={diary.profileImg} />
                            </S.ProfileImgContainer>
                            <span>{diary.nickname}</span>
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
