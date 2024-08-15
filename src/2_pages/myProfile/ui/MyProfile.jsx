// Slice
import { S } from "./style";
import { useGetMyInfo } from "../api/useGetMyInfo"
// Layer
import { AccountProfile } from "@widgets/accountProfile";

export const MyProfile = () => {

    const [ myInfo ] = useGetMyInfo();
    return (
        <S.myProfile>
            <AccountProfile {...myInfo}/>
        </S.myProfile>
    );
}