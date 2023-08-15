Loops
=====

Materials:
----------

-  `Code-along Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/loops-codealong.ipynb>`__ 
-  `Filled-in Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/loops.ipynb>`__ 

Often, programs need to do the same task several times repeatedly. You
may need to run a task just a handful of times, or maybe thousands of
times.

For example, say you want to print out all of the numbers 0 - 5. You
could write ``print()`` 5 times:

.. code:: python

   print(0)
   print(1)
   print(2)
   print(3)
   print(4)
   print(5)

However, if you want to expand this even a few numbers further, it gets
very tedious very quickly.

To save us from having to have the same code duplicated over and over,
we have **loops**. They are incredibly powerful tools for examining
large amounts of information. Here we will be looking at **``while``
loops** and **``for`` loops**.

while loops
-----------

``while`` loops are somewhat similar to ``if`` statements as both depend
on conditions to do actions. You can think of a ``while`` loop as an
``if`` statement that keeps on repeating as long as the condition stays
true.

Here is an example of a basic ``while`` loop:

.. code:: python

   i = 0 # initialize index

   while i < 5: # runs 5 times
       
       print(i)
       i += 1 # increment i

.. code:: none

   0
   1
   2
   3
   4

Let’s break down the code. - ``i = 0``: We initialize ``i`` as 0 before
the ``while`` loop - ``while i < 5:``: This begins the ``while`` loop
and specifies the condition being tested. Essentially it means as long
as ``i`` is less than 5, keep doing the code below. - ``print(i)``:
Print current value of ``i`` - ``i += 1``: We increase the value of
``i`` at the end of each loop - Once ``i += 1`` runs, the ``while`` loop
checks the current value of ``i`` - If ``i`` is less than 5, the code in
the ``while`` loop runs again. Otherwise, the loop is over.

We have to be careful not to create an infinite loop. For instance, if
you removed the line with ``i += 1``, ``i`` would never reach 5, and the
loop would keep printing ``0``. If you do this, you can always halt
execution of the cell.

Below is more complicated ``while`` loop. We have a list of names, and
an index ``i`` keeping track of where we are in the list. We want to
print out names until we reach ``'Jimmy'``, so we keep a boolean
variable called ``notJimmy`` set to ``True`` initially. We go through
the list one name at a time and check to see if the name is ``'Jimmy'``.
If the name is ``'Jimmy'``, we change ``notJimmy`` to be ``False``;
otherwise, we don’t do anything. Regardless, we continue to the end of
the loop, printing the name and the value of ``notJimmy`` and
incrementing ``i`` by one. If ``not Jimmy`` is true, the loop keeps
going; otherwise, it is finished.

.. code:: python

   friends = ['Jim', 'Bob', 'Jimbob', 'Jimmy', 'James'] # list of friend names

   notJimmy = True # initialize condition as True
   i = 0 # initialize index i as 0

   while notJimmy: # while notJimmy is True
       
       friend = friends[i] # select one of the friend names
       
       if friend == 'Jimmy': # if the friend name is Jimmy
           notJimmy = False # change notJimmy to be false
           
       print(friend, ',', notJimmy) # print each name and also the val of not Jimmy
       i += 1 # increment i

.. code:: none

   Jim , True
   Bob , True
   Jimbob , True
   Jimmy , False

Question: while loops:
~~~~~~~~~~~~~~~~~~~~~~

Create a variable ``x`` with the value of 8. Divide ``x`` by 2 and
re-assign this value to ``x``. Continue to do this until ``x`` is less
than 0.00001. Print out how many divisions this takes.

.. code:: python

   ### your code here:

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: python

      x = 8
      i += 1

      while x >= 0.00001:

          x /= 2
          i += 1

      print(i)

   .. code:: none

      20

.. raw:: html

   </details>

for loops
---------

``for`` loops are one of the most powerful tools that base Python has to
offer. ``for`` loops take **iterables** (lists, dictionaries, sets,
tuples, even strings) and perform the same actions to each item
contained within them.

In the code below, each number in a list gets added to 20, and then the
sum is printed. We call this **iterating** over the items in the list.
Note the keywords ``for`` and ``in``.

.. code:: python

   num_list = [0, 1, 2, 3, 4, 5] # list of numbers

   for n in num_list: # one at a time, make each of those numbers n
       
       print(n + 20) # print that number + 20

.. code:: none

   20
   21
   22
   23
   24
   25

Let’s break down this code: - ``num_list = [0, 1, 2, 3, 4, 5]``: Makes a
list of integers 0-5. - ``for n in num_list:``: Take the first item in
num_list and assign its value to ``n``. - ``print(n + 20)``: Add n and
20 and print the sum. - We then go back to the start of the loop, take
the next item, assign it to ``n``, and start all over again.

For ordered iterables, like lists, tuples, and strings, ``for`` loops
iterate over these groups in order.

Just like normal variable names, the variable name we use after ``for``
is arbitrary, though short and descriptive is best.

.. code:: python

   for triangle in num_list: # 0 is not a triangle
       
       print(triangle)

.. code:: none

   0
   1
   2
   3
   4
   5

If you want to quickly create a range of numbers to iterate over, the
``range()`` function generates numbers from 0 to the int you provide
(but not including it).

.. code:: python

   for i in range(4): # includes 0, but not 4
       
       print(i)

.. code:: none

   0
   1
   2
   3

We can start to use for loops to do tasks with strings, as well.

.. code:: python

   my_breakfast = ['eggs', 'cereal', 'oatmeal', 'toast'] 

   for food in my_breakfast: # for each string in the list of string
       
       sentence = 'I like to eat ' + food + '.'
       print(sentence)

.. code:: none

   I like to eat eggs.
   I like to eat cereal.
   I like to eat oatmeal.
   I like to eat toast.

We can use the ``enumerate()`` function to iterate over items in a list
and get their indexes at the same time.

When use use ``enumerate()``, we need to provide two variables names
separated by a comma. The first represents the current index, and the
second is the item at that index.

.. code:: python

   for i, food in enumerate(my_breakfast):
       print('index:', i)
       print('food:', food)

.. code:: none

   index: 0
   food: eggs
   index: 1
   food: cereal
   index: 2
   food: oatmeal
   index: 3
   food: toast

This is a very useful approach for iterating over multiple lists of the
same length at once.

.. code:: python

   my_lunch = ['sandwich', 'chips', 'fruit', 'juice']
   my_dinner = ['pasta', 'salad', 'bread', 'dessert']

   for i, breakfast in enumerate(my_breakfast):
       lunch = my_lunch[i]
       dinner = my_dinner[i]
       
       print("my food today:", breakfast, lunch, dinner, i)

.. code:: none

   my food today: eggs sandwich pasta 0
   my food today: cereal chips salad 1
   my food today: oatmeal fruit bread 2
   my food today: toast juice dessert 3

Question
~~~~~~~~

Below are four lists: ``x1``, ``x2``, ``y1``, and ``y2``.

Using a single for loop, subtract the values of x1 and x2 at each index,
and take the square of the difference. Do the same for ``y1`` and
``y2``. Add the two squares together. Store all 4 squares in a list in
the same order.

.. code:: python

   x1 = [6.3, 7.1, 3.7, 3.2, 0.1]
   x2 = [-5.7, -17.5, -3.2, -19.3,-18.2]
   y1 = [34.6, 28.4, 60.0, 68.1, 83.9]
   y2 = [188.7,  75.9, 100.1, 61.1, 180.2]

   # your code here: 

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: python

      vals = list()

      for i, x_1 in x1:
          
          x_2 = x2[i]
          y_1 = y1[i]
          y_2 = y2[i]
          
          val = (x_1 - x_2)**2 + (y_1 - y_2)**2
          vals.append(val)

.. raw:: html

   </details>

Adding in conditionals
----------------------

``for`` loops can become quite powerful when you include conditionals
that change behavior based on the item in the current iteration.

.. code:: python

   for food in my_breakfast:
       
       if food == 'eggs': # if food is currently 'eggs'
           
           sentence = 'I do not like to eat ' + food + '.'
       
       else: # for all other values of food
       
           sentence = 'I like to eat ' + food + '.'
           
       print(sentence)

.. code:: none

   I do not like to eat eggs.
   I like to eat cereal.
   I like to eat oatmeal.
   I like to eat toast.

We can even use full ``if``-``elif``-``else`` statements.

.. code:: python

   for food in my_breakfast:
       
       if len(food) < 5: # if the length of string is less than 5
           
           sentence = 'I do not like to eat ' + food + '.'
       
       elif len(food) < 6: # if the length is 5
       
           sentence = 'I sometimes like to eat ' + food + '.'
       
       else: # if the length is greater than 5
           
           sentence = 'I like to eat ' + food + '.'
           
       print(sentence)

.. code:: none

   I do not like to eat eggs.
   I like to eat cereal.
   I like to eat oatmeal.
   I sometimes like to eat toast.

Question: for loops
~~~~~~~~~~~~~~~~~~~

Iterate over all integers from 0 to 1000 and print all multiples of 41
(numbers that can be divided by 41 with no remainder). How many
multiples are there?

.. code:: python

   ### put your code below:

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: python


      i = 0 # counts the number of multiples

      for n in range(1000): 

          if n % 41 == 0: #if the remainder is 0

              print(n)
              i += 1

      print('number of multiples:', i)

   .. code:: none

      0
      41
      82
      123
      164
      205
      246
      287
      328
      369
      410
      451
      492
      533
      574
      615
      656
      697
      738
      779
      820
      861
      902
      943
      984
      number of multiples: 25

.. raw:: html

   </details>

Bonus: Nested for loops
~~~~~~~~~~~~~~~~~~~~~~~

Just like you can use ``if`` statements in a ``for`` loop, you can also
put ``for`` loops inside of other ``for`` loops. This is great if you
want to use all combinations of two lists, for instance.

.. code:: python

   hats = ['bowler', 'fedora', 'beret']
   shirts = ['plaid', 'striped', 'polka dot']

   print('Outfit combinations:')

   for shirt in shirts:
       
       for hat in hats:
           
           print(shirt, "shirt with a", hat)

.. code:: none

   Outfit combinations:
   plaid shirt with a bowler
   plaid shirt with a fedora
   plaid shirt with a beret
   striped shirt with a bowler
   striped shirt with a fedora
   striped shirt with a beret
   polka dot shirt with a bowler
   polka dot shirt with a fedora
   polka dot shirt with a beret

Be careful, however. If you use very long collections of items and nest
more than 2 loops, the runtime can become very slow.

Bonus: Comprehensions
~~~~~~~~~~~~~~~~~~~~~

If the outcome of your ``for`` loop is to produce a list, dictionary,
set, or tuple, and you are using minimal code in your loop, then
**comprehensions** may be perfect for you.

.. code:: python

   [ food + ' time' for food in my_breakfast ] # creates a list

.. code:: none

   ['eggs time', 'cereal time', 'oatmeal time', 'toast time']

.. code:: python

   { food:len(food) for food in my_breakfast } # creates a dictionary

.. code:: none

   {'eggs': 4, 'cereal': 6, 'oatmeal': 7, 'toast': 5}

Resources
---------

-  `Software
   Carpentry <https://swcarpentry.github.io/python-novice-inflammation/05-loop/index.html>`__
-  `W3 School - List
   Comprehensions <https://www.w3schools.com/python/python_lists_comprehension.asp>`__

