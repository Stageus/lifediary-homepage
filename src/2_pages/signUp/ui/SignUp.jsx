// Npm
import { useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
import { usePostAccount } from "../api/usePostAccount";
import { useProfileImg } from "../model/useProfileImg";
// Layer
import logo from "@shared/assets/img/logo.png";
import { Profile, DefaultBtn } from "@shared/ui";
import { useRoute } from "@shared/hook";
import { NameInput } from "@features/nameInput";
import { useState } from "react";

export const SignUp = () => {
    
    const location = useLocation();
    const googleInfo = location.state;
    const { loginRoute, homeRoute } = useRoute();
    const { selectImg, previewImg, onClickImg, onClickReset, profileRef } = useProfileImg( googleInfo.googleProfileImg );
    const [ postAccount ] = usePostAccount();
    const [ name, setName ] = useState(null);

    console.log("selectImg:",selectImg);
    console.log("previewImg:",previewImg);

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
            img={ previewImg }
             />
            <label htmlFor="file" />
            <input 
            ref={profileRef}
            id="file"
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={onClickImg}
             />
          </S.imgWrap>
            { selectImg !== googleInfo.googleProfileImg ?
            <DefaultBtn
            size="smail"
            type="select"
            text="Google 이미지 사용하기"
            onClick={onClickReset}
          /> : <S.imgGuide>{"(프로필을 눌러 이미지를 변경할수 있어요)"}</S.imgGuide>}
        
        </S.profileArea>

        {/* 이름 영역 */}
        <S.nameArea>
          <NameInput name={name} setName={setName} initState={googleInfo.googleName} />
        </S.nameArea>

        <S.btnArea>
          <DefaultBtn 
          text="가입하기"
          type={ name && selectImg ? "select" : "disabled"}
          size="medium"
          onClick={() => postAccount({profileImg: selectImg, nickname: name, oauthGoogleId: googleInfo.oauthGoogleId})}
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
