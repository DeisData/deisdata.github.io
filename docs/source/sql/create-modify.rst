Creating and Modifying Data and Tables
======================================

Objective
---------

-  Create new tables and edit existing records

.. raw:: html

    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_6i19swbx&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_986e8vf4" width="640" height="360" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="SQL8_Create_Modify"></iframe>


Key Points
----------

-  Use ``CREATE`` and ``DROP`` to create and delete tables.
-  Use ``INSERT`` to add data.
-  Use ``UPDATE`` to modify existing data.
-  Use ``DELETE`` to remove data.
-  It is simpler and safer to modify data when every record has a unique primary key.
-  Do not create dangling references by deleting records that other records refer to.

CREATE TABLE
------------

So far, we've only gotten information out of our database, 
but we want to also be able to edit the data, as well.


We'll start by creating a new table with ``CREATE TABLE``. 
Each table has a schema with which it was created. The command
below creates a blank table.

.. tab:: SQL

    .. code:: sql

        CREATE TABLE Extra(name text, minutes integer, measure real);

The fields in our new table will have different data types specified
after the name of the field. ``text`` fields take character values.
``integer`` fields consist of positive and negative whole numbers (and 0).
``real`` fields contain numerical values with decimal points. There are also
``BLOB`` fields, which stand for binary large objects, such as an image.

If you check ``.schema`` we can see our new table here.

.. tab:: SQL

    .. code:: sql

        .schema

.. tab:: Output

    .. code:: none

        CREATE TABLE Person (id text, personal text, family text);
        CREATE TABLE Site (name text, lat real, long real);
        CREATE TABLE Survey (taken integer, person text, quant text, reading real);
        CREATE TABLE Visited (id integer, site text, dated text);
        CREATE TABLE Extra(name text, minutes integer, measure real);

    
DROP TABLE
----------

To remove a table, we can use ``DROP TABLE``.

.. tab:: SQL

    .. code:: sql

        DROP TABLE Extra;


.. tab:: SQL
    :new-set:

    .. code:: sql

        .schema

.. tab:: Output

    .. code:: none

        CREATE TABLE Person (id text, personal text, family text);
        CREATE TABLE Site (name text, lat real, long real);
        CREATE TABLE Survey (taken integer, person text, quant text, reading real);
        CREATE TABLE Visited (id integer, site text, dated text);

Make sure when you're deleting data that you're not removing 
primary keys that other references depend on. Also make sure to 
back up your database if there are files you would like to keep.

Primary keys
------------

When creating a table, we can also specify a field to be a primary key.

.. tab:: SQL

    .. code:: sql

        CREATE TABLE Extra(name text, minutes integer, measure real
        primary key (name));

Editing tables
--------------

We can also add a row to a table too with ``INSERT INTO``.

.. tab:: SQL

    .. code:: sql

        INSERT INTO SITE (name, lat, long) VALUES ('DR-5', -49.85, -128.57);

We can take values from one table and put them into another table,
as well. 

.. tab:: SQL

    .. code:: sql

        CREATE TABLE JustLatLong (lat real, long real);

        INSERT INTO JustLatLon SELECT lat, long FROM Site;

We can modify values with ``UPDATE`` and ``SET``. One way to do this is with
conditions. Don't forget to include ``WHERE``, else you will update
all values.

.. tab:: SQL

    .. code:: sql

        UPDATE Site SET lat=-47.87, long=-122.0 WHERE name='DR-5';

It can be a good idea to use a filter to check your query before 
running ``UPDATE`` to avoid modifying the database in unwanted ways.

We can use ``DELETE`` to delete rows in a similar way. Make sure 
records you delete are not referred to by other tables. 

.. tab:: SQL

    .. code:: sql

        DELETE FROM Person WHERE id='danforth';
