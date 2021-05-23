import sys
import random


class Die:

    def __init__(self, sides):
        self._sides = sides

    def roll(self):
        return random.randint(1, self._sides)


my_die = Die(9)
# this is creating a die with 9 sides
print(my_die.roll())
# this is rolling the die and printing out what side it landed on...


class SixSidedDie(Die):

    def __init__(self):
        super().__init__(6)


new_die = SixSidedDie()
print(new_die.roll())


# Selection Sort
A = [64, 25, 12, 22, 11]

# runnning through the array
for i in range(len(A)):

    # unsorted array
    min_idx = i
    # compares the current slot to the resto f the aray
    for j in range(i+1, len(A)):
        # if min in array is lless than the slot were currently looking at
        if A[min_idx] > A[j]:
            # the slot looking at becomes the next min
            min_idx = j
    # swap the one looking at with the min
    A[i], A[min_idx] = A[min_idx], A[i]


print("Sorted array")
for i in range(len(A)):
    print("%d" % A[i]),
