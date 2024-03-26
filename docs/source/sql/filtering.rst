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

Code
----

We want to see when a particular site was visited.
We can select these records from ``Visited`` table using a 
``WHERE`` clause in our query.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Visited WHERE site = 'DR-1';

.. tab:: Output

   .. code:: none

      id   site  dated     
      ---  ----  ----------
      619  DR-1  1927-02-08
      622  DR-1  1927-02-10
      844  DR-1  1932-03-22      

To explain what SQL is doing above:

1.  Check each row in ``Visited`` to see what satisfies ``WHERE`` then,
2.  It uses the column names following ``SELECT`` to determine which columns to display.

This processing order means we can filter records using ``WHERE`` based on values in 
columns that aren't displayed.

.. tab:: SQL

   .. code:: sql

      SELECT id FROM Visited WHERE site = 'DR-1';

.. tab:: Output

   .. code:: none

      id 
      ---
      619
      622
      844

.. figure:: /_static/images/sql/filtering/example_filtering.png
   :alt: example filter 

We can use other boolean operators (``=``, ``>``, ``<``)  to filter our data.

We can combine these conditional tests with ``AND`` or ``OR``.
For example, we can get information on DR-1 site collected before 1930.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Visited WHERE site='DR-1' AND dated < '1930-01-01';

.. tab:: Output

   .. code:: none

      id   site  dated     
      ---  ----  ----------
      619  DR-1  1927-02-08
      622  DR-1  1927-02-10

``AND`` means both conditions must be true. 

``OR`` means at least one condition has to be true.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey WHERE person = 'lake' OR person = 'roe';

.. tab:: Output

   .. code:: none

      taken  person  quant  reading
      -----  ------  -----  -------
      734    lake    sal    0.05   
      751    lake    sal    0.1    
      752    lake    rad    2.19   
      752    lake    sal    0.09   
      752    lake    temp   -16.0  
      752    roe     sal    41.6   
      837    lake    rad    1.46   
      837    lake    sal    0.21   
      837    roe     sal    22.5   
      844    roe     rad    11.25 

Another way to write this is to see if a value is in a set.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey WHERE person IN ('lake','roe');


.. tab:: Output

   .. code:: none

      taken  person  quant  reading
      -----  ------  -----  -------
      734    lake    sal    0.05   
      751    lake    sal    0.1    
      752    lake    rad    2.19   
      752    lake    sal    0.09   
      752    lake    temp   -16.0  
      752    roe     sal    41.6   
      837    lake    rad    1.46   
      837    lake    sal    0.21   
      837    roe     sal    22.5   
      844    roe     rad    11.25 

And be careful about parentheses if you are putting together a lot of tests!

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey 
      WHERE quant = 'sal' 
      AND person = 'lake' OR person='roe';

.. tab:: Output

   .. code:: none

      taken  person  quant  reading
      -----  ------  -----  -------
      734    lake    sal    0.05   
      751    lake    sal    0.1    
      752    lake    sal    0.09   
      752    roe     sal    41.6   
      837    lake    sal    0.21   
      837    roe     sal    22.5   
      844    roe     rad    11.25  


This gives us all the measurements by ``'roe'``.  

What we probably meant is this:

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Survey WHERE quant = 'sal' AND (person = 'lake'  OR person='roe');

.. tab:: Output

   .. code:: none

      taken  person  quant  reading
      -----  ------  -----  -------
      734    lake    sal    0.05   
      751    lake    sal    0.1    
      752    lake    sal    0.09   
      752    roe     sal    41.6   
      837    lake    sal    0.21   
      837    roe     sal    22.5   

We can filter by partial matches using ``LIKE`` keyword.

The percent (``%``) acts like a wildcard, matching any characters in that place:

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Visited WHERE site LIKE 'DR%';

.. tab:: Output

   .. code:: none

      id   site  dated     
      ---  ----  ----------
      619  DR-1  1927-02-08
      622  DR-1  1927-02-10
      734  DR-3  1930-01-07
      735  DR-3  1930-01-12
      751  DR-3  1930-02-26
      752  DR-3            
      844  DR-1  1932-03-22

Finally, we can use ``DISTINCT`` and ``WHERE`` to give a second level of filtering.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT person, quant FROM Survey 
      WHERE person='lake' OR person = 'roe';

.. tab:: Output

   .. code:: none

      person  quant
      ------  -----
      lake    sal  
      lake    rad  
      lake    temp 
      roe     sal  
      roe     rad  

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

      Because we used ``OR``, a site on the South Pole for example 
      will still meet the second criteria and thus be included. 
      Instead, we want to restrict this to sites that meet both criteria:

         .. tab:: SQL

            .. code:: sql

               SELECT * FROM Site WHERE (lat > -48) AND (lat < 48);
         
         .. tab:: Output

            .. code:: none

               name  lat     long   
               ----  ------  -------
               DR-3  -47.15  -126.72

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