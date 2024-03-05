Sorting out and removing duplicates
===================================

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


Practice: Finding distinct dates
--------------------------------

Write a query that selects distinct dates from the ``Visited`` table.

.. collapse:: Solution

   .. container::

      .. tab:: SQL

         .. code:: sql

            SELECT DISTINCT dated FROM Visited;

