Missing data
============

Objective
---------

-  Write queries that handle missing information (``NULL``) correctly.

.. raw:: html

    <div style="max-width:960px"><div style="position:relative;padding-bottom:56.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_hckqb044&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_5duq8ijs" width="960" height="540" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="SQL5_MissingData" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>

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