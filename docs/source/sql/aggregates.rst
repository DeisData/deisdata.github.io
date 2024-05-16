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

Minimum and maximum
-------------------

We want to calculate ranges and averages.

.. tab:: SQL
   
   .. code:: sql

      SELECT dated FROM Visited;

.. tab:: Output

   .. code:: none

      dated     
      ----------
      1927-02-08
      1927-02-10
      1930-01-07
      1930-01-12
      1930-02-26
      -null-    
      1932-01-14
      1932-03-22

To combine them, we will use an aggregation function like ``min`` or ``max``.

.. tab:: SQL
   
   .. code:: sql

      SELECT min(dated) FROM Visited;

.. tab:: Output

   .. code:: none

      min(dated)
      ----------
      1927-02-08

.. tab:: SQL
   :new-set:
   
   .. code:: sql

      SELECT max(dated) FROM Visited;

.. tab:: Output

   .. code:: none

      max(dated)
      ----------
      1932-03-22

Average, count, and sum
-----------------------

We can also use ``avg``, ``count``, and ``sum``.

.. tab:: SQL
   
   .. code:: sql

      SELECT avg(reading) FROM Survey WHERE quant='sal';


.. tab:: Output

   .. code:: none
      
      avg(reading)    
      ----------------
      7.20333333333333

.. tab:: SQL
   :new-set:
   
   .. code:: sql

      SELECT count(reading) FROM Survey WHERE quant='sal';

.. tab:: Output

   .. code:: none

      count(reading)
      --------------
      9           

.. tab:: SQL
   :new-set:
   
   .. code:: sql

      SELECT sum(reading) FROM Survey WHERE quant='sal';

.. tab:: Output

   .. code:: none

      sum(reading)
      ------------
      64.83 

Multiple aggregations
---------------------

We can make multiple aggregations in the same query, as well.

.. tab:: SQL
   
   .. code:: sql

      SELECT min(reading), max(reading) FROM Survey 
      WHERE quant='sal' AND READING <=1.0;

.. tab:: Output

   .. code:: none

      min(reading)  max(reading)
      ------------  ------------
      0.05          0.21       

.. tab:: SQL
   :new-set:
   
   .. code:: sql

      SELECT min(reading), max(reading), max(reading)-min(reading) 
      FROM Survey WHERE quant='sal' AND READING <=1.0;

.. tab:: Output

   .. code:: none

      min(reading)  max(reading)  max(reading)-min(reading)
      ------------  ------------  -------------------------
      0.05          0.21          0.16  

We can also combine aggregated results with raw results, though
results may look strange.

.. tab:: SQL
   
   .. code:: sql

      SELECT person, count(*) FROM Survey WHERE quant='sal' AND reading <=1.0; 

.. tab:: Output

   .. code:: none

      person  count(*)
      ------  --------
      dyer    7     

Aggregations and NULL
---------------------

If we try to run an aggregation when looking for information that 
is not in our tables, we will get a ``NULL`` output.

.. tab:: SQL
   
   .. code:: sql

      SELECT person, max(reading) FROM Survey where quant = 'missing';

.. tab:: Output

   .. code:: none

      person  max(reading)
      ------  ------------
      -null-  -null- 


When aggregating over a field with a ``NULL`` value, the ``NULL``
value gets skipped over. The default is to filter it out.

.. tab:: SQL
   
   .. code:: sql

      SELECT min(dated) FROM Visited;

.. tab:: Output

   .. code:: none  

      min(dated)
      ----------
      1927-02-08  

Grouping results
----------------

``GROUP BY`` groups records with the same value together so that 
aggregation processes each batch separately. 

.. tab:: SQL
   
   .. code:: sql

      SELECT person, count(reading), round(avg(reading), 2)
      From Survey
      Where quant='rad'
      GROUP BY person;

.. tab:: Output

   .. code:: none

      person  count(reading)  round(avg(reading), 2)
      ------  --------------  ----------------------
      dyer    2               8.81                  
      lake    2               1.82                  
      pb      3               6.66                  
      roe     1               11.25    

We can also group by multiple fields at once.

.. tab:: SQL
   
   .. code:: sql

      SELECT person, quant, count(reading), round(avg(reading),2)
      FROM Survey
      GROUP BY person, quant;

.. tab:: Output

   .. code:: none

      person  quant  count(reading)  round(avg(reading), 2)
      ------  -----  --------------  ----------------------
      -null-  sal    1               0.06                  
      -null-  temp   1               -26.0                 
      dyer    rad    2               8.81                  
      dyer    sal    2               0.11                  
      lake    rad    2               1.82                  
      lake    sal    4               0.11                  
      lake    temp   1               -16.0                 
      pb      rad    3               6.66                  
      pb      temp   2               -20.0                 
      roe     rad    1               11.25                 
      roe     sal    2               32.05    

We can finish this up by removing measurements from 
unknown people and ordering our output.

.. tab:: SQL
   
   .. code:: sql

      SELECT person, quant, count(reading), round(avg(reading),2)
      FROM Survey
      WHERE person IS NOT NULL
      GROUP BY person, quant
      ORDER BY person, quant;

.. tab:: Output

   .. code:: none

      person  quant  count(reading)  round(avg(reading), 2)
      ------  -----  --------------  ----------------------
      dyer    rad    2               8.81                  
      dyer    sal    2               0.11                  
      lake    rad    2               1.82                  
      lake    sal    4               0.11                  
      lake    temp   1               -16.0                 
      pb      rad    3               6.66                  
      pb      temp   2               -20.0                 
      roe     rad    1               11.25                 
      roe     sal    2               32.05   

Practice: Counting temperature readings
---------------------------------------

How many temperature readings did Frank Pabodie record, 
and what was their average value?

.. collapse:: Solution

   .. container:: 

      .. tab:: SQL
    
         .. code:: sql

            SELECT count(reading), avg(reading) FROM Survey WHERE quant = 'temp' 
            AND person = 'pb';
      
      .. tab:: Output

         .. code:: none

            count(reading)  avg(reading)
            --------------  ------------
            2               -20.0   