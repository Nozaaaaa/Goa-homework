# 1
def add_matrices(matrix1, matrix2):
    if len(matrix1) != len(matrix2) or len(matrix1[0]) != len(matrix2[0]):
        raise ValueError("matrix have to been one size")
    
    result = []
    for i in range(len(matrix1)):
        row = []
        for j in range(len(matrix1[0])):
            row.append(matrix1[i][j] + matrix2[i][j])
        result.append(row)
    
    return result

matrix1 = [[1, 3], [1, 4]]
matrix2 = [[4, 1], [2, 2]]
result = add_matrices(matrix1, matrix2)
print(result)

# 2
def transpose_matrix(matrix):
    return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = transpose_matrix(matrix)
print(transposed)

# 3
def diagonal_sums(matrix):
    n = len(matrix)
    main_diagonal_sum = 0
    secondary_diagonal_sum = 0

    for i in range(n):
        main_diagonal_sum += matrix[i][i]  
        secondary_diagonal_sum += matrix[i][n - 1 - i]  

    return main_diagonal_sum, secondary_diagonal_sum

matrix = [[1, 2, 3], 
          [4, 5, 6], 
          [7, 8, 9]]

main_sum, secondary_sum = diagonal_sums(matrix)
print(f"მთავარი დიაგონალის ჯამი: {main_sum}, გვერდითი დიაგონალის ჯამი: {secondary_sum}")
