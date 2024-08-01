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

export const Layout = ()=>{

    const loaction = useLocation();
    const isLayout = Object.values(paths).some( item => loaction.pathname.includes(item));
    
    return(
        <S.Layout>
            <MessageModal/>
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