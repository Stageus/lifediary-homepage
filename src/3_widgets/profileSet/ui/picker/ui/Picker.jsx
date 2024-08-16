// Npm
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Slice
import { S } from "./style";

export const Picker = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
  
  return (
    <S.picker>
      <DatePicker
        // 해당 input에 대한 css class
        className="input_style"
        // 당일 날짜 선택버튼
        todayButton="오늘날짜 선택하기"
        // 값이 입력되었을때의 취소
        isClearable
        // 초기표시값
        placeholderText="날짜선택"
        // date 형식
        dateFormat="yyyy-MM-dd"
        // 달력아이콘
        showIcon
        // svg아이콘
        icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 2 48 48"
        >
          <mask id="ipSApplication0">
            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
              <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
              <path
                fill="#FF6767"
                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
              ></path>
            </g>
          </mask>
          <path
            fill="#FF6767"
            d="M0 0h48v48H0z"
            mask="url(#ipSApplication0)"
          ></path>
        </svg>
      }
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      withPortal
      />
    </S.picker>
  );
};
