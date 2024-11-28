#1
array1 = [int(input(f"Enter element #{i+1}: ")) for i in range(5)]
print(f"Element at index 2: {array1[2]}")
print(f"Element at index 4: {array1[4]}")

#2
N = int(input("Enter the number of elements for task 2: "))
array2 = [int(input(f"Enter element #{i+1}: ")) for i in range(N)]
print("Elements at odd indices (1, 3, 5, ...):")
for i in range(1, N, 2):
    print(array2[i])

#3: 
array3 = [int(input(f"Enter element #{i+1}: ")) for i in range(10)]
array3_doubled = [x * 2 for x in array3]
print("Doubled elements:")
print(array3_doubled)

#4
N4 = int(input("Enter the number of elements for task 4: "))
array4 = [int(input(f"Enter element #{i+1}: ")) for i in range(N4)]
print("Elements in reverse order:")
for num in reversed(array4):
    print(num, end=" ")

#5
N5 = int(input("Enter the number of elements for task 5: "))
array5 = [int(input(f"Enter element #{i+1}: ")) for i in range(N5)]
if N5 > 1: 
    array5[0], array5[-1] = array5[-1], array5[0]
print("Array after swapping first and last elements:")
print(array5)
