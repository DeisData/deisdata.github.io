Calculating new values
======================

Key Points
----------

-  Queries can do the usual arithmetic operations on values.
-  Use ``UNION`` to combine the results of two or more queries.

Practice: Fixing salinity readings
----------------------------------

After further reading, we realize that Valentina Roerich was reporting 
salinity as percentages. Write a query that returns all of her salinity 
measurements from the ``Survey`` table with the values divided by 100.

.. collapse:: Solution

    .. container:: 
    
        .. code:: sql

            SELECT taken, reading / 100 FROM Survey WHERE person = 'roe' AND quant = 'sal';


Practice: Unions
----------------

The ``UNION`` operator combines the results of two queries:

.. tab:: SQL

    .. code:: sql

        SELECT * FROM Person WHERE id = 'dyer' UNION SELECT * FROM Person WHERE id = 'roe';

.. tab:: Output

        ==== ========= =======
        id   personal  family
        ==== ========= =======
        dyer William   Dyer
        roe  Valentina Roerich
        ==== ========= =======

The ``UNION ALL`` command is equivalent to the ``UNION`` operator, except 
that ``UNION ALL`` will select all values. The difference is that ``UNION ALL`` 
will not eliminate duplicate rows. Instead, ``UNION ALL`` pulls all rows from 
the query specifics and combines them into a table. The ``UNION`` command does 
a ``SELECT DISTINCT`` on the results set. If all the records to be returned are 
unique from your union, use ``UNION ALL`` instead, it gives faster results since 
it skips the ``DISTINCT`` step. For this section, we shall use ``UNION``.

Use ``UNION`` to create a consolidated list of salinity measurements in which 
Valentina Roerich\’s, and only Valentina\’s, have been corrected as described 
in the previous challenge. The output should be something like:

===== =======
taken reading
===== =======
619   0.13
622   0.09
734   0.05
751   0.1
752   0.09
752   0.416
837   0.21
837   0.225
===== =======

.. collapse:: Solution

    .. container:: 
    
        .. code:: sql

            SELECT taken, reading FROM Survey WHERE person != 'roe' AND quant = 'sal' 
            UNION SELECT taken, reading / 100 FROM Survey WHERE person = 'roe' AND quant = 'sal' 
            ORDER BY taken ASC;
