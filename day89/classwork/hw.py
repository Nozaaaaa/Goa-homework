# 1) Python პროგრამა slicing-ით
text = input("1) შეიყვანეთ ტექსტი: ")
start_index = int(input("შეიყვანეთ საწყისი ინდექსი: "))
sliced_text = text[start_index:]
print("ამოჭრილი ტექსტი:", sliced_text)

# 2) იგივე slicing JavaScript-ში (საჭიროა ბრაუზერში გაშვება)
js_code = '''
// 2) JavaScript პროგრამა slicing-ით
let text = prompt("შეიყვანეთ ტექსტი:");
let startIndex = parseInt(prompt("შეიყვანეთ საწყისი ინდექსი:"), 10);
let slicedText = text.slice(startIndex);
console.log("ამოჭრილი ტექსტი:", slicedText);
'''
print("\nJS კოდი (ბრაუზერში ჩასასმელად):\n", js_code)

# 3) Slicing ახსნა Python-ში
x = "Hello World"
sliced_example = x[2:6:1]  # llo 
print("\n3) Slicing ახსნა:")
print(f'x = "Hello World"\nx[2:6:1] -> "{sliced_example}"')
print("აქ 2 არის საწყისი ინდექსი, 6 - საბოლოო (არ შედის), 1 - ნაბიჯი.")

# 4) წინადადების თითოეული სიტყვის შებრუნება
sentence = input("\n4) შეიყვანეთ წინადადება: ")
reversed_words = " ".join(word[::-1] for word in sentence.split())
print("შებრუნებული სიტყვები:", reversed_words)
