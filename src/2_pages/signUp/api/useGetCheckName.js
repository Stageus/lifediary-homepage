// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";
import { nameValidation } from "@shared/consts/validation";

export const useGetCheckName = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const [ isInvalid, setIsInvalid] = useState( true );
    const [ isChecked, setIsChecked ] = useState( false );
    const setMessage = useMessage( state => state.setMessage );
    const { errorRoute } = useRoute();

    const checkedHandelr = () => {
        setIsChecked( false );
    };

    const getCheckName = ( name ) => {

        if ( !nameValidation(name) ) return setMessage("이름은 최소 3자이상 ~ 최대 20자 이하만 가능합니다.");

        setIsChecked( true );
        baseFetch(`account/nickname/duplication?nickname=${name}`);
    };

    useEffect(()=>{
        if ( !fetchData ) return;
        
        switch ( fetchData.status ) {
            case 200:
                setIsInvalid( fetchData.data.isInvalid );
                setMessage("사용가능한 아이디입니다!");
                break;

            case 400:
                setMessage("이름은 최소 3자이상 ~ 최대 20자 이하 입니다");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData])

    return [ isChecked, checkedHandelr, isInvalid, getCheckName ];
}