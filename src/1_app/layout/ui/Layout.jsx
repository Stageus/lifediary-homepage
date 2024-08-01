// Npm
import { Outlet, useLocation } from "react-router-dom";
// Slice
import { S } from "./style"; 
// Layer
import { Header } from "@app/header";
import { Aside } from "@app/aside";
import { AlarmModal } from "@app/alarmModal";
import { paths } from "@shared/consts/paths"; 

export const Layout = ()=>{

    const loaction = useLocation();
    const isLayout = Object.values(paths).some( item => loaction.pathname.includes(item));
    
    return(
        <S.Layout>
            <S.header>
                <Header/>
            </S.header>
            <S.divideArea>
                { isLayout 
                ? <S.aside>
                    <Aside currentPage={isLayout}/>
                </S.aside>
                : null}
                <S.main>
                    <AlarmModal/>
                    <Outlet/>
                </S.main>
            </S.divideArea>
        </S.Layout>
    );
}