import { S } from "./style";

import { Icon, TextInput, DefaultBtn } from "@shared/ui";
import { changeProfileInfo } from "../lib/changeProfileInfo.js";

export const ProfileInfo = () => {
  const [inputMessage, imageInput, buttonType, inputType, nickname, profileImg, isEdit, handleChangeProfileImg, handleChangeImgBase, handleEditClick, handleNicknameChange, handleUploadClick, handleCancelClick] = changeProfileInfo();

  return (
    <>
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
                  <S.ProfileInfoMessage>{inputMessage}</S.ProfileInfoMessage>
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
