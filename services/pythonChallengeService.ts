import type { BadgeIcons } from '../components/icons/BadgeIcons';

export interface PythonChallenge {
    level: number;
    title: string;
    topicExplanation: string;
    question: string;
    codeSnippet?: string | null;
    options?: string[];
    correctAnswerIndex?: number;
    expectedOutput?: string;
    initialCode?: string;
    explanation: string;
    example?: string | null;
    coinReward?: number;
    badge?: {
        name: string;
        icon: keyof typeof BadgeIcons;
    };
}

export const PYTHON_CHALLENGES: PythonChallenge[] = [
    // Levels 1-10: Python Basics
    {
        level: 1,
        title: "Hello, World!",
        topicExplanation: "In Python, we use the `print()` function to show text on the screen. It is the most common way to output results.",
        question: "Write a program that prints exactly 'Hello, Python!' to the console.",
        expectedOutput: "Hello, Python!",
        initialCode: "# Write your code here\n",
        explanation: "To print text, enclose it in quotes inside the print function: `print('Hello, Python!')`.",
        example: `print("Hello, Python!")`,
        coinReward: 1
    },
    {
        level: 2,
        title: "Variables",
        topicExplanation: "Variables are like named boxes for storing data. You assign a value to a variable using the `=` sign.",
        question: "Create a variable named `message` with the value 'Learning is fun' and then print the variable.",
        expectedOutput: "Learning is fun",
        initialCode: "# Create the variable and print it\n",
        explanation: "Assign the string to the variable and then pass the variable name to print().",
        example: `message = "Learning is fun"\nprint(message)`,
        coinReward: 0
    },
    {
        level: 3,
        title: "Basic Arithmetic",
        topicExplanation: "Python handles math easily. You can add (+), subtract (-), multiply (*), and divide (/).",
        question: "Calculate the result of `10 + 5 * 3` and print it.",
        expectedOutput: "25",
        initialCode: "# Calculate and print the result\n",
        explanation: "Python follows order of operations (multiplication first). 5*3=15, then 10+15=25.",
        example: `print(10 + 5 * 3)`,
        coinReward: 1
    },
    {
        level: 4,
        title: "Joining Strings",
        topicExplanation: "You can join (concatenate) two strings together using the `+` operator.",
        question: "Print the phrase 'Hello World' by joining 'Hello ' and 'World' using the `+` operator.",
        expectedOutput: "Hello World",
        initialCode: "# Join strings with +\n",
        explanation: "Use the plus sign to combine specific text strings.",
        example: `print('Hello ' + 'World')`,
        coinReward: 0
    },
    {
        level: 5,
        title: "Integers vs Floats",
        topicExplanation: "Numbers like `5` are Integers. Numbers like `5.5` are Floats (decimals).",
        question: "Print the type of the number `12.5` using the `type()` function.",
        expectedOutput: "<class 'float'>",
        initialCode: "# Print the type of 12.5\n",
        explanation: "The `type()` function tells you the data type. `print(type(12.5))` outputs `<class 'float'>`.",
        example: `print(type(12.5))`,
        coinReward: 0
    },
    {
        level: 6,
        title: "List Access",
        topicExplanation: "Lists are ordered collections. You access items using their index in square brackets `[]`. The first item is at index 0.",
        question: "Given the list `fruits = ['apple', 'banana', 'cherry']`, print the third item.",
        expectedOutput: "cherry",
        initialCode: "fruits = ['apple', 'banana', 'cherry']\n# Print the third item (index 2)\n",
        explanation: "The third item is at index 2 (0, 1, 2).",
        example: `fruits = ['apple', 'banana', 'cherry']\nprint(fruits[2])`,
        coinReward: 0
    },
    {
        level: 7,
        title: "Adding to Lists",
        topicExplanation: "Use `.append(item)` to add a new item to the end of a list.",
        question: "Add the number `50` to the `numbers` list and then print the entire list.",
        expectedOutput: "[10, 20, 30, 40, 50]",
        initialCode: "numbers = [10, 20, 30, 40]\n# Append 50 and print numbers\n",
        explanation: "Call `numbers.append(50)` then `print(numbers)`.",
        example: `numbers.append(50)\nprint(numbers)`,
        coinReward: 0
    },
    {
        level: 8,
        title: "For Loops",
        topicExplanation: "A `for` loop iterates over a list, running code for each item.",
        question: "Write a for loop that prints the numbers 1, 2, and 3, each on a new line.",
        expectedOutput: "1\n2\n3",
        initialCode: "# Loop through [1, 2, 3] and print each\n",
        explanation: "Use `for i in [1, 2, 3]:` followed by `print(i)` indented.",
        example: `for i in [1, 2, 3]:\n    print(i)`,
        coinReward: 1
    },
    {
        level: 9,
        title: "If/Else Logic",
        topicExplanation: "Use `if` to check a condition. If it's true, run the block. Optionally use `else` for when it's false.",
        question: "Set `temp = 25`. If `temp > 30` print 'Hot', otherwise print 'Nice'.",
        expectedOutput: "Nice",
        initialCode: "temp = 25\n# Write your if/else logic here\n",
        explanation: "Since 25 is not greater than 30, the else block runs.",
        example: `temp = 25\nif temp > 30:\n    print('Hot')\nelse:\n    print('Nice')`,
        coinReward: 0
    },
    {
        level: 10,
        title: "Milestone: Python Apprentice",
        topicExplanation: "Combine loops and logic! Check each number and print only specific ones.",
        question: "Loop through `numbers = [10, 55, 30, 80]`. If a number is greater than 50, print it.",
        expectedOutput: "55\n80",
        initialCode: "numbers = [10, 55, 30, 80]\n# Loop and print if > 50\n",
        explanation: "Iterate and check `if num > 50:`.",
        example: `numbers = [10, 55, 30, 80]\nfor num in numbers:\n    if num > 50:\n        print(num)`,
        coinReward: 1,
        badge: { name: "Python Apprentice", icon: 'LevelBadge10' }
    },
    // Levels 11-20
    {
        level: 11,
        title: "Elif Statements",
        topicExplanation: "Use `elif` to check multiple conditions in a sequence.",
        question: "Set `score = 85`. If score > 90 print 'A', elif score > 80 print 'B', else 'C'.",
        expectedOutput: "B",
        initialCode: "score = 85\n# Write if/elif/else chain\n",
        explanation: "85 is not > 90, but is > 80, so it prints 'B'.",
        example: `if score > 90:\n    print('A')\nelif score > 80:\n    print('B')\nelse:\n    print('C')`,
        coinReward: 0
    },
    {
        level: 12,
        title: "Comparison Operators",
        topicExplanation: "Use `==` to check if two values are equal.",
        question: "Check if 5 equals 5. Print 'Equal' if true.",
        expectedOutput: "Equal",
        initialCode: "# Check if 5 == 5\n",
        explanation: "The condition `5 == 5` is True.",
        example: `if 5 == 5:\n    print('Equal')`,
        coinReward: 0
    },
    {
        level: 13,
        title: "Logical Operators",
        topicExplanation: "`and` requires both sides to be true.",
        question: "Print 'True' if 10 > 5 and 3 < 10.",
        expectedOutput: "True",
        initialCode: "# Print the result of the expression directly or use an if statement\n",
        explanation: "Both 10>5 and 3<10 are true.",
        example: `print(10 > 5 and 3 < 10)`,
        coinReward: 0
    },
    {
        level: 14,
        title: "Type Conversion",
        topicExplanation: "Use `int()` to convert a string to a whole number.",
        question: "Convert the string \"25\" to an integer, add 5 to it, and print the result.",
        expectedOutput: "30",
        initialCode: "s = \"25\"\n# Convert to int, add 5, print\n",
        explanation: "`int(\"25\")` is 25. 25 + 5 is 30.",
        example: `print(int("25") + 5)`,
        coinReward: 0
    },
    {
        level: 15,
        title: "Dictionary Access",
        topicExplanation: "Dictionaries store key-value pairs. Access values with `dict['key']`.",
        question: "Given `person = {'name': 'John', 'city': 'Ny'}`, print the value for 'city'.",
        expectedOutput: "Ny",
        initialCode: "person = {'name': 'John', 'city': 'Ny'}\n# Print the city\n",
        explanation: "`person['city']` gives 'Ny'.",
        example: `print(person['city'])`,
        coinReward: 1
    },
    {
        level: 16,
        title: "Modifying Dictionaries",
        topicExplanation: "Set a new value using `dict['key'] = value`.",
        question: "Add a new key 'job' with value 'Dev' to `person`. Then print the `job` value.",
        expectedOutput: "Dev",
        initialCode: "person = {'name': 'John'}\n# Add 'job'='Dev' then print person['job']\n",
        explanation: "Assign `person['job'] = 'Dev'`.",
        example: `person['job'] = 'Dev'\nprint(person['job'])`,
        coinReward: 0
    },
    {
        level: 17,
        title: "While Loops",
        topicExplanation: "`while` loops run as long as a condition is true.",
        question: "Write a while loop that prints `x` as long as `x < 3`. Start `x` at 0 and increment by 1 each time.",
        expectedOutput: "0\n1\n2",
        initialCode: "x = 0\n# Write while loop here\n",
        explanation: "Prints 0, then 1, then 2. Stops when x becomes 3.",
        example: `while x < 3:\n    print(x)\n    x += 1`,
        coinReward: 0
    },
    {
        level: 18,
        title: "String Slicing",
        topicExplanation: "Get part of a string with `[start:end]`.",
        question: "Print the phrase 'yth' from 'Python' using slicing.",
        expectedOutput: "yth",
        initialCode: "s = \"Python\"\n# Print slice from index 1 to 4\n",
        explanation: "`s[1:4]` starts at index 1 ('y') and goes up to but not including 4 ('o').",
        example: `print("Python"[1:4])`,
        coinReward: 0
    },
    {
        level: 19,
        title: "List Slicing",
        topicExplanation: "Same idea as strings. `list[start:]` goes to the end.",
        question: "Given `nums = [0, 1, 2, 3, 4]`, print a slice containing only `[2, 3, 4]`.",
        expectedOutput: "[2, 3, 4]",
        initialCode: "nums = [0, 1, 2, 3, 4]\n# Print slice starting from index 2\n",
        explanation: "`nums[2:]` starts at index 2 and goes to the end.",
        example: `print(nums[2:])`,
        coinReward: 0
    },
    {
        level: 20,
        title: "Milestone: Data Wrangler",
        topicExplanation: "Looping through dictionary items gives keys and values.",
        question: "Loop through `data = {'a': 1, 'b': 2}` and print each value.",
        expectedOutput: "1\n2",
        initialCode: "data = {'a': 1, 'b': 2}\n# Loop and print values\n",
        explanation: "Iterate over `.values()` or use `.items()`.",
        example: `for v in data.values():\n    print(v)`,
        coinReward: 0,
        badge: { name: "Data Wrangler", icon: 'LevelBadge20' }
    },
    // Levels 21-30
    {
        level: 21,
        title: "Functions",
        topicExplanation: "Functions are reusable blocks of code that perform a specific task. You 'define' a function once and can then 'call' it many times whenever you need it. This helps keep your code organized.",
        question: "What keyword is used to define a new function in Python?",
        options: ["function", "def", "fun", "define"],
        correctAnswerIndex: 1,
        explanation: "The `def` keyword, short for 'define', is used to start a function definition in Python. It is followed by the function name and parentheses.",
        example: `def say_hello():\n    print("Hello from a function!")\n\nsay_hello() # Call the function`,
        coinReward: 0
    },
    {
        level: 22,
        title: "Function Arguments",
        topicExplanation: "You can pass data into a function through 'arguments'. These are variables that the function can use to perform its task. It makes functions more flexible and powerful.",
        question: "What will be printed by this code?",
        codeSnippet: "def greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Bob\")",
        options: ["Hello, {name}!", "Hello, name!", "Hello, Bob!", "An error will occur"],
        correctAnswerIndex: 2,
        explanation: "When the `greet` function is called with the argument \"Bob\", the value \"Bob\" is assigned to the `name` parameter inside the function. The f-string then uses this value to construct the final output.",
        // FIX: Escaped template literal placeholder to prevent TS interpolation.
        example: `def add_numbers(a, b):\n    result = a + b\n    print(f"The sum is: \${result}")\n\nadd_numbers(5, 10)`,
        coinReward: 1
    },
    {
        level: 23,
        title: "Function Return Values",
        topicExplanation: "A function can also send a value back to the code that called it. This is called a 'return value'. It's useful for getting the result of a calculation or process out of the function.",
        question: "What keyword is used to send a value back from a function?",
        options: ["send", "give", "return", "output"],
        correctAnswerIndex: 2,
        explanation: "The `return` keyword exits a function and optionally passes a value back to the code that called it. This allows you to store the result of a function in a variable.",
        example: `def multiply(x, y):\n    return x * y\n\nproduct = multiply(4, 5)\nprint(product) # Output: 20`,
        coinReward: 0
    },
    {
        level: 24,
        title: "String Methods: upper()",
        topicExplanation: "Strings have many built-in 'methods' that can modify or inspect them. The `.upper()` method is a simple one that returns a new string with all characters converted to uppercase.",
        question: "What is the output of `\"Python\".upper()`?",
        options: ["'python'", "'PYTHON'", "'pYTHON'", "An error will occur"],
        correctAnswerIndex: 1,
        explanation: "The `.upper()` string method returns a new string where all the characters of the original string are converted to uppercase.",
        example: `message = "this is a test"\nprint(message.upper()) # Output: THIS IS A TEST`,
        coinReward: 1
    },
    {
        level: 25,
        title: "f-Strings",
        topicExplanation: "f-Strings are a modern and convenient way to embed variables directly inside a string. You just put an 'f' before the opening quote and place your variable names inside curly braces `{}`.",
        question: "Which of these is the correct syntax for an f-string?",
        options: [
            "f\"My name is {name}\"",
            "\"My name is f{name}\"",
            "\"My name is {name}\".f",
            "\"My name is \" + f(name)"
        ],
        correctAnswerIndex: 0,
        explanation: "f-Strings (formatted string literals) are a modern way to embed expressions inside string literals. You prefix the string with an `f` and write expressions inside curly braces `{}`.",
        // FIX: Defined missing variable `cost` and escaped template literal placeholders.
        example: `item = "book"\ncost = 15\nprint(f"The \${item} costs \\$\${cost}.")`,
        coinReward: 1
    },
    {
        level: 26,
        title: "The len() function",
        topicExplanation: "The `len()` function is a handy built-in tool that tells you the length of something. For a string, it's the number of characters; for a list, it's the number of items.",
        question: "What will `len([10, 20, 30])` return?",
        options: ["60", "3", "30", "The list itself"],
        correctAnswerIndex: 1,
        explanation: "The built-in `len()` function returns the number of items in an object, whether it's a list, string, tuple, or dictionary. The list `[10, 20, 30]` contains 3 items.",
        example: `my_name = "David"\nprint(len(my_name)) # Output: 5`,
        coinReward: 0
    },
    {
        level: 27,
        title: "Finding in Strings",
        topicExplanation: "You can easily check if a small string exists inside a larger one using the `in` keyword. It acts like a question and gives you a `True` or `False` answer.",
        question: "What is the result of the expression `'fox' in 'the big dog'`?",
        options: ["True", "False", "1", "An error will occur"],
        correctAnswerIndex: 1,
        explanation: "The `in` operator checks for membership. It returns `True` if a sequence is found within another sequence, and `False` otherwise. The string 'fox' is not present in 'the big dog'.",
        example: `if "apple" in ["orange", "banana", "apple"]:\n    print("Found an apple!")`,
        coinReward: 0
    },
    {
        level: 28,
        title: "Replacing in Strings",
        topicExplanation: "The `.replace()` method is a useful string tool that lets you find a piece of a string and replace it with something else. It's great for correcting or changing text.",
        question: "What will `\"Hello\".replace('l', 'p')` return?",
        options: ["'Heppo'", "'Heplo'", "'Helpo'", "'Heppo'"],
        correctAnswerIndex: 0,
        explanation: "The `.replace()` method returns a new string where all occurrences of a specified substring are replaced with another. In this case, both 'l's are replaced with 'p's.",
        example: `sentence = "I like cats."\nnew_sentence = sentence.replace("cats", "dogs")\nprint(new_sentence) # Output: I like dogs.`,
        coinReward: 0
    },
    {
        level: 29,
        title: "Splitting Strings",
        topicExplanation: "The `.split()` method is perfect for breaking a single string into a list of smaller strings. You just tell it which character to use as the separator.",
        question: "What does `\"A-B-C\".split('-')` produce?",
        options: ["['A', 'B', 'C']", "('A', 'B', 'C')", "'ABC'", "['A-B-C']"],
        correctAnswerIndex: 0,
        explanation: "The `.split()` method breaks a string into a list of smaller strings, using the specified delimiter as the separator. Here, it splits the string at each hyphen `-`.",
        example: `csv_data = "John,Doe,30"\nfields = csv_data.split(',')\nprint(fields) # Output: ['John', 'Doe', '30']`,
        coinReward: 0
    },
    {
        level: 30,
        title: "Milestone: Function Virtuoso",
        topicExplanation: "One of the most important principles in programming is 'Don't Repeat Yourself' (DRY). Functions are the primary way to achieve this, making your code cleaner, shorter, and easier to manage.",
        question: "What is a key benefit of using functions in your code?",
        options: [
            "They make your code run faster.",
            "They are the only way to use loops.",
            "They allow you to reuse code instead of writing it multiple times.",
            "They automatically handle errors."
        ],
        correctAnswerIndex: 2,
        explanation: "Functions help you organize code into logical blocks. This makes your code more readable, easier to debug, and allows you to call the same block of code from multiple places without repeating yourself (the DRY principle: Don't Repeat Yourself).",
        // FIX: Escaped template literal placeholder to prevent TS interpolation.
        example: `# Without a function\nprint("Welcome, Alice!")\nprint("Have a great day!")\n\nprint("Welcome, Bob!")\nprint("Have a great day!")\n\n# With a function (reusable)\ndef greet(name):\n    print(f"Welcome, \${name}!")\n    print("Have a great day!")\n\ngreet("Alice")\ngreet("Bob")`,
        coinReward: 1,
        badge: { name: "Function Virtuoso", icon: 'LevelBadge30' }
    },
    // Levels 31-40
    {
        level: 31,
        title: "Tuples",
        topicExplanation: "A tuple is similar to a list, but with one key difference: it's 'immutable'. This means once you create a tuple, you cannot change, add, or remove its items. Tuples are written with round brackets `()`.",
        question: "What is the main difference between a tuple and a list?",
        options: [
            "Tuples are mutable, lists are immutable.",
            "Tuples can store mixed data types, lists cannot.",
            "Tuples are immutable, lists are mutable.",
            "There is no difference."
        ],
        correctAnswerIndex: 2,
        explanation: "A key feature of tuples (defined with `()`) is that they are immutable, meaning their contents cannot be changed after creation. Lists (defined with `[]`) are mutable, so you can add, remove, or change items.",
        example: `point = (10, 20) # A tuple representing coordinates\nprint(point[0]) # Accessing elements\n# point[0] = 15 would cause an error!`,
        coinReward: 0
    },
    {
        level: 32,
        title: "Sets",
        topicExplanation: "A set is a collection where every item is unique (no duplicates) and the items are in no particular order. Sets are useful when you only care about whether an item exists in a collection, not its order or how many times it appears.",
        question: "What will be the output of this code?",
        codeSnippet: "my_set = {1, 2, 3, 3, 2}\nprint(my_set)",
        options: ["{1, 2, 3, 3, 2}", "{1, 2, 3}", "[1, 2, 3]", "An error will occur"],
        correctAnswerIndex: 1,
        explanation: "Sets are unordered collections of unique items. When you create a set with duplicate values, the duplicates are automatically removed.",
        example: `unique_numbers = {10, 20, 30, 20, 10}\nprint(len(unique_numbers)) # Output: 3`,
        coinReward: 0
    },
    {
        level: 33,
        title: "Iterating Dictionaries",
        topicExplanation: "There are different ways to loop through a dictionary. You can loop through its keys using `.keys()`, its values using `.values()`, or both at the same time using `.items()`.",
        question: "What will `person.keys()` return?",
        codeSnippet: "person = {\"name\": \"John\", \"age\": 30}",
        options: ["dict_keys(['name', 'age'])", "dict_values(['John', 30])", "['name', 'age']", "('name', 'age')"],
        correctAnswerIndex: 0,
        explanation: "The `.keys()` method returns a view object that displays a list of all the keys in the dictionary. Similarly, `.values()` returns the values, and `.items()` returns key-value pairs.",
        example: `car = {"brand": "Ford", "model": "Mustang"}\nfor key in car.keys():\n    print(key)`,
        coinReward: 0
    },
    {
        level: 34,
        title: "Nested Lists",
        topicExplanation: "A nested list is simply a list that contains other lists as its items. This is a common way to create a 2D grid or matrix, like a tic-tac-toe board.",
        question: "How do you access the number 8 in the `matrix`?",
        codeSnippet: "matrix = [[1, 2], [3, 4], [7, 8]]",
        options: ["matrix[2][1]", "matrix[1][2]", "matrix[3][2]", "matrix[8]"],
        correctAnswerIndex: 0,
        explanation: "For nested lists (a list of lists), you use multiple indices. The first index selects the inner list (`matrix[2]` gets `[7, 8]`), and the second index selects the item within that inner list (`[1]` gets `8`).",
        example: `grid = [[ 'X', 'O', 'X' ], [ 'O', 'X', 'O' ]]\n# Change the center 'X' to 'O'\ngrid[1][1] = 'O'`,
        coinReward: 1
    },
    {
        level: 35,
        title: "List Comprehensions",
        topicExplanation: "List comprehensions are a shorter, more 'Pythonic' way to create a list based on an existing list. It's like a compact `for` loop that builds a list in a single line.",
        question: "Which list comprehension will create a list of squares for numbers 0, 1, 2?",
        options: [
            "[x*x for x in [0, 1, 2]]",
            "(x*x for x in [0, 1, 2])",
            "[for x in [0, 1, 2] do x*x]",
            "{x*x for x in [0, 1, 2]}"
        ],
        correctAnswerIndex: 0,
        explanation: "List comprehensions provide a concise way to create lists. The syntax is `[expression for item in iterable]`. Here, `x*x` is the expression applied to each `x` in the list `[0, 1, 2]`.",
        example: `# Traditional for loop\neven_numbers = []\nfor i in range(10):\n    if i % 2 == 0:\n        even_numbers.append(i)\n\n# List comprehension (more concise)\neven_numbers_comp = [i for i in range(10) if i % 2 == 0]`,
        coinReward: 0
    },
    {
        level: 36,
        title: "Importing Modules",
        topicExplanation: "Python has a huge standard library full of 'modules' that contain pre-written code for common tasks. To use a module, you first have to `import` it into your program.",
        question: "How do you correctly import the `math` module?",
        options: ["using math;", "#include <math>", "import math;", "import math"],
        correctAnswerIndex: 3,
        explanation: "The `import` statement is used to bring modules or packages into the current scope, allowing you to use their functions and variables. For example, after `import math`, you can use `math.sqrt()`.",
        example: `import math\n\n# Calculate the square root of 16\nprint(math.sqrt(16)) # Output: 4.0`,
        coinReward: 0
    },
    {
        level: 37,
        title: "The `random` module",
        topicExplanation: "The `random` module is a fun and useful part of Python's standard library. It provides functions for generating random numbers, shuffling sequences, and making random choices.",
        question: "Which function from the `random` module would you use to pick a random item from a list?",
        options: ["random.randint()", "random.choice()", "random.pick()", "random.select()"],
        correctAnswerIndex: 1,
        explanation: "`random.choice(sequence)` returns a randomly selected element from a non-empty sequence (like a list or a string). `random.randint(a, b)` is used for getting a random integer.",
        // FIX: Escaped template literal placeholder to prevent TS interpolation.
        example: `import random\n\noptions = ["rock", "paper", "scissors"]\ncomputer_choice = random.choice(options)\nprint(f"Computer chose: \${computer_choice}")`,
        coinReward: 0
    },
    {
        level: 38,
        title: "Error Handling (try/except)",
        topicExplanation: "Sometimes, code can fail for reasons you can't predict (like a user entering text instead of a number). A `try...except` block lets you 'try' to run some code and 'catch' any errors that happen, preventing your program from crashing.",
        question: "If an error occurs inside a `try` block, what happens next?",
        options: [
            "The program crashes immediately.",
            "The code inside the matching `except` block is executed.",
            "The `try` block is executed again.",
            "Nothing, the error is ignored."
        ],
        correctAnswerIndex: 1,
        explanation: "The `try...except` block is used for error handling. Python runs the code in the `try` block. If an error (exception) occurs, it stops and jumps to the `except` block, preventing the program from crashing.",
        example: `try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("You can't divide by zero!")`,
        coinReward: 1
    },
    {
        level: 39,
        title: "Comments",
        topicExplanation: "Comments are notes in your code that are ignored by Python. They are written for humans to read and are crucial for explaining what your code does, making it easier for you and others to understand later.",
        question: "Which symbol is used to start a single-line comment in Python?",
        options: ["//", "/*", "#", "--"],
        correctAnswerIndex: 2,
        explanation: "In Python, the hash symbol (`#`) is used to start a comment. The interpreter ignores everything from the `#` to the end of that line. This is useful for explaining code.",
        example: `# This is a comment to explain the next line\nuser_age = 25 # This is an inline comment`,
        coinReward: 0
    },
    {
        level: 40,
        title: "Milestone: Module Master",
        topicExplanation: "Modules are one of Python's greatest strengths. By importing code written by others, you can add powerful features like web access, data analysis, or game development to your programs without having to write everything from scratch.",
        question: "Why are Python modules useful?",
        options: [
            "They change the color of your code editor.",
            "They provide pre-written code to add functionality, so you don't have to write it yourself.",
            "They are required for every Python script to run.",
            "They automatically fix bugs in your code."
        ],
        correctAnswerIndex: 1,
        explanation: "Modules are files containing Python definitions and statements. They allow you to logically organize your Python code. More importantly, you can import powerful, pre-built modules like `math`, `random`, or `datetime` to solve complex problems without reinventing the wheel.",
        // FIX: Escaped template literal placeholder to prevent TS interpolation.
        example: `import datetime\n\ncurrent_time = datetime.datetime.now()\nprint(f"The current date and time is: \${current_time}")`,
        coinReward: 1,
        badge: { name: "Module Master", icon: 'LevelBadge40' }
    },
    // Levels 41-50
    {
        level: 41,
        title: "Introduction to Classes",
        topicExplanation: "Object-Oriented Programming (OOP) is a way of thinking about programming using 'objects'. A `class` is the blueprint for creating these objects. For example, you could have a `Dog` class that defines what all dogs should know (name, breed) and do (bark, wag tail).",
        question: "What is a 'class' in object-oriented programming?",
        options: [
            "A specific instance of an object.",
            "A function that belongs to an object.",
            "A blueprint for creating objects.",
            "A variable that holds another variable."
        ],
        correctAnswerIndex: 2,
        explanation: "A class acts as a template or blueprint. It defines the properties (attributes) and behaviors (methods) that all objects created from that class will have.",
        example: `class Dog:\n    # This class is a blueprint for dogs.\n    # We can create many individual Dog objects from it.\n    pass`,
        coinReward: 0
    },
    {
        level: 42,
        title: "The __init__() method",
        topicExplanation: "The `__init__()` method is a special function inside a class that runs automatically when you create a new object from that class. It's often called the 'constructor', and its job is to set up the initial properties of the object.",
        question: "What is the special purpose of the `__init__()` method in a class?",
        options: [
            "It is the last method called when an object is destroyed.",
            "It is a special method for printing the object.",
            "It initializes a new object when it is created.",
            "It is used to define the class name."
        ],
        correctAnswerIndex: 2,
        explanation: "The `__init__()` method is a constructor. It's automatically called when you create a new instance of a class, and it's where you set up the initial state (attributes) of the object.",
        example: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np1 = Person("Alice", 30)`,
        coinReward: 0
    },
    {
        level: 43,
        title: "Creating Objects",
        topicExplanation: "Once you have a class (the blueprint), you can create individual 'objects' or 'instances' from it. If `Car` is your class, creating a specific car like `my_blue_honda` is called 'instantiation'.",
        question: "Given `class Car: ...`, how do you create an object (instance) of this class?",
        options: ["new Car()", "Car.create()", "Car()", "create(Car)"],
        correctAnswerIndex: 2,
        explanation: "To create an instance of a class, you call the class name as if it were a function. This process is called instantiation. For example, `my_car = Car()`.",
        example: `class Cat:\n    species = "Felis catus"\n\n# Create two different instances (objects) of the Cat class\ncat1 = Cat()\ncat2 = Cat()`,
        coinReward: 0
    },
    {
        level: 44,
        title: "Object Attributes",
        topicExplanation: "'Attributes' are the variables that belong to a specific object. They represent the state or properties of that object. For a `Car` object, attributes might include `.color`, `.brand`, and `.speed`.",
        question: "How would you access the `color` attribute of an object named `my_car`?",
        codeSnippet: "class Car:\n    def __init__(self):\n        self.color = \"blue\"",
        options: ["my_car.get('color')", "my_car['color']", "my_car.color", "color(my_car)"],
        correctAnswerIndex: 2,
        explanation: "You use dot notation (`.`) to access the attributes (and methods) of an object. `my_car.color` will retrieve the value of the `color` attribute.",
        example: `class Book:\n    def __init__(self):\n        self.title = "1984"\n\nmy_book = Book()\nprint(my_book.title) # Access and print the title attribute`,
        coinReward: 1
    },
    {
        level: 45,
        title: "Class Methods",
        topicExplanation: "'Methods' are functions that belong to a class; they define the behaviors of an object. The first argument to any method is always a special reference to the object itself, conventionally named `self`.",
        question: "What is the first argument that is automatically passed to any method of a class?",
        options: ["The class itself", "The object instance itself (usually called `self`)", "The first argument you provide", "Nothing"],
        correctAnswerIndex: 1,
        explanation: "By convention, the first parameter of any method in a class is `self`. It's a reference to the instance of the object itself, allowing you to access its attributes and other methods, like `self.color`.",
        example: `class Counter:\n    def __init__(self):\n        self.count = 0\n\n    def increment(self):\n        self.count += 1 # 'self' is used to access the object's own 'count'`,
        coinReward: 0
    },
    {
        level: 46,
        title: "Lambda Functions",
        topicExplanation: "A lambda function is a small, one-line, anonymous function. It's a shortcut for creating a simple function without the need for the full `def` syntax. It's often used when you need a quick function for a short period.",
        question: "What is a primary characteristic of a lambda function?",
        options: [
            "It must have a name.",
            "It can have multiple expressions.",
            "It is an anonymous function that can only have one expression.",
            "It is used exclusively for mathematical operations."
        ],
        correctAnswerIndex: 2,
        explanation: "A lambda function is a small, anonymous function defined with the `lambda` keyword. It can take any number of arguments but can only have one expression, whose value is returned.",
        example: `# A regular function\ndef double(x):\n    return x * 2\n\n# An equivalent lambda function\ndouble_lambda = lambda x: x * 2\n\nprint(double_lambda(5)) # Output: 10`,
        coinReward: 0
    },
    {
        level: 47,
        title: "The map() function",
        topicExplanation: "The `map()` function is a tool for applying a function to every single item in an iterable (like a list). It's an efficient way to transform all elements in a collection in the same way.",
        question: "What is the output of this code?",
        codeSnippet: "nums = [1, 2, 3]\nres = list(map(lambda x: x + 1, nums))\nprint(res)",
        options: ["[1, 2, 3]", "[2, 3, 4]", "[1, 3, 5]", "An error will occur"],
        correctAnswerIndex: 1,
        explanation: "The `map()` function applies a given function to every item of an iterable (like a list) and returns a map object. Here, it applies the lambda function `x + 1` to each number in `nums`.",
        example: `numbers_str = ["1", "2", "3"]\n# Convert all strings in the list to integers\nnumbers_int = list(map(int, numbers_str))\nprint(numbers_int) # Output: [1, 2, 3]`,
        coinReward: 0
    },
    {
        level: 48,
        title: "The filter() function",
        topicExplanation: "The `filter()` function lets you process a sequence, but unlike `map()`, it selectively keeps only the items that satisfy a certain condition (where a function returns `True`).",
        question: "What does the `filter()` function do?",
        options: [
            "It filters out duplicate items from a list.",
            "It filters an iterable, returning only items for which a function returns True.",
            "It filters out errors from a block of code.",
            "It changes each item in a list according to a function."
        ],
        correctAnswerIndex: 1,
        explanation: "The `filter()` function constructs an iterator from elements of an iterable for which a function returns `True`. It's used to selectively keep items that meet a certain condition.",
        example: `numbers = [-2, -1, 0, 1, 2]\n# Keep only the positive numbers\npositive_nums = list(filter(lambda x: x > 0, numbers))\nprint(positive_nums) # Output: [1, 2]`,
        coinReward: 0
    },
    {
        level: 49,
        title: "Inheritance",
        topicExplanation: "'Inheritance' is a core concept of OOP where you can create a new class (a 'child') that is based on an existing class (the 'parent'). The child class automatically gets all the attributes and methods of the parent, which you can then add to or modify.",
        question: "In object-oriented programming, what is inheritance?",
        options: [
            "When an object has more than one class.",
            "When a class takes on the attributes and methods of another class.",
            "When a function belongs to a class.",
            "When a class has no methods."
        ],
        correctAnswerIndex: 1,
        explanation: "Inheritance is a powerful feature that allows one class (the child class) to inherit the properties and methods of another class (the parent class). This promotes code reuse and logical hierarchies.",
        example: `class Animal:\n    def speak(self):\n        return "Some animal sound"\n\nclass Dog(Animal): # Dog inherits from Animal\n    pass\n\nmy_dog = Dog()\nprint(my_dog.speak()) # Can use the parent's method`,
        coinReward: 0
    },
    {
        level: 50,
        title: "Final Challenge: The Calculator",
        topicExplanation: "A powerful programming technique is 'composition', where you use the result of one function as the input for another. This allows you to build complex operations from simple, reusable building blocks.",
        question: "You have two functions, `add(x,y)` and `multiply(x,y)`. Which line correctly calculates `(5 + 3) * 2`?",
        options: [
            "multiply(add(5, 3), 2)",
            "add(multiply(5, 3), 2)",
            "add(5, 3) * 2",
            "multiply(5, 3) + 2"
        ],
        correctAnswerIndex: 0,
        explanation: "This demonstrates function composition. To follow the order of operations `(5 + 3) * 2`, you must first call the `add` function with 5 and 3. The result of that function call (which is 8) is then used as the first argument to the `multiply` function.",
        example: `def square(n):\n    return n * n\n\ndef increment(n):\n    return n + 1\n\n# Calculate (3^2) + 1\nresult = increment(square(3))\nprint(result) # Output: 10`,
        coinReward: 1,
        badge: { name: "Python Calculator Pro", icon: 'GrandMasterTrophy' }
    }
];