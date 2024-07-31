import { useState, useEffect } from "react";

import { useDate } from "@shared/store";

export const useSelectDate = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDate();
  const [startDateSelected, setStartDateSelected] = useState(false);
  const [endDateSelected, setEndDateSelected] = useState(false);

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

  return [startDate, endDate, startDateSelected, endDateSelected, handleStartDateChange, handleEndDateChange];
};
