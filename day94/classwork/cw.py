numbers = [12, 24, 15, 18, 30, 36, 48, 50, 60]

Tormeti = list(filter(lambda x: x % 12 == 0, numbers))
print(Tormeti)