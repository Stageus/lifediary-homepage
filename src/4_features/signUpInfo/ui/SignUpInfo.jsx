import React, { useRef, useState, useCallback } from "react";

import { S } from "./style";
import { DefaultBtn } from "@shared/ui/defaultBtn/DefaultBtn";
import { TextInput } from "@shared/ui/textInput/TextInput";
import Profile from "@shared/assets/imges/profile.png";
import { handleChangeProfileImg, handleChangeImgBase } from "../lib/changeProfileImg";
import { handleCheckInputValue } from "../lib/checkInputValueLength";
import { usePostSignUpInfo } from "../api/usePostSignUpInfo";

export const SignUpInfo = () => {
  const [inputType, setInputType] = useState("");
  const [nickname, setNickname] = useState("");
  const [oauthGoogleId, setOauthGoogleId] = useState("1"); // 임시로 1 부여
  const [profileImg, setProfileImg] = useState(Profile);
  const imageInput = useRef(null); // imageInput이라는 참조 객체 생성
  const [, , baseFetch] = usePostSignUpInfo();

  const handleChangeProfileImgCall = handleChangeProfileImg(imageInput);
  const handleChangeImgBaseCall = handleChangeImgBase(setProfileImg);
  const handleCheckInputValueCall = handleCheckInputValue(setNickname, setInputType);

  const handleUploadInfo = async () => {
    baseFetch("account", {
      method: "POST",
      data: { profileImg, nickname, oauthGoogleId },
    });
  };

  return (
    <>
      <S.SignUpInfoContainer>
        <S.SignUpInfoProfileImgContainer>
          {/* ref속성으로 imageInput을 설정해 입력요소의 참조를 imageInput.current에 저장 */}
          <input type="file" hidden ref={imageInput} onChange={handleChangeImgBaseCall} />
          {profileImg && <S.SignUPInfoProfileImg src={profileImg} onClick={handleChangeProfileImgCall} />}
          <S.SignUpInfoMessage>프로필을 선택해 주세요(jpg, jpeg, gif, png)</S.SignUpInfoMessage>
        </S.SignUpInfoProfileImgContainer>
        <S.SignUpInfoNicknameContainer>
          <S.SignUpInfoNicknameLabel>닉네임</S.SignUpInfoNicknameLabel>
          <S.SignUpInfoNicknameInputContainer>
            <TextInput type={inputType} placeholder="닉네임을 입력해주세요(최대 20자)" onBlur={handleCheckInputValueCall} onChange={handleCheckInputValueCall}>
              {nickname}
            </TextInput>
            {inputType === "error" && <S.SignUpInfoMessage>5자 이상 입력해주세요.</S.SignUpInfoMessage>}
          </S.SignUpInfoNicknameInputContainer>
        </S.SignUpInfoNicknameContainer>
        <S.SignUpInfoBtnContainer>
          <DefaultBtn text="작성" onClick={handleUploadInfo} />
          <DefaultBtn text="취소" />
        </S.SignUpInfoBtnContainer>
      </S.SignUpInfoContainer>
    </>
  );
};
