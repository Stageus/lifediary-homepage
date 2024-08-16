// Slice
import { S } from "./style";
import { useName } from "../model/useName";
import { useProfileImg } from "../model/useProfileImg";
import { usePageCheck } from "../model/usePageCheck";
import { usePutProfileImg } from "../api/usePutProfileImg";
import { usePutName } from "../api/usePutName";
// Layer
import { Profile, DefaultBtn, Icon } from "@shared/ui";
import { SubscribeBtn } from "@features/subscribeBtn";
import { NameInput } from "@features/nameInput";
import profile from "@shared/assets/img/profile.png";

export const AccountProfile = ( props ) => {

  const { nickname, profileImg, subscribeCnt, diaryCnt, isSubscribed, accountIdx } = props;  
  const { isMyprifle } = usePageCheck();
  const { selectImg, previewImg, onClickImg, onClickReset } = useProfileImg( profileImg || profile );
  const [ isProfileSuccess, onClickProfileAgain, putProfileImg ] = usePutProfileImg();
  const { name, setName, nameEdit, onClickEdit } = useName();
  const [ putName ] = usePutName();

  return (
    <S.userInfoArea>
      {/* 프로필 */}
      <S.imgWrap>
        {isMyprifle ? (
          <>
            <S.profileWrap>
              <Profile img={previewImg}/>
            </S.profileWrap>
            <label htmlFor="file" onClick={onClickProfileAgain}/>
            <input
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              onChange={onClickImg}
            />
            {!isProfileSuccess && selectImg && (
              <S.imgBtnWrap>
                <DefaultBtn 
                text="저장하기" 
                size="smail" 
                type="select"
                onClick={ () => putProfileImg(selectImg)}
                 />
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
            // 이름을 변경하고 성공하면, input창을 닫아야하고
            // 다시눌렀을시에는 열리도록해야함 useName쪽이라 조합해야할듯
            <>
              { nameEdit 
              ? <>
                <NameInput name={name} setName={setName} initState={nickname}/>
                <DefaultBtn
                  size="medium"
                  type={ name ? "select" : "disabled"}
                  text="저장"
                  onClick={ ()=> {
                    putName(name);
                    onClickEdit();
                  }}
                />
                <DefaultBtn
                  size="medium"
                  text="취소"
                  onClick={onClickEdit}
                />
              </>
              : (
                <>
                  <S.name>{  name ?? nickname }</S.name>
                  <S.iconWrap onClick={onClickEdit}>
                    <Icon type="edit"/>
                  </S.iconWrap>
                </>
              )}
            </>
            ) 
          : <S.name>{nickname}</S.name>
          }
        </S.userInfo>
        <S.pageInfo>{`구독자 ${subscribeCnt}명 ・ 작성 일기 ${diaryCnt}개`}</S.pageInfo>
        <S.btnWrap>
          {isMyprifle 
          ? <DefaultBtn text="회원탈퇴" size="medium" />
          : <SubscribeBtn isSubscribed={isSubscribed} accountIdx={accountIdx}/>
          }
        </S.btnWrap>
      </S.infoWrap>
    </S.userInfoArea>
  );
};
