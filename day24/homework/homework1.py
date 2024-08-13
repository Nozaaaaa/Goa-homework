def sum_or_zero(numbers):
    result_list = []
    for number in numbers:
        if number % 2 == 0:
            result_list.append(number * number)
        else:
            result_list.append(number * 2)
    return result_list
print(sum_or_zero([7,11,17,3,77]))