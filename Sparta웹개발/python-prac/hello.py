print('hello sparta')

def sum (num1, num2):
    return num1+num2

result = sum(2,3)

print(result)



fruits = ['사과','배','배','감','수박','귤','딸기','사과','배','수박']

for f in fruits:
    print(f) 


count =0
for ff in fruits:
    if ff == '배':
        count+=1


people = [{'name': 'bob', 'age': 20}, 
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'smith', 'age': 17},
          {'name': 'ben', 'age': 27}]

for person in people:
    print(person['name'])

for p in people:
    if person['age'] < 20:
        print(person)


