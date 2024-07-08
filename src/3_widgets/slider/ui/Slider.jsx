import { S } from "./style";
import { useModel } from "../model/useModel";
import { Icon, DynamicImage } from "@shared/ui";

export const Slider = () => {
  const {postionUnit, diaryList, onClickRoute, onClickLeft, onClickRight} = useModel();
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
