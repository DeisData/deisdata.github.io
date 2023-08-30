Shell scripts
=============

| We finally see what makes the shell a powerful programming
  environment.
| We will take commands we repeat and save them in a **shell script**- a
  small program, so we can re-run operations with a single command.

Questions to think about:
-------------------------

-  How can I save and re-use commands?

Writing Shell Scripts
---------------------

Shebang the top line of a script:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. tab:: Bash

   .. code:: bash

      #!/usr/bin/env bash

Uses the special marker ``#!`` and path ``#!/usr/bin/env bash`` the
instruct the shell to pass the script to the bash program for execution.

Other scripts may point to other shells (e.g. ``#!/usr/bin/perl`` will
tell the shell to run a perl script.)

File permissions
~~~~~~~~~~~~~~~~

We need set permissions on executable files before we can run them. To
run them we can use the ``chmod`` or “change mode” command.

.. tab:: Bash

   .. code:: bash

      chmod 755 header.sh

The ``755`` tells our system that the owner of the file can read (open),
write (change), and execute (run) the file, but all others can only read
and execute the file. These permissions mostly matter when working on a
server with multiple people, like a supercomputing cluster. For more
detailed information, please see
`here <https://www.redhat.com/sysadmin/introduction-chmod>`__.

Use an argument on the command line executing a script
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For example, ``$1`` means the first argument on the command line in the
script ``header.sh``.

Running the script
~~~~~~~~~~~~~~~~~~

When we run an executable script in the command line, we need to provide
the path to the script. This is because the system will not check all
directories, including the working directory, for commands.

If you are running a script in the current working directory be sure to
use ``./`` to ensure that it knows to look in the current working
directory: ``./myscript.sh``.

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

Use multiple arguments on the command line executing a script
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Use double quotes around a variable in case a filename happens to
   contain spaces.
-  Use special variables ``$1``, ``$2``, and ``$3``, etc.

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

Use special syntax to handle one or more filenames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Use ``$@`` to indicate all of the command-line arguments to the shell
   script. Add quotations in case of filename spaces ``"$@"``

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
~~~~~~~~~

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__. 

- `Bash Help Sheet <https://www.shell-tips.com/sheets/bash-help-sheet.pdf>`__ has
  shortcuts for quick navigating and editing in your shell 
- `Mastering Bash with Tips and Tricks <https://www.shell-tips.com/shell/>`__ has
  some great examples of how scripts can be used in a variety of ways. 
- `30 Bash Script Examples <https://linuxhint.com/30_bash_script_examples/>`__ depicts
  some basic to more complex scripting examples 
- `StackOverflow <https://stackoverflow.com/questions/1102986/most-powerful-examples-of-unix-commands-or-scripts-every-programmer-should-know>`__ thread of most powerful examples of Unix Commands or Scripts every programmer
  should know. It is old but has some great examples. In general, StackOverflow is a great
  community for technical questions.

