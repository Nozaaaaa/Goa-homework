def check_age(age):
    result = "You are an adult." if age >= 18 else "You are a minor."
    print(result)

def compare_numbers(num1, num2):
    result = f"{num1} is greater." if num1 > num2 else f"{num2} is greater." if num1 < num2 else "Equal"
    print(result)

age = int(input("Please enter your age: "))
check_age(age)

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))
compare_numbers(num1, num2)
