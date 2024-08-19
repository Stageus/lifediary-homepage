// Slice
import { S } from "./style";
import { useGetAccountInfo } from "../api/useGetAccountInfo";
// Layer
import { AccountProfile } from "@widgets/accountProfile";
import { Tab } from "@widgets/tab";

export const UserProfile = () => {

    const [ accountInfo ] = useGetAccountInfo();

    return (
        <S.userProfile>
            <AccountProfile {...accountInfo}/>
            <Tab/>
        </S.userProfile>
    );
}