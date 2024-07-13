import { useState, useEffect } from "react";

import { S } from "./style";
import { Icon, DefaultBtn } from "@shared/ui";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDateSelected, setStartDateSelected] = useState(false);
  const [endDateSelected, setEndDateSelected] = useState(false);

  const formatDate = (date) => date.toLocaleDateString("ko-KR");

  useEffect(() => {
    if (startDateSelected && endDateSelected && startDate > endDate) {
      alert("시작 날짜는 종료 날짜보다 뒤쪽 날짜일 수 없습니다.");
      setStartDateSelected(false);
      setEndDateSelected(false);
    }
  }, [startDate, endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setStartDateSelected(true);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setEndDateSelected(true);
  };

  return (
    <>
      <S.DatePickerRangeContainer>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          customInput={
            <S.DatePickerContainer>
              <S.DatePickerName>{startDateSelected ? formatDate(startDate) : "시작 조회 날짜"}</S.DatePickerName>
              <div>
                <Icon type="calendar" color="red" />
              </div>
            </S.DatePickerContainer>
          }
        />
        <S.horizontalLine />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          customInput={
            <S.DatePickerContainer>
              <S.DatePickerName>{endDateSelected ? formatDate(endDate) : "종료 조회 날짜"}</S.DatePickerName>
              <div>
                <Icon type="calendar" color="red" />
              </div>
            </S.DatePickerContainer>
          }
        />
        <S.BtnContainer>
          <DefaultBtn text="조회" />
        </S.BtnContainer>
      </S.DatePickerRangeContainer>
    </>
  );
};
