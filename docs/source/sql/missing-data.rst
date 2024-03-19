Missing data
============

Objective
---------

**Write queries that handle missing information (NULLs) correctly.**

..  youtube:: kMifedE_J5I
   :width: 100%

Key Points
----------

-  Databases use a special value called ``NULL`` to represent missing information.
-  Almost all operations on ``NULL`` produce ``NULL``.
-  Queries can test for ``NULL`` using ``IS NULL`` and ``IS NOT NULL``.

Let's try running a query where some of the returned values are ``NULL``.

.. tab:: SQL

    .. code:: sql

        SELECT * FROM Visited;

``NULL`` doesn't behave like other values.
It gets left out from conditional searches.

.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated < '1930-01-01';

.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated > '1930-01-01';


.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated IS NULL;


.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated IS NOT NULL;


Practice: Sorting by Known Date
-------------------------------

Write a query that sorts the records in ``Visited`` by date, omitting entries for 
which the date is not known (i.e., is null).

.. collapse:: Solution

    .. container:: 
    
        .. code:: sql

            SELECT * FROM Visited WHERE dated IS NOT NULL ORDER BY dated ASC;
