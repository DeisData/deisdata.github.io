Loops
=====

.. raw:: html

  <div style="max-width:960px"><div style="position:relative;padding-bottom:56.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_95its74y&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_1qonnv6b" width="960" height="540" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Unix Shell 5: Loops" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>

Linking together programs is why Unix has been so successful. Now, we
improve productivity through automation – with loops! All those commands
we have learned will be put to use.

Questions to think about:
-------------------------

-  How can I perform the same actions on many different files?

Loop Structure
--------------

Here is some pseudo-code showing the basic syntax of a for loop in bash.

.. tab:: Bash

   .. code:: bash

      $ for thing in list_of_things
      > do
      >     my_command $thing
      > done

-  ``list_of_things`` is some collection, like a group of files.
-  ``thing`` is a variable name we assign to each file, one at a time.
-  The actions we do in the loop is between the keywords ``do`` and
   ``done`` and tabbed over.
-  We use some command and refer to the variable ``thing`` with a
   leading ``$``.

Loop Examples
-------------

The following for loop lists the contents of working directory one item
at a time.

.. tab:: Bash

   .. code:: bash

      $ for itemname in *
      > do
      >     ls $itemname
      > done

Here we grab the first two lines of 3 data files.

.. tab:: Bash

   .. code:: bash

      $ cd Desktop/data-shell/creatures
      $ for filename in basilisk.dat minotaur.dat unicorn.dat
      > do 
      >     head -n 2 $filename
      > done

We can make changes to files within loops, as well.

.. tab:: Bash

   .. code:: bash

      $ cd Desktop/data-shell/creatures
      $ for filename in basilisk.dat minotaur.dat unicorn.dat
      > do 
      >    head -n 2 $filename >> all.pdb
      > done

Repeat running a program with all your input data files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nell has files ``NENE00000A.txt`` and ``NENE00000B.txt`` that need needs to run
through the program ``goostats`` one at a time. The program ``goostats``
has two arguments, the input data file, and the output statistics file.

.. tab:: Bash

   .. code:: bash

      $ cd ../north-pacific-gyre/2012-07-03
      $ for datafile in NENE*[AB].txt
      > do 
      >    bash goostats $datafile stats-$datafile   #where stats-$datafile is the output of goostats program.
      >    echo output: stats-$datafile
      > done

Checking on your loop before you run it!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It can be a good idea to run your loop with ``echo`` in front of you
commands, to make sure it will act the way you believe. For example, in
the loop above you may want to first run
``echo "bash goostats $datafile stats-$datafile"`` before you run the loop
to execute the ``goostats`` program.

Nested Loops Challenge!
~~~~~~~~~~~~~~~~~~~~~~~

What does this do?

.. tab:: Bash

   .. code:: bash

      $ for species in cubane ethane methane
      > do
      >     for temperature in 25 30 37 40
      >     do
      >         mkdir $species-$temperature
      >     done
      > done

Resources
~~~~~~~~~

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__.


