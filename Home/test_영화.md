# test_영화

import os

key값을 네이버와 영진위에서 받아 온 후 암호화 시킨다

최근 10주간 데이터 중 주간 박스오피스 TOP10데이터 수집

day = [20190113,  20190106, 20191230, 20191223, 20191216, 20191209, 

20191202, 20191125, 20191118, 20191111, 20191104]

리스트의 값을 하나하나 받아오게 만든다

for x in day 

앞에서 만든 리스트 값으로 영화 순위 리스트를 하나하나 받아온다

누적된 검색결과 제외 = .append()를 사용하는데 앞에서 날짜가 최신순으로 되어 있고

code가 같은 값은 넣지 않아서 누적 순 제일 높은 기록을 저장하게 된다.

딕셔너리 안의 필요로 하는 키 값을 하나하나 받아온다

네이버에서 이미지 URL을 받아온 후 이미지를 저장한다



\# image 저장하기

image_url = 'https://###.jpg'

image_file = requests.get(image_url)

with open('###.jpg','wb') as f:

​    f.write(image_file.content)



csv 저장하기

with open('###.csv','w',newline='',encoding='utf8') as f:

​    writer = csv.DictWriter(f, fieldnames=['title','director'])

​    writer.writeheader()

​    writer.writerow(###)