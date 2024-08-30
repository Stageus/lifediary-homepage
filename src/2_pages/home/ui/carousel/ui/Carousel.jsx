// Slice
import { S } from "./style";
import { usePostionUnit } from "../model/usePostionUnit";
import { useGetDiaryList } from "../api/useGetDiaryList";
// Layer
import { Icon, Thumbnail, Profile } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const Carousel = () => {
  const [diaryList, nextPage, isEnd] = useGetDiaryList();
  const { diaryRoute } = useRoute();
  const { postionUnit, onClickLeft, onClickRight } = usePostionUnit(
    diaryList?.length,
    nextPage
  );

  return (
    <>
      <S.Carousel>
        <S.Button onClick={onClickLeft}>
          {postionUnit ? <Icon size={"40px"} type={"leftArrow"} color={"#ECEFF1"}/> : null}
        </S.Button>

        <S.ItemList>
          {diaryList?.map((diaryBundle, idx) => {
            return (
              <S.ItemBundle key={idx} $postionUnit={postionUnit}>
                {Array.isArray(diaryBundle) &&
                  diaryBundle?.map((diary, idx) => {
                    return (
                      <S.Item
                        key={idx}
                        onClick={() => diaryRoute(diary.idx)}
                        $isDiary={!!diary}
                      >
                        {diary ? (
                          <>
                            <S.UserInfo>
                              <S.ProfileImgWrap>
                                <Profile img={diary.profileImg} />
                              </S.ProfileImgWrap>
                              <span>{diary.nickname}</span>
                            </S.UserInfo>
                            <S.ThumbnailImgWrap>
                              <Thumbnail src={diary.thumbnailImg} />
                            </S.ThumbnailImgWrap>
                          </>
                        ) : (
                          <S.notFoundText>
                            등록되지 않은 일기입니다.
                          </S.notFoundText>
                        )}
                      </S.Item>
                    );
                  })}
              </S.ItemBundle>
            );
          })}
        </S.ItemList>

        <S.Button onClick={onClickRight}>
          {-postionUnit === diaryList?.length - 1 && isEnd ? null : (
            <Icon size={"40px"} type={"rightArrow"} color={"#ECEFF1"}/>
          )}
        </S.Button>
      </S.Carousel>
    </>
  );
};
