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
  - 
- ### profileSet ✅
- ui: 
- api:
- model:








/*
  마이페이지
    - 내정보반환 api
  유저페이지
    - 유저정보반환 api


  프로필에 대한 api는 각 페이지에서 요청하여 처리하고, 해당 데이터를
  profile에서 props로 받아 ui를 그려준다.
  이때 프로필이미지 수정, 닉네임 수정, 회원탈퇴, 구독 등은 어떻게 구분할것인가?
  profile자체를 widgets으로 만들고,
  props에따라 구분해야하나 ?
  아니면 프로필정보만 props로 받고, props로 ui를 구분하고, profile컴포넌트 자체에서 api처리를 다한다?

  "nickname" : string,
	"profileImg" : string,
	"subscribeCnt" : number,
	"diaryCnt" : number,

    "nickname" : string,
		"profileImg" : string,
		"subscribeCnt" : number,
		"diaryCnt" : number,	
		"isSubscribed": bool

  페이지 라우트에따라 ul를 구분하는게 좋을것같음
  
  일단 두개다 React.memo를 사용해야한다
  

  안되는 상황
  token으로 구분하여 ui를 바꾸게되면
  마이프로필, 유저프로필에서 문제가 발생함
  프로필컴포넌트에서 props에 따라 ui를 바꿔주면 될것같은데



  tap이 공존하는데 어떻게 해야하나 ?
  tap은 독립적으로 움직이는데 
  


*/