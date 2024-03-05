Filtering
=========

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