Combining data from multiple tables
===================================

Objectives
----------

-  Write a query to join 2 tables.
-  Understand keys

..  youtube:: K29HryxNf9w
   :width: 100%

Key Points
----------

-  Use ``JOIN`` to combine data from two tables.
-  Use table.field notation to refer to fields when doing joins.
-  Every fact should be represented in a database exactly once.
-  A join produces all combinations of records from one table with 
   records from another.
-  A primary key is a field (or set of fields) whose values uniquely 
   identify the records in a table.
-  A foreign key is a field (or set of fields) in one table whose 
   values are a primary key in another table.
-  We can eliminate meaningless combinations of records by matching 
   primary keys and foreign keys between tables.
-  The most common join condition is matching keys.

.. figure:: /_static/images/sql/combining-data/relations-between-tables.png
   :alt: Relationships between tables 

Code
----

Let's try to join the ``Site`` and ``Visited`` tables.

We will first demonstrate the **WRONG** way to do this first.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Site JOIN Visited;

.. tab:: Output

   .. code:: none

      name   lat     long     id   site   dated     
      -----  ------  -------  ---  -----  ----------
      DR-1   -49.85  -128.57  619  DR-1   1927-02-08
      DR-1   -49.85  -128.57  622  DR-1   1927-02-10
      DR-1   -49.85  -128.57  734  DR-3   1930-01-07
      DR-1   -49.85  -128.57  735  DR-3   1930-01-12
      DR-1   -49.85  -128.57  751  DR-3   1930-02-26
      DR-1   -49.85  -128.57  752  DR-3   -null-    
      DR-1   -49.85  -128.57  837  MSK-4  1932-01-14
      DR-1   -49.85  -128.57  844  DR-1   1932-03-22
      DR-3   -47.15  -126.72  619  DR-1   1927-02-08
      DR-3   -47.15  -126.72  622  DR-1   1927-02-10
      DR-3   -47.15  -126.72  734  DR-3   1930-01-07
      DR-3   -47.15  -126.72  735  DR-3   1930-01-12
      DR-3   -47.15  -126.72  751  DR-3   1930-02-26
      DR-3   -47.15  -126.72  752  DR-3   -null-    
      DR-3   -47.15  -126.72  837  MSK-4  1932-01-14
      DR-3   -47.15  -126.72  844  DR-1   1932-03-22
      MSK-4  -48.87  -123.4   619  DR-1   1927-02-08
      MSK-4  -48.87  -123.4   622  DR-1   1927-02-10
      MSK-4  -48.87  -123.4   734  DR-3   1930-01-07
      MSK-4  -48.87  -123.4   735  DR-3   1930-01-12
      MSK-4  -48.87  -123.4   751  DR-3   1930-02-26
      MSK-4  -48.87  -123.4   752  DR-3   -null-    
      MSK-4  -48.87  -123.4   837  MSK-4  1932-01-14
      MSK-4  -48.87  -123.4   844  DR-1   1932-03-22

``JOIN`` creates the cross product, creating all possible combinations (3*8=24). 
It hasn't figured out what the relationship between the tables is.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Site JOIN Visited ON Site.name = Visited.site;

.. tab:: Output

   .. code:: none

      name   lat     long     id   site   dated     
      -----  ------  -------  ---  -----  ----------
      DR-1   -49.85  -128.57  619  DR-1   1927-02-08
      DR-1   -49.85  -128.57  622  DR-1   1927-02-10
      DR-1   -49.85  -128.57  844  DR-1   1932-03-22
      DR-3   -47.15  -126.72  734  DR-3   1930-01-07
      DR-3   -47.15  -126.72  735  DR-3   1930-01-12
      DR-3   -47.15  -126.72  751  DR-3   1930-02-26
      DR-3   -47.15  -126.72  752  DR-3   -null-    
      MSK-4  -48.87  -123.4   837  MSK-4  1932-01-14

We use the ``table.field`` syntax to specify which table and which fields
we are using.

We can use this syntax to select only specific columns from the tables.

.. tab:: SQL

   .. code:: sql

      SELECT Site.lat, Site.long, Visited.dated
      FROM Site JOIN Visited
      ON Site.name = Visited.site;

.. tab:: Output

   .. code:: none

      lat     long     dated     
      ------  -------  ----------
      -49.85  -128.57  1927-02-08
      -49.85  -128.57  1927-02-10
      -49.85  -128.57  1932-03-22
      -47.15  -126.72  -null-    
      -47.15  -126.72  1930-01-07
      -47.15  -126.72  1930-01-12
      -47.15  -126.72  1930-02-26
      -48.87  -123.4   1932-01-14

We can also join multiple tables at once. 

.. tab:: SQL

   .. code:: sql

      SELECT Site.lat, Site.long, Visited.dated, Survey.quant, Survey.reading
      FROM Site JOIN Visited JOIN Survey
      ON Site.name = Visited.site
      AND Visited.id = Survey.taken
      AND Visited.dated IS NOT NULL;

.. tab:: Output

   .. code:: none

      lat     long     dated       quant  reading
      ------  -------  ----------  -----  -------
      -49.85  -128.57  1927-02-08  rad    9.82   
      -49.85  -128.57  1927-02-08  sal    0.13   
      -49.85  -128.57  1927-02-10  rad    7.8    
      -49.85  -128.57  1927-02-10  sal    0.09   
      -47.15  -126.72  1930-01-07  rad    8.41   
      -47.15  -126.72  1930-01-07  sal    0.05   
      -47.15  -126.72  1930-01-07  temp   -21.5  
      -47.15  -126.72  1930-01-12  rad    7.22   
      -47.15  -126.72  1930-01-12  sal    0.06   
      -47.15  -126.72  1930-01-12  temp   -26.0  
      -47.15  -126.72  1930-02-26  rad    4.35   
      -47.15  -126.72  1930-02-26  sal    0.1    
      -47.15  -126.72  1930-02-26  temp   -18.5  
      -48.87  -123.4   1932-01-14  rad    1.46   
      -48.87  -123.4   1932-01-14  sal    0.21   
      -48.87  -123.4   1932-01-14  sal    22.5   
      -49.85  -128.57  1932-03-22  rad    11.25  


Practice: Listing radiation readings
------------------------------------

Write a query that lists all radiation readings from the DR-1 site.

.. collapse:: Solution

   .. container:: 
    
      .. tab:: SQL

         .. code:: sql

            SELECT Survey.reading 
            FROM Site JOIN Visited JOIN Survey 
            ON Site.name = Visited.site
            AND Visited.id = Survey.taken
            WHERE Site.name = 'DR-1' 
            AND Survey.quant = 'rad';
      
      .. tab:: Output

         .. code:: none

            reading
            -------
            9.82   
            7.8    
            11.25  
            
