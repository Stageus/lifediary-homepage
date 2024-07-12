import { S } from "./style";
import { useModel } from "../model/useModel";
import { DefaultBtn } from "@shared/ui";

export const SubscribeBtn = (props)=>{
    const { isSubscribed, accountIdx } = props;
    const {subscribe, onClickSubscribe} = useModel(isSubscribed, accountIdx);

    return(
        <>
            <S.SubscribeBtn>
            {subscribe 
            ? <DefaultBtn
            text="구독중"
            type="select"
            size="medium"
            onClick={onClickSubscribe}
            />
            :<DefaultBtn
            text="구독"
            size="medium"
            onClick={onClickSubscribe}
            />
            }
            </S.SubscribeBtn>
        </>
    );
}