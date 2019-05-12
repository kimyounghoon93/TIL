Tab 갯수(공백) 바꾸기 - 터미널 하단에 설정2번째

index.html

제일 위에

{% load static %}



9줄 href="{% static 'css/bootstrab'%}"

12줄 href="{% static 'css/main'%}"



static폴더의 app.js

2 번줄에

delimiters: ['[[', ']]'],

53 줄 axios.get(`/api/v1/genres`) 

