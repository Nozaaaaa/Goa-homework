# task 1:

lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

res = list(map(lambda i: i * 2, lst))
print(res)

# task 2:

lst1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

res1 = list(filter(lambda i: i % 2 != 0, lst1))
print(res1)

# task 3:

lst2 = ['helLo', 'HELLO', 'GOA', 'byE', 'Iron']

res2 = list(filter(lambda i: i.upper() == i, lst2))
print(res2)

# task 4:

lst3 = ['cat', 'elephant', 'table', 'sun', 'mountain', 'pen', 'flower']

res3 = list(filter(lambda i: len(i) >= 5, lst3))
print(res3)

