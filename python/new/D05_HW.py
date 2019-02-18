#HW
#1.
def print_list(my_list):
    for i in my_list:
        print(i)

#2.
def print_list(my_list):
    for i,j in enumerate(my_list):
        print(f'index{i}의 값은 : {j}')

#3.
for key in my_dict.keys():
   
for value in my_dict.values():
    
for key, value in my_dict.items():

#4.
none

#WS

#1.
def my_palin(string):
    for i in range(len(string)):
        if not string[i]==string[-i+len(string)-1]:
            return False
    return True 
#또는
def my_palin(word):
    return word == word[::-1] #s[start:end:step] [::-1] <<< 역순으로 나옴
#또는
def my_palin(word):
        list_word = list(word)
        for i in range(len(list_word)//2):
                if list_word[i] != list_word[-i-1]:
                        return False
        return True

# 재귀
def is_palindrom(word):
    if len(word) < 2:
        return True
    if word[0] != word[-1]:
        return False
    return is_palindrom(word[1:-1])