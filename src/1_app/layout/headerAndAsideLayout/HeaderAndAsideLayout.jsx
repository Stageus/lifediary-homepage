import { Outlet } from "react-router-dom";
import { S } from "./style"; 
import { Header } from "@widgets/header";
import { Aside } from "@widgets/aside";
import { AlarmModal } from "@features/alarmModal";

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