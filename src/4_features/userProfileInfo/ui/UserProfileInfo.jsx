import { useEffect, useState, useRef } from "react";

import { S } from "./style.js";
import DefaultProfile from "@shared/assets/imges/profile.png";
import { Icon, TextInput, DefaultBtn } from "@shared/ui";
import { handleChangeProfileImg, handleChangeImgBase } from "../lib/changeProfileImg.js";
import { SubscribeBtn } from "@features/subscribeBtn";

export const UserProfileInfo = () => {
  const [profileImg, setProfileImg] = useState(DefaultProfile);
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
    if (nickname.length < 5) {
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
    setIsEdit(false);
  };

  const handleChangeProfileImgCall = handleChangeProfileImg(imageInput);
  const handleChangeImgBaseCall = handleChangeImgBase(setProfileImg);

  return (
    <>
      <S.ProfileInfoContainer>
        {profileImg && <S.ProfileImg src={profileImg} />}
        <S.NicknameAndSubscribeContainer>
          <S.NicknameContainer>
            <S.Nickname>{nickname}</S.Nickname>
            <SubscribeBtn />
          </S.NicknameContainer>
          <S.SubscribeInfo>구독자 100명, 작성 일기 100개</S.SubscribeInfo>
        </S.NicknameAndSubscribeContainer>
      </S.ProfileInfoContainer>
    </>
  );
};
