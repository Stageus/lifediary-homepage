// Npm
import { useState, useRef, useEffect } from "react";
// Slice
import { S } from "./style";
import { Picker } from "./picker";
import { useTab } from "../model/useTab";
// Layer
import { DefaultBtn, Thumbnail } from "@shared/ui";
import { parseTime } from "@shared/util";
import { useScroll, useRoute } from "@shared/hook";

export const Tab = ( props ) => {

    const { dateRef, tabLabel, diaryList, isEnd, isLoading } = props;
    const { tabNum, setTabNum, callBack } = useTab( tabLabel );
    const [ watchRef ] = useScroll( callBack );
    const { profileTabRoute } = useRoute();

  return (
    <S.tabArea>
      <S.tabHeader>
        <S.tabBtnWrap>
            { tabLabel.length && tabLabel?.map( (labelName, idx) => {
                return (
                    <S.tabBtn
                    key={idx}
                    onClick={() => setTabNum(idx)} 
                    $tabNum={tabNum === idx}>
                        { Object.keys(labelName)[0] }
                    </S.tabBtn>
                )})
            }
        </S.tabBtnWrap>
        <S.tabDateWrap>
          <Picker placeholderText="날짜선택" dateRef={dateRef}/>
          <DefaultBtn 
            text="조회" 
            size="medium"
            // onClick={ (event)=> callBack(event.type, 1, parseTime(dateRef.current.props.startDate), parseTime(dateRef.current.props.endDate))}
            onClick={ ()=> profileTabRoute(dateRef.current.props.startDate, dateRef.current.props.endDate)}
             />
        </S.tabDateWrap>
      </S.tabHeader>
      <S.tabContent>
        {/* 로딩적용 대기 */}
        { diaryList.length ? diaryList?.map( diary => {
          return (
            <S.diaryItem key={diary.idx}>
              <S.thumbnailWrap>
                <Thumbnail
                    src={diary.thumbnail}
                 />
              </S.thumbnailWrap>
              <S.diaryInfoWrap>
                <span>{diary.createdAt}</span>
                { diary.isPublic ? <span>공개</span> : <span>비공개</span>}
              </S.diaryInfoWrap>
            </S.diaryItem>
          );
        }) : <S.guideMessage>등록된 일기가 없습니다</S.guideMessage>}

        { !isEnd && !diaryList && <div ref={watchRef}>워칭</div>}
        { !isEnd && diaryList && diaryList?.length % 10 === 0 && !isLoading && <div ref={watchRef}>워칭@@@@@@@@@@@222</div>}
      </S.tabContent>
    </S.tabArea>
  );
};
