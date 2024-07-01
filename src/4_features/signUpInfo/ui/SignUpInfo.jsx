import React, { useRef, useState, useCallback } from "react";

import { S } from "./style";
import { useFetch } from "@shared/hook/useFetch";
import { DefaultBtn } from "@shared/ui/defaultBtn/DefaultBtn";
import { TextInput } from "@shared/ui/textInput/TextInput";
import Profile from "@shared/assets/imges/profile.png";

export const SignUpInfo = () => {
  const [inputType, setInputType] = useState("");
  const [nickname, setNickname] = useState("");
  const [oauthGoogleId, setOauthGoogleId] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(Profile);
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
      setImagePreviewUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUploadImage = () => {
    if (imageInput.current.files[0]) {
      const formData = new FormData();
      formData.append("profileImg", imageInput.current.files[0]);
      formData.append("nickname", nickname);
      formData.append("oauthGoogleId", oauthGoogleId);

      const response = baseFetch("account", {
        method: "POST",
        body: formData,
      });

      if (!response) {
        console.log("Error: ", errorStatus);
      } else {
        console.log("성공");
      }
    }
  };
  const handleChangeValue = (e) => {
    setNickname(e);
    if (e.length <= 5) {
      setInputType("error");
    } else {
      setInputType("");
    }
  };

  return (
    <>
      <S.SignUpInfoContainer>
        <S.SignUpInfoProfileImgContainer>
          <input type="file" multiple hidden ref={imageInput} onChange={handleImageChange} />
          {imagePreviewUrl && <img src={imagePreviewUrl} alt="Image Preview" style={{ width: "100px", height: "100px" }} onClick={handleChangeProfileImg} />}
          <S.SignUpInfoMessage>프로필을 선택해 주세요(jpg, jpeg, gif, png)</S.SignUpInfoMessage>
        </S.SignUpInfoProfileImgContainer>
        <S.SignUpInfoNicknameContainer>
          <S.SignUpInfoNicknameLabel>닉네임</S.SignUpInfoNicknameLabel>
          <S.SignUpInfoNicknameInputContainer>
            <TextInput type={inputType} placeholder="닉네임을 입력해주세요(최대 20자)" onBlur={handleChangeValue} />
            {inputType === "error" && <S.SignUpInfoMessage>5자 이상 입력해주세요.</S.SignUpInfoMessage>}
          </S.SignUpInfoNicknameInputContainer>
        </S.SignUpInfoNicknameContainer>
        <S.SignUpInfoBtnContainer>
          <DefaultBtn text="작성" onClick={handleChangeValue} />
          <DefaultBtn text="취소" />
        </S.SignUpInfoBtnContainer>
      </S.SignUpInfoContainer>
    </>
  );
};
