Loops
=====

Linking together programs is why Unix has been so successful. Now, we
improve productivity through automation – with loops! All those commands
we have learned will be put to use.

Questions to think about:
-------------------------

-  How can I perform the same actions on many different files?

Loop Structure
--------------

Here is some pseudo-code showing the basic syntax of a for loop in bash.

.. code:: bash

   $ for thing in list_of_things
   > do
   >     my_command $thing
   > done

-  ``list_of_things`` is some collection, like a group of files
-  ``thing`` is a variable name we assign to each file, one at a time
-  The actions we do in the loop is between the keywords ``do`` and
   ``done`` and tabbed over
-  We use some command and refer to the variable ``thing`` with a
   leading ``$``

Loop Examples
-------------

The following for loop lists the contents of working directory one item
at a time.

.. code:: bash

   $ for itemname in *
   > do
   >     ls $itemname
   > done

Here we grab the first two lines of 3 data files.

.. code:: bash

   $ cd Desktop/data-shell/creatures
   $ for filename in basilisk.dat minotaur.dat unicorn.dat
   > do 
   >     head -n 2 $filename
   > done

We can make changes to files within loops, as well.

.. code:: bash

   $ cd Desktop/data-shell/creatures
   $ for filename in basilisk.dat minotaur.dat unicorn.dat
   > do 
   >    head -n 2 $filename >> all.pdb
   > done

Repeat running a program with all your input data files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nell has files NENE00000A.txt and NENE00000B.txt that need needs to run
through the program ``goostats`` one at a time. The program ``goostats``
has two arguments, the input data file, and the output statistics file.

.. code:: bash

   $ cd ../north-pacific-gyre/2012-07-03
   $ for datafile in NENE*[AB].txt
   > do 
   >    bash goostats $datafile stats-$datafile   #where stats-$datafile is the output of goostats program.
   >    echo output: stats-$datafile
   done

Checking on your loop before you run it!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It can be a good idea to run your loop with ``echo`` in front of you
commands, to make sure it will act the way you believe. For example, in
the loop above I may want to first run
``echo "bash goostats $datafile stats-$datafile"`` before I run the loop
to execute the ``goostats`` program.

Nested Loops Challenge!
~~~~~~~~~~~~~~~~~~~~~~~

What does this do?

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

[ previous ] [ next ]
