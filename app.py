# 1

for i in range(100):
    print(i)
i = 0

# 2

while (i < 50):
    print(i)
    i += 1

# 3

animals_list = ["rabbit", "crocodile", "tiger", "snake", "bear"]
print(animals_list)
del animals_list[0]
print(animals_list)
animals_list.pop(-1)
print(animals_list)
animals_list.append("giraffe")
print(animals_list)
animals_list.insert(0, "crocodile")
print(animals_list)

# 4

doubled_numbers = []
number = 0
while number < 10000:
    number += 1
    doubled_number = number * number
    doubled_numbers.append(doubled_number)

print(doubled_numbers)

# 5

odd_numbers = [1, 3, 5, 7, 9]
odd_numbers_sum = sum(odd_numbers)
print(odd_numbers_sum)

# 6


def isOdd(number):
    if number % 2 == 1:
        print(True)
    else:
        print(False)


isOdd(242123)

# 7


def upper_to_lowercase(string):
    lower_case_string = string.lower()
    print(lower_case_string)


upper_to_lowercase("TRANSFORM THIS TEXT TO LOWERCASE")

# 8

unfiltered_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


def is_even(number):
    return number % 2 == 0


even_numbers = list(filter(is_even, unfiltered_numbers))
print(even_numbers)
