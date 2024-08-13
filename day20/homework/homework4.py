one=[1,2,3,4,5]
two=[5,6,7,8,9]
def twolist(a,b):
    saerto=[]
    for element in a:
        if element in b:
            if element in b not in saerto:
                saerto.append(element)
    return(saerto)

print(twolist(one,two))