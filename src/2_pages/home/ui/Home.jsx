// Slice
import { S } from "./style"; 
// Layer
import { Introduction } from "@widgets/introduction";
import { Grass } from "@widgets/grass";
import { Carousel } from "@widgets/carousel";
import { useCookie } from "@shared/hook";

export const Home = () => {

    const { handleGetCookie } = useCookie();

    return(
        <>  
            <S.Home>
            {/* 소개 & 잔디 */}
            {handleGetCookie()
            ? <Grass/>
            : <Introduction/>}
            {/* 일기리스트 */}
            <Carousel/>
            </S.Home>
        </>
    );
}