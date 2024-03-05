Aggregates: sums, averages, and other summary values
====================================================

Key Points
----------

-  Use aggregation functions to combine multiple values: 
   ``min`` and ``max``, ``avg``, ``count``, and ``sum``.
-  Aggregation functions ignore ``null`` values.
-  Aggregation happens after filtering.
-  Use ``GROUP BY`` to combine subsets separately.
-  If no aggregation function is specified for a field, 
   the query may return an arbitrary value for that field.

Practice: Counting temperature readings
---------------------------------------

How many temperature readings did Frank Pabodie record, 
and what was their average value?

.. collapse:: Solution

    .. container:: 
    
         .. code:: sql

            SELECT count(reading), avg(reading) FROM Survey WHERE quant = 'temp' 
            AND person = 'pb';
