Booleans and conditionals
=========================

Materials:
----------

-  `Code-along Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/conditionals-codealong.ipynb>`__ 
-  `Filled-in Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/conditionals.ipynb>`__ 

Often in code, we want to take different actions based on the current
state of our program (e.g., do we have more or less than 100 samples in
our data?). We can ask yes or no questions about this state called
**boolean expressions**. These questions are answered as **true** or
**false**. We can design the program to perform an action based on the
response, which is called a **conditional**.

Booleans
--------

``True`` and ``False`` are keywords in Python. They are a unique data
type called **booleans**.

Capitalization is critical. Booleans in Python have their first letter
capitalized and the rest lower-case.

.. tab:: Python

   .. code:: python

      f = False
      print(f)

.. tab:: Output

   .. code:: none

      False

.. tab:: Python
   :new-set:

   .. code:: python

      t = True
      print(t)

.. tab:: Output

   .. code:: none

      True

We can convert other data types to booleans with the function
``bool()``. A number will only convert to ``False`` if it is exactly 0
or 0.0. All other numbers convert to ``True``.

.. tab:: Python

   .. code:: python

      print(bool(0)) # False
      print(bool(1)) # True

.. tab:: Output

   .. code:: none

      False
      True

Similarly, we can convert strings into booleans. Empty strings (``''``
or ``""``) convert to ``False`` and any other string converts to
``True``.

.. tab:: Python

   .. code:: python

      print(bool(''))
      print(bool(' '))

.. tab:: Output

   .. code:: none

      False
      True

Boolean expressions
-------------------

Boolean expressions essentially ask questions that evaluate as ``True``
or ``False``. These can examine whether two values are equal, if one is
larger than another, or similar questions. To ask these questions we
need to use special boolean operators that you’ll see below.

Boolean expressions are best used between the same data types. You can
easily get unexpected results when comparing strings and ints, for
instance.

Equality: ``==``
~~~~~~~~~~~~~~~~

The operator ``==`` is used to check if two items are equal to each other. 
Note the distinction between ``=``, which is used for variable assignment, and 
``==``, which checks for equality.

.. tab:: Python

   .. code:: python

      "bad" == "bad"

.. tab:: Output

   .. code:: none

      True

.. tab:: Python
   :new-set:

   .. code:: python

      2 == 3

.. tab:: Output

   .. code:: none

      False

.. warning:: 
   
   Checking for equality for floats can be tricky given common
   rounding errors. Try to avoid if possible, and test for inequality (see
   below).

Not equals: ``!=``
~~~~~~~~~~~~~~~~~~

Similar, we can use ``!=`` to check if two items are not equal to each other. 
``!=``` will always return the opposite of ``==`` for any given comparison.

.. tab:: Python

   .. code:: python

      "bad" != "BAD" # capitalization matters!

.. tab:: Output

   .. code:: none

      True

.. tab:: Python
   :new-set:

   .. code:: python

      "bad" != "bad"

.. tab:: Output

   .. code:: none

      False

Inequalities
~~~~~~~~~~~~

There are 4 different boolean operators for comparing inequalities: less
than (``<``), less than or equal to (``<=``), greater than (``>``), and
greater than or equal to (``>=``).

.. tab:: Python

   .. code:: python

      1 < 4

.. tab:: Output

   .. code:: none

      True

.. tab:: Python
   :new-set:

   .. code:: python

      5.1 > 5.0

.. tab:: Output

   .. code:: none

      True

.. tab:: Python
   :new-set:

   .. code:: python

      3 >= 3

.. tab:: Output

   .. code:: none

      True

.. tab:: Python
   :new-set:

   .. code:: python

      7 <= 3

.. tab:: Output

   .. code:: none

      False

Inclusivity: ``in``
~~~~~~~~~~~~~~~~~~~

We can use the keyword ``in`` to check if an item is in a data structure
(list, dictionary, set, tuple).

.. tab:: Python

   .. code:: python

      my_list = [ 'apple', 'pear', 'grape' ]
      'apple' in my_list

.. tab:: Output

   .. code:: none

      True

Because sets are made of unique items, they are perfect for using
``in``.

.. tab:: Python

   .. code:: python

      my_set = { 'orange', 'berry', 'lemon' }
      'apple' in my_set

.. tab:: Output

   .. code:: none

      False

You can also use ``in`` to check if a smaller string is a part of a
larger string.

.. tab:: Python

   .. code:: python

      print('i' in 'team')
      print('i' in 'win')

.. tab:: Output

   .. code:: none

      False
      True

.. tab:: Python
   :new-set:

   .. code:: python

      print('good movie' in 'star wars sequel trilogy')

.. tab:: Output

   .. code:: none

      False

``not``
~~~~~~~

Just as adding not in a sentence reverses its meaning (e.g., “The desk
is red.” vs “The desk is not red.”), adding the keyword ``not`` in front
of a boolean expression reverses the value returned -> ``not 0 == 0``
returns ``False``.

.. tab:: Python

   .. code:: python

      not 20 < 40

.. tab:: Output

   .. code:: none

      False

.. tab:: Python
   :new-set:

   .. code:: python

      not 'apple' in 'grape'

.. tab:: Output

   .. code:: none

      True

.. tab:: Python
   :new-set:

   .. code:: python

      not True

.. tab:: Output

   .. code:: none

      False

Order of Operations
~~~~~~~~~~~~~~~~~~~

We can chain together boolean comparisons with ``and`` and ``or``.

Putting ``and`` between two booleans will make the whole statement true
only both statements are true.

.. tab:: Python

   .. code:: python

      3 < 4 and "banana" == "banana"

.. tab:: Output

   .. code:: none

      True

On the other hand, ``or`` only needs one of the statements to be true.

.. tab:: Python

   .. code:: python

      2 == 3 or 2 == 2

.. tab:: Output

   .. code:: none

      True

Order of operations work with boolean expressions similarly to math.
Comparisons run left to right, unless you put parentheses around the
comparisons.

.. tab:: Python

   .. code:: python

      print(not 2 == 3 or 2 == 2)
      print(not (2 == 3 or 2 == 2)) # parentheses matter!

.. tab:: Output

   .. code:: none

      True
      False

Question 1: Boolean expressions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Does the following code evalutate as ``True`` or ``False``?

.. tab:: Python

   .. code:: python

      n1 = 45
      n2 = -23
      n3 = 0
      s1 = 'hello'
      s2 = 'goodbye'

      not (n2 < n3 and s1 == s2 or n1 >= n3)

.. collapse:: Solution

   .. container::

      -  ``n2 < n3`` -> ``True``
      -  ``s1 == s2`` -> ``False``
      -  ``n1 >= n3`` -> ``True``
      -  ``n2 < n3 and s1 == s2`` -> ``False``, because the first part is
         not ``True``
      -  That leaves us with ``n2 < n3 and s1 == s2 or n1 >= n3``. Because
         ``n2 < n3 and s1 == s2`` is ``False`` and ``n1 >= n3`` is
         ``True``, this whole expression is ``True``, as only of the two
         needs to be ``True``
      -  The ``not`` around the parentheses causes the final value to be
         ``False``

Question 2: Boolean types
~~~~~~~~~~~~~~~~~~~~~~~~~

What happens when you compare different data types with ``==``? What
about ``>``, ``<``, ``<=``, or ``>=``?

Conditionals
------------

``if`` statements
~~~~~~~~~~~~~~~~~

The true power of boolean expressions is in making decisions based on
whether they are true or false. We do this with ``if`` statements. The
general syntax follows this format:

.. tab:: Python

   .. code:: python

      if 'a' != 'b':
         
         print('hello!')

.. tab:: Output

   .. code:: none

      hello!

To break this down: 

- ``if`` keyword is first word in line
- Boolean expression (``'a' != 'b'``) followed by a colon 
- Code below that is tabbed over 
- If the expression is true, the code that is below and
  tabbed is run 
- If the expression is false, nothing happens

.. code:: python

   if 1 == 2:
       print('hello')

Here, nothing was printed, as 2 does not equal 1.

We can also have more complicated boolean expressions, as well.

.. tab:: Python

   .. code:: python

      x = 0
      a = 'a'
      letters = ['a', 'b', 'c', 'd']

      if x > -1 and a in letters:
         
         print('My number:',x)
         print('My letter:',a)

.. tab:: Output

   .. code:: none

      My number: 0
      My letter: a

``if-else`` statement
~~~~~~~~~~~~~~~~~~~~~

Often in coding, we want one thing to happen if an expression is true,
and another to happen if it is false. To accomplish this, we can add an
``else`` statement below the ``if`` statement. This will always be
evaluated if the expression after ``if`` is ``False``, otherwise it will
not run: the ``if`` and ``else`` are mutually exclusive.

.. tab:: Python

   .. code:: python

      x = 23

      if x < 20: # if x less than 20; False
         
         print('Less than 20')

      else: # x greater or equal to 20 
         
         print('Greater than 20')

.. tab:: Output

   .. code:: none

      Greater than 20

``elif``
~~~~~~~~

What if you want to differentiate between more than 2 conditions? We can
use the ``elif`` keyword, which stands for ``else if``. This goes
between the ``if`` and the ``else`` statements, and must include a new
boolean expression.

Again, these options are all mutually exclusive. If the ``elif`` code is
run, that means the ``if`` and ``else`` code do not run.

.. tab:: Python

   .. code:: python

      y = 101

      if y < 100: # y less than 100
         
         print('y is less than 100')

      elif y < 200: # y is 100-200 (excluding 200)
         
         print('y is between 100 and 200')

      else: # y is 200 or larger
         
         print('y is a big number')

.. tab:: Output

   .. code:: none

      y is between 100 and 200

If we use ``elif``, an ``else`` statement is not required. This will may
result in neither the code associated with ``if`` nor ``elif`` running,
however.

.. tab:: Python

   .. code:: python

      y = 400

      if y < 100:
         
         print('y is less than 100')

      elif y < 200:
         
         print('y is between 100 and 200')

      # nothing prints here

Regardless of if there is an ``else`` statement or not, we can also
include as many ``elif`` conditions as we want.

.. tab:: Python

   .. code:: python

      favorite_movie = 'Indiana Jones'

      if favorite_movie == 'Batman':
         print("I'm Batman.")

      elif favorite_movie == 'Lord of the Rings':
         print("And my axe!!")

      elif favorite_movie == 'Indiana Jones':
         print('That belongs in a museum!!')

      elif favorite_movie == 'The Matrix':
         print('whoa')

      else:
         print('No quotes available :(')

.. tab:: Output

   .. code:: none

      That belongs in a museum!!

Using data types in conditionals
--------------------------------

We can also use data types as conditions in if statements.

.. tab:: Python

   .. code:: python

      should_be_num = 'banana'

      if type(should_be_num)!=int or type(should_be_num)!=float:
         print('need input to be a number')

      else:
         print(10**should_be_num)

.. tab:: Output

   .. code:: none

      need input to be a number

Question: Conditionals
~~~~~~~~~~~~~~~~~~~~~~

Write code that will prints the square root of ``x`` if x is larger than
20 and ``0`` if x is less than ``0``.

*Hint 1*: Taking the square root of a number is the same is raising it
to the power of 0.5.

**Bonus**: Print an error message if x is a string or a boolean.

.. tab:: Python

   .. code:: python

      ### Your code here:

.. collapse:: Solution

   .. container::

      .. tab:: Python

         .. code:: python

            x = 22

            if type(x) == str:
               print('x needs to be a string.')

            elif x >20:
               print(x**1/2)

            elif x < 0:
               print(0)

Nested conditionals
-------------------

We can also put if statements inside of other if statements. Many times,
these are unnecesary and can be replaced by ``elif`` statements, but not
always.

Make sure to add more indentation for the second layer of if statements.

.. tab:: Python

   .. code:: python

      n = 22222 # some integer

      if n < 0: # if n is negative
         
         if n % 2 == 0:
            print("n is a negative even integer")
         
         elif n % 2 == 1:
            print("n is a negative odd integer")
         
         else:
            print("n is a negative number")

      elif n > 0: # 
         
         if n % 2 == 0:
            print("n is a positive even integer")
         
         elif n % 2 == 1:
            print("n is a positive odd integer")
         
         else:
            print("n is a positive number")

      else:
         
         print("n is zero")

Question
~~~~~~~~

Create a list called ``my_list`` with four items in it. Create a
variable called ``x`` with some value.

Create a series of conditionals that check to see if the value in ``x``
is in ``my_list``.

If this is the case, print out different text depending on what index
the item is at in the list.

0. “From zero to hero”
1. “One is the loneliest number.”
2. “Two’s company.”
3. “Three’s a crowd.”

Resources
---------

-  `Software
   Carpentry <https://swcarpentry.github.io/python-novice-inflammation/07-cond/index.html>`__

