# CLI

-CLI : Command Line Interface #명령어 줄 인터페이스
-GUI : Graphic User Interface #그래픽으로 구성된 사용자 조작 인터페이스
-prompt : 명령어를 입력 할 때 기본
-shell : 컴퓨터와 상호 작용하게 도와주는 프로그램
-echo : print와 비슷 한 느낌
#echo '$SHELL'
#echo "$SHELL"
#echo ```SHELL
# CTEL+c를 누르면 프로그램 하던 중 스톱

## Exercises

1. 터미널에 Hello, world를 출력해보자
2. echo 'hello'라고 입력하고 이 문제상황에서 빠져나와보자\
3. echo 메뉴얼을 참고하여 줄 바꿈(개행,  newline)을 하지 않고 'Hello world'를 출력해보자
4. 'sleep'이라고 하는 명령어의 메뉴얼 페이지를 읽고 우리의 터미널을 5초간 재워보자
    =sleep 5 5초간 재우기

5. 이번에는 터미널을 100초간 재워보고, 중간에 깨워보도록 하자
    =sleep 100 + Ctrl c =도중에 나옴
    Ctrl+a=커서가 맨 앞으로 옴
    Ctrl+e=커서가 맨 뒤로옴
    C+u= 커서 기준 앞이 사라짐
    C+k= 커서 뒷 쪽 사라짐
    C+w= (bash에서 써야함) 커서 기준으로 단어 단위 삭제
    C+d= 아무 것도 없을 때 사용 가능 _ 터미널을 종료하는 단축키
### man(메뉴얼) 종료버튼 - Q
man echo - 에코라는 명령어의 설명

## Summary
- `echo <string>` : 화면에 문자열 출력. ex) echo hello
- `man <command>` : 특정 커맨드 매뉴얼 페이지. ex) man echo
- `^c` : 현재 입력중인 작업 취소(Cancel) 이후 새 줄 실행.
- `^a` : 현재 입력중이 줄 맨 앞으로 커서 이동.
- `^e` : 현재 입력중이 줄 맨 뒤로 커서 이동
- `^u` : 현재 커서 기준, 앞쪽 전체 삭제.
- `^k` : 현재 커서 기준, 뒷쪽 전체 삭제.
- `^w` : 현재 커서 기준, 앞쪽 단어 단위로 삭제. (c9에서는 사용 불가)
- `alt + click` : 클릭하는 곳으로 커서 이동.
- `방향키 위, 아래` : 명령어 히스토리 탐색
- `clear` or `^l` : 화면 정리(clear screen)
- `exit` or `^d` : bash 종료

echo -n 'hello'
=아이디 앞에 hello가 뜸