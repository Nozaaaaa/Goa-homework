# 1
result = {
    "nashthi": lambda x: x % 2
}

num = int(input("შეიყვანეთ რიცხვი: "))
print("2-ზე გაყოფის ნაშთი:", result["nashthi"](num))

# 2
#...?

# 3
person = {
    "name": "Giorgi",
    "lastname": "Nozadze",
    "age": 15
}

print("Name:", person["name"])
print("Lastname:", person["lastname"])
print("Age:", person["age"])

# 4
numbers = [1, 2, 3]
doubled_numbers = list(map(lambda x: x * 2, numbers))
print("დაბლირებული რიცხვები:", doubled_numbers) 

# 5
numbers = [5, 12, 18, 7, 25]
divisible_by_3 = list(filter(lambda x: x % 3 == 0, numbers))
print("რიცხვები, რომლებიც იყოფა 3-ზე:", divisible_by_3)  

# 6
numbers = [5, 12, 18, 7, 25]
filtered_numbers = list(filter(lambda x: x % 3 == 0, numbers))
print("ფილტრირებული რიცხვები (3-ზე იყოფა):", filtered_numbers) 

# 7
numbers_plus_10 = list(map(lambda x: x + 10, numbers))
print("10-ის დამატება რიცხვებს:", numbers_plus_10)  

# 8
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
print("კენტი რიცხვები:", odd_numbers)  

# 9
total_sum = reduce(lambda x, y: x + y, numbers)
print("ყველა რიცხვის ჯამი:", total_sum)  
