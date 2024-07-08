import { S } from "./style"; 
import { Introduction } from "@widgets/introduction";
import { Grass } from "@features/grass";
import { Slider } from "@widgets/slider";
import { useCookie } from "@shared/hook";

export const Home = ()=>{
    const {handleGetCookie} = useCookie();
    return(
        <>  
            <S.Container>
            {handleGetCookie()
            ? <Grass/>
            : <Introduction/>}
            <Slider/>
            </S.Container>
        </>
    );
}