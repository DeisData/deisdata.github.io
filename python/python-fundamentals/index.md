---
layout: python
---

# Python Fundamentals

Python is a very powerful tool for automating tasks that would otherwise be time-consuming or impossible to do by hand or other conventional tools. Here, we'll go over basic ways to use Python to introduce you to a slice of its potential.



### Question 1.  Do it yourself!  Coding


```python
#  INSTRUCTIONS:   Write a message in the quotes.
#  type Shift+Enter to run the cell.
message = ''

print(message)
```

    


## Python as a calculator

An incredibly simple yet pivotal role of Python is to perform math calculations (additional, subtraction, multiplication, etc.). We show how to basic action below.

You'll see the symbol `#` used often. These are comments, and they are used to write descriptions. Any characters following `#` are not run or executed.


```python
3 + 4 * 5  # addition and multiplication 
```




    23



After we run a cell, an output is displayed below. 

You may have noticed from that example that order of operations mattered for that calculation. You can parentheses too if you want to group calculations


```python
12 / (6 - 4) # division and substraction
```




    6.0



Exponentiation (e.g. $2^3$) looks a little bit odd in Python as it uses `**` instead of a more traditional `^`.


```python
2 ** 3 # exponentiation
```




    8



#### Question 2: Calculate the following value in Python: $ \frac{25}{(35 - 3)^3} $


```python
### Put your answer below: 
```

## Assigning Variables
A foundational tool in Python is assigning values to variables. We do this with the `=` operator.


```python
x = 50 # x is 50
```

This sets the variable `x` to be 50, an **integer**, or `int`. This become stored in our notebook, and we can access this value in other cells until the notebook is reset. For instance, subtracting 20 from `x` prints out a value of 30.


```python
# What if I use x again in a different cell?
x - 20
```




    30



**Variables persist between cells once they have been run (executed).**

If we ever want to check the value of any variable, we can use the built-in `print()` command to display the value. 


```python
y = 35
print(y)
```

    35


We can also assign the value of one variable to another variable. If we execute `x = y`, x takes the current value of `y` and assigns that to `x`.

*Note: `y` will be unaffected by this assignment. `x = y` should be interpretted as "let x take the current value of y".*


```python
x = y
print(x)
print(y)
```

    35
    35


If we change `y` to be a different value, `x` will be unaffected.


```python
y = 3.8
print(x) # will not always be the same value as y
print(y)
```

    35
    3.8


**Variables only change value when something is assigned to them.**
They are **not** like spreadsheets where a cell can depend on another and update automatically.

### Question 3.  Swapping Values
Given the code below, what is the value of the variable `swap`?


```python
x = 1.0
y = 3.0
swap = x
x = y
y = swap 
```


```python
print(swap)
```

**What's in a name?** _Variable name conventions_
- Use only letters, digits, and underscores _
- Start with a letter (typically lower case)
- Variable names are case sensitive
- Use meaningful names!

**Variables must be created before they are used.** Otherwise, Python will throw an error.


```python
print(z) # we haven't initialized z yet!
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    /Users/fordfishman/GitHub/python/python-session1.ipynb Cell 26' in <cell line: 1>()
    ----> <a href='vscode-notebook-cell:/Users/fordfishman/GitHub/python/python-session1.ipynb#ch0000020?line=0'>1</a> print(z)


    NameError: name 'z' is not defined


In the following example, we specify a value for a variable after we print it. This will not work. Within a cell, the statements are executed from top to bottom. If the Python interpreter finds an error, execution stops.


```python
print(last_name) # last name does not exist yet
# What happens if I try to correct my error in the same cell?
last_name='Montoya'
print(last_name)
```

If we want to increase a value of a variable by a certain, we can use the `+=` operator. Here, we add 2 to the current value of x.


```python
print(x) # before incrementing
x += 2 
print(x) # after incrementing
```

    35
    37


This is equivalent to running `x = x + 2`. We can also do similar operations with subtraction, multiplication, and division.


```python
x = 8
x -= 2 # 8 - 2
print("subtraction:", x)
x *= 4 # 6 * 4
print("multiplication:", x)
x /= 6 # 24 / 6
print("division:", x)

```

    subtraction: 6
    multiplication: 24
    division: 4.0


#### Question 4: `a` has been initialized to be 25. Assign variable `b` to be 5 less than `a` without using `b = 20`. Print the value of b.



```python
a = 25
# write your code here:
```

## Strings

So far, we have only assigned integer values to variables. We can also assign values characters to variables. These are called **strings**. You can specify a string by putting text within either single quotation (`'single'`) or double quotation marks (`"double"`).


```python
my_name = "Inigo Montoya"
print(my_name)
```

    Inigo Montoya


We can print out a string directly in `print()`, as well.


```python
print("My name is")
print(my_name) # will print on a second line
```

    My name is
    Inigo Montoya


We can also print out multiple values in a single `print()` statement.


```python
print("My name is", my_name) # print() adds a space between the values
```

    My name is Inigo Montoya


If we print out a string with an integer variable, it will convert the integer to a string in order to print it.


```python
num_balloons = 25
print("I would like", num_balloons, "balloons.")
```

    I would like 25 balloons.


#### Question 5: What will happen if you run this code?


```python
last_name = Montoya
print(last_name)
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    /Users/fordfishman/GitHub/python/python-session1.ipynb Cell 40' in <cell line: 1>()
    ----> <a href='vscode-notebook-cell:/Users/fordfishman/GitHub/python/python-session1.ipynb#ch0000037?line=0'>1</a> last_name = Montoya
          <a href='vscode-notebook-cell:/Users/fordfishman/GitHub/python/python-session1.ipynb#ch0000037?line=1'>2</a> print(last_name)


    NameError: name 'Montoya' is not defined


## Data Types:
- integers (`int`) represent positive or negative whole numbers like 3 or -512
- floating point numbers (`float`) represent real numbers like 3.12159 or -2.5 
- character strings (`str`) are text
   - written with single or double quotes (matching)
   - quotations aren't printed when the string is displayed


```python
# Find the type with function type()
print(type(52))
print(type("Inigo Montoya"))
print(type(3.14))

# notice we are nesting functions -> type() is inside of print()
```

    <class 'int'>
    <class 'int'>
    <class 'str'>
    <class 'float'>


### Combining and adding data types

The `+` operator concatenates (adds) strings together. However if you try to add an integer and a string, you will receive an error. 


```python
print("several" + " concatenated" + " strings") # need to manually add spaces when concatenating
```

    several concatenated strings



```python
print(1 + "2") # adding string to int doesn't work
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    /Users/fordfishman/GitHub/python/python-session1.ipynb Cell 17' in <cell line: 1>()
    ----> <a href='vscode-notebook-cell:/Users/fordfishman/GitHub/python/python-session1.ipynb#ch0000016?line=0'>1</a> print(1 + " hat")


    TypeError: unsupported operand type(s) for +: 'int' and 'str'


We can convert an `int` to a `string` with the `str()` functi
on to combine them. We must convert numbers to strings or vice versa when operating on them. Consistency is key!


```python
print(1+int('2')) # convert string to int to do addition
print(str(1)+'2') # convert int to string to concatenate
```

    3
    12


However, we can mix integers and floats freely in operations. This will result in the final value being a float.


```python
print('half is', 1/2.0
print('three squared is', 3.0 ** 2)
```

    half is 0.5
    three squared is 9.0


### Length
Strings have length (how many characters long they are), which can find with `len()`. Floats and ints do not have length.


```python
print( len("a long string") ) # spaces count in length
```

    13



```python
print( len(3.1415) ) # will get n error
```

### Division Types with numbers
- `//` operator performs integer floor division (rounds down to nearest integer)
- `/` operator performs floating point division (returns a number with a decimal point)
- `%` modulo operator returns the remainder from integer division


```python
print(5//3)
print(5/3)
print(5%3)
```

    1
    1.6666666666666667
    2


### Question 6.  Choose a type (int, float, str) that each of these descriptions should be:
- Time elapsed from the start of the year until now in days.
- Serial cod of a piece of lab equipment
- A lab specimen's age


## Challenge Project 




```python
first  = 1.0
second = "1"
third  = "1.1"
```

Which of the following will return the floating point number `2.0`?


```python
# first + float(second)          # choice a
# float(second) + float(third)   # choice b
# first + int(third)             # choice c
# first + int(float(third))      # choice d
# int(first) + int(float(third)) # choice e
# 2.0 * second                   # choice f
```




    2.0



Follow along with materials and sessions at <a href="https://deisdata.github.io">https://deisdata.github.io</a>.

**Reference and Resource**

This lesson is adapted from 
<a href='http://swcarpentry.github.io/python-novice-gapminder/design/'>Software Carpentry.</a>
