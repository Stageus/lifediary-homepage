import { S } from "./style"; 
import { Introduction } from "@widgets/introduction";
import { Grass } from "@widgets/grass";
import { Carousel } from "@widgets/carousel";
import { useCookie } from "@shared/hook";

export const Home = ()=>{
    const {handleGetCookie} = useCookie();
    return(
        <>  
            <S.Home>
            {handleGetCookie()
            ? <Grass/>
            : <Introduction/>}
            <Carousel/>
            </S.Home>
        </>
    );
}