import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { TagInput } from "@shared/ui";
import { HeaderLoginMenu } from "@features/headerLoginMenu";
import { HeaderLogoutMenu } from "@features/headerLogoutMenu";

export const Header = () => {
  const navigate = useNavigate();

  const searchByTag = () => {
    console.log("searchByTag");
  };

  return (
    <>
      <S.HeaderContainer>
        <S.Logo onClick={() => navigate("/")} />
        <S.TagInputContainer>
          <TagInput placeholder="검색태그를 입력해 주세요" />
          <S.SearchIcon onClick={searchByTag} />
        </S.TagInputContainer>
        <HeaderLoginMenu />
        {/* <HeaderLogoutMenu /> */}
      </S.HeaderContainer>
    </>
  );
};
