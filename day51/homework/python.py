def sum_rows_and_columns(matrix):
    n = len(matrix)
    row_sums = [0] * n
    column_sums = [0] * n

    for i in range(n):
        for j in range(n):
            row_sums[i] += matrix[i][j]  
            column_sums[j] += matrix[i][j] 

    return row_sums, column_sums

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

row_sums, column_sums = sum_rows_and_columns(matrix)
print("რიგების ჯამები:", row_sums)
print("სვეტების ჯამები:", column_sums)
