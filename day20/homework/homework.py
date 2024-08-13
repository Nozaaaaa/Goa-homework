def addEvenNumbers(list,sum):
 length= len(list)
 for i in range(0,length):
        if list(i) % 2 == 0 :
         sum = sum + list(i)
 return sum