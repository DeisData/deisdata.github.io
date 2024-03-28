Selecting data
==============

Objective
---------

-  Write a query to select all values 
   for specific fields from a single table.

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

Introductory jargon
-------------------

-  A relational database is arranged as **tables**.
-  Columns are called **fields**.
-  Rows are called **records**.
-  Commands are called **queries**.

Selecting fields
----------------

We will use ``SELECT ... FROM ...`` to get values from a database table.

From our data set, we will use this syntax to display scientists' names 
using ``SELECT`` and giving names of columns we want.

.. tab:: SQL

   .. code:: sql

      SELECT family, personal FROM Person;

.. tab:: Output

   .. code:: none

      family    personal 
      --------  ---------
      Dyer      William  
      Pabodie   Frank    
      Lake      Anderson 
      Roerich   Valentina
      Danforth  Frank 

SQL is case insensitive.

.. tab:: SQL

   .. code:: sql

      SeleCT family, PERSONAL from person;

.. tab:: Output

   .. code:: none

      id        id        id      
      --------  --------  --------
      dyer      dyer      dyer    
      pb        pb        pb      
      lake      lake      lake    
      roe       roe       roe     
      danforth  danforth  danforth

We specify what order columns are displayed in.

.. tab:: SQL

   .. code:: sql

      SELECT id, id, id FROM Person;

.. tab:: Output

   .. code:: none

      id        id        id      
      --------  --------  --------
      dyer      dyer      dyer    
      pb        pb        pb      
      lake      lake      lake    
      roe       roe       roe     
      danforth  danforth  danforth

We can select all the columns in a table using ``*``. 

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Person;

.. tab:: Output

   .. code:: none

      id        personal   family  
      --------  ---------  --------
      dyer      William    Dyer    
      pb        Frank      Pabodie 
      lake      Anderson   Lake    
      roe       Valentina  Roerich 
      danforth  Frank      Danforth

Practice: Selecting Site names
------------------------------

Write a query that selects only the name column from the Site table.

.. collapse:: Solution

   .. container::

      .. tab:: SQL

         .. code:: sql

            SELECT name FROM Site;
      
      .. tab:: Output

         .. code:: none

            name 
            -----
            DR-1 
            DR-3 
            MSK-4