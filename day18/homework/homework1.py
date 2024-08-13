attemps = 0

while attemps < 3:
    username = input('Enter your username: ')
    password = input('Enter your password: ')

    if username == 'user123' and password == 'password123':
        print('You have successfully logged in.')
        break
    else:
        print('Incorrect credentials. Check if you have Caps lock on and try again.')
        attemps += 1
        continue
