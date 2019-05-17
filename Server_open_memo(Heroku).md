# server_open_memo(Heroku)

capollux10@gmail.com 황준우 강사님 이메일

project폴더 이동 후

git으로 관리하기 (master가 붙어있으면 아래 명령어 실행X)

git init 



세상 밖으로 나가기 때문에 settings.py에 key값 등등을 숨겨야 함

숨기는 명령어

```python
pip install python-decouple
file 생성(프로젝트폴더 가장 밖에 (manage.py와 같은 위치에) .env 파일 생성)
```

settings.py에 SECRET_KEY 위에 import 

from decouple import config

(25번줄) SECRET_KEY를 복사하고

.env 파일에 붙여넣는데 *****SECRET_KEY 바로 뒤에 띄어쓰기를 지워준다*

settings.py를 SECRET_KET = config('SECRET_KET')

라고 입력

-----------------



프로젝트 폴더에 .gitignore에 .env를 추가해준다 (깃으로 관리하지 않을 것들)

settings.py(127번 줄)

STATIC_URL 아래

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles') 를 입력해준다

pip install django-heroku



**settings.py 가장 아랫쪽에 **

import django_heroku

django_heroku.settings(locals())





------------------------



```터미널
pip install gunicorn
file 생성(프로젝트폴더 가장 밖에 (manage.py와 같은 위치에) Procfile 파일 생성(확장자 없음))
```

Procfile 파일안에

web: gunicorn 프로젝트이름(제일 밖에 이름이 아니라 settings.py, wsgi.py가 담겨있는 폴더이름).wsgi

file 생성(프로젝트폴더 가장 밖에 (manage.py와 같은 위치에) runtime.txt 파일 생성)

runtime.txt 안에

파이썬 버전 입력 (터미널에 python -V 입력하면 버전명 나옴)



터미널에

pip freeze > requirements.txt 입력 (어떤걸 설치했는지 다 나옴(file을 열면 버전명시가 다 되있음))

git add .

git commit -m "~~"하기

git status를 했을 때 입력 안된 파일이 남아있으면 안됨



project setting

-----------------------

터미널에

heroku login

로그인 한 후



heroku create (주소가 될 이름 - 프로젝트 명 (유니크한 값)){자동으로 헤로쿠로 리모트 다됨}

git push heroku master



프로젝트 우측 상단에 More 클릭 runconsolo

bash를 입력하면

터미널이 생김 vi.env



SECRET_KEY문제로 인한 

.gitignore 삭제 git add . git commit

git push heroku master



에러 없이 진행되면

heroku run python manage.py migrate



static을 다시 commit한다

heroky run python manage.py loaddata 



remote 옆에 주소가 뜬다

