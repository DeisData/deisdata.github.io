Pipes and filters
=================

.. raw:: html

   <div style="max-width:960px"><div style="position:relative;padding-bottom:56.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_uutk1pld&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_puys3828" width="960" height="540" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Unix Shell 4: Pipes and Filters" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>

The idea of linking together programs is why Unix has been so
successful. Instead of creating enormous programs that try to do many
different things, we focus on lots of simple tools that work well with
each other.

**Filters** are programs that transform a stream of input into a stream
of output.

Questions to think about:
-------------------------

-  How can I combine existing commands to do new things?
-  How can I write to a file from the shell prompt?

``echo``
--------

``echo`` prints a string or the value of a variable as output as text.

.. tab:: Bash

   .. code:: bash

      $ echo hello world

.. tab:: Output

   .. code:: none

      hello world

``echo $SHELL`` prints the value of the variable ``$SHELL`` (a defined
path).

.. tab:: Bash

   .. code:: bash

      $ echo $SHELL

.. tab:: Output

   .. code:: none

      /usr/local/bin/bash

``wc``
------

``wc`` is the word count command for number of lines, words, and
characters in a file (left to right in that order). Let’s try that out
on some of files in ``data-shell/molecules``.

.. tab:: Bash

   .. code:: bash

      $ cd datashell/molecules
      $ wc cubane.pdb

.. tab:: Output

   .. code:: none

         20     156    1158 cubane.pdb

To only get lines, words, or characters, we can specify the flags
``-l``, ``-w``, or ``-c``, respectively.

Write to a file from the prompt
-------------------------------

-  ``>`` **redirects** a command’s output to a file instead of printing
   it to the screen. This WILL overwrite the file if it already exists.
-  ``>>`` **redirects** a command’s output to append to the end of a
   file.

Here we get the number of lines in all of our files and redirect the
output to a new file called ``line_count.txt``.

.. tab:: Bash

   .. code:: bash

      $ wc -l *.pdb > line_count.txt

We can use ``cat`` to show the contents of this new file.

.. tab:: Bash

   .. code:: bash

      $ cat line_count.txt

.. tab:: Output

   .. code:: none

         20 cubane.pdb
         12 ethane.pdb
          9 methane.pdb
         30 octane.pdb
         21 pentane.pdb
         15 propane.pdb
        107 total

``sort``
--------

``sort`` sorts the contents of a file. ``sort -n`` sorts a numerical
file.

.. tab:: Bash

   .. code:: bash

      $ sort -n line_count.txt

.. tab:: Output

   .. code:: none

          9 methane.pdb
         12 ethane.pdb
         15 propane.pdb
         20 cubane.pdb
         21 pentane.pdb
         30 octane.pdb
        107 total

.. Note:: 
   
   To escape a mistake in the prompt, type :kbd:`Ctrl+C` (same on Mac and PC).

View particular file contents
-----------------------------

-  ``cat`` is the concatentate (join together) command that prints the
   contents of files one after another.
-  ``less`` displays a screenful of the file and then stops. You can go
   forward one screenful by pressing the spacebar, or back one by
   pressing B and Q to quit.
-  ``head`` shows the first few lines of a file. For example,
   ``head -n 5`` will show the first 5 lines.
-  ``tail`` shows the last few lines of a file.
-  ``cut`` removes or cuts out certain sections of each line in a file.

   -  ``-d`` option specifies a delimiter.
   -  ``-f`` option specifies the column for extraction.

-  ``uniq`` filters out adjacent matching lines in a file.

Piping Commands Together
------------------------

The ``|`` character is called a **pipe**. It tells the shell to use the output of a
command on the left as the input of the command on the right.

Here, we take the output of ``wc -l *.pdb`` and feed that right into
``sort -nr``. The ``-r`` reverses the order of the sort.

.. tab:: Bash

   .. code:: bash

      $ wc -l *.pdb | sort -nr 

.. tab:: Output

   .. code:: none


        107 total
         30 octane.pdb
         21 pentane.pdb
         20 cubane.pdb
         15 propane.pdb
         12 ethane.pdb
          9 methane.pdb

You can chain pipes consecutively between multiple commands. We do so
here to grab the first line of the sort with ``head -n 1``.

.. tab:: Bash

   .. code:: bash

      $ wc -l *.pdb | sort -nr | head -n 1

.. tab:: Output

   .. code:: none


        107 total

We can then redirect this output to a new file.

.. tab:: Bash

   .. code:: bash

      $ wc -l *.pdb | sort -nr | head -n 1 > total_lines.txt

Challenge Questions:
--------------------

1. In our current directory, we want to find the three files which have the
   least number of lines. Which command listed below would work?

   a. ``$ wc -l \* > sort -n > head -n 3``
   b. ``$ wc -l \* \| sort -n \| head -n 1-3``
   c. ``$ wc -l \* \| head -n 3 \| sort -n``
   d. ``$ wc -l \* \| sort -n \| head -n 3``

   .. collapse:: Solution

      .. container::

         .. tab:: Bash

            .. code:: bash

               $ wc -l * | sort -n | head -n 3

2. See the file called ``data-shell/data/animals.txt``. What text passes
   through each of the pipes and the final redirect in the pipeline below?

   .. tab:: Bash

      .. code:: bash

         $ cat animals.txt | head -n 5 | tail -n 3 | sort -r > final.txt

   Hint: Build the pipeline up one command at a time to test your
   understanding.


   .. collapse:: Solution


      .. container::

         ``cat animals.txt`` returns the full text in the file
         ``animals.txt``.

         ``| head -n 5`` returns the first 5 lines of the file.

         ``| tail -n 3`` gives the third, fourth, and fifth lines.

         ``| sort -r`` sorts the lines in reverse alphabetical order.

         ``> final.txt`` takes these lines and saves them to a file called
         ``final.txt``.

3. ``uniq`` filters out adjacent matching lines in a file. How can we
   extend the pipeline to find out what animals the file
   ``data-shell/data/animals.txt`` contains without any duplicates?

   .. collapse:: Solution

      .. container::

         .. tab:: Bash

            .. code:: bash

               $ cut -d , -f 2 animals.txt | sort | uniq > animals_unique.txt

4. Assuming your current working directory is ``data-shell/data/``, which
   command would you use to produce a table that shows the total count of
   each type of animal in the file ``animals.txt``?

   a. ``$ sort animals.txt \| uniq -c``
   b. ``$ sort -t, -k 2 animals.txt \| uniq -c``
   c. ``$ cut -d, -f 2 animals.txt \| uniq -c``
   d. ``$ cut -d, -f 2 animals.txt \| sort \| uniq -c``
   e. ``$ cut -d, -f 2 animals.txt \| sort \| uniq -c \| wc -l``

   .. collapse:: Solution

      .. container::

         a. Sorts values, but includes date when trying to count all unique items
         b. Still includes the dates
         c. Because uniq only looks for lines repeated directly after each other,
            it does not work
         d. Correct solution
         e. Counts how many unique animals there are in the data set
 
Resources
---------

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__.

