import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
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



  export const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HeaderLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path="/" element={<HeaderAndAsideLayout/>}>
          <Route path="complain" element={<Complain/>}/>
          <Route path="/diary" element={<Diary/>}/>
          <Route path="diaryCreate" element={<DiaryCreate/>}/>
          <Route path="diaryUpdate" element={<DiaryUpdate/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="myProfile" element={<MyProfile/>}/>
          <Route path="userProfile" element={<UserProfile/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </>
    )
  );