import { Outlet } from "react-router-dom";
import { S } from "./style";
import { Header } from "@app/header";

export const HeaderLayout = () => {
  return (
    <>
      <S.headerLayout>
        <S.header>
          <Header />
        </S.header>
        <S.main>
          <Outlet />
        </S.main>
      </S.headerLayout>
    </>
  );
};
