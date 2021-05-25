class vehicle:

    def __init__(self, color, speed):
        self._color = color
        self._speed = speed

    def get_color(self, color):
        return self._color

    def go(speed):
        return (f'now going at speed {speed}')

    def print(_color, speed):
        return (f'color: {_color} current speed{speed}')


class Plane(vehicle):

    def go(speed):
        return(f'now flying at speed {speed}')


v1 = vehicle.go('10 mph')
#v1.print(34, 10)
p1 = Plane.go('300 mph')
#p1.print(56, 40)
# cant figure out how to put in a color other than that i think everything looks ok
# AttributeError: 'str' object has no attribute 'print'= the errror it gives when i try to run it

for fizzbuzz in range(100):
    if fizzbuzz % 3 == 0 and fizzbuzz % 5 == 0:
        print("fizzbuzz")
        continue
    elif fizzbuzz % 3 == 0:
        print("fizz")
        continue
    elif fizzbuzz % 5 == 0:
        print("buzz")
        continue
    print(fizzbuzz)
