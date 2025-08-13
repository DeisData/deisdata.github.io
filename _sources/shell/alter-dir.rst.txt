Altering directories
====================

.. raw:: html

   <div style="max-width:960px"><div style="position:relative;padding-bottom:56.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_nckeglmv&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_tzs4jeav" width="960" height="540" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Unix Shell 3: Altering Directories" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>

Questions to think about:
-------------------------

-  How can I create, copy, and delete files and directories?
-  How can I edit files?

Creating Directories or Files
-----------------------------

``mkdir`` creates a new directory, followed by the name of the new
directory.

.. tab:: Bash

   .. code:: bash

      $ mkdir new_dir
      $ ls -F

.. tab:: Output

   .. code:: none

      new_dir/

``mkdir -p`` can be used to make subdirectories.

.. tab:: Bash

   .. code:: bash

      $ mkdir -p code/python/analysis
      $ ls -RF # displays subdirectory structure

.. tab:: Output

   .. code:: none

      code/

      ./code:
      python/

      ./code/python:
      analysis/

      ./code/python/analysis:

``nano filename.txt`` runs a text editor called ``nano`` to create a new
file by the name given. For example, ``nano thesis.txt`` creates a text
file named ``thesis.txt`` in the working directory.

.. tab:: Bash

   .. code:: bash

      $ nano filename.txt

.. figure:: /_static/images/shell/alter-dir/nano.png
   :alt: nano

``touch filename.txt`` creates an empty (0 byte) file by the new name
given. Why bother? Some programs require empty files to populate with
output.

.. tab:: Bash

   .. code:: bash

      $ touch filename2.txt
      $ ls -F

.. tab:: Output

   .. code:: none

      filename.txt
      filename2.txt

Moving or renaming directories or files safely
----------------------------------------------

``mv filename.txt new_location`` command move has two arguments. The
first tells ``mv`` what we’re moving, while the second is where it will
go.

.. tab:: Bash

   .. code:: bash

      $ mv filename.txt new_dir
      $ ls -F new_dir

.. tab:: Output

   .. code:: none

      filename.txt

``mv -i`` or ``mv -interactive`` must be used to make ``mv`` ask for
confirmation before overwriting any existing file or directory with the
same name as the second argument. (Otherwise, beware! It will silently
overwrite.)

Copying directories and/or files
--------------------------------

``cp old new`` command copies a file (first argument) to a new location
(second argument).

.. tab:: Bash

   .. code:: bash

      $ cp filename2.txt new_dir
      $ ls -F

.. tab:: Output

   .. code:: none

      filename2.txt
      new_dir/

-  ``cp -r`` adds the recursive option to copy a directory and all its
   contents to another directory (second argument). For example, we can
   make a backup with ``cp -r thesis thesis_backup``.
-  ``cp`` can be used on multiple filenames as long as a destination
   directory is the last argument. For example,
   ``cp a.txt b.txt c.txt backup/`` will copy the three text files into
   the subdirectory ``backup/``.

Removing files and directories safely: **Deleting is forever**
--------------------------------------------------------------

``rm`` is used to remove items from a directory. Using it without any
options, however, can be dangerous, as deleted items do not go to a
trash or recycling bin.

-  ``rm -i path`` command for remove with interactive option to ask for
   confirmation before deleting.
-  ``rm -i -r path`` command with interactive option and recursive
   option will **remove a directory and all its contents** with
   confirmation prompts.

.. tab:: Bash

   .. code:: bash

      $ rm -i -r new_dir
      $ ls

.. tab:: Output

   .. code:: none


      filename2.txt

Tips for good names for files and directories
---------------------------------------------

1. Don’t use spaces. Use ``-`` or ``_`` or *camelCase*.
2. Don’t begin a name with a ``-`` (dash). It will look like a command
   option. Names should start with letters or numbers.
3. Avoid special characters. Some have special meanings.

.. note::
   
   If you need to refer to names of files or directories that have spaces,
   put them in quotes (““).

What’s in a name?
~~~~~~~~~~~~~~~~~

A **filename extension** is the second part of the filename after the
dot (``.``). They help us and programs tell different kinds of files
apart. A few examples: 

- .txt: plain text file 
- .csv: comma separated value file 
- .pdf: PDF document 
- .cfg: configuration file of parameters
  for a program 
- .png: an image file

The **wildcard** ``*`` matches zero or more characters. For example, to
copy all text files in a directory, use ``cp *.txt DIR_NAME``.

The **wildcard** ``?`` matches exactly one character.

Which editor should I use?
--------------------------

``nano`` is a built-in text editor that only works with plain character
data (i.e. no tables, images, or other media). It is the least complex,
but you may want to try more powerful editors.

**For Unix Systems (Linux and macOS)** 

- `Emacs <http://www.gnu.org/software/emacs>`__ 
- `Vim <http://vim.org/>`__ 
- `Gedit <http://projects.gnome.org/gedit/>`__ is a graphical editor

**For Windows** 

- `Notepad++ <http://notepad-plus-plus.org/>`__ 
- ``notepad`` is built-in and can be run in the command line

.. admonition:: Editor tips

   If you start an editor from the shell, it will use your current working
   directory as its default location.

   In editor commands, the Control key is also referred to as :kbd:`Ctrl` or :kbd:`^`.

Challenge Questions
-------------------

**(1) Moving files.** We accidentally put the files ``sucrose.dat`` and
``maltose.dat`` into the wrong folder, ``analyzed/``. Fill in the blanks
to move these files into the ``raw/`` folder.

.. tab:: Bash

   .. code:: bash

      $ ls -F
      analyzed/  raw/
      $ ls -F analyzed/
      fructose.dat glucose.dat maltose.dat sucrose.dat
      $ cd analyzed

My next line of code should be (fill in the blanks):

.. tab:: Bash

   .. code:: bash

      $ mv sucrose.dat matose.dat ___/___


.. collapse:: Solution 

   .. container::

      Think about ``../raw`` Recall that ``..`` refers to the parent
      directory (i.e. one above the current directory).


**(2) Renaming Files.** We mispelled a filename! Which of the following
commands will correct our mistake?


a. ``cp statstics.txt statistics.txt``
b. ``mv statstics.txt statistics.txt``
c. ``lmv statistics.txt .``
d. ``cp statstics.txt .``

.. collapse:: Solution

   .. container::

      a. Will copy the file, so we will end up with the mispelled and correct version.
      b. Will move (i.e. rename) the incorrect file name to a correct filename.
      c. Not a working command.
      d. Will not work. Remember ``.`` is the current directory.

**(3) Removal.** What happens when we execute
``rm -i thesis/finaldraft.txt``? Why would we want this protection when
using ``rm``?

.. collapse:: Solution

   .. container::

      The program will confirm that we want to delete the thesis final
      draft file. Remember, deletion is forever! There is no trash can or
      recycle bin.

**(4) Removal.** What is wrong with the command ``rm -i thesis``?

.. collapse:: Solution

   .. container::

      The remove command will not act on a directory unless the recursive
      option ``-r`` is given.


**(5) Removal.** What is wrong with the command ``rm -r thesis``?

.. collapse:: Solution

   .. container::

      This remove command will successfully delete the directory thesis and
      all its contents, but we forgot to check for confirmation with the
      interaction option (-i). Remember, deletion is permanent!

**(6) Wildcards.** Which of the following matches the file names
``ethane.dat`` and ``methane.dat``?

a. ``ls ?ethane.dat``
b. ``ls *ethane.dat``
c. ``ls ???ane.dat``
d. ``ls ethane.*``

.. collapse:: Hint

   .. container::

      Remember the ``?`` wildcard matches to exactly one character. The ``*``
      wildcard can match to zero to many characters.

.. collapse:: Solution


   .. container::

      a. Matches ``methane.dat`` only (needs one character before ``ethane.dat``).
      b. Matches both, can have any number of characters (including zero) before ``ethane.dat``.
      c. Matches ``ethane.dat`` only (requires only 3 characters before ``ane.dat``).
      d. Matches ``ethane.dat`` only (requires no characters before ``ethane``).

Challenge Project
~~~~~~~~~~~~~~~~~

Before heading on a trip, you want to back up your data and send some
datasets to your research mentor. Fill in the following commands to get the job done.

First, let’s set up a directory and files.

.. tab:: Bash

   .. code:: bash

      # Hashtag denotes a comment. The line will be skipped

      # Change to your desktop 
      cd ~/Desktop

      # Make a new folder for our fake data
      mkdir fake_data
      cd fake_data

      # Create some empty files.
      touch 2020-06-09-data.txt
      touch 2020-06-09-calibration.txt

      # Make sure the new files are created. Notice we can combine options)
      ls -Fs

      # Let's add some info to our file and confirm it with the editor (spoiler alert - redirects!)
      echo Hello World > 2020-06-09-data.txt
      nano 2020-06-09-data.txt

      # Let's edit and add information to another.
      nano 2020-06-09-calibration.txt

The next piece is provided in the shell script ``session2challenge.sh``.

While in your ``fake_data`` directory, copy and paste the code from this
file and run it.

.. tab:: Bash

   .. code:: bash

      # session2challenge.sh creates more fake data and callibration files

      fmonth="2020-06"
      echo $fmonth

      # Loop through days to create data files and calibration files
      for i in `seq -w 10 30`
      do
         # Define the filename
         printf -v fname '%s-%02d-data.txt' "$fmonth" "$i"
         # Create an empty file
         touch "$fname"
         # Redirect in some data
         echo data $i > "$fname"
         
         printf -v fname '%s-%02d-calibration.txt' "$fmonth" "$i"
         touch "$fname"
         echo $i > "$fname"
      done

Now, it’s your turn! 

1. Create a backup directory with separate
   subdirectories for data and calibration files. Copy files to the
   appropriate locations. 
2. Create a directory named send_to_mentor and copy all the data from June 11th to it.

.. collapse:: Hint

   .. container::

      Create a backup directory with subdirectories for data and calibration files

      -  Hint: You will use ``mkdir``

      .. tab:: Bash

         .. code:: bash

            mkdir ___
            mkdir ___/___
            mkdir ___/___

      Copy data files to ``backup/data``. (Use a similiar approach for calibration files.) 

      -  Hint: Use the copy command ``cp`` with wildcards

      .. tab:: Bash

         .. code:: bash

            cp *-data.txt backup/___

      Copy June 11th files to ``send_to_mentor/``.

      -  Hint: Use the copy command ``cp`` with wildcards!

      .. tab:: Bash

         .. code:: bash

            cp *-11-*.txt send_to_mentor/


Resources
~~~~~~~~~

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__.

