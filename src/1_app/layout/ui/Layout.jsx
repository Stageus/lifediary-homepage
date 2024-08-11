// Npm
import { Outlet, useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
import { AlarmModal } from "../ui/alarmModal";
import { MessageModal } from "./messageModal";
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

  return (
    <S.Layout>
      <MessageModal />
      {!isAuthPage && (
        <S.header>
          <Header />
        </S.header>
      )}

      <S.divideArea>
        {!isAuthPage && isAside ? (
          <S.aside>
            <Aside/>
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
