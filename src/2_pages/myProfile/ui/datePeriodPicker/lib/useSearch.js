export const useSearch = () => {
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

  return [handleSearch];
};
