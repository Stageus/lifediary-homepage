// Npm
import { useNavigate } from "react-router-dom";
// Slice
import { S } from "./style";
import { News } from "../ui/news";
import { DiaryUpload } from "../ui/diaryUpload";
import { Logout } from "../ui/logout";
import { SearchBar } from "../ui/searchBar";
// Layer
import { DefaultBtn } from "@shared/ui";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HeaderContainer>
        <S.Logo onClick={() => navigate("/")} />
        <SearchBar />
        <DiaryUpload />
        <News />
        <Logout />
        <S.BtnContainer>
          <DefaultBtn text="로그인" onClick={() => navigate("/login")} />
        </S.BtnContainer>
      </S.HeaderContainer>
    </>
  );
};
