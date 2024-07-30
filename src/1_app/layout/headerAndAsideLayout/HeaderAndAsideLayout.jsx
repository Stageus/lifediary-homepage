// Npm
import { Outlet } from "react-router-dom";
// Slice
import { S } from "./style"; 
// Layer
import { Header } from "@app/header";
import { Aside } from "@app/aside";
import { AlarmModal } from "@app/alarmModal";

export const HeaderAndAsideLayout = ()=>{
    return(
        <>
        <S.HeaderAndAsideLayout>
            <S.header>
                <Header/>
            </S.header>
            <S.aside>
                <Aside/>
            </S.aside>
            <S.main>
                <AlarmModal/>
                <Outlet/>
            </S.main>
        </S.HeaderAndAsideLayout>
        </>
    );
}