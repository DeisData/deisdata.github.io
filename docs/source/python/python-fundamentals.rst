Python fundamentals
===================

Python is a very powerful tool for automating tasks that would otherwise
be time-consuming or impossible to do by hand or other conventional
tools. Here, we’ll go over basic ways to use Python to introduce you to
a slice of its potential.

Materials:
----------

-  `Code-along Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/python-fundamentals-codealong.ipynb>`__
-  `Filled-in Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/python-fundamentals.ipynb>`__

Question 1: Do it yourself!
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Write a message and print it out!

.. tab:: Python

   .. code:: python

      #  INSTRUCTIONS:   Write a message in the quotes.
      #  type Shift+Enter to run the cell.
      message = ''

      print(message)

Python as a calculator
----------------------

An incredibly simple yet pivotal role of Python is to perform math
calculations (addition, subtraction, multiplication, etc.). We show how
to basic action below.

You’ll see the symbol ``#`` used often. These are comments, and they are
used to write descriptions. Any characters following ``#`` are not run
or executed.

.. tab:: Python

   .. code:: python

      3 + 4 * 5  # addition and multiplication 


.. tab:: Output
   
   .. code:: none

      23

After we run a cell, an output is displayed below.

You may have noticed from that example that order of operations mattered
for that calculation. You can parentheses too if you want to group
calculations.

.. tab:: Python


   .. code:: python

      12 / (6 - 4) # division and substraction

.. tab:: Output

   .. code:: none

      6.0

Exponentiation (e.g. :math:`2^3`) looks a little bit odd in Python as it
uses ``**`` instead of a more traditional ``^``.

.. tab:: Python

   .. code:: python

      2 ** 3 # exponentiation

.. tab:: Output

   .. code:: none

      8

Question 2: Writing math
~~~~~~~~~~~~~~~~~~~~~~~~

Calculate the following value in Python:

.. math::  \frac{25}{(35 - 3)^3} 


.. collapse:: Solution

   .. container::

      Remember to include parentheses when needed, but Python also follows
      standard order of operations.

      .. tab:: Python

         .. code:: python

            25/(35-3)**3



Assigning Variables
-------------------

A foundational tool in Python is assigning values to variables. We do
this with the ``=`` operator.

.. tab:: Python

   .. code:: python

      x = 50 # x is 50

This sets the variable ``x`` to be 50, an **integer**, or ``int``. This
value of x is now stored in our notebook, and we can access this value
in other cells until the notebook is reset. For instance, subtracting 20
from ``x`` prints out a value of 30.

.. tab:: Python

   .. code:: python

      # What if I use x again in a different cell?
      x - 20

.. tab:: Output

   .. code:: none

      30

.. note::

   Variables persist between cells once they have been run (executed).

If we ever want to check the value of any variable, we can use the
built-in ``print()`` command to display the value. 

.. tab:: Python

   .. code:: python

      y = 35
      print(y)

.. tab:: Output

   .. code:: none

      35

We can also assign the value of one variable to another variable. If we
execute ``x = y``, x takes the current value of ``y`` and assigns that
to ``x``.

.. warning::

   ``y`` will be unaffected by this assignment. ``x = y`` should be
   interpretted as “let x take the current value of y”.

.. tab:: Python

   .. code:: python

      x = y
      print(x)
      print(y)

.. tab:: Output

   .. code:: none

      35
      35

If we change ``y`` to be a different value, ``x`` will be unaffected.

.. tab:: Python

   .. code:: python

      y = 3.8
      print(x) # will not always be the same value as y
      print(y)

.. tab:: Output

   .. code:: none

      35
      3.8

.. admonition:: Variables only change value when something is assigned to them. 
   :class: warning

   They are **not** like spreadsheets where a cell can depend on another and
   update automatically.

Question 3: Swapping values
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Given the code below, what is the value of the variable ``swap`` by the
end of the block?

.. tab:: Python

   .. code:: python

      x = 1.0
      y = 3.0
      swap = x
      x = y
      y = swap 


.. collapse:: Solution

   .. container::

      The only statements here that effect the value of ``swap`` are
      ``x = 1.0`` and ``swap = x``.

      .. tab:: Python

         .. code:: none

            1.0


.. admonition:: What’s in a name? Variable name conventions 
   
   - Use only letters, digits, and underscores (\_) 
   - can use camelcase (capitalizeEveryWord) 
   - Start with a letter (typically lower case) 
   - Variable names are case sensitive 
   - Use meaningful names!

Variables must be created before they are used. Otherwise, Python 
will throw an error.

.. tab:: Python

   .. code:: python

      print(z) # we haven't initialized z yet!

.. tab:: Output

   .. code:: none

      NameError: name 'z' is not defined

In the following example, we specify a value for a variable after we
print it. This will not work. Within a cell, the statements are executed
from top to bottom. If the Python interpreter finds an error, execution
stops.

.. tab:: Python

   .. code:: python

      print(last_name) # last name does not exist yet
      # What happens if I try to correct my error in the same cell?
      last_name='Montoya'
      print(last_name)

If we want to increase a value of a variable by a certain, we can use
the ``+=`` operator. Here, we add 2 to the current value of x.

.. tab:: Python

   .. code:: python

      print(x) # before incrementing
      x += 2 
      print(x) # after incrementing

.. tab:: Output

   .. code:: none

      35
      37

This is equivalent to running ``x = x + 2``. We can also do similar
operations with subtraction, multiplication, and division.

.. tab:: Python

   .. code:: python

      x = 8
      x -= 2 # 8 - 2
      print("subtraction:", x)
      x *= 4 # 6 * 4
      print("multiplication:", x)
      x /= 6 # 24 / 6
      print("division:", x)

.. tab:: Output

   .. code:: none

      subtraction: 6
      multiplication: 24
      division: 4.0

Question 4: Using variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~

``a`` has been initialized to be 25. Assign variable ``b`` to be 5 less
than ``a`` without using ``b = 20``. Print the value of b.

.. tab:: Python

   .. code:: python

      a = 25
      # write your code here:

.. collapse:: Solution

   .. container::

      We can use variable ``a`` to assign value of ``a-5`` to ``b``.

      .. tab:: Python

         .. code:: python

            a = 25
            b = a - 5
            print(b)


Strings
-------

So far, we have only assigned integer values to variables. We can also
assign values characters to variables. These are called **strings**. You
can specify a string by putting text within either single quotation
(``'single'``) or double quotation marks (``"double"``).

.. tab:: Python

   .. code:: python

      my_name = "Inigo Montoya"
      print(my_name)

.. tab:: Output

   .. code:: none

      Inigo Montoya

We can print out a string directly in ``print()``, as well.

.. tab:: Python

   .. code:: python

      print("My name is")
      print(my_name) # will print on a second line

.. tab:: Output

   .. code:: none

      My name is
      Inigo Montoya

We can also print out multiple values in a single ``print()`` statement.

.. tab:: Python

   .. code:: python

      print("My name is", my_name) # print() adds a space between the values

.. tab:: Output

   .. code:: none

      My name is Inigo Montoya

If we print out a string with an integer variable, it will convert the
integer to a string in order to print it.

.. tab:: Python

   .. code:: python

      num_balloons = 25
      print("I would like", num_balloons, "balloons.")

.. tab:: Output

   .. code:: none

      I would like 25 balloons.

Question 5: String syntax
~~~~~~~~~~~~~~~~~~~~~~~~~

What will happen if you run the following code?

.. tab:: Python

   .. code:: python

      last_name = Montoya
      print(last_name)

.. collapse:: Solution

   .. container::

      We receive a ``NameError`` because we have not defined the varable
      ``Montoya`` previously. You may also see additional text describing
      more details about the error, such as where it occurred.

      .. tab:: Output

         .. code:: none

               NameError: name 'Montoya' is not defined


Data Types
----------

-  integers (``int``) represent positive or negative whole numbers like
   3 or -512
-  floating point numbers (``float``) represent real numbers like
   3.14159 or -2.5
-  character strings (``str``) are text

   -  written with single or double quotes (matching)
   -  quotations aren’t printed when the string is displayed

.. tab:: Python

   .. code:: python

      # Find the type with function type()
      print(type(52))
      print(type("Inigo Montoya"))
      print(type(3.14))

      # notice we are nesting functions -> type() is inside of print()

.. tab:: Output

   .. code:: none

      <class 'int'>
      <class 'int'>
      <class 'str'>
      <class 'float'>

Combining and adding data types
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``+`` operator concatenates (adds) strings together. However if you
try to add an integer and a string, you will receive an error.

.. tab:: Python

   .. code:: python

      print("several" + " concatenated" + " strings") # need to manually add spaces when concatenating

.. tab:: Output

   .. code:: none

      several concatenated strings

.. tab:: Python
   :new-set:

   .. code:: python

      print(1 + "2") # adding string to int doesn't work

.. tab:: Output

   .. code:: none

      TypeError: unsupported operand type(s) for +: 'int' and 'str'

We can convert an ``int`` to a ``string`` with the ``str()`` function to
combine them. We must convert numbers to strings or vice versa when
operating on them. Consistency is key!

.. tab:: Python

   .. code:: python

      print(1+int('2')) # convert string to int to do addition
      print(str(1)+'2') # convert int to string to concatenate

.. tab:: Output

   .. code:: none

      3
      12

However, we can mix integers and floats freely in operations. This will
result in the final value being a float.

.. tab:: Python

   .. code:: python

      print('half is', 1/2.0
      print('three squared is', 3.0 ** 2)

.. tab:: Output

   .. code:: none

      half is 0.5
      three squared is 9.0

Length
~~~~~~

Strings have length (how many characters long they are), which can find
with ``len()``. Floats and ints do not have length.

.. tab:: Python

   .. code:: python

      print( len("a long string") ) # spaces count in length

.. tab:: Output

   .. code:: none

      13

.. tab:: Python
   :new-set:

   .. code:: python

      print( len(3.1415) ) # will get an error

.. admonition:: Division Types with numbers

   *  ``//`` operator performs integer floor division (rounds down to
      nearest integer)
   *  ``/`` operator performs floating point division (returns a number
      with a decimal point)
   *  ``%`` modulo operator returns the remainder from integer division

   .. tab:: Python

      .. code:: python

         print(5//3)
         print(5/3)
         print(5%3)
   
   .. tab:: Output

      .. code:: none

         1
         1.6666666666666667
         2

Question 6: Picking between data types
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Choose the type (``int``, ``float``, ``str``) that each of these
descriptions should be:

1. Time elapsed from the start of the year until
   now in days. 
2. Serial code of a piece of lab equipment 
3. A lab specimen’s age

.. collapse:: Solution

   .. container::

      1. ``int`` if only considering full days, ``float`` otherwise.
      2. ``str``: Identifiers can often have letters or leading zeros.
      3. Depends on the specimen. If using countable units, ``int``,
         otherwise ``float``.


Question 7: Quadratic formula
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A quadratic equation has the following form:

.. math:: 0 = ax^2 + bx + c

We can use the quadratic forumula (below) to find the roots of a
quadratic equation.

.. math:: x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}

Create variables :math:`a`, :math:`b`, and :math:`c` with the value of
:math:`4`, :math:`-25`, and :math:`20`, respectively.

Calculate the values of :math:`x` for a quadratic equation with
:math:`a=4`, :math:`b=-25`, and :math:`c = 20`. Remember to calculate
the values for both plus and minus (:math:`\pm`).

.. tab:: Python

   .. code:: python

      # your code below:

.. collapse:: Solution

   .. container::

      .. tab:: Python

         .. code:: python

            # initialize my variables
            a = 4
            b = -25
            c = 20

            # positive side
            x_p = (-b + (b**2-4*a*c)**0.5)/(2*a)

            # negative
            x_m = (-b - (b**2-4*a*c)**0.5)/(2*a)

            print(x_p)
            print(x_m)

Question 8: Converting data types
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. tab:: Python

   .. code:: python

      first  = 1.0
      second = "1"
      third  = "1.1"

Which of the following will return the floating point number ``2.0``?

.. tab:: Python

   .. code:: python

      # first + float(second)          # choice a
      # float(second) + float(third)   # choice b
      # first + int(third)             # choice c
      # first + int(float(third))      # choice d
      # int(first) + int(float(third)) # choice e
      # 2.0 * second                   # choice f

.. tab:: Output

   .. code:: none

      2.0

**Reference and Resource**

This lesson is adapted from Software Carpentry.

