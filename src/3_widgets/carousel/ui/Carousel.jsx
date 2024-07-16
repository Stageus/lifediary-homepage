// Slice
import { S } from "./style";
import { useModel } from "../model/useModel";
// Layer
import { Icon, DynamicImage } from "@shared/ui";

export const Carousel = () => {

  const { postionUnit, diaryList, onClickRoute, onClickLeft, onClickRight } = useModel();

  return (
    <>
      <S.Carousel>
        <S.Button onClick={ onClickLeft }>
          {postionUnit 
          ? <Icon size={"40px"} type={"leftArrow"} /> 
          : null}
        </S.Button>

        <S.ItemList>
          { diaryList?.map(( diaryBundle, idx ) => {
              return (
                <S.ItemBundle key={ idx } $postionUnit={ postionUnit }>
                  {Array.isArray( diaryBundle ) 
                  && diaryBundle?.map(( diary, idx ) => {
                      return (
                        <S.Item 
                        key={ idx }
                        onClick={ ()=>onClickRoute( diary.idx ) }
                        >
                          <S.ThumbnailImgWrap>
                            <DynamicImage src={ diary.thumbnailImg }/>
                          </S.ThumbnailImgWrap>

                          <S.UserInfo>
                            <S.ProfileImgWrap>
                              <DynamicImage src={ diary.profileImg }/>
                            </S.ProfileImgWrap>

                            <span>{ diary.nickname }</span>
                          </S.UserInfo>

                        </S.Item>
                      );
                    })}
                </S.ItemBundle>
              );
            })}
        </S.ItemList>

        <S.Button onClick={ onClickRight }>
          <Icon size={"40px"} type={"rightArrow"} />
        </S.Button>
      </S.Carousel>
    </>
  );
};
