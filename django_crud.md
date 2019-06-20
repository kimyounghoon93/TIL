

python 프로젝트 기본 setting 하는 법



1. Django Project 생성

  프로젝트 생성 후 가장 먼저 migrate를 해줘야한다.

2. migrate 를 해준다.

3. static 폴더와 templates 폴더를 만든다. 

4. settings.py => static 폴더와 templates 폴더 설정 

\- TEMPLATES 위에 넣기

| 1    | #프로젝트의 templates 폴더의 절대 경로 얻어와서 |
| ---- | ----------------------------------------------- |
| 2    | tempDir=os.path.join(BASE_DIR, "templates")     |

\- 맨 아래에 넣기

| 1    | STATICFILES_DIRS=(os.path.join(BASE_DIR,"static"),) |
| ---- | --------------------------------------------------- |
|      |                                                     |

\- Language, Time_zone 수정하기

| 1    |   LANGUAGE_CODE = 'ko'   |
| ---- | :----------------------: |
| 2    |                          |
| 3    | TIME_ZONE = 'Asia/Seoul' |

\- Super user만들기(admin계정)

python manage.py createsuperuser



**[CRUD 생성 setting 하기]**



1.

models.py

| 1    | # 회원정보를 관리할 모델 설정                                |
| ---- | ------------------------------------------------------------ |
| 2    |                                                              |
| 3    | # Member 모델 정의                                           |
| 4    | class Member(models.Model):                                  |
| 5    | # num 필드 설정 (자동 증가되는 primary key 값)               |
| 6    | num=AutoField(primary_key=True)                              |
| 7    | # name 필드 설정 (최대 길이 : 30, null 허용하지 않음)        |
| 8    | name=CharField(max_length=30, null=False)                    |
| 9    | # addr 필드 설정 (최대 길이 : 50, null 허용)                 |
| 10   | addr=CharField(max_length=50, null=True) #null을 허용하겠다. |



2.

admin.py

| 1    | #-*- coding: utf-8 -*-                     |
| ---- | ------------------------------------------ |
| 2    |                                            |
| 3    | from django.contrib import admin           |
| 4    | from member.models import Member           |
| 5    |                                            |
| 6    | # Register your models here.               |
| 7    | # 관리자 모드에서 관리할 모델정보 설정     |
| 8    | class MemberAdmin(admin.ModelAdmin):       |
| 9    | # num, name, addr 필드를 볼 수 있도록 설정 |
| 10   | list_display=('num', 'name', 'addr')       |
| 11   |                                            |
| 12   | # 등록하기                                 |
| 13   | admin.site.register(Member, MemberAdmin)   |

