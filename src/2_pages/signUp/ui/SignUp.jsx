// Npm
import { useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
import { usePostAccount } from "../api/usePostAccount";
import { useGetCheckName } from "../api/useGetCheckName";
import { useProfileImg } from "../model/useProfileImg";
import { useName } from "../model/useName";
// Layer
import logo from "@shared/assets/img/logo.png";
import { Profile, DefaultBtn } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const SignUp = () => {
    
    const location = useLocation();
    const googleInfo = location.state;
    const { loginRoute, homeRoute } = useRoute();
    const { selectImg, previewImg, onClickImg, onClickReset } = useProfileImg( googleInfo.googleProfileImg );
    const [ isChecked, checkedHandelr, isInvalid, getCheckName ] = useGetCheckName();
    const { checkName, nameRef, onChangeName} = useName( checkedHandelr );
    const [ postAccount ] = usePostAccount();

  return (
    <S.signUp>
      <S.innerBox>
        {/* 로고영역 */}
        <S.logoArea onClick={homeRoute}>
          <img src={logo} />
        </S.logoArea>

        {/* 프로필 영역 */}
        <S.profileArea>
          <S.imgWrap>
            <Profile
            img={ previewImg ?? selectImg }
             />
            <label htmlFor="file" />
            <input 
            id="file"
            type="file"
            accept=".jpg, .jpeg, .png, .gif" 
            onChange={onClickImg}
             />
          </S.imgWrap>
            { previewImg && selectImg !== previewImg ?
            <DefaultBtn
            size="smail"
            type="select"
            text="Google 이미지 사용하기"
            onClick={onClickReset}
          /> : <S.imgGuide>{"(프로필을 눌러 이미지를 변경할수 있어요)"}</S.imgGuide>}
        
        </S.profileArea>

        {/* 이름 영역 */}
        <S.nameArea>
          <S.nameWrap>
            <S.nameInput
              maxLength="19"
              placeholder="닉네임은 3자 이상 ~  20자 이하 입니다."
              defaultValue= { googleInfo.googleName }
              ref={ nameRef }
              onChange={ onChangeName }
            />
            <S.checkBtn>
              <DefaultBtn 
              type={ isChecked ? "disabled" : "select" }
              text="중복확인" 
              size="medium"
              onClick={ () => getCheckName( nameRef.current.value ) }
               />
            </S.checkBtn>
          </S.nameWrap>
          { checkName
          ? null
          : <S.nameGuide>{"사용할수 없는 닉네임 입니다. (최소 3자 이상 ~ 최대20자 이하)"}</S.nameGuide>}
          
        </S.nameArea>

        <S.btnArea>
          <DefaultBtn 
          text="가입하기"
          type={ checkName && isChecked && !isInvalid && selectImg ? "select" : "disabled"}
          size="medium"
          onClick={() => postAccount({profileImg: selectImg, nickname: nameRef.current.value, oauthGoogleId: googleInfo.oauthGoogleId})}
           />
          <DefaultBtn 
          size="medium"
          text="취소"
          onClick={loginRoute}
           />
        </S.btnArea>
      </S.innerBox>
    </S.signUp>
  );
};
