// Npm
import { Outlet, useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
import { AlarmModal } from "../ui/alarmModal";
import { MessageModal } from "./messageModal";
import { useGetAuth } from "../api/useGetAuth";
// Layer
import { Header } from "@app/header";
import { Aside } from "@app/aside";
import { paths } from "@shared/consts/paths";

export const Layout = () => {

  
  const loaction = useLocation();
  const authPaths = [paths.LOGIN, paths.SIGNUP];
  const isAuthPage = authPaths.some((path) => location.pathname.includes(path));
  const isAside = Object.values(paths).some((item) =>
    loaction.pathname.includes(item)
  );
  const [ userInfo ] = useGetAuth();

  return (
    <S.Layout>
      <MessageModal />
      {!isAuthPage && (
        <S.header>
          <Header userInfo={ userInfo } />
        </S.header>
      )}

      <S.divideArea>
        {!isAuthPage && isAside ? (
          <S.aside>
            <Aside userInfo={ userInfo }/>
          </S.aside>
        ) : null}
        <S.main>
          <AlarmModal />
          <Outlet />
        </S.main>
      </S.divideArea>
    </S.Layout>
  );
};
