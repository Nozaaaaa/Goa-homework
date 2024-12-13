def sort_array(arr):
    for i in range(0, len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
        return arr
    
    print(sort_array([4,1,3,7,9,3,2,6]))

# 2
array1 = [1, 2, 3, 4]
array2 = [3, 4, 5, 6]

print((array1, array2))


# 3
def two_array(arr1, arr2):
    for elem in arr2:
        while elem in arr1:
            arr1.remove(elem)

# 4

def counter():
    count = 0

    while True:
        if count < 0:
            color = "red"  
        elif count > 0:
            color = "green"  
        else:
            color = "white"  

        
        print((f"Counter: {count}", color))
        print("\nაირჩიეთ მოქმედება:")
        print("1. დაამატეთ 1")
        print("2. გამოკლებეთ 1")
        print("3. რესტარტი (0-ზე)")
        print("4. გამოტოვეთ")

        choice = input("აირჩიეთ მოქმედება (1/2/3/4): ")

        if choice == "1":
            count += 1  # მიმატება
        elif choice == "2":
            count -= 1  # გამოკლება
        elif choice == "3":
            count = 0  # რესტარტი
        elif choice == "4":
            print("ამოირჩიეთ სწორი მოქმედება.")
            continue
        else:
            print("შეცდომა! პროგრამა დამთავრდება.")
            break

        # შეგვიძლია ლუპში გადავიდეთ, სანამ მომხმარებელი არ შეწყვეტს.

# ფუნქციის გაშვება
counter()
