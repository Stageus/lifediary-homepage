import { useDate, usePost } from "@shared/store";

//예시 데이터
const posts = [
  { id: 1, date: new Date(2024, 6, 14), isPublic: false },
  { id: 2, date: new Date(2024, 6, 15), isPublic: true },
  { id: 3, date: new Date(2024, 6, 16), isPublic: false },
  { id: 4, date: new Date(2024, 6, 16), isPublic: false },
  { id: 5, date: new Date(2024, 6, 16), isPublic: true },
  { id: 6, date: new Date(2024, 6, 16), isPublic: false },
  { id: 7, date: new Date(2024, 6, 16), isPublic: true },
];

export const useSearch = () => {
  const { startDate, endDate } = useDate();
  const { filteredPosts, setFilteredPosts } = usePost();

  const handleSearch = () => {
    if (startDate === null || endDate === null) {
      alert("시작 날짜와 종료 날짜를 모두 선택해주세요.");
      return;
    }
    //예시 데이터 가공
    const filtered = posts.filter((e) => {
      const postDate = e.date;

      return postDate >= startDate && postDate <= endDate;
    });

    setFilteredPosts(filtered);
  };

  return [handleSearch];
};
