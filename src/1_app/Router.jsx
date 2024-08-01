import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HeaderLayout, HeaderAndAsideLayout } from "./layout";
import { Complain } from "@pages/complain";
import { Diary } from "@pages/diary";
import { DiaryCreate } from "@pages/diaryCreate";
import { DiaryUpdate } from "@pages/diaryUpdate";
import { Home } from "@pages/home";
import { Login } from "@pages/login";
import { MyProfile } from "@pages/myProfile";
import { Search } from "@pages/search";
import { SignUp } from "@pages/signUp";
import { UserProfile } from "@pages/userProfile";
import { paths } from "@shared/consts/paths";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={paths.HOME} element={<HeaderLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path={paths.HOME} element={<HeaderAndAsideLayout />}>
        <Route path={paths.COMPLAIN} element={<Complain />} />
        <Route path={paths.DIARY} element={<Diary />} >
          <Route path=":diaryidx"/>
        </Route>
        <Route path={paths.DIARYCREATE} element={<DiaryCreate />} />
        <Route path={`${paths.DIARYUPDATE}/:diaryidx`} element={<DiaryUpdate />} />
        <Route path={paths.SEARCH} element={<Search />} />
        <Route path={paths.MYPROFILE} element={<MyProfile />} />
        <Route path={`${paths.USERPROFILE}/:accountIdx`} element={<UserProfile />} />
      </Route>
      <Route path={paths.LOGIN} element={<Login />} />
      <Route path={paths.SIGNUP} element={<SignUp />} />
    </>
  )
);
