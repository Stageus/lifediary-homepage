import { useState, useEffect } from "react";

const posts = [
  { id: 1, date: new Date(2024, 6, 14), isPublic: false },
  { id: 2, date: new Date(2024, 6, 15), isPublic: true },
  { id: 3, date: new Date(2024, 6, 16), isPublic: false },
  { id: 4, date: new Date(2024, 6, 16), isPublic: false },
  { id: 5, date: new Date(2024, 6, 16), isPublic: true },
  { id: 6, date: new Date(2024, 6, 16), isPublic: false },
  { id: 7, date: new Date(2024, 6, 16), isPublic: true },
];

export const useDivideList = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startDateSelected, setStartDateSelected] = useState(false);
  const [endDateSelected, setEndDateSelected] = useState(false);

  useEffect(() => {
    setFilteredPosts(posts);
  }, []);

  useEffect(() => {
    if (startDateSelected && endDateSelected) {
      if (startDate > endDate) {
        alert("시작 날짜는 종료 날짜보다 뒤쪽 날짜일 수 없습니다.");
        setStartDateSelected(false);
        setEndDateSelected(false);
        setSearchedPosts([]);
      }
    }
  }, [startDate, endDate, startDateSelected, endDateSelected]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setStartDateSelected(true);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setEndDateSelected(true);
  };

  const handleSearch = () => {
    if (startDateSelected === false || endDateSelected === false) {
      alert("시작 날짜와 종료 날짜를 모두 선택해주세요.");
      return;
    } else {
      const searched = posts.filter((e) => {
        const postDate = e.date;
        return postDate >= startDate && postDate <= endDate;
      });
      setFilteredPosts(searched);
    }
  };

  return [filteredPosts, startDate, endDate, startDateSelected, endDateSelected, handleStartDateChange, handleEndDateChange, handleSearch];
};
