Sorting out and removing duplicates
===================================

Objectives
----------

-  Write queries that display results in a particular order.
-  Write queries that eliminate duplicate values from data.

.. raw:: html

   <div style="max-width:960px"><div style="position:relative;padding-bottom:56.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_fc8hucho&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_nr4mkd3t" width="960" height="540" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="SQL2_Sort_Remove_Duplicates" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>

Key Points
----------

-  The records in a database table are not intrinsically ordered: 
   if we want to display them in some order, we must specify that 
   explicitly with ``ORDER BY``.
-  The values in a database are not guaranteed to be unique: if we 
   want to eliminate duplicates, we must specify that explicitly as 
   well using ``DISTINCT``.

Distinct values
---------------

Let's start by selecting the quantities that have been measured 
from the ``Survey`` table.

.. tab:: SQL

   .. code:: sql

      SELECT quant FROM Survey;

.. tab:: Output

   .. code:: none

      quant
      -----
      rad  
      sal  
      rad  
      sal  
      rad  
      sal  
      temp 
      rad  
      sal  
      temp 
      rad  
      temp 
      sal  
      rad  
      sal  
      temp 
      sal  
      rad  
      sal  
      sal  
      rad 

This result makes it difficult to see all the different types of 
quant in the table.

Let's eliminate redundant outputs using ``DISTINCT``.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT quant FROM Survey;

.. tab:: Output

   .. code:: none

      quant
      -----
      rad  
      sal  
      temp 

If we select more than one column, distinct sets of values are returned.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT taken, quant FROM Survey;

.. tab:: Output

   .. code:: none

      taken  quant
      -----  -----
      619    rad  
      619    sal  
      622    rad  
      622    sal  
      734    rad  
      734    sal  
      734    temp 
      735    rad  
      735    sal  
      735    temp 
      751    rad  
      751    temp 
      751    sal  
      752    rad  
      752    sal  
      752    temp 
      837    rad  
      837    sal  
      844    rad  

Sorting output
--------------

Now, let's identify scientists using ``Person`` table. We'll add ``ORDER BY`` 
to sort our data alphabetically.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Person ORDER BY id;

.. tab:: Output

   .. code:: none

      id        personal   family  
      --------  ---------  --------
      danforth  Frank      Danforth
      dyer      William    Dyer    
      lake      Anderson   Lake    
      pb        Frank      Pabodie 
      roe       Valentina  Roerich 

We can sort in ``DESC`` for descending or ``ASC`` for ascending order.

.. tab:: SQL

   .. code:: sql

      SELECT * FROM Person ORDER BY id DESC;

.. tab:: Output

   .. code:: none

      id        personal   family  
      --------  ---------  --------
      roe       Valentina  Roerich 
      pb        Frank      Pabodie 
      lake      Anderson   Lake    
      dyer      William    Dyer    
      danforth  Frank      Danforth

If we want to look at which scientists measured quantities during each visit,
let's look at the Survey table, and sort on several fields at once.

.. tab:: SQL

   .. code:: sql

      SELECT taken, person, quant FROM Survey 
      ORDER BY taken ASC, person DESC;

.. tab:: Output

   .. code:: none

      taken  person  quant
      -----  ------  -----
      619    dyer    rad  
      619    dyer    sal  
      622    dyer    rad  
      622    dyer    sal  
      734    pb      rad  
      734    pb      temp 
      734    lake    sal  
      735    pb      rad  
      735            sal  
      735            temp 
      751    pb      rad  
      751    pb      temp 
      751    lake    sal  
      752    roe     sal  
      752    lake    rad  
      752    lake    sal  
      752    lake    temp 
      837    roe     sal  
      837    lake    rad  
      837    lake    sal  
      844    roe     rad 

Putting it together
-------------------

It seems some scientists specialize in certain types of measurements. 
Let's remove duplicates to check.

.. tab:: SQL

   .. code:: sql

      SELECT DISTINCT quant, person FROM Survey ORDER BY quant ASC;

.. tab:: Output

   .. code:: none

      quant  person
      -----  ------
      rad    dyer  
      rad    pb    
      rad    lake  
      rad    roe   
      sal    dyer  
      sal    lake  
      sal          
      sal    roe   
      temp   pb    
      temp         
      temp   lake  

Practice: Finding distinct dates
--------------------------------

Write a query that selects distinct dates from the ``Visited`` table.

.. collapse:: Solution

   .. container::

      .. tab:: SQL

         .. code:: sql

            SELECT DISTINCT dated FROM Visited;

      .. tab:: Output

         .. code:: none

            dated     
            ----------
            1927-02-08
            1927-02-10
            1930-01-07
            1930-01-12
            1930-02-26
                     
            1932-01-14
            1932-03-22
