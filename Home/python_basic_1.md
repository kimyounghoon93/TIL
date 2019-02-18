# 숫자 자료형

+ +더하기

+ -빼기

+ *곱셈

+ **제곱

+ /몫 실수

+ //몫 정수만

+ % 나머지

  정수형 자료형(int)

## !=   >==>   같지 않으면



# 문자열(str)

```
test = 'I don\'t need Coke!'
print(test)  # I don't need Coke!

test = "I don't need Coke!"
print(test)  # I don't need Coke!

print(first + last)  # Myungseo Kang
print(last * 5)      # KangKangKangKangKang
```



# 문자열 슬라이싱

```
test_str = 'Leopold'

print(test_str[0])   # L
print(test_str[1])   # e
print(test_str[-1])  # d
print(test_str[-2])  # l

'시작은 0부터 끝은 한 칸 앞까지'

print(test_str[2:5])  # opo
print(test_str[3:6])  # pol
print(test_str[:5])   # Leopo
print(test_str[3:])   # pold

name = 'Leopold'

if name is 'Myungseo':
    print('Hello Myungseo')
elif name is 'Kang':
    print('Hello Kang!')
else:
    print('Hello Everyone!')
    
    
if 조건문:
    코드
elif 조건문2:
    코드
else:
    코드
    

```



# 리스트 자료형(lst)

```
a = [] # a = list()와 동일
b = [1, 3, 5]
c = ['Leopold', 'Myungseo', 'Kang', 'L3opold7']
d = [7, 9, ['Myungseo', 'L3opold7']]
```

List 안에는 여러가지 자료형을 담을 수 있습니다.

```
print(b[-1])     # 5
print(c[-2])     # Kang
print(d[-1][0])  # Myungseo
```

```
test = [1, 2, 3, 4, 5]
test[3] = 6

print(test)  # [1, 2, 3, 6, 5]

test = [1, 2, 3, 4, 5]
test[2:3] = ['a', 'b', 'c']

print(test)  # [1, 2, 'a', 'b', 'c', '4', '5']

# List 요소 삭제
test = ['a', 'b', 'c', 'd', 'e']
test[2:4] = []

print(test)  # ['a', 'b', 'e']
# del 함수 사용
test = ['a', 'b', 'c', 'd', 'e']
del test[2]

print(test)  # ['a', 'b', 'd', 'e']
----------
del 함수를 사용해서 삭제할 수도 있습니다.

test = ['a', 'b', 'c', 'd', 'e']
del test[2:4]

print(test)  # ['a', 'b', 'e']
```

`test = [1, 2]
test.append(3)  # 맨 뒤에 값 추가
print(test)  # [1, 2, 3]`

append(x) 함수는 인자를 1개밖에 받지 않기 때문에 여러개의 인자를 넘겨줄 경우 에러가 납니다.



```
test = [3, 1, 2, 5, 4]
test.sort()
print(test)  # [1, 2, 3, 4, 5]

test.sort(reverse=True)
print(test)  # [5, 4, 3, 2, 1]
```

sort() 함수는 List를 자동으로 정렬해줍니다. 역순으로 정렬하기 위해서는 sort 함수에 reverse 옵션을 True로 설정해주면 됩니다.

```
test = [3, 1, 2]
test.reverse()
print(test)  # [2, 1, 3]
```

reverse() 함수는 현재의 List를 역순으로 뒤집어 줍니다. 정렬은 하지 않고 현재의 List를 역순으로 뒤집어 줍니다.

```
test = [1, 2, 3, 4, 5]
print(test.index(3))  # 2
print(test.index(5))  # 4
```

index(x) 함수는 x 라는 값이 있는 경우 , x 의 인덱스를 반환해주는 함수입니다.

```
test = [1, 2, 3, 4, 5]
test.insert(0, 6)
print(test)  # [6, 1, 2, 3, 4, 5]
```

insert(x, y) 함수는 x 위치에 y 라는 값을 삽입해주는 함수입니다.

```
test = [1, 2, 3, 4, 3]
test.remove(3) ## 문자제거
print(test)  # [1, 2, 4, 3]
```

remove(x) 함수는 첫 번째로 나오는 x 라는 값을 List에서 삭제해주는 함수입니다. 보시다시피 뒷부분에 있는 3은 삭제되지 않았습니다.

```
test = [1, 2, 3]
print(test.pop())  # 3
print(test)        # [1, 2]
```

pop() 함수는 List의 가장 마지막 인덱스의 값을 반환해주고 그 값을 삭제해주는 함수입니다. 위의 예제에서 굳이 3이라는 값이 필요없을 경우에는 print() 함수를 빼도 상관없습니다.

```
test = [1, 2, 3, 1, 1]
print(test.count(1))  # 3
```

count(x) 함수는 x 라는 값이 List 안에 몇 개나 있는지 반환해주는 함수입니다.

```
test = [1, 2, 3]
test.extend([4, 5, 6])
print(test)  # [1, 2, 3, 4, 5, 6]
```

extend(x) 함수는 x 부분에 List를 받아서 원래의 List와 병합시켜주는 함수입니다.

List에서는 위와 같은 내장 함수들을 사용할 수 있습니다. 여기에 더해서 len() 함수로 List 값들의 개수를 얻을 수 있습니다.



# Tuple (튜플 자료형)

```
tp1 = ()
tp2 = (1,)
tp3 = (1, 2, 3, 4, 5)
tp4 = (1, 2, (3, 4, 5))
tp5 = 1, 2, 3
```

Tuple의 선언은 다음과 같이 할 수 있습니다. List와 거의 비슷하지만 다른 점이 조금 있습니다. 1개의 요소만을 가질때 튜플은 tp2 와 같이 뒤에 반드시 콤마(,) 가 와야합니다. 또한 tp5 처럼 괄호를 생략해도 된다는 점입니다.

Tuple과 List의 차이점은 이뿐만이 아닙니다. Tuple과 List의 가장 큰 차이점은 **Tuple은 값을 변경할 수 없다** 입니다. List는 항시 값의 변화가 가능하지만 Tuple은 불가능합니다. 그래서 **값의 변화를 원하지 않는 List의 경우에는 Tuple로 선언하는 것이 바람직** 합니다.

Tuple은 인덱싱, 슬라이싱, 병합, 반복 모두 가능합니다.

```
tp1 = (1, 2, 3)
tp2 = (4, 5, 6)

print(tp1[2])     # 3
print(tp1[1:])    # (2, 3)
print(tp1 + tp2)  # (1, 2, 3, 4, 5, 6)
print(tp2 * 2)    # (4, 5, 6, 4, 5, 6)
```



# Dictionary(딕셔너리 자료형)

Dictionary는 키=값 형태로 이루어진 자료형입니다. 이렇게 대응 관계를 나타내는 자료형을 연관 배열 혹은 Hash라고 합니다. 대표적인 예로는 루비의 Hash와 C#의 Dictionary가 있습니다.

```
dic1 = dict()
dic2 = {'k1': 'v1', 'k2': 'v2', 'k3': 'v3'}
dic3 = dict([('name', 'L3opold7'), ('phone', '010-1234-5678')])
dic4 = dict(firstname='Myungseo', lastname='Kang')
dic5 = {'ls': ['a', 'b', 'c']}

print(dic2)               # {'k1': 'v1', 'k3': 'v3', 'k2': 'v2'}
print(dic2['k2'])         # v2
print(dic3)               # {'phone': '010-1234-5678', 'name': 'L3opold7'}
print(dic3['name'])       # L3opold7
print(dic4)               # {'firstname': 'Myungseo', 'lastname': 'Kang'}
print(dic4['firstname'])  # Myungseo
print(dic5['ls'])         # ['a', 'b', 'c']
```

빈 Dictionary를 만들땐 dict() 함수를 사용하면 됩니다. 물론 내용이 있는 Dictionary를 만들 때 사용해도 됩니다! 그리고 value 값을 호출할 때는 Dictionary이름[‘키값’] 으로 호출하게 되면 값을 얻을 수 있습니다. 또한 Dictionary의 값으로 List도 넣을 수 있다.

```
test = {1: 'first'}
test[2] = 'second'

print(test)  # {2: 'second', 1: 'first'}
```

Dictionary는 간단하게 키값을 지정해주고 추가해주면 됩니다.

```
test = {1: 'first', 2: 'second', 3: 'third'}

del test[2]
print(test)  # {1: 'first', 3: 'third'}
```

삭제는 List에서 사용했듯이 del() 함수를 사용하면 됩니다.

```
test = {'name': 'Myungseo', 'nickname': 'L3opold7', 'birthday': '0523'}
print(test.keys())    # dict_keys(['name', 'nickname', 'birthday'])
print(test.values())  # dict_values(['Myungseo', 'L3opold7', '0523'])
print(test.items())   # dict_items([('nickname', 'L3opold7'), ('name', 'Myungseo'), ('birthday', '0523')])
```

keys(), values() 함수를 통해서 딕셔너리의 key 혹은 value를 dict_keys 혹은 dict_values 객체로 얻을 수 있습니다. items() 함수는 key와 value를 Tuple을 사용해서 묶은 값을 dict_items 라는 객체로 반환해줍니다.

```
test = {'name': 'Myungseo', 'nickname': 'L3opold7', 'birthday': '0523'}
test.clear()
print(test)  # {}
```

clear() 함수를 이용해서 모두 지워버릴 수 있다!

```
test = {'name': 'Myungseo', 'nickname': 'L3opold7', 'birthday': '0523'}

print(test.get('no_key'))  # None
print(test.get('name'))    # Myungseo
print(test['name'])        # Myungseo
print(test['no_key'])      # Error
```

test[‘no_key’] 의 경우에는 Error를 내뱉지만 test.get(‘no_key’)는 None 객체를 반환하기 때문에 get(x, y) 함수를 쓰는 것이 더 적절해보입니다. get(x, y) 함수는 Dictionary 안에 x 라는 키 값이 없을 경우 y 라는 디폴트 값을 반환해줍니다.

```
test = {'name': 'Myungseo', 'nickname': 'L3opold7', 'birthday': '0523'}

print('name' in test)    # True
print('no_key' in test)  # False
```



# Set(집합 자료형)

집합 자료형인 Set 입니다. 말 그대로 집합을 나타내기 위한 자료형입니다. 특징으로는 중복을 허용하지 않고, 순서가 없다는 것이 있습니다.

```
s = set([1, 2, 3, 4, 5])
print(s)  # {1, 2, 3, 4, 5}

hello = set('Hello World!')
print(hello)  # {' ', 'H', '!', 'e', 'l', 'o', 'd', 'W', 'r'}
```

List와 Tuple은 순서가 있기 때문에 인덱싱을 통해 원하는 값을 가져올 수 있었지만, Set은 Dictionary와 비슷하게 순서가 없는 자료형이기 때문에 인덱싱이 불가능합니다. 만약 Set에서 인덱싱을 하고 싶다면 List나 Tuple로 형 변환을 시킨 뒤에 해야합니다.

아무래도 Set은 집합 자료형이다보니 교집합, 차집합, 합집합 등 집합 연산에 있어 매우 유리합니다.

```
set1 = set([1, 2, 3, 4, 5, 6])
set2 = set([5, 6, 7, 8, 9, 0])

print(set1 & set2)  # {5, 6}
print(set1 | set2)  # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
print(set1 - set2)  # {1, 2, 3, 4}
print(set2 - set1)  # {0, 8, 9, 7}
```

차례대로 교집합, 합집합, set1-set2 차집합, set2-set1 차집합 입니다. 위의 코드는 아래와 같이 나타낼수도 있습니다.

```
set1 = set([1, 2, 3, 4, 5, 6])
set2 = set([5, 6, 7, 8, 9, 0])

print(set1.intersection(set2))  # {5, 6}
print(set1.union(set2))         # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
print(set1.difference(set2))    # {1, 2, 3, 4}
print(set2.difference(set1))    # {0, 8, 9, 7}
```

이렇게 Set 자료형의 내장 함수를 통해서 교집합, 차집합, 합집합을 구할 수 있습니다.

```
set1 = set([1, 2, 3, 4])
set1.add(4)
print(set1)  # {1, 2, 3, 4}

set1.add(5)
print(set1)  # {1, 2, 3, 4, 5}
```

add(x) 함수를 통해서 값을 추가할 수 있습니다. Set 자료형의 특징답게 기존에 있던 값을 추가할 경우에는 추가되지 않습니다.

```
set1 = set(1, 2)
set1.update([3, 4, 5])

print(set1)  # {1, 2, 3, 4, 5}
```

update(x) 함수를 통해서 여러 개의 값을 추가할 수 있습니다. x의 위치에는 iterable, 즉 반복 가능한 자료형이 와야합니다. List나 Tuple이 대표적인 예입니다.

```
set1 = set([1, 2, 3, 4, 5])
set1.remove(3)

print(set1)  # {1, 2, 4, 5}
```

특정 값을 제거하고 싶을 경우에는 remove(x) 함수를 사용하면 됩니다. x의 위치에는 제거하고 싶은 값을 적어줍니다.



## while문의 기본 구조

반복해서 문장을 수행해야 할 경우 while문을 사용한다. 그래서 while문을 반복문이라고도 부른다.

다음은 while문의 기본 구조이다.

```
while <조건문>:
    <수행할 문장1>
    <수행할 문장2>
    <수행할 문장3>
    ...
```

while문은 조건문이 참인 동안에 while문 아래에 속하는 문장들이 반복해서 수행된다.

"열 번 찍어 안 넘어 가는 나무 없다" 라는 속담을 파이썬 프로그램으로 만든다면 다음과 같이 될 것이다.

```
>>> treeHit = 0
>>> while treeHit < 10:
...     treeHit = treeHit +1
...     print("나무를 %d번 찍었습니다." % treeHit)
...     if treeHit == 10:
...         print("나무 넘어갑니다.")
...
나무를 1번 찍었습니다.
나무를 2번 찍었습니다.
나무를 3번 찍었습니다.
나무를 4번 찍었습니다.
나무를 5번 찍었습니다.
나무를 6번 찍었습니다.
나무를 7번 찍었습니다.
나무를 8번 찍었습니다.
나무를 9번 찍었습니다.
나무를 10번 찍었습니다.
나무 넘어갑니다.
```

위의 예에서 while문의 조건문은 treeHit < 10 이다. 즉, treeHit가 10보다 작은 동안에 while문 안의 문장들을 계속 수행한다. whlie문 안의 문장을 보면 제일 먼저 treeHit = treeHit + 1로 treeHit 값이 계속 1씩 증가한다. 그리고 나무를 treeHit번만큼 찍었음을 알리는 문장을 출력하고 treeHit가 10이 되면 "나무 넘어갑니다."라는 문장을 출력한다. 그러고 나면 treeHit < 10 이라는 조건문이 거짓이 되므로 while문을 빠져나가게 된다.



# for 반복문 안에서 break 명령

for문은 

for x in ~~~

라고 되는데 반복문 안에서 리스트안의 값 하나하나를 반복해서 나타나게 해준다

이 명령은 즉시 그것이 포함된 가장 안 쪽의 반복문을 빠져 나온다. 

for n in lst:    if n==0:        break    print(n)

이것은 lst 안의 요소들을 차례대로 프린트하다가 0이 발견되면 바로 반복을 멈추는 프로그램이다. 만약 lst=[1,2,3,0,4,5] 라면 1,2,3만 출력되고 반복문은 종료될 것이다. 만약 반복문의 중첩되어 있다면 가장 안쪽의 반복문만 빠져 나온다는 점에 유의해야 한다.



# for와 range

앞서 for라는 파이썬 키워드를 사용해 단 두 줄의 코드로 화면에 0부터 10까지를 출력해봤습니다. 그러나 한 가지 불편한 점은 출력하고자 하는 숫자를 리스트를 통해 명시적으로 저장하고 있어야 한다는 점입니다. 물론 앞의 예시처럼 반복하는 데이터가 많지 않은 경우에는 리스트를 사용해 명시적으로 데이터를 나열할 수 있습니다. 그런데 0부터 10까지가 아니라 0부터 100까지 출력해야 할 때는 어떻게 해야 할까요?

이럴 때 사용하는 것이 바로 range입니다. range는 ‘범위’라는 뜻을 가진 영어 단어인데, 파이썬에서 range를 이용하면 간단히 정수 범위를 표현할 수 있습니다. 예를 들어, range(1, 10)은 1부터 9까지의 숫자 범위를 나타냅니다.

```
 >>> range(1,10)
 range(1, 10)
 >>>
```

range에서 중요한 점은 시작 숫자와 끝 숫자를 지정했을 때 끝 숫자는 범위에 포함되지 않는다는 점입니다. 이를 확인하기 위해 range(1, 10)을 list라는 키워드를 통해 리스트 객체로 변환해보면 리스트에 정말로 1부터 9까지만 저장돼 있음을 확인할 수 있습니다.

```
>>> list(range(1,10))
[1, 2, 3, 4, 5, 6, 7, 8, 9]
>>>
```

range를 이용하면 큰 수의 범위에 대해서도 for 문을 쉽게 작성할 수 있습니다. 먼저 0부터 10까지의 숫자를 출력하는 코드를 for와 range를 사용해 다시 작성해 보겠습니다. 다음 코드를 보면 in 다음에 리스트를 사용하는 경우보다 코드가 매우 간단하다는 것을 확인할 수 있습니다. 0부터 10까지 출력하기 위해 range(0, 10)이 아니라 range(0, 11)이라는 표현이 사용된 것도 눈여겨보기 바랍니다.