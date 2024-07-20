def add(num1,num2, operation):
#+ operaciit gavigebt jams
    if operation == "+":
        print(num1 + num2)
#- operaciit gavigebt minuss
    elif operation =="-":
        print(num1 - num2)
#/ operaciit gavigebt gayopas
    elif operation == "/":
        print(num1 / num2)
#* operaciit gavigebt gamravlebas
    elif operation == "*":
        print(num1 * num2)
#roca araswori operatori iqneba daibewdeba invaild operation
    else:
        print("invaild operation")

#ro miematos gamoakldes,gaiyos,gamravldes gvexmareba add codi
add(10,5, "+")
add(10,5, "-")
add(10,7, "*")
add(10,2, "/")


