import { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import { Layout } from "./layout";
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
import { Error } from "@pages/error";
import { paths } from "@shared/consts/paths";
import { useRoute, useCookie } from "@shared/hook";


// 유저권한
const UserRoute = () => {
  const { cookieGet } = useCookie();
  const { errorRoute } = useRoute();

  useEffect(()=>{
    if ( !cookieGet("token") ){
      errorRoute("401:접근제한", "로그인이 필요한 서비스 입니다.")
    }  
  },[])
  return cookieGet("token") && <Outlet />
};

// 관리자권한
const ManagerRoute = () => {
  const { cookieGet } = useCookie();
  const { errorRoute } = useRoute();

  useEffect(()=>{
    if ( !cookieGet("token") || cookieGet("permission") !== 1){
      errorRoute("403:접근제한", "관리자만 가능한 서비스 입니다")
    }  
  },[])
  return cookieGet("token") && cookieGet("permission") === 1 && <Outlet />
}


export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path={ paths.SEARCH } element={ <Search /> }/>
        <Route path={`${paths.USERPROFILE}/:accountIdx`} element={<UserProfile />} />
        <Route path={paths.LOGIN} element={<Login />} />
        <Route path={paths.DIARY} element={<Diary />} >
          <Route path=":diaryidx"/>
        </Route>
        <Route path={paths.SIGNUP} element={<SignUp />} />

        <Route path="/" element={<UserRoute/>}>
          <Route path={paths.DIARYCREATE} element={<DiaryCreate />}/>
          <Route path={`${paths.DIARYUPDATE}/:diaryIdx`} element={<DiaryUpdate />} />
          <Route path={paths.MYPROFILE} element={<MyProfile />} />
        </Route>

        <Route path="/" element={<ManagerRoute/>}>
          <Route path={paths.COMPLAIN} element={<Complain />} />
        </Route>

      </Route>
      <Route path={"*"} element={<Error/>}/>
    </>
  )
);
