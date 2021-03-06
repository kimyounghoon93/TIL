# Git & gitHub

## Git에 내 정보 설정

1. ` git config --global user.name 'kimyounghoon93'`:이름설정
2. git config --global user.email
3. 'kyh2021@naver.com':이메일 설정

* git config --global --list : 정보 설정 확인 

  # Git repo를 처음 생성한 경우

  * git init : git 초기화. 지금 폴더를 git으로 관리하겠다!

  (관리하려는 폴더 안에서 입력)

  * git remote add origin 주소 : 원격 저장소(remote repository)주소 등록
  * git remote set-url origin 주소 : 원격 저장소 수정



## GIt repo clone 한 경우

*  ' git clone 주소 ' : 이 주소로 부터 내용 내려받기 
  * 이 경우에는 git init, git remote add origin 주소를 하지 않아도 이미 다 되어있다.



## Git Commit & Push

* `git status` : 현재 폴더의 git 상태 확인

* `git add .`: 현재 폴더의 변경사항들을 commit 하기 위하여 준비. `.` 대신에 특정 파일 이름도 가능.

* `git commit -m '04 | 190107 AM | Git & CLI '` : commit, 변경 사항 저장. `''`안에 있는 메세지는 자유롭게 작성 가능.

* `git push -u origin master` : remote로 등록된 원격 저장소에 commit한 것들 올리기

  * 이 후에는 git push만 입력해도 동작합니다. `git clone`을 한 경우에도 해당합니다.

  * 이 컴퓨터에서 최초 push 인 경우, 로그인 창이 뜨며 로그인을 해줍니다.\


## Git Pull

* `git pull` : GitHub에 올라가 있는 내용들, 즉 commit들을 내려받는 것.

* 아침에 오자마자 git pull을 한 번 하고 시작합시다!

   



## Git & GitHub 재설정

```bash
# git 이름, 이메일 재설정
git config --global user.name 'kimyounghoon93'
git config -- global user.email 'kyh2021@naver.com'

# GitHub 로그인 정보 초기화
git credential reject
protocol=https
host=github.com
```



# Git push와 pull이 충돌이 일어나면

```bash
shift + z
두번
```

