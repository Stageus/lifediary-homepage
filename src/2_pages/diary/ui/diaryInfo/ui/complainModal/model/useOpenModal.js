import { useState } from "react";
import { useMessage } from "@shared/store";
import { useRoute, useCookie } from "@shared/hook";

export const useOpenModal = () => {

    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const setMessage = useMessage( state => state.setMessage );
    const { loginRoute } = useRoute();
    const { cookieGet } = useCookie();

    const onClickModal = () => {
        if ( !cookieGet("token") ) return setMessage("로그인이 필요한 서비스입니다.\n로그인창으로 이동하시겠습니까?", loginRoute, true);
        setIsOpenModal( !isOpenModal );
    }

    return { isOpenModal, onClickModal };
}