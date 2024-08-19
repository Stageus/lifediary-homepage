// Npm
import { useState, useRef } from "react";

// Slice
import { S } from "./style";
import { useGetMyInfo } from "../api/useGetMyInfo";
import { useGetMyDiary } from "../api/useGetMyDiary";
// Layer
import { AccountProfile } from "@widgets/accountProfile";
import { Tab } from "@widgets/tab";

export const MyProfile = () => {

    const [ myInfo ] = useGetMyInfo();
    const [ diaryList, setDiaryList ] = useState([]);
    const [ isEnd, setIsEnd ] = useState(false);
    const dateRef = useRef(null);
    const [ isLoading, setIsLoading ] = useState( false );
    const [ getMyDiary ] = useGetMyDiary( diaryList, setDiaryList, isEnd, setIsEnd, setIsLoading );
    const tabLabelList = [{"작성한 일기": getMyDiary},{"좋아요 표시한 일기": () => console.log("test")}];    

    return (
        <S.myProfile>
            <AccountProfile {...myInfo}/>
            <Tab 
            dateRef={dateRef}
            tabLabel={tabLabelList} 
            diaryList={diaryList} 
            isEnd={isEnd}
            isLoading={isLoading}
            />
        </S.myProfile>
    );
}