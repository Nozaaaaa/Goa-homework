# 1. 
greet = lambda name: f"Hello {name}!"
print(greet("Name"))  

# 2. Map 
nums = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, nums))
print("Doubled list:", doubled)  

# 3. Filter 
listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]
divisible_by_5 = list(filter(lambda x: isinstance(x, int) and x % 5 == 0, listn))
print("Divisible by 5:", divisible_by_5)  

# 4. Set
setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
print("Set content:", setn)