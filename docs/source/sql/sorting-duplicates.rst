Sorting out and removing duplicates
===================================

Objectives
----------

-  Write queries that display results in a particular order.
-  Write queries that eliminate duplicate values from data.

..  youtube:: 5Qfzm4vr5qY
   :width: 100%

Key Points
----------

-  The records in a database table are not intrinsically ordered: 
   if we want to display them in some order, we must specify that 
   explicitly with ``ORDER BY``.
-  The values in a database are not guaranteed to be unique: if we 
   want to eliminate duplicates, we must specify that explicitly as 
   well using ``DISTINCT``.

Let's start by selecting the quantities that have been measured 
from the ``Survey`` table.

.. tab:: SQL

   .. code:: sql

      SELECT quant FROM Survey;

This result makes it difficult to see all the different types of 
quant in the table.

Let's eliminate redundant outputs using ``DISTINCT``.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT quant FROM Survey;

If we select more than one column, distinct sets of values are returned.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT taken, quant FROM Survey;

Now, let;s identify scientists using ``Person`` table. We'll add ``ORDER BY`` 
to sort our data alphabetically.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Person ORDER BY id;

We can sort in ``DESC`` for descending or ``ASC`` for ascending order.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Person ORDER BY id DESC;

If we want to look at which scientists measured quantities during each visit,
let's look at the Survey table, and sort on several fields at once.

.. tab:: SQL

   .. code:: sql

      SELECT taken, person, quant FROM Survey 
      ORDER BY taken ASC, person DESC;

It seems some scientists specialize in certain types of measurements. 
Let's remove duplicates to check.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT quant, person FROM survey ORDER BY quant ASC;


Practice: Finding distinct dates
--------------------------------

Write a query that selects distinct dates from the ``Visited`` table.

.. collapse:: Solution

   .. container::

      .. tab:: SQL

         .. code:: sql

            SELECT DISTINCT dated FROM Visited;

