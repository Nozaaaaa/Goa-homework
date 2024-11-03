# 1
def print_positions(rows, cols):
    for r in range(1, rows + 1):
        for c in range(1, cols + 1):
            print(f'row: {r} col: {c}')

print_positions(2, 2)

# 2
def multiplication_table():
    table = []
    for i in range(1, 11):
        row = []
        for j in range(1, 11):
            row.append(i * j)
        table.append(row)
    return table

result = multiplication_table()
for row in result:
    print(row)

# 3
def print_pairs(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if j > i:
                print(f'({i}, {j})')

print_pairs(3)
