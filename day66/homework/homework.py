# 1
entered_texts = set()

def text_input():
    while True:
        text = input("შეიყვანეთ ტექსტი: ")
        if text in entered_texts:
            print("ეს ტექსტი უკვე შეყვანილი გაქვთ.")
        else:
            entered_texts.add(text)
            print("ტექსტი დამატებულია.")

# 2
def increment_to_zeros(n):
    while not str(n).endswith('0' * (len(str(n)) - 1)):
        n += 1
    return n

# 3
correct_password = "12348765"
while True:
    password = input("შეიყვანეთ პაროლი: ")
    if password == correct_password:
        print("პაროლი სწორია.")
        break
    else:
        print("პაროლი არასწორია, სცადეთ თავიდან.")
