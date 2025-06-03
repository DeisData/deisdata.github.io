Calculating new values
======================

Objective
---------

-  Write queries that calculate new values for each selected record.

.. raw:: html

    <div style="max-width:960px"><div style="position:relative;padding-bottom:56.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_qvnxdl1d&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_42ksn0cn" width="960" height="540" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="SQL4_Calc_New_Values" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>

Key Points
----------

-  Queries can do the usual arithmetic operations on values.
-  Use ``UNION`` to combine the results of two or more queries.

Mathematical operations
-----------------------

Oh no! radiation measurements need to be corrected upward by 5%. 

Rather than modify the stored data, we can do this on the fly 
as part of our query.

.. tab:: SQL

    .. code:: sql

        SELECT 1.05 * reading FROM Survey WHERE quant = 'rad';

.. tab:: Output

    .. code:: none

        1.05 * reading
        --------------
        10.311        
        8.19          
        8.8305        
        7.581         
        4.5675        
        2.2995        
        1.533         
        11.8125   


We can use all kinds of math operators. For example, we can
convert from Fahrenheit to Celsius, and round 2 decimal places.

.. tab:: SQL

    .. code:: sql

        SELECT taken, round(5*(reading - 32) / 9, 2) 
        FROM Survey WHERE quant = 'temp';

.. tab:: Output

    .. code:: none

        taken  round(5*(reading - 32) / 9, 2)
        -----  ------------------------------
        734    -29.72                        
        735    -32.22                        
        751    -28.06                        
        752    -26.67 

We can also rename this field in the output with ``as``.

.. tab:: SQL

    .. code:: sql

        SELECT taken, round(5*(reading - 32) / 9, 2) as Celsius 
        FROM Survey WHERE quant = 'temp';

.. tab:: Output

    .. code:: none

        taken  Celsius
        -----  -------
        734    -29.72 
        735    -32.22 
        751    -28.06 
        752    -26.67 

We can also combine values from different fields using string 
concatenation operator ``||``.

.. tab:: SQL

    .. code:: sql

        SELECT personal || ' ' || family as fullname FROM Person;

.. tab:: Output

    .. code:: none

        fullname         
        -----------------
        William Dyer     
        Frank Pabodie    
        Anderson Lake    
        Valentina Roerich
        Frank Danforth 

Practice: Fixing salinity readings
----------------------------------

After further reading, we realize that Valentina Roerich was reporting 
salinity as percentages. Write a query that returns all of her salinity 
measurements from the ``Survey`` table with the values divided by 100.

.. collapse:: Solution

    .. container:: 
        
        .. tab:: SQL

            .. code:: sql

                SELECT taken, reading / 100 FROM Survey WHERE person = 'roe' AND quant = 'sal';

        .. tab:: Output

            .. code:: none

                taken  reading / 100
                -----  -------------
                752    0.416        
                837    0.225 

Practice: Unions
----------------

The ``UNION`` operator combines the results of two queries:

.. tab:: SQL

    .. code:: sql

        SELECT * FROM Person WHERE id = 'dyer' UNION SELECT * FROM Person WHERE id = 'roe';

.. tab:: Output

    .. code:: none

        id    personal   family 
        ----  ---------  -------
        dyer  William    Dyer   
        roe   Valentina  Roerich

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

.. tab:: Output

    .. code:: none

        taken  reading
        -----  -------
        619    0.13
        622    0.09
        734    0.05
        751    0.1
        752    0.09
        752    0.416
        837    0.21
        837    0.225

.. collapse:: Solution

    .. container:: 
    
        .. tab:: SQL

            .. code:: sql

                SELECT taken, reading FROM Survey WHERE person != 'roe' AND quant = 'sal' 
                UNION SELECT taken, reading / 100 FROM Survey WHERE person = 'roe' AND quant = 'sal' 
                ORDER BY taken ASC;

        .. tab:: Output
        
            .. code:: none

                taken  reading
                -----  -------
                619    0.13
                622    0.09
                734    0.05
                751    0.1
                752    0.09
                752    0.416
                837    0.21
                837    0.225
