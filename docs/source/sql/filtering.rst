Filtering
=========

Objectives
----------

-  Write queries that select records to satisfy our conditions.
-  Explain the order in which the clauses in a query are executed.

..  youtube:: gMR7iaJrLYc
   :width: 100%

Key Points
----------

-  Use ``WHERE`` to specify conditions that records must 
   meet in order to be included in a query\’s results.
-  Use ``AND``, ``OR``, and ``NOT`` to combine tests.
-  Filtering is done on whole records, so conditions can 
   use fields that are not actually displayed.
-  Write queries incrementally.
-  Wildcard: A character used in pattern matching. In SQL\’s 
   like operator, the wildcard “%” matches zero or more characters, 
   so that ``%able%`` matches “fixable” and “tablets”.

We want to see when a particular site was visited.
We can select these records from ``Visited`` table using a 
``WHERE`` clause in our query.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Visited WHERE site = 'DR-1';

To explain what SQL is doing above:

1.  Check each row in ``Visited`` to see what satisfies ``WHERE`` then,
2.  It uses the column names following ``SELECT`` to determine which columns to display.

This processing order means we can filter records using ``WHERE`` based on values in 
columns that aren't displayed.

.. tab:: SQL

   .. code:: sql

      SELECT id FROM Visited WHERE site = 'DR-1';

.. figure:: /_static/images/sql/filtering/example_filtering.png
   :alt: example filter 

We can use other boolean operators (``=``, ``>``, ``<``)  to filter our data.

We can combine these conditional tests with ``AND`` or ``OR``.
For example, we can get information on DR-1 site collected before 1930.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Visited WHERE site='DR-1' AND dated < '1930-01-01';

``AND`` means both conditions must be true. 

``OR`` means at least one condition has to be true.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey WHERE person = 'lake' OR person = 'roe';

Another way to write this is to see if a value is in a set.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey WHERE person IN ('lake','roe');

And be careful about parentheses if you are putting together a lot of tests!

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey 
      WHERE quant = 'sal' 
      AND person = 'lake' OR person='roe'

This gives us all the measurements by ``'roe'``.  

What we probably meant is this:

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey WHERE quant = 'sal' AND (person = 'lake'  OR person='roe')

We can filter by partial matches using ``LIKE`` keyword.

The percent (``%``) acts like a wildcard, matching any characters in that place:

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Visited WHERE site LIKE 'DR%';

Finally, we can use ``DISTINCT`` and ``WHERE`` to give a second level of filtering.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT person, quant FROM Survey 
      WHERE person='lake' OR person = 'roe';

But remember, ``DISTINCT`` is applied to the values displayed in the chosen columns, 
not to all the rows being processed.

Remember, when trying to write queries, start simple and 
add more clauses as you go!

Practice: Fix this query
------------------------

Suppose we want to select all sites that lie within 
48 degrees of the equator. Our first query is:

.. tab:: SQL

   .. code:: sql
      
      SELECT * FROM Site WHERE (lat > -48) OR (lat < 48);

Explain why this is wrong, and rewrite the query so that 
it is correct.

.. collapse:: Solution

   .. container::

      Because we used OR, a site on the South Pole for example 
      will still meet the second criteria and thus be included. 
      Instead, we want to restrict this to sites that meet both criteria:

         .. tab:: SQL

            .. code:: sql

               SELECT * FROM Site WHERE (lat > -48) AND (lat < 48);

Practice: Matching patterns
---------------------------

Which of these expressions are true?

1.  ``'a' LIKE 'a'``
2.  ``'a' LIKE '%a'``
3.  ``'beta' LIKE '%a'``
4.  ``'alpha' LIKE 'a%%'``
5.  ``'alpha' LIKE 'a%p%'``

.. collapse:: Solution

   .. container::

      1.  ``'a' LIKE 'a'``:   True because these are the same character.
      2.  ``'a' LIKE '%a'``:  True because the wildcard can match *zero* or more characters.
      3.  ``'beta' LIKE '%a'``:  True because the ``%`` matches ``bet`` and the ``a`` matches the ``a``.
      4.  ``'alpha' LIKE 'a%%'``:  True because the first wildcard matches ``lpha`` and the second wildcard matches zero characters (or vice versa).
      5.  ``'alpha' LIKE 'a%p%'``:  True because the first wildcard matches ``l`` and the second wildcard matches ``ha``.