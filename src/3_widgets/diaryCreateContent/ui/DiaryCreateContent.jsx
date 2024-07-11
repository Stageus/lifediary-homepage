import { useState } from "react";

import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { CreateImg } from "@features/createImg";
import { CreateTag } from "@features/createTag";
import { CreateGrass } from "@features/createGrass";
import { CreatePublic } from "@features/createPublic";

export const DiaryCreateContent = () => {
  const [colorSelected, setColorSelected] = useState(false);

  const handleColorSelection = (color) => {
    if (color) {
      setColorSelected(true); // 색상이 선택되면 상태 업데이트
    }
  };

  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.textContent />
        </S.ContentContainer>
        <CreateImg />
        <CreateTag />
        <CreateGrass onColorSelected={handleColorSelection} />
        <CreatePublic />
        <S.BtnContainer>
          <div>
            <DefaultBtn text="작성" type={colorSelected ? "select" : "disabled"} />
          </div>
          <div>
            <DefaultBtn text="취소" />
          </div>
        </S.BtnContainer>
      </S.DiaryCreateContainer>
    </>
  );
};
