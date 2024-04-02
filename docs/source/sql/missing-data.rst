Missing data
============

Objective
---------

-  Write queries that handle missing information (``NULL``) correctly.

..  youtube:: kMifedE_J5I
   :width: 100%

Key Points
----------

-  Databases use a special value called ``NULL`` to represent missing information.
-  Almost all operations on ``NULL`` produce ``NULL``.
-  Queries can test for ``NULL`` using ``IS NULL`` and ``IS NOT NULL``.

NULL values
-----------

In our console, we're going to make sure ``NULL`` gets displayed more obviously.

.. tab:: SQL

    .. code:: sql

        .nullvalue -null-

Let's try running a query where some of the returned values are ``NULL``.

.. tab:: SQL

    .. code:: sql

        SELECT * FROM Visited;

.. tab:: Output

    .. code:: none

        id   site   dated     
        ---  -----  ----------
        619  DR-1   1927-02-08
        622  DR-1   1927-02-10
        734  DR-3   1930-01-07
        735  DR-3   1930-01-12
        751  DR-3   1930-02-26
        752  DR-3   -null-          
        837  MSK-4  1932-01-14
        844  DR-1   1932-03-22

``NULL`` doesn't behave like other values.
It gets left out from conditional searches.

.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated < '1930-01-01';

.. tab:: Output

    .. code:: none

        id   site  dated     
        ---  ----  ----------
        619  DR-1  1927-02-08
        622  DR-1  1927-02-10

.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated >= '1930-01-01';

.. tab:: Output

    .. code:: none

        id   site   dated     
        ---  -----  ----------
        734  DR-3   1930-01-07
        735  DR-3   1930-01-12
        751  DR-3   1930-02-26
        837  MSK-4  1932-01-14
        844  DR-1   1932-03-22

Filtering NULL
--------------

To filter for ``NULL``, we have to use the command ``IS``
instead of ``=``.

.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated IS NULL;

.. tab:: Output

    .. code:: none

        id   site  dated 
        ---  ----  ------
        752  DR-3  -null-

To omit ``NULL``, we use ``IS NOT``.

.. tab:: SQL
    :new-set:

    .. code:: sql

        SELECT * FROM Visited WHERE dated IS NOT NULL;

.. tab:: Output

    .. code:: none

        id   site   dated     
        ---  -----  ----------
        619  DR-1   1927-02-08
        622  DR-1   1927-02-10
        734  DR-3   1930-01-07
        735  DR-3   1930-01-12
        751  DR-3   1930-02-26
        837  MSK-4  1932-01-14
        844  DR-1   1932-03-22

Without explicitely saying that we want to include ``NULL``,
it is easy to filter them out accidentally.

.. tab:: SQL

    .. code:: sql

        SELECT * FROM Survey where quant = 'sal' and person != 'lake';

.. tab:: Output

    .. code:: none

        taken  person  quant  reading
        -----  ------  -----  -------
        619    dyer    sal    0.13   
        622    dyer    sal    0.09   
        752    roe     sal    41.6   
        837    roe     sal    22.5 

We have to explicitely include ``NULL`` if we want to also include 
those values.

.. tab:: SQL

    .. code:: sql

        SELECT * FROM Survey where quant = 'sal' 
        and (person != 'lake' or person IS NULL);

.. tab:: Output

    .. code:: none

        taken  person  quant  reading
        -----  ------  -----  -------
        619    dyer    sal    0.13   
        622    dyer    sal    0.09   
        735    -null-  sal    0.06   
        752    roe     sal    41.6   
        837    roe     sal    22.5 

Practice: Sorting by Known Date
-------------------------------

Write a query that sorts the records in ``Visited`` by date, omitting entries for 
which the date is not known (i.e., is null).

.. collapse:: Solution

    .. container:: 
        
        .. tab:: SQL

            .. code:: sql

                SELECT * FROM Visited WHERE dated IS NOT NULL ORDER BY dated ASC;

        .. tab:: Output

            .. code:: none

                id   site   dated     
                ---  -----  ----------
                619  DR-1   1927-02-08
                622  DR-1   1927-02-10
                734  DR-3   1930-01-07
                735  DR-3   1930-01-12
                751  DR-3   1930-02-26
                837  MSK-4  1932-01-14
                844  DR-1   1932-03-22