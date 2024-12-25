def unique_elements(arr):
    from collections import Counter
    counts = Counter(arr)
    return [item for item in arr if counts[item] == 1]


example = [1, 2, 2, 3, 4, 4, 5]
result = unique_elements(example)
print(result)  

