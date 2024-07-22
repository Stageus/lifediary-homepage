import { S } from "./style";
import { useAlarm } from "@shared/store";

export const AlarmModal = () => {
    const isArarm = useAlarm( state => state.value);
    return(
        <>
            { isArarm 
            ?<S.AlarmModal>
                { isArarm }
            </S.AlarmModal>
            : null
            }
        </>
    );
}