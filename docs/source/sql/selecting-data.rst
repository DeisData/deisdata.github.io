Selecting data
==============

..  youtube:: 9CbdKhYcE4U
   :width: 100%

Key Points
----------

-  A relational database stores information in tables, each of 
   which has a fixed set of columns and a variable number of records.
-  A database manager is a program that manipulates information stored 
   in a database.
-  We write queries in a specialized language called SQL to extract 
   information from databases.
-  Use ``SELECT… FROM…`` to get values from a database table.
-  SQL is case-insensitive (but data is case-sensitive).

Practice: Selecting Site names
------------------------------

Write a query that selects only the name column from the Site table.

.. collapse:: Solution

   .. container::

      .. tab:: SQL

         .. code:: sql

            SELECT name FROM Site;