# 진행상황

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



### search
- 무한스크롤 적용 필요
- 백엔드에 디코드가 적용될수있으므로 요청직전에 디코드 적용



### signup !!
- profile의 프로퍼티에서 file객체는 받지만, string을 받지 못함, string을 받야하는 이유는 구글의 기본이미지를 사용할수 있기 때문에


