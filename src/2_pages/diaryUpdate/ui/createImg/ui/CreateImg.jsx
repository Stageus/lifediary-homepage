import { S } from "./style";
import { useCreateImg } from "../lib/useCreateImg";

import { DefaultBtn, Icon } from "@shared/ui";

export const CreateImg = () => {
  const [fileInputRef, selectedFile, handleFileChange, handleButtonClick, removeImgPreview] = useCreateImg();

  return (
    <>
      <S.ImgContentContainer>
        <S.NameAndBtnContainer>
          <S.ContentNameContainer>이미지</S.ContentNameContainer>
          <div>
            <DefaultBtn text="선택( jpg, jpeg, gif, png 파일만 가능, 최대 3개)" onClick={handleButtonClick} />
            <input type="file" hidden multiple onChange={handleFileChange} ref={fileInputRef} />
          </div>
        </S.NameAndBtnContainer>
        <S.ImgPreviewContainer>
          {selectedFile.map((file, index) => (
            <S.ImgWithCancelIcon key={index}>
              <S.CancelIconContainer onClick={() => removeImgPreview(index)}>
                <Icon type="cancel" color="red" />
              </S.CancelIconContainer>
              <S.ImgPreview src={URL.createObjectURL(file)} alt={`preview ${index}`} />
            </S.ImgWithCancelIcon>
          ))}
        </S.ImgPreviewContainer>
      </S.ImgContentContainer>
    </>
  );
};
