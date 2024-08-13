matrixmagaliti=[1,2,4],[2,3,4,5]
def transpose(matrix):
    transposed_lists = [[None] *len(matrix)for i in range(len(matrix[0]))]

    for i in range(len(matrix)):
        for o in range(len(matrix[0])):

            transposed_lists[o][i] = matrix[i][o]

    return transposed_lists

print(transpose(matrixmagaliti))