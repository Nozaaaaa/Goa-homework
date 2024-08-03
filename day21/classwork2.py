def manual_string_sort(string_list):
    for i in range(len(string_list)):
        for x in range(i):
            if len(string_list[x]) > len(string_list[i]):
                shorter = string_list[i]
                longer = string_list[x]
                string_list[i] = longer
                string_list[x] = shorter

    
    return string_list

print(manual_string_sort(["1", "5", "2", "3", "4", "6"]))