// Slice
import { usePostSubscribe } from "../api/usePostSubscribe";
// Layer
import { DefaultBtn } from "@shared/ui";

export const SubscribeBtn = ( props )=>{
    
    const { isSubscribed, accountIdx } = props;
    const [ subscribe, postSubscribe ] = usePostSubscribe(isSubscribed);

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