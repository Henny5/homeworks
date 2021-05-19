def print_months_a():
    months = ('Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
              'Augest', 'September', 'October', 'November', 'December')
    days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    for x in months, days:
        print(f'{months} {days}')


def print_months_b():
    monthsTuple = 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'
    daysTuple = 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    for x in monthsTuple, daysTuple:
        print(f'{monthsTuple} {daysTuple}')


def print_months_c():
    potus = {
        'Jan': 31,
        'Feb': 28,
        'March': 31,
        'April': 30,
        'May': 31,
        'June': 30,
        'July': 31,
        'Augest': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31
    }

    for k in potus:
        print(k)
