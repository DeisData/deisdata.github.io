Aggregates: sums, averages, and other summary values
====================================================

Objectives
----------

-  Write queries to compute aggregated VALUES.
-  Explain how missing data is handled.


..  youtube:: yIXOp_1RjDo
   :width: 100%

Key Points
----------

-  Use aggregation functions to combine multiple values: 
   ``min`` and ``max``, ``avg``, ``count``, and ``sum``.
-  Aggregation functions ignore ``null`` values.
-  Aggregation happens after filtering.
-  Use ``GROUP BY`` to combine subsets separately.
-  If no aggregation function is specified for a field, 
   the query may return an arbitrary value for that field.

We want to calculate ranges and averages.

.. tab:: SQL
   
   .. code:: sql

      SELECT dated FROM Visited;

To combine them, we will use an aggregation function like ``min`` or ``max``.

.. tab:: SQL
   
   .. code:: sql

      SELECT min(dated) FROM Visited;

.. tab:: SQL
   :new-set:
   
   .. code:: sql

      SELECT max(dated) FROM Visited;

We can also use ``avg``, ``count``, and ``sum``.

.. tab:: SQL
   
   .. code:: sql

      SELECT avg(reading) FROM Survey WHERE quant='sal';

.. tab:: SQL
   :new-set:
   
   .. code:: sql

      SELECT count(reading) FROM Survey WHERE quant='sal';

.. tab:: SQL
   :new-set:
   
   .. code:: sql

      SELECT sum(reading) FROM Survey WHERE quant='sal';

.. note::
   
   Aggregations ignore null values.

``GROUP BY`` groups records with the same value together so that 
aggregation processes each batch separately. 

.. tab:: SQL
   
   .. code:: sql

      SELECT person, quant, count(reading), round(avg(reading),2)
      FROM Survey
      GROUP BY person, quant;


Practice: Counting temperature readings
---------------------------------------

How many temperature readings did Frank Pabodie record, 
and what was their average value?

.. collapse:: Solution

   .. container:: 
    
      .. code:: sql

         SELECT count(reading), avg(reading) FROM Survey WHERE quant = 'temp' 
         AND person = 'pb';
