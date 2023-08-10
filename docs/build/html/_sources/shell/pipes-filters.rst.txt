Pipes and filters
=================

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

echo
----

``echo`` prints a string or the value of a variable as output as text.

.. code:: bash

   $ echo hello world

::

   hello world

``echo $SHELL`` prints the value of the variable ``$SHELL`` (a defined
path).

.. code:: bash

   $ echo $SHELL

::

   /usr/local/bin/bash

wc
--

``wc`` is the word count command for number of lines, words, and
characters in a file (left to right in that order). Let’s try that out
on some of files in ``data-shell/molecules``.

.. code:: bash

   $ cd datashell/molecules
   $ wc cubane.pdb

::

         20     156    1158 cubane.pdb

To only get lines, words, or characters, we can specify the flags
``-l``, ``-w``, or ``-c``, respectively.

Write to a file from the prompt
-------------------------------

-  ``>`` **redirects** a command’s output to a file instead of printing
   it to the screen. DO NOT write to the same file.
-  ``>>`` **redirects** a command’s output to append to the end of a
   file

Here we get the number of lines in all of our files and redirect the
output to a new file called ``line_count.txt``.

.. code:: bash

   $ wc -l *.pdb > line_count.txt

We can use ``cat`` to show the contents of this new file.

.. code:: bash

   $ cat line_count.txt

::

         20 cubane.pdb
         12 ethane.pdb
          9 methane.pdb
         30 octane.pdb
         21 pentane.pdb
         15 propane.pdb
        107 total

sort
----

``sort`` sorts the contents of a file. ``sort -n`` sorts a numerical
file.

.. code:: bash

   $ sort -n line_count.txt

::

          9 methane.pdb
         12 ethane.pdb
         15 propane.pdb
         20 cubane.pdb
         21 pentane.pdb
         30 octane.pdb
        107 total

*Note*: To escape a mistake in the prompt, type Ctrl + C.

View particular file contents
-----------------------------

-  ``cat``\ is the concatentate (join together) command that prints the
   contents of files one after another
-  ``less`` displays a screenful of the file and then stops. You can go
   forward one screenful by pressingthe spacebar, or back one by
   pressing B and Q to quit.
-  ``head`` shows the first few lines of a file. For example,
   ``head -n 5`` will show the first 5 lines.
-  ``tail`` shows the last few lines of a file
-  ``cut`` removes or cuts out certain sections of each line in a file

   -  ``-d`` option specifies a delimeter
   -  ``-f`` option specifies the column for extraction

-  ``uniq`` filters out adjecent matching lines in a file.

Piping Commands Together
------------------------

The ``|`` command **pipe** tells the shell to use the output of a
command on the left as the input of the command on the right.

Here, we take the output of ``wc -l *.pdb`` and feed that right into
``sort -nr``. The ``-r`` reverses the order of the sort.

.. code:: bash

   $ wc -l *.pdb | sort -nr 

::

        107 total
         30 octane.pdb
         21 pentane.pdb
         20 cubane.pdb
         15 propane.pdb
         12 ethane.pdb
          9 methane.pdb

You can chain pipes consecutively between multiple commands. We do so
here to grab the first line of the sort with ``head -n 1``

.. code:: bash

   $ wc -l *.pdb | sort -nr | head -n 1

::

        107 total

We can then redirect this output to a new file.

.. code:: bash

   $ wc -l *.pdb | sort -nr | head -n 1 > total_lines.txt

Challenge Questions:
--------------------

.. raw:: html

   <ol>

.. raw:: html

   <li>

In our current directory, we want to find the three files which have the
least number of lines. Which command listed below would work?

.. raw:: html

   <ol type="a">

.. raw:: html

   <li>

$ wc -l \* > sort -n > head -n 3

.. raw:: html

   </li>

.. raw:: html

   <li>

$ wc -l \* \| sort -n \| head -n 1-3

.. raw:: html

   </li>

.. raw:: html

   <li>

$ wc -l \* \| head -n 3 \| sort -n

.. raw:: html

   </li>

.. raw:: html

   <li>

$ wc -l \* \| sort -n \| head -n 3

.. raw:: html

   </li>

.. raw:: html

   </ol>

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: bash

      $ wc -l * | sort -n | head -n 3

.. raw:: html

   </details>

.. raw:: html

   </li>

.. raw:: html

   <li>

See the file called ``data-shell/data/animals.txt``. What text passes
through each of the pipes and the final redirect in the pipeline below?

.. code:: bash

   $ cat animals.txt | head -n 5 | tail -n 3 | sort -r > final.txt

Hint: Build the pipeline up one command at a time to test your
understanding.

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   ``cat animals.txt`` returns the full text in the file
   ``animals.txt``.

   ``| head -n 5`` returns the first 5 lines of the file.

   ``| tail -n 3`` gives the third, fourth, and fifth lines.

   ``| sort -r`` sorts the lines in reverse alphabetical order.

   ``> final.txt`` takes these lines and saves them to a file called
   ``final.txt``.

.. raw:: html

   </details>

.. raw:: html

   </li>

.. raw:: html

   <li>

``uniq`` filters out adjacent matching lines in a file. How can we
extend the pipeline to find out what animals the file
``data-shell/data/animals.txt`` contains without any duplicates?

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: bash

      $ cut -d , -f 2 animals.txt | sort | uniq > animals_unique.txt

.. raw:: html

   </details>

.. raw:: html

   </li>

.. raw:: html

   <li>

Assuming your current working directory is ``data-shell/data/``, which
command would you use to produce a table that shows the total count of
each type of animal in the file ``animals.txt``?

.. raw:: html

   <ol type="a">

.. raw:: html

   <li>

$ sort animals.txt \| uniq -c

.. raw:: html

   </li>

.. raw:: html

   <li>

$ sort -t, -k 2 animals.txt \| uniq -c

.. raw:: html

   </li>

.. raw:: html

   <li>

$ cut -d, -f 2 animals.txt \| uniq -c

.. raw:: html

   </li>

.. raw:: html

   <li>

$ cut -d, -f 2 animals.txt \| sort \| uniq -c

.. raw:: html

   </li>

.. raw:: html

   <li>

$ cut -d, -f 2 animals.txt \| sort \| uniq -c \| wc -l

.. raw:: html

   </li>

.. raw:: html

   </ol>

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. raw:: html

      <ol type="a">

   .. raw:: html

      <li>

   Sorts values, but includes date when trying to count all unique items

   .. raw:: html

      </li>

   .. raw:: html

      <li>

   Still includes the dates

   .. raw:: html

      </li>

   .. raw:: html

      <li>

   Because uniq only looks for lines repeated directly after each other,
   it does not work

   .. raw:: html

      </li>

   .. raw:: html

      <li>

   Correct solution

   .. raw:: html

      </li>

   .. raw:: html

      <li>

   Counts how many unique animals there are in the data set

   .. raw:: html

      </li>

   .. raw:: html

      </ol>

.. raw:: html

   </details>

.. raw:: html

   </li>

.. raw:: html

   </ol>

Resources
---------

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__.

