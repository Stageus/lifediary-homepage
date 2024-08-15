// Slice
import { S } from "./style";
import { useName } from "../model/useName";
import { useProfileImg } from "../model/useProfileImg";
import { usePageCheck } from "../model/usePageCheck";
// Layer
import { Profile, DefaultBtn, Icon } from "@shared/ui";
import { SubscribeBtn } from "@features/subscribeBtn";
import { NameInput } from "@features/nameInput";
import profile from "@shared/assets/img/profile.png";

export const AccountProfile = ( props ) => {

  const { nickName, profileImg, subscribeCnt, diaryCnt, isSubscribed } = props;  
  const { selectImg, previewImg, onClickImg, onClickReset } = useProfileImg( profileImg ?? profile );
  const { isMyprifle } = usePageCheck();
  const { name, setName, nameEdit, onClickEdit } = useName();

  return (
    <S.userInfoArea>
      {/* 프로필 */}
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
            <Profile img={previewImg} />
          </S.profileWrap>
        )}
      </S.imgWrap>
      {/* 유저 이름 및 구독자 및 작성한일기 개수 */}
      <S.infoWrap>
        {/* 유저이름 */}
        <S.userInfo>
          {isMyprifle 
          ? (
            <>
              {nameEdit 
              ? <>
                <NameInput name={name} setName={setName} initState={"초반이름"}/>
                <DefaultBtn
                  size="medium"
                  type={ name ? "select" : "disabled"}
                  text="저장"
                />
                <DefaultBtn
                  size="medium"
                  text="취소"
                  onClick={onClickEdit}
                />
              </>
              : (
                <>
                  <S.name>유저이름최대20글자입니다다다다다다다다</S.name>
                  <S.iconWrap onClick={onClickEdit}>
                    <Icon type="edit" />
                  </S.iconWrap>
                </>
              )}
            </>
            ) 
          : <S.name>유저이름최대20글자입니다다다다다다다다</S.name>
          }
        </S.userInfo>
        <S.pageInfo>{`구독자 110명 ・ 작성 일기 50개`}</S.pageInfo>
        <S.btnWrap>
          {isMyprifle 
          ? <DefaultBtn text="회원탈퇴" size="medium" />
          : <SubscribeBtn isSubscribed={false} accountIdx={17}/>
          }
        </S.btnWrap>
      </S.infoWrap>
    </S.userInfoArea>
  );
};
