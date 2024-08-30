// Slice
import { usePostSubscribe } from "../api/usePostSubscribe";
// Layer
import { DefaultBtn } from "@shared/ui";

export const SubscribeBtn = ( props )=>{

    const { accountIdx } = props;
    const [ subscribe, postSubscribe ] = usePostSubscribe(props);
    
    return(
        <>
            {subscribe 
                ? <DefaultBtn
                text="구독중"
                type="select"
                size="medium"
                onClick={ () => postSubscribe(accountIdx) }
                />
                :<DefaultBtn
                text="구독"
                size="medium"
                onClick={() => postSubscribe(accountIdx)}
                />
            }
        </>
    );
}