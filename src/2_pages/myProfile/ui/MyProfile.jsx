// Slice
import { S } from "./style";
import { useGetMyInfo } from "../api/useGetMyInfo";
import { MyDiary } from "./myDiary";
import { MyLikeDiary } from "./myLikeDiary"
// Layer
import { AccountProfile } from "@widgets/accountProfile";
import { Tab } from "@widgets/tab";

export const MyProfile = () => {

    const [ myInfo ] = useGetMyInfo();    

    return (
        <S.myProfile>
            { myInfo && <AccountProfile {...myInfo}/>}
            <Tab
                tabLabel={["작성한 일기", "좋아요한 일기"]}
                components={[MyDiary,MyLikeDiary]}
            />
        </S.myProfile>
    );
}