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

Let's try to join the ``Site`` and ``Visited`` tables.

We will first demonstrate the **WRONG** way to do this first.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Site JOIN Visited;

``JOIN`` creates the cross product, creating all possible combinations (3*8=24). 
It hasn't figured out what the relationship between the tables is.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Site JOIN Visited ON Site.name = Visited.site;

.. tab:: SQL

   .. code:: sql

      SELECT Site.lat, Site.long, Visited.dated, Survey.quant, Survey.reading
      FROM Site JOIN Visited JOIN Survey
      ON Site.name = Visited.site
      AND Visited.id = Survey.taken
      AND Visited.dated IS NOT NULL;



Practice: Listing radiation readings
------------------------------------

Write a query that lists all radiation readings from the DR-1 site.

.. collapse:: Solution

   .. container:: 
    
      .. code:: sql

         SELECT Survey.reading 
         FROM Site JOIN Visited JOIN Survey 
         ON Site.name = Visited.site
         AND Visited.id = Survey.taken
         WHERE Site.name = 'DR-1' 
         AND Survey.quant = 'rad';
