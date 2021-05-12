import random
myName = 'Henny Davidowitz'
myAddress = '5 Katie Ct'
myFamily = ['Dovid', 'Leba', 'Tatty', 'Mommy', 'Chaim', 'Lieba', 'Shana']

print(
    f'my name is: {myName}\nmy address is: {myAddress}\nmy family members are: {myFamily}')

print(myName[3::3])
print(myAddress[3::3])
print(myFamily[2::3])
# do two here bec the fact that slot one here is the second throws it off and it wouldprint mommy(4) and then shana(7)

print(myFamily[-2][1:4:])

for i in range(1, 11):
    num = i
    print("Multiplication Table of", num)
    for j in range(1, 11):
        answer = num * j
        print(answer)


# for i in range(1,11):
    #print("\n\nMULTIPLICATION TABLE FOR %d\n" %(i))
    # for j in range(1,11):
        #print("%-5d X %5d = %5d" % (i, j, i*j))

number = random.randint(1, 10)
player_name = input("Hello, What's your name?")
number_of_guesses = 0
print('okay! ' + player_name + ' I am Guessing a number between 1 and 10:')

while number_of_guesses < number:
    guess = int(input())
    number_of_guesses += 1
    if guess < number:
        print('Your guess is too low')
    if guess > number:
        print('Your guess is too high')
    if guess == number:
        break
if guess == number:
    print('You guessed the number in ' + str(number_of_guesses) + ' tries!')
else:
    print('You did not guess the number, The number was ' + str(number))
