import { usePostSubscribe } from "../api/usePostSubscribe";

export const useModel = (isSubscribed, accountIdx)=>{
    const [subscribe, postSubscribe] = usePostSubscribe(isSubscribed);

    const onClickSubscribe = ()=>{
        postSubscribe(accountIdx);
    }

    return {subscribe,onClickSubscribe};
}