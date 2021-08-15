# JavaScript Calculator
Lightweight calculator app with simple CSS animations for responsiveness.

**Link to project:** https://afeethamdev.github.io/Calculator/index.html

![Calculator Demo](https://i.imgur.com/yZ7snUo.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This project was made with the intention of using class-based programming to create a simple but well-performing program. The program works by manipulating three main values, in the calculator object: the Previous value taken in before an operation button is pressed, the Current value being inputted, and the Operation itself.

When a number is pressed, the value gets appended to the Current value. This Current value become the Previous value when an operation button is pressed, which also sets the Operation value. The inputted math problem is solved when the user clicks the equals button or another operation, updating the Current value to the solution. The viewport itself is updated and animated on the event of any button being clicked.

## Lessons Learned:

* Clean, highly-functional programs don't necessarily need a lot of code.
* Conversely, functionality that seems simple can be a lot more complex than it would appear (such as adding commas to a string-ified number correctly, or not letting the user break the calculator with excessive decimal points).
* Debugging is fun and rewarding and one of the best ways to learn code logic as a developer.
* Use switch cases to simplify repetitive if statements. Not only does it make your code cleaner but it also makes it easy to add new functionality.
