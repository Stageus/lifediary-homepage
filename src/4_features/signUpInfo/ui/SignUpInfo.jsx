import { useNavigate, useLocation } from "react-router-dom";

import { S } from "./style";
import { DefaultBtn, TextInput } from "@shared/ui";
import { usePostSignUpInfo } from "../api/usePostSignUpInfo";
import { useProfileForm } from "../lib/useProfileForm";

export const SignUpInfo = () => {
  const { profileImg, nickname, inputType, imageInput, profileImgMessage, btnMessage, btnType, handleChangeImgBase, handleChangeProfileImg, handleCheckInputValue } = useProfileForm();
  const navigate = useNavigate();
  const [postSignUpInfo] = usePostSignUpInfo();

  const location = useLocation();
  const oauthGoogleId = location.state.userData.googleOauthId;

  const handleUploadInfo = () => {
    postSignUpInfo(profileImg, nickname, oauthGoogleId);
    navigate("/");
  };

  return (
    <>
      <S.SignUpInfoContainer>
        <S.SignUpInfoProfileImgContainer>
          {/* ref속성으로 imageInput을 설정해 입력요소의 참조를 imageInput.current에 저장 */}
          <input type="file" hidden ref={imageInput} onChange={handleChangeImgBase} />
          {profileImg && <S.SignUPInfoProfileImg src={profileImg} onClick={handleChangeProfileImg} />}
          <S.SignUpInfoMessage>{profileImgMessage}</S.SignUpInfoMessage>
        </S.SignUpInfoProfileImgContainer>
        <S.SignUpInfoNicknameContainer>
          <S.SignUpInfoNicknameLabel>닉네임</S.SignUpInfoNicknameLabel>
          <S.SignUpInfoNicknameInputContainer>
            <TextInput type={inputType} placeholder="닉네임을 입력해주세요(최대 20자)" onBlur={handleCheckInputValue} onChange={handleCheckInputValue}>
              {nickname}
            </TextInput>
            <S.SignUpInfoMessage>{btnMessage}</S.SignUpInfoMessage>
          </S.SignUpInfoNicknameInputContainer>
        </S.SignUpInfoNicknameContainer>
        <S.SignUpInfoBtnContainer>
          <DefaultBtn type={btnType} text="작성" onClick={handleUploadInfo} />
          <DefaultBtn text="취소" onClick={() => navigate("/Login")} />
        </S.SignUpInfoBtnContainer>
      </S.SignUpInfoContainer>
    </>
  );
};
