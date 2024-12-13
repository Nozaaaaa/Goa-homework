def check_text():
    user_input = input("შეიყვანეთ ტექსტი: ")
    
    error_found = False
    error_indexes = []
    
    for i, char in enumerate(user_input):
        if char.isdigit() or not char.isalnum() and not char.isspace():
            error_found = True
            error_indexes.append(i)
    
    if error_found:
        print("ერორი!")
        print(f"რიცხვი ან ნიშანი შეიცავს შემდეგ ინდექსებზე: {error_indexes}")
    else:
        print("წარმატებული ოპერაცია")

check_text()
