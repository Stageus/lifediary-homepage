// Npm
import { useRef, useState } from "react";
// Slice
import { S } from "./style";
import { Picker } from "./picker";
import { useSubmit } from "../model/useSubmit";
// Layer
import { DefaultBtn } from "@shared/ui";

export const Tab = ( props ) => {

  const { components, tabLabel } = props;
  const dateRef = useRef(null);
  const [ tabNum, setTabNum ] = useState(0);
  const { dateRange, handleButtonClick } = useSubmit( dateRef );

  return (
    <S.tabArea>
      <S.tabHeader>
        <S.tabBtnWrap>
          {tabLabel?.map((labelName, idx) => {
            return (
              <S.tabBtn
                key={idx}
                onClick={() => setTabNum(idx)}
                $tabNum={tabNum === idx}
              >
                {labelName}
              </S.tabBtn>
            );
          })}
        </S.tabBtnWrap>
        <S.tabDateWrap>
          <Picker placeholderText="날짜선택" dateRef={dateRef} />
          <DefaultBtn
            type={ tabNum === 1 ? "disabled" : ""}
            text="조회"
            size="medium"
            onClick={handleButtonClick}
          />
        </S.tabDateWrap>
      </S.tabHeader>
      <S.tabContent>
        { 
        components.map( (Component, idx) => tabNum === idx ? <Component key={idx} dateRange={dateRange}/> : null)
         }
      </S.tabContent>
    </S.tabArea>
  );
};
