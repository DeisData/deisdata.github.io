Missing data
============

..  youtube:: kMifedE_J5I
   :width: 100%

Key Points
----------

-  Databases use a special value called ``NULL`` to represent missing information.
-  Almost all operations on ``NULL`` produce ``NULL``.
-  Queries can test for ``NULL`` using ``IS NULL`` and ``IS NOT NULL``.

Practice: Sorting by Known Date
-------------------------------

Write a query that sorts the records in ``Visited`` by date, omitting entries for 
which the date is not known (i.e., is null).

.. collapse:: Solution

    .. container:: 
    
        .. code:: sql

            SELECT * FROM Visited WHERE dated IS NOT NULL ORDER BY dated ASC;
