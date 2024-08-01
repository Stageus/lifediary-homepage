// Slice
import { S } from "./style";
// Layer
import { useCookie, useRoute } from "@shared/hook";
import { DefaultBtn } from "@shared/ui";
import { useMessage } from "@shared/store";


export const Logout = () => {

  const setMessage = useMessage( state => state.setMessage );
  const { cookieRemove } = useCookie();
  const { loginRoute } = useRoute();

  const logoutHandler = () => {
    cookieRemove();
    loginRoute();
  };

  return (
    <>
      <S.MenuContainer>
        <S.BtnContainer>
          <DefaultBtn text="로그아웃" onClick={() => setMessage("로그아웃 하시겠습니까?",logoutHandler)}/>
        </S.BtnContainer>
      </S.MenuContainer>
    </>
  );
};
