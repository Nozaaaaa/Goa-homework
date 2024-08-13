def vowelreturn(word):
     amount = 0
     vowels='aeiouAEIOU'
     for characters in word:
          if characters in vowels:
               amount+=1
     return amount


print(vowelreturn("Nika"))