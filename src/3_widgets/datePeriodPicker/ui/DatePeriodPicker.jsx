import { S } from "./style";
import { useSelectDate } from "../lib/useSelectDate";
import { useSearch } from "../lib/useSearch";

import { Icon, DefaultBtn } from "@shared/ui";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePeriodPicker = () => {
  const [startDate, endDate, startDateSelected, endDateSelected, handleStartDateChange, handleEndDateChange] = useSelectDate();
  const [handleSearch] = useSearch();

  return (
    <>
      <S.DatePickerRangeContainer>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          customInput={
            <S.DatePickerContainer>
              <S.DatePickerName>{startDateSelected ? startDate.toLocaleDateString("ko-KR") : "시작 조회 날짜"}</S.DatePickerName>
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
              <S.DatePickerName>{endDateSelected ? endDate.toLocaleDateString("ko-KR") : "종료 조회 날짜"}</S.DatePickerName>
              <div>
                <Icon type="calendar" color="red" />
              </div>
            </S.DatePickerContainer>
          }
        />
        <S.BtnContainer>
          <DefaultBtn text="조회" onClick={handleSearch} />
        </S.BtnContainer>
      </S.DatePickerRangeContainer>
    </>
  );
};
