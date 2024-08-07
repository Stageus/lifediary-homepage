// Slice
import { S } from "./style";
import { News } from "../ui/news";
// Layer
import logo from "@shared/assets/imges/logo.png";
import { Icon, DefaultBtn, ProfileTag } from "@shared/ui";
import { useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { useRef, useState } from "react";

export const Header = () => {
  const { homeRoute, loginRoute, diaryCreateRoute, myProfileRoute } =
    useRoute();
  const setMessage = useMessage((state) => state.setMessage);
  const { cookieGet, cookieRemove } = useCookie();

  const logoutHandler = () => {
    cookieRemove();
    loginRoute();
  };

  const [tag, setTag] = useState([]);

  const onFoucs = (e) => {
    console.log("input에 포커스");
  };

  const onKeyUp = (e) => {
    const target = e.target.value;
    if (e.key === "Enter" && target.trim() !== "") {
      setTag([...tag, target]);
      e.target.value = "";
    }
  };

  const onBlur = (e) => {
    console.log("input에 포커스 벗어남");
  };

  return (
    <S.Header>
      <S.logoArea onClick={() => homeRoute()}>
        <img src={logo} />
      </S.logoArea>
      <S.searchArea>
          <S.tagList>
            {tag &&
              tag?.map((value, idx) => {
                return (
                  <S.tag key={idx}>
                    <span>#</span>
                    <input
                    value={value}
                    />
                    {/* <span>{value}</span> */}
                    <span>×</span>
                  </S.tag>
                );
              })}
          </S.tagList>
          <S.search>
              <span>#</span>
              <input
                type="text"
                onKeyUp={onKeyUp}
                onFocus={onFoucs}
                onBlur={onBlur}
                placeholder="태그입력"
              />
            </S.search>
            <Icon size="28px" color="#FFE6DE" type="search" />
      </S.searchArea>
      <S.menuArea>
        {cookieGet("token") ? (
          <>
            <S.profileArea onClick={() => myProfileRoute()}>
              <ProfileTag />
            </S.profileArea>

            <div>
              <DefaultBtn
                size="medium"
                text="일기업로드"
                onClick={() => diaryCreateRoute()}
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
              onClick={() => loginRoute()}
            />
          </div>
        )}
      </S.menuArea>
    </S.Header>
  );
};
