import { useState } from "react";

import { S } from "./style";
import { Icon } from "@shared/ui";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={
            <S.DatePickerContainer>
              <S.DatePickerName>조회 시작 날짜</S.DatePickerName>
              <div>
                <Icon type="calendar" color="red" />
              </div>
            </S.DatePickerContainer>
          }
        />
        <S.horizontalLine />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={
            <S.DatePickerContainer>
              <S.DatePickerName>조회 종료 날짜</S.DatePickerName>
              <div>
                <Icon type="calendar" color="red" />
              </div>
            </S.DatePickerContainer>
          }
        />
      </div>
    </>
  );
};
