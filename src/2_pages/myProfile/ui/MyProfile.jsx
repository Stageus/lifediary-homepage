import { useState } from "react";

import { S } from "./style.js";
import { changeProfileNickname } from "../lib/changeProfileNickname.js";

import { MyDiaryList } from "./myDiaryList";
import { Icon, TextInput, DefaultBtn } from "@shared/ui";

export const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState("myDiaryTab");
  const [imageInput, buttonType, inputType, nickname, profileImg, isEdit, handleChangeProfileImg, handleChangeImgBase, handleEditClick, handleNicknameChange, handleUploadClick, handleCancelClick] = changeProfileNickname();

  const handleTabBtnClick = (e) => {
    setSelectedTab(e);
  };

  return (
    <>
      <S.MyProfileContentContainer>
        <S.ProfileInfoContainer>
          {isEdit ? (
            <>
              <input type="file" hidden ref={imageInput} onChange={handleChangeImgBase} />
              {profileImg && (
                <S.ProfileImgUploadContainer onClick={handleChangeProfileImg}>
                  <S.ProfileImgUploadBtn src={profileImg} />
                  <S.ProfileImgUploadLabel>
                    프로필 수정
                    <br />
                    (jpg, jpeg, gif, png)
                  </S.ProfileImgUploadLabel>
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
        <S.ProfileTabContainer>
          <S.TabBtnContainer onClick={() => handleTabBtnClick("myDiaryTab")}>{selectedTab === "myDiaryTab" ? <S.ActiveTabBtn>내 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>내 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
          <S.TabBtnContainer onClick={() => handleTabBtnClick("likeDiaryTab")}>{selectedTab === "likeDiaryTab" ? <S.ActiveTabBtn>좋아요 표시한 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>좋아요 표시한 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
        </S.ProfileTabContainer>
        {selectedTab === "myDiaryTab" ? <MyDiaryList /> : null}
      </S.MyProfileContentContainer>
    </>
  );
};
