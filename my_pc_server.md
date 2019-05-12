# git bash

```memo
1. gitbash
student@DESKTOP MINGW64 ~
$ cd yh

student@DESKTOP MINGW64 ~/yh (master)
$ ls
 _01.py         cli/     Home/  'Problem Solving'/   startcamp/      vue/
 _currency.py   flask/   html/   python/             TIL/
 c9/            git/     js/     scratch01.sb2       typora기본.md

student@DESKTOP MINGW64 ~/yh (master)
$ cd ..

student@DESKTOP MINGW64 ~
$ cd yh_hw

student@DESKTOP MINGW64 ~/yh_hw (master)
$ ls
'0121 풀이.md'      debug.md        python/             구미_1반_김영훈.zip
 02_web/            django/         study.ipynb         기지국.md
 03_boxoffice.txt  'git lab.txt'    test/               김영훈.md
 04_crud/           h_s/            Test_0422.md        문제.txt
 05_detail_new/     homeworkshop/   TIL/               '엄윤주 미제출.md'
 Algorithm/         html/           Untitled.ipynb
 D15_sql.pdf        movies/        '과목평가 풀이.md'

student@DESKTOP MINGW64 ~/yh_hw (master)
$ cd django

student@DESKTOP MINGW64 ~/yh_hw/django (master)
$ python -V
Python 3.5.3

student@DESKTOP MINGW64 ~/yh_hw/django (master)
$ mkdir api

student@DESKTOP MINGW64 ~/yh_hw/django (master)
$ cd api

student@DESKTOP MINGW64 ~/yh_hw/django/api (master)
$ cd ~

student@DESKTOP MINGW64 ~
$ code .bash_profile

student@DESKTOP MINGW64 ~
$ python


2.
***** .bash_profile
alias python='winpty python'


3.
student@DESKTOP MINGW64 ~
$ python
Python 3.5.3 (v3.5.3:1880cb95a742, Jan 16 2017, 16:02:32) [MSC v.1900 64 bit (AM
D64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> exit()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyboardInterrupt
>>> exit()

student@DESKTOP MINGW64 ~
$ cd yh_hw

student@DESKTOP MINGW64 ~/yh_hw (master)
$ cd django

student@DESKTOP MINGW64 ~/yh_hw/django (master)
$ cd api

student@DESKTOP MINGW64 ~/yh_hw/django/api (master)
$ python -m venv api-venv

student@DESKTOP MINGW64 ~/yh_hw/django/api (master)
$ ls
api-venv/
********************* python 3.7.2 버전에서의 명령어
source api-venv/Scripts/activate

```



# CMD

```cmd
Microsoft Windows [Version 10.0.17134.407]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Users\student>cd yh_hw

C:\Users\student\yh_hw>cd django

C:\Users\student\yh_hw\django>cd api

C:\Users\student\yh_hw\django\api>dir
 C 드라이브의 볼륨에는 이름이 없습니다.
 볼륨 일련 번호: 621C-E287

 C:\Users\student\yh_hw\django\api 디렉터리

2019-05-10  오전 09:49    <DIR>          .
2019-05-10  오전 09:49    <DIR>          ..
2019-05-10  오전 09:49    <DIR>          api-venv
               0개 파일                   0 바이트
               3개 디렉터리  206,857,072,640 바이트 남음

C:\Users\student\yh_hw\django\api>api-venv\Scripts\activate
(api-venv) C:\Users\student\yh_hw\django\api>pip install django
Collecting django
  Downloading https://files.pythonhosted.org/packages/b1/1d/2476110614367adfb079a9bc718621f9fc8351e9214e1750cae1832d4090/Django-2.2.1-py3-none-any.whl (7.4MB)
    100% |################################| 7.5MB 243kB/s
Collecting sqlparse (from django)
  Downloading https://files.pythonhosted.org/packages/ef/53/900f7d2a54557c6a37886585a91336520e5539e3ae2423ff1102daf4f3a7/sqlparse-0.3.0-py2.py3-none-any.whl
Collecting pytz (from django)
  Downloading https://files.pythonhosted.org/packages/3d/73/fe30c2daaaa0713420d0382b16fbb761409f532c56bdcc514bf7b6262bb6/pytz-2019.1-py2.py3-none-any.whl (510kB)
    100% |################################| 512kB 3.3MB/s
Installing collected packages: sqlparse, pytz, django
Successfully installed django-2.2.1 pytz-2019.1 sqlparse-0.3.0
You are using pip version 9.0.1, however version 19.1.1 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.

(api-venv) C:\Users\student\yh_hw\django\api>django-admin startproject api .

(api-venv) C:\Users\student\yh_hw\django\api>dir
 C 드라이브의 볼륨에는 이름이 없습니다.
 볼륨 일련 번호: 621C-E287

 C:\Users\student\yh_hw\django\api 디렉터리

2019-05-10  오전 09:58    <DIR>          .
2019-05-10  오전 09:58    <DIR>          ..
2019-05-10  오전 09:58    <DIR>          api
2019-05-10  오전 09:55    <DIR>          api-venv
2019-05-10  오전 09:58               644 manage.py
               1개 파일                 644 바이트
               4개 디렉터리  206,558,085,120 바이트 남음

(api-venv) C:\Users\student\yh_hw\django\api>python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 17 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
May 10, 2019 - 09:59:09
Django version 2.2.1, using settings 'api.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
[10/May/2019 09:59:57] "GET / HTTP/1.1" 200 16348
Not Found: /robots.txt
[10/May/2019 10:00:25] "GET /robots.txt HTTP/1.1" 404 1966
[10/May/2019 10:00:25] "GET /static/admin/css/fonts.css HTTP/1.1" 200 423
[10/May/2019 10:00:25] "GET /static/admin/fonts/Roboto-Regular-webfont.woff HTTP/1.1" 200 85876
[10/May/2019 10:00:25] "GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1" 200 86184
[10/May/2019 10:00:25] "GET /static/admin/fonts/Roboto-Light-webfont.woff HTTP/1.1" 200 85692
Not Found: /favicon.ico
[10/May/2019 10:00:25] "GET /favicon.ico HTTP/1.1" 404 1969
[10/May/2019 10:01:25] "GET / HTTP/1.1" 200 16348
[10/May/2019 10:01:25] "GET /static/admin/css/fonts.css HTTP/1.1" 304 0
[10/May/2019 10:01:25] "GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1" 304 0
[10/May/2019 10:01:25] "GET /static/admin/fonts/Roboto-Regular-webfont.woff HTTP/1.1" 304 0
[10/May/2019 10:01:25] "GET /static/admin/fonts/Roboto-Light-webfont.woff HTTP/1.1" 304 0
[10/May/2019 10:01:42] "GET / HTTP/1.1" 200 16348

```

# Chrome

```clom
http://localhost:8000
또는 
http://127.0.0.1:8000/
```

