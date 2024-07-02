import React, { useRef, useState, useCallback } from "react";

import { S } from "./style";
import { useFetch } from "@shared/hook/useFetch";
import { DefaultBtn } from "@shared/ui/defaultBtn/DefaultBtn";
import { TextInput } from "@shared/ui/textInput/TextInput";
import Profile from "@shared/assets/imges/profile.png";

export const SignUpInfo = () => {
  const [inputType, setInputType] = useState("");
  const [nickname, setNickname] = useState("");
  const [oauthGoogleId, setOauthGoogleId] = useState("1");
  const [profileImg, setProfileImg] = useState(Profile);
  const imageInput = useRef(null);
  const [data, errorStatus, baseFetch] = useFetch();

  const handleChangeProfileImg = useCallback(() => {
    imageInput.current.click();
  }, []);

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      setProfileImg(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChangeValue = (e) => {
    const inputValue = e.target.value;
    setNickname(inputValue);

    if (inputValue.length < 5) {
      setInputType("error");
    } else {
      setInputType("");
    }
  };

  const handleUploadInfo = () => {
    console.log(profileImg, nickname, oauthGoogleId);
    // const formData = new FormData();
    // formData.append("profileImg", profileImg);
    // formData.append("nickname", nickname);
    // formData.append("oauthGoogleId", oauthGoogleId);

    const response = baseFetch("account", {
      method: "POST",
      data: { profileImg, nickname, oauthGoogleId },
    });

    if (!response) {
      console.log("Error: ", errorStatus);
    } else {
      console.log("업로드 성공");
    }
  };

  return (
    <>
      <S.SignUpInfoContainer>
        <S.SignUpInfoProfileImgContainer>
          <input type="file" multiple hidden ref={imageInput} onChange={handleImageChange} />
          {profileImg && <S.SignUPInfoProfileImg src={profileImg} onClick={handleChangeProfileImg} />}
          <S.SignUpInfoMessage>프로필을 선택해 주세요(jpg, jpeg, gif, png)</S.SignUpInfoMessage>
        </S.SignUpInfoProfileImgContainer>
        <S.SignUpInfoNicknameContainer>
          <S.SignUpInfoNicknameLabel>닉네임</S.SignUpInfoNicknameLabel>
          <S.SignUpInfoNicknameInputContainer>
            <TextInput type={inputType} placeholder="닉네임을 입력해주세요(최대 20자)" onBlur={handleChangeValue} onChange={handleChangeValue}>
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
