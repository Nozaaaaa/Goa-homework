def sortWords(arr):
    length = len(arr)


    for i in range(length):
        for o in range(0,length-i-1):
            if arr[o] > arr[o+1]:
                arr[0],arr[o+1] = arr[o+1],arr[o]
            return arr
listassdasd = ["word10","word1","word100"]
print(sortWords(listassdasd))
