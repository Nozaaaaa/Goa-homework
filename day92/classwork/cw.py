def check_two_multiple(number):
    result = "Two" if number % 2 == 0 else number
    print(result)

def check_even_odd(number):
    result = number * 8 if number % 2 == 0 else number * 9
    print(result)

def check_number(number):
    result = "Positive" if number > 0 else "Negative"
    print(result)

num = int(input("Enter a number: "))
check_two_multiple(num)

check_even_odd(num)

check_number(num)
