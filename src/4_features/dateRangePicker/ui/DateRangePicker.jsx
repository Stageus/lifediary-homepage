import { useState, useEffect } from "react";

import { S } from "./style";
import { Icon, DefaultBtn } from "@shared/ui";
import defaultDiary from "@shared/assets/imges/defaultDiary.jpg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//예시 데이터
const posts = [
  { id: 1, date: new Date(2024, 6, 14), isPublic: false },
  { id: 2, date: new Date(2024, 6, 15), isPublic: true },
  { id: 3, date: new Date(2024, 6, 16), isPublic: false },
  { id: 4, date: new Date(2024, 6, 16), isPublic: false },
  { id: 5, date: new Date(2024, 6, 16), isPublic: false },
  { id: 6, date: new Date(2024, 6, 16), isPublic: false },
  { id: 7, date: new Date(2024, 6, 16), isPublic: false },
];

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startDateSelected, setStartDateSelected] = useState(false);
  const [endDateSelected, setEndDateSelected] = useState(false);

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (!startDate && !endDate) {
      setFilteredPosts(posts);
    }
  }, []);

  const handleSearch = () => {
    if (!startDate || !endDate) {
      alert("시작 날짜와 종료 날짜를 모두 선택해주세요.");
      return;
    }
    //예시 데이터 가공
    const filtered = posts.filter((e) => {
      const postDate = e.date;
      const formatPostDate = postDate.toLocaleDateString("ko-KR");

      return postDate >= startDate && postDate <= endDate;
    });

    setFilteredPosts(filtered);
  };

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
          <DefaultBtn text="조회" onClick={handleSearch} />
        </S.BtnContainer>
      </S.DatePickerRangeContainer>

      <S.DiaryCardContainer>
        {filteredPosts.map((post) => (
          <S.DiaryCard key={post.id}>
            <S.ThumbnailContainer>
              <S.PublicSignContainer>{!post.isPublic ? "비공개" : "공개"}</S.PublicSignContainer>
              <img src={defaultDiary} alt="Diary thumbnail" />
            </S.ThumbnailContainer>
            <S.DateContainer>{formatDate(post.date)}</S.DateContainer>
          </S.DiaryCard>
        ))}
      </S.DiaryCardContainer>
    </>
  );
};
