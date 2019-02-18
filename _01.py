#student = {'python':80, 'algorithm':99, 'django':89, 'flask:':83}
#print(sum(student.values())/len(student))

blood_types = ['A', 'B', 'A', 'O', 'AB', 'AB', 'O', 'A', 'B', 'O', 'B', 'AB']
print('A형',blood_types.count('A'))
print('B형',blood_types.count('B'))
print('O형',blood_types.count('O'))
print('AB형',blood_types.count('AB'))

result={}
for blood_type in blood_types:
    if blood_type in result:
        result[blood_type] +=1
    else:
        result[blood_type] =1
print(result)