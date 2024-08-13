examplelist=["o","oo","oooo","ooo"]
def sortwithlength(list):
    return sorted(list,key = len)

print(sortwithlength(examplelist))