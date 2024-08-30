// Slice
import { S } from "./style";
import { useGetAccountInfo } from "../api/useGetAccountInfo";
import { AccountDiary } from "./accountDiary";
// Layer
import { AccountProfile } from "@widgets/accountProfile";
import { Tab } from "@widgets/tab";

export const UserProfile = () => {

    const [ accountInfo ] = useGetAccountInfo();
    
    return (
        <S.userProfile>
            { accountInfo && <AccountProfile {...accountInfo}/>}
            <Tab
            tabLabel={["유저 일기"]}
            components={[AccountDiary]} 
            />
        </S.userProfile>
    );
}