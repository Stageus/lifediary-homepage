import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { DiaryUpload } from "./diaryUpload";
import { Logout } from "./logout";
import { SearchBar } from "./searchBar";
import { News } from "@widgets/news";

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
