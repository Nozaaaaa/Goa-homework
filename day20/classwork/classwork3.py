def add(num1,num2, operation):
    result = 0
    if operation == "+":
        result = num1 + num2
    elif operation =="-":
        result = num1 - num2
    elif operation == "/":
        result = num1 / num2
    elif operation == "*":
        result = num1 * num2
    else:
        result ="invaild operation"
    return result


print(add(10,5, "+"))
print(add(10,5, "-"))
print(add(10,7, "*"))
print(add(10,2, "/"))
