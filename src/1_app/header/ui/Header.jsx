// Slice
import { S } from "./style";
import { News } from "./news";
import { Search } from "./search";
// Layer
import logo from "@shared/assets/img/logo.png";
import { DefaultBtn, Profile } from "@shared/ui";
import { useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";

export const Header = ( props ) => {
  
  const { userInfo } = props; 
  
  const { homeRoute, loginRoute, diaryCreateRoute, myProfileRoute } = useRoute();
  const { cookieRemove } = useCookie();
  const setMessage = useMessage((state) => state.setMessage);

  const logoutHandler = () => {
    cookieRemove();
    loginRoute();
  };

  return (
    <S.Header>
      <S.logoArea onClick={homeRoute}>
        <img src={logo} />
      </S.logoArea>
      <S.searchArea>
        <Search/>
      </S.searchArea>
      <S.menuArea>
        { userInfo ? (
          <>
            <S.profileArea onClick={myProfileRoute}>
              <Profile />
            </S.profileArea>

            <div>
              <DefaultBtn
                size="medium"
                text="일기업로드"
                onClick={diaryCreateRoute}
              />
            </div>

            <div>
              <News />
            </div>

            <div>
              <DefaultBtn
                size="medium"
                text="로그아웃"
                onClick={() =>
                  setMessage("로그아웃 하시겠습니까?", logoutHandler)
                }
              />
            </div>
          </>
        ) : (
          <div>
            <DefaultBtn
              size="medium"
              text="로그인"
              onClick={loginRoute}
            />
          </div>
        )}
      </S.menuArea>
    </S.Header>
  );
};
