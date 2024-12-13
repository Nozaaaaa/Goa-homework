# 1
def manual_filter(arr, *elements_to_remove):
    return [element for element in arr if element not in elements_to_remove]

arr = [1, 2, 3, 4, 5, 6, 7]
result = manual_filter(arr, 2, 4, 6)
print(result) 

# 2
def manual_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

arr = [5, 2, 9, 1, 5, 6]
result = manual_sort(arr)
print(result) 

