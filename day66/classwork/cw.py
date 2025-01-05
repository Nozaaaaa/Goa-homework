while True:
    try:
        num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
        num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
        print(f"ნამრავლი: {num1 * num2}")
    except ValueError:
        print("გთხოვთ, შეიყვანეთ მხოლოდ რიცხვები.")
        continue

    choice = input("თუ გსურთ პროგრამიდან გასვლა, შეიყვანეთ 'exit'. გაგრძელებისთვის დააჭირეთ Enter: ")
    if choice.lower() == 'exit':
        print("პროგრამა დასრულდა.")
        break
