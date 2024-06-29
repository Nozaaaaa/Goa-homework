def feelTemp(t):
    if t<=100:
        return "It is hot."
    elif t>=70 and t<=100:
        return "It is warm."
    elif t>=32 and t<=70:
        return "It is cool."
    else:
        return "It is cold."
feelTemp(105)