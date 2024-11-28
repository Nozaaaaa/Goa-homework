import math

def count_area(*args):
    if len(args) == 2:  
        length, width = args
        return length * width
    
    elif len(args) == 1:  
        radius = args[0]
        return math.pi * radius * radius
    
    elif len(args) == 3:  
        a, b, c = args
        s = (a + b + c) / 2
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return area
    
    else:
        return "არასწორი რაოდენობა არგუმენტების"

print(count_area(5, 10))  
print(count_area(3))  
print(count_area(3, 4, 5))  
