# 진행상황
### clamp

[app]
### header
- ui/search: 검색을 눌렀을시, 태그로 등록되지 않은 문자열삭제 필요
- 레이아웃 css 다시적용 필요

### aisde
- 각버튼의 url위치 다시판단해야함
- width가 고정적이지 않아 움직임
- height 또한 짧아짐 현상

### layout
- 특정컴포넌트가 보일때, 일치하는 url판단을 다시해줘야함
- signup, loging, messageModal 사용하기 위치 이동으로인해, header 및 asied 숨겨야함

---
# [pages]
### login ✅
- ui: 완료
- api: 완료
- model: 없음

### signup ✅
- ui: 완료
- api: 완료
- model: 완료

### search ✅
- ui: 완료
  - 다른페이지 이동시에 header에 남은 태그들 제거해야하나?
  - 유저프로필 클릭하면 유저페이지로
  - 일기이미지 or 일기내용 클릭하면 메인페이지로 리다이렉트
- api: 완료
- model: 없음

### diaryCreate ✅
- ui: 완료
  - button은 맨밑으로 위치할까?
  - 업로드버튼 클릭시에 오늘 날짜기준 일기를 작성했는지 판별하여 막을것인지?
  - 휑한데 제목추가해야하나?
- api: 완료
  - 200 상태코드일때 홈이아닌, 메인페이지로 리다이렉트 시켜줄것
- model: 없음

### diaryUpdate ✅
- ui: 완료
  - 휑한데 제목추가해야하나?
  - button은 맨밑으로 위치할까?
- api: 완료
  - 200 상태코드일때 홈이아닌, 메인페이지로 리다이렉트 시켜줄것
- model:없음


---
# [widgets]
### diarySet ✅
- ui: 완료
- api: 없음
- model: 완료
  - create & update를 동시에 사용하고있어서 코드가 읽기가 힘든부분이 존재함, 동작에 문제가 있지 않지만 api부분또한 랩핑해야하는 현상이 있음







