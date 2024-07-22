import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { S } from "./style";
import { useChangeImgBase } from "../lib/useChangeImgBase";
import { useCheckInputValue } from "../lib/useCheckInputValue";
import { usePostSignUpInfo } from "../api/usePostSignUpInfo";

import { DefaultBtn, TextInput } from "@shared/ui";

export const SignUp = () => {
  const navigate = useNavigate();
  const [btnType, setBtnType] = useState("disabled");
  const imageInput = useRef(null);
  const [handleChangeImgBase, profileImg, profileImgMessage, isProfileImgValid] = useChangeImgBase();
  const [handleCheckInputValue, nickname, inputType, btnMessage, isNicknameValid] = useCheckInputValue();
  const [signUpData, status, baseFetch] = usePostSignUpInfo();

  useEffect(() => {
    if (isProfileImgValid && isNicknameValid) {
      setBtnType("");
    }
  }, [isProfileImgValid, isNicknameValid]);

  const location = useLocation();
  // const oauthGoogleId = location.state.userData.googleOauthId;
  const oauthGoogleId = "2";

  const handleUploadInfo = () => {
    baseFetch(profileImg, nickname, oauthGoogleId);
  };

  return (
    <>
      <S.PageContainer>
        <S.ProfileContainer>
          <S.Logo onClick={() => navigate("/")} />
          <S.SignUpInfoContainer>
            <S.SignUpInfoProfileImgContainer>
              {/* ref속성으로 imageInput을 설정해 입력요소의 참조를 imageInput.current에 저장 */}
              <input type="file" hidden ref={imageInput} onChange={handleChangeImgBase} />
              {profileImg && <S.SignUPInfoProfileImg src={profileImg} onClick={() => imageInput.current.click()} />}
              <S.SignUpInfoMessage>{profileImgMessage}</S.SignUpInfoMessage>
            </S.SignUpInfoProfileImgContainer>
            <S.SignUpInfoNicknameContainer>
              <S.SignUpInfoNicknameLabel>닉네임</S.SignUpInfoNicknameLabel>
              <S.SignUpInfoNicknameInputContainer>
                <TextInput type={inputType} placeholder="닉네임을 입력해주세요(최대 20자)" onBlur={handleCheckInputValue}>
                  {nickname}
                </TextInput>
                <S.SignUpInfoMessage>{btnMessage}</S.SignUpInfoMessage>
              </S.SignUpInfoNicknameInputContainer>
            </S.SignUpInfoNicknameContainer>
            <S.SignUpInfoBtnContainer>
              <DefaultBtn type={btnType} text="작성" onClick={() => handleUploadInfo()} />
              <DefaultBtn text="취소" onClick={() => navigate("/Login")} />
            </S.SignUpInfoBtnContainer>
          </S.SignUpInfoContainer>
        </S.ProfileContainer>
      </S.PageContainer>
    </>
  );
};
