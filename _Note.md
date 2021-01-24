[link] https://www.youtube.com/watch?v=PuG2VW18O1E&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=14

* asyn 사용
  <html>
  <head>
    <script asyn src="main.js"></script> 
  </head>
* defer 사용 : html과 동시에 다운.  html 완료후 실행 [가장 효율적이고 안전]
  <html>
  <head>
    <script defer src="variable.js"></script> 
  </head>

1. JS 파일 최상단 'use strict';  사용하는 것이 좋다
2. Variable
  - { } :: 블록 내에서만 사용 가능 / 블록 밖에선 호출 불가
  - 블록 밖 :: 글로벌 변수 -> 메모리에 항상 탑제 됨
  - var hoistin (move declaration from bottom to top)
    var --> 블록 안에서 지정해도 블럭 밖에서도 호출 가능하다
3. constants
  - favor immutable data type always for a few reason
    + security
    + thread safety
    + reduce human mistakes
  - 가능하면 const를 사용해서 작성
4. variable types
  - primitive, single item: number, string, boolean, null, undefined, symbol
  - object, box container
  - function, first-class function

  - number
    + Infinity : 1/0
    + negativeInfinity : -1/0
    + not a number : NaN  : 'a'/2
    + bigInt :  12121223232323312n     : 최근 추가 (숫자마지막에 n 붙은 경우)
  - string
    + template literals : `${value} ...`
  - null
    + let notthing = null
  - undefined
    + let x;
* function 은 object다. 


## VSCode 단축키
1. Command Palette  :: F1 , Ctrl+Shift+P
2. Quick Open       :: Ctrl + P  (해당파일 검색 후 이동)
3. 개발환경 열기    :: Ctrl + , 
4. Toggle Sidebar   :: Ctrl + B
5. Toggle Terminal  :: Ctrl + `
6. Keyboard Shortcuts :: Ctrl + K + S

7.  코드 자동완성   :: Kite 설치 (AI기반) https://www.kite.com/get-kite/?utm_medium=referral&utm_source=youtube&utm_campaign=dreamcoder&utm_content=description-only

8. beginning/end of file  :: Ctrl + Home / Ctrl + End
9. Move Word              :: Ctrl + <- / ->
10. Select Word           :: Ctrl + Shift + <- / ->
11. Copy line down/up     :: Shift + Alt + <- / ->
12. Multi Selection       :: Ctrl + D
13. Undo last cursor      :: Ctrl + U
14. Insert cursor         :: Alt + Click
15. Column (box) selection:: Shift + Alt + drag mouse
16. Current selection     :: Shift + Alt + I (영역 선택 후)




