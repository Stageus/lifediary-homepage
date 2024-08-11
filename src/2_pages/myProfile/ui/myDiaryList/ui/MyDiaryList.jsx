import { S } from "./style";
import { useGetMineDiary } from "../api/useGetMineDiary";
import { useDivideList } from "../lib/useDivideList";

import { Icon, DefaultBtn } from "@shared/ui";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import defaultDiary from "@shared/assets/img/defaultDiary.jpg";

export const MyDiaryList = () => {
  const [filteredPosts, startDate, endDate, startDateSelected, endDateSelected, handleStartDateChange, handleEndDateChange, handleSearch] = useDivideList();

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
      <S.DiaryCardContainer>
        {filteredPosts.map((post) => (
          <S.DiaryCard key={post.id}>
            <S.ThumbnailContainer>
              <S.PublicSignContainer>{!post.isPublic ? <S.NameHighlight>비공개</S.NameHighlight> : "공개"}</S.PublicSignContainer>
              <img src={defaultDiary} alt="Diary thumbnail" />
            </S.ThumbnailContainer>
            <S.DateContainer>{post.date.toLocaleDateString("ko-KR")}</S.DateContainer>
          </S.DiaryCard>
        ))}
      </S.DiaryCardContainer>
    </>
  );
};
