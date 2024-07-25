import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { useChangeImgBase } from "../lib/useChangeImgBase";
import { useCheckInputValue } from "../lib/useCheckInputValue";
import { useChangeBtnType } from "../lib/useChangeBtnType";
import { usePostSignUpInfo } from "../api/usePostSignUpInfo";

import { DefaultBtn, TextInput } from "@shared/ui";
import Profile from "@shared/assets/imges/profile.png";

export const SignUp = () => {
  const navigate = useNavigate();
  const [handleChangeImgBase, profileImg, profileImgMessage, isProfileImgValid, imageInputRef] = useChangeImgBase();
  const [handleCheckInputValue, nickname, inputType, btnMessage, isNicknameValid] = useCheckInputValue();
  const [btnType, checkBtnType] = useChangeBtnType(isNicknameValid, isProfileImgValid);
  const [postSignUpInfo] = usePostSignUpInfo(profileImg, nickname);

  useEffect(() => {
    checkBtnType();
  }, [isNicknameValid, isProfileImgValid]);

  return (
    <>
      <S.PageContainer>
        <S.ProfileContainer>
          <S.Logo onClick={() => navigate("/")} />
          <S.SignUpInfoContainer>
            <S.SignUpInfoProfileImgContainer>
              {/* ref속성으로 imageInput을 설정해 입력요소의 참조를 imageInput.current에 저장 */}
              <input type="file" hidden ref={imageInputRef} onChange={handleChangeImgBase} />
              {profileImg ? <S.SignUPInfoProfileImg src={URL.createObjectURL(profileImg)} onClick={() => imageInputRef.current.click()} /> : <S.SignUPInfoProfileImg src={Profile} onClick={() => imageInputRef.current.click()} />}
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
              <DefaultBtn type={btnType} text="작성" onClick={postSignUpInfo} />
              <DefaultBtn text="취소" onClick={() => navigate("/Login")} />
            </S.SignUpInfoBtnContainer>
          </S.SignUpInfoContainer>
        </S.ProfileContainer>
      </S.PageContainer>
    </>
  );
};
