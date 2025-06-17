# kata 1:

def pluralize(word):
    if word.endswith(('s', 'x', 'z', 'ch', 'sh')):
        return word + 'es'
    elif word.endswith('y') and word[-2] not in 'aeiou':
        return word[:-1] + 'ies'
    else:
        return word + 's'
    
# kata 2:

def largest_power(N):
    k = 0
    while 3**k < N:
        k += 1
    return k - 1