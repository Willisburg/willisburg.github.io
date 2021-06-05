# Grid spiral visualization
A project i thought of thinking about procedural map generation. Given a coordinate a value is returned which will never repeat with any other input. I first made a quick calculation program in c# and later a visualization in python, but for the sake of looking nice and easier visualization i opted for javascript with [p5.js](https://p5js.org/). I've also made a simmilar project with polar coordinates instead of my grid spiral coordinates. Check it out [here](https://github.com/Willisburg/willisburg.github.io/tree/main/spiral).

## Controls:
- scale slider increases/decreases both the scale and point count.
- if the "check primes" switch is turned off, mod slider changes the criteria. The value of a point must be divisible by the criteria.
- if the "check primes" switch is turned on, mod slider will do nothing. Only points with prime values show up. This is simillar to [Ulam's spiral](https://mathworld.wolfram.com/PrimeSpiral.html).

![Image](https://i.imgur.com/IwyBk29.png)

## Made with:
- [p5.js](https://p5js.org/).
