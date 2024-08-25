// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";
import { nameValidation } from "@shared/consts/validation";

export const useGetCheckName = ( props ) => {

    const { setName } = props;
    const [ fetchData, baseFetch ] = useFetch();
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const [ saveName, setSaveName ] = useState( null );

    const getCheckName = ( name ) => {
        if ( !nameValidation(name) ) return setMessage("이름은 최소 3자이상 ~ 최대 20자 이하만 가능합니다.");

        setSaveName( name );
        baseFetch(`account/nickname/duplication?nickname=${name}`);
    };

    useEffect(()=>{
        if ( !fetchData ) return;
        
        switch ( fetchData.status ) {
            case 200:
                // true 사용 불가
                if ( fetchData.data.isInvalid ){
                    setMessage("사용 불가능한 아이디입니다!");
                    setName( null );
                    setSaveName( null );
                    return;
                }
                // false 사용 가능
                setName( saveName );
                setSaveName( null );
                setMessage("사용가능한 아이디입니다!");
                break;

            case 400:
                setMessage("이름은 최소 3자이상 ~ 최대 20자 이하만 \n가능합니다.");
                break;

            case 500:
                setMessage("500 서버에러: 닉네임을 변경할수 없습니다.");
                break;
        }

    },[fetchData])

    return [ getCheckName ];
}