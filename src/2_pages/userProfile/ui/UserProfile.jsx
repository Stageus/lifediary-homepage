// Slice
import { S } from "./style";
import { useGetAccountInfo } from "../api/useGetAccountInfo";
// Layer
import { AccountProfile } from "@widgets/accountProfile";

export const UserProfile = () => {

    const [ accountInfo ] = useGetAccountInfo();

    return (
        <S.userProfile>
            <AccountProfile {...accountInfo}/>
        </S.userProfile>
    );
}