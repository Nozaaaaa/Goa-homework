def wordPerm(word1,word2):
    if len(word1) != len(word2):
        return False
    char_count1={}
    char_count2={}

    for character in word1:
        if character in char_count1:
            char_count1[character]+=1
        else:
            char_count1[character]= 1
    for character in word2:
        if character in char_count2:
            char_count2[character]+=1
        else:
            char_count2[character]= 1
    return char_count1==char_count2

print(wordPerm("nika","kina"))