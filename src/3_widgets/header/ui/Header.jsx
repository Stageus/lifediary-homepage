import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { HeaderDiaryUpload } from "@features/headerDiaryUpload";
import { HeaderLogout } from "@features/headerLogout";
import { SearchBar } from "@features/searchBar";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HeaderContainer>
        <S.Logo onClick={() => navigate("/")} />
        <SearchBar />
        <HeaderDiaryUpload />
        <HeaderLogout />
        <S.BtnContainer>
          <DefaultBtn text="로그인" onClick={() => navigate("/login")} />
        </S.BtnContainer>
      </S.HeaderContainer>
    </>
  );
};
