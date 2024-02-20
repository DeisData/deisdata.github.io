Shell scripts
=============

We finally see what makes the shell a powerful programming environment. 
Now, we will take commands we repeat and save them in a **shell script** - a
small program, so we can re-run operations with a single command.

Questions to think about:
-------------------------

-  How can I save and re-use commands?

Shebang the top line of a script:
---------------------------------

.. tab:: Bash

   .. code:: bash

      #!/usr/bin/env bash

You can use the special marker ``#!`` and path ``#!/usr/bin/env bash`` to
instruct the shell to pass the script to the bash program for execution. This 
line is known as a **shebang**. 

Other scripts may point to other shells (e.g. ``#!/usr/bin/perl`` will
tell the shell to run a perl script.)

File permissions
----------------

We need set permissions on executable files before we can run them. To
run them we can use the ``chmod`` or “change mode” command.

.. tab:: Bash

   .. code:: bash

      $ chmod 755 header.sh

The ``755`` tells our system that the owner of the file can read (open),
write (change), and execute (run) the file, but all others can only read
and execute the file. These permissions mostly matter when working on a
server with multiple people, like a supercomputing cluster. For more
detailed information, please see
`here <https://www.redhat.com/sysadmin/introduction-chmod>`__.

Running the script
------------------

When we run an executable script in the command line, we need to provide
the path to the script. This is because the system will not check all
directories, including the working directory, for commands.

If you are running a script in the current working directory be sure to
use ``./`` to ensure that it knows to look in the current working
directory: ``./myscript.sh``.

.. tab:: Bash

   .. code:: bash

      $ ./header.sh

Arguments
---------

When creating shell scripts for use on the command line, we can allow 
the user to specify certain conditions, as well. For instance, we can 
write ``header.sh`` so that it can be used with any file path the user 
provides.

Information provided by the user is called an **argument**. Inside of 
a script, ``$1`` means the first argument on the command line in the
script ``header.sh``.

**header.sh:**

.. tab:: Bash

   .. code:: bash

      #!/usr/bin/env bash
      # This script prints the first 15 lines of the file named in the command line (datafile.txt)
      head -n 15 $1 

**Command line:**

.. tab:: Bash

   .. code:: bash

      $ ./header.sh datafile.txt

Because the first text in the console after the name of the script is ``datafile.txt``, 
this is considered to be the first argument. When we run the script, ``$1`` gets replaced
by ``datafile.txt``.

Multiple arguments
~~~~~~~~~~~~~~~~~~

We can write scripts to handle multiple arguments, as well. ``$1`` 
corresponds to the first argument, ``$2`` for the second, ``$3``
for the third, so on and so forth. It can be helpful to use double 
quotes around a variable in case a filename happens to contain spaces.

**header.sh:**

.. tab:: Bash

   .. code:: bash

      #!/usr/bin/env bash
      # This script prints the top $2 lines of the file $1, then writes the top lines to file $3
      head -n "$2" "$1" > "$3" 

**Command line:**

.. tab:: Bash

   .. code:: bash

      $ ./header.sh datafile.txt 10 topdata.txt

.. admonition:: Use special syntax to handle one or more filenames

   You can use ``$@`` to indicate all of the command-line arguments to the shell
   script. You can still add quotations in case of filename spaces ``"$@"``. 

   **sorted.sh:**

   .. tab:: Bash

      .. code:: bash

         #!/usr/bin/env bash
         # Sort files by their length
         # USAGE: ./sorted.sh one_or_more_filenames
         $ wc -l "$@" | sort -n

   **Command line:**

   .. tab:: Bash

      .. code:: bash

         $ ./sorted.sh *.pdb ../creatures/*.dat

Resources
---------

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__. 

- `Bash Help Sheet <https://www.shell-tips.com/cheat-sheets/bash-quick-references/#gsc.tab=0>`__ has
  shortcuts for quick navigating and editing in your shell 
- `Mastering Bash with Tips and Tricks <https://www.shell-tips.com/#gsc.tab=0>`__ has
  some great examples of how scripts can be used in a variety of ways. 
- `30 Bash Script Examples <https://linuxhint.com/30_bash_script_examples/>`__ depicts
  some basic to more complex scripting examples 
- `StackOverflow <https://stackoverflow.com/questions/1102986/most-powerful-examples-of-unix-commands-or-scripts-every-programmer-should-know>`__ thread of most powerful examples of Unix Commands or Scripts every programmer
  should know. It is old but has some great examples. In general, StackOverflow is a great
  community for technical questions.

