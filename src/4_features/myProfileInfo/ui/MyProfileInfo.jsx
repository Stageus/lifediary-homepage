import { useEffect, useState, useRef } from "react";

import { S } from "./style.js";
import DefaultProfile from "@shared/assets/imges/profile.png";
import { Icon, TextInput, DefaultBtn } from "@shared/ui";
import { handleChangeProfileImg, handleChangeImgBase } from "../lib/changeProfileImg.js";

export const MyProfileInfo = () => {
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const [prevProfileImg, setPrevProfileImg] = useState(profileImg);
  const imageInput = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState("고양이");
  const [prevNickname, setPrevNickname] = useState(nickname);
  const [inputType, setInputType] = useState("");
  const [buttonType, setButtonType] = useState("disabled");

  const handleEditClick = () => {
    setPrevNickname(nickname);
    setIsEdit(true);
  };

  const handleNicknameChange = (e) => {
    const inputValue = e.target.value;
    setNickname(inputValue);
  };

  useEffect(() => {
    if (nickname.length < 3) {
      setInputType("error");
      setButtonType("disabled");
    } else {
      setInputType("");
      setButtonType("");
    }
  }, [nickname]);

  const handleUploadClick = () => {
    setNickname(nickname);
    setIsEdit(false);
  };

  const handleCancelClick = () => {
    setNickname(prevNickname);
    setProfileImg(prevProfileImg);
    setIsEdit(false);
  };

  const handleChangeProfileImgCall = handleChangeProfileImg(imageInput);
  const handleChangeImgBaseCall = handleChangeImgBase(setProfileImg);

  return (
    <>
      <S.ProfileInfoContainer>
        {isEdit ? (
          <>
            <input type="file" hidden ref={imageInput} onChange={handleChangeImgBaseCall} />
            {profileImg && (
              <S.ProfileImgUploadContainer onClick={handleChangeProfileImgCall}>
                <S.ProfileImgUploadBtn src={profileImg} />
                <S.ProfileImgUploadLabel>프로필 수정</S.ProfileImgUploadLabel>
              </S.ProfileImgUploadContainer>
            )}
            <S.NicknameAndSubscribeContainer>
              <S.ProfileEditContainer>
                <S.ProfileTextInputContainer>
                  <TextInput type={inputType} placeholder={nickname} onChange={handleNicknameChange} onBlur={handleNicknameChange}>
                    {nickname}
                  </TextInput>
                  {inputType === "error" && <S.ProfileInfoMessage>3자 이상 입력해주세요.</S.ProfileInfoMessage>}
                </S.ProfileTextInputContainer>
                <div>
                  <DefaultBtn type={buttonType} text="저장" onClick={handleUploadClick} />
                </div>
                <div>
                  <DefaultBtn text="취소" onClick={handleCancelClick} />
                </div>
              </S.ProfileEditContainer>
              <S.SubscribeInfo>구독자 100명, 작성 일기 100개</S.SubscribeInfo>
              <S.ResignBtnContainer>
                <DefaultBtn text="회원탈퇴" />
              </S.ResignBtnContainer>
            </S.NicknameAndSubscribeContainer>
          </>
        ) : (
          <>
            {profileImg && <S.ProfileImg src={profileImg} />}
            <S.NicknameAndSubscribeContainer>
              <S.NicknameContainer>
                <S.Nickname>{nickname}</S.Nickname>
                <S.EditIconContainer onClick={handleEditClick}>
                  <Icon type="edit" />
                </S.EditIconContainer>
              </S.NicknameContainer>
              <S.SubscribeInfo>구독자 100명, 작성 일기 100개</S.SubscribeInfo>
            </S.NicknameAndSubscribeContainer>
          </>
        )}
      </S.ProfileInfoContainer>
    </>
  );
};
