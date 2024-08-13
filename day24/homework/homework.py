def homework(string):
    words = string.split()
    longer_word = ""
    for word in words:
        if len(word) > len(longer_word):
            longer_word = word
        else:
            pass
    return list(longer_word)
print(homework("giorgi nozadze"))


