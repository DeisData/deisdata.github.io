Setup and installation
======================

In this workshop, we are using **Git** and
`GitHub.com <https://github.com/>`__.

**Git** is a version control system that lets you track who made
changes, when those changes were made, and what they were. It allows for
easily updating a version of your work.

**GitHub.com** allows you to host repositories online to collaborate
with others on your projects. You will need a free GitHub account for
part of this workshop.

Register for a GitHub Account
-----------------------------

Go to `GitHub.com <https://github.com>`__, register for an account, and
verify it.

Git Installation Instructions
-----------------------------

Windows
~~~~~~~

Install `Git Bash <https://gitforwindows.org/>`__ (also called Git for
Windows). Detailed instructions can be found via `the Software
Carpentry <https://carpentries.github.io/workshop-template/#shell>`__.

MacOS
~~~~~

Open Terminal. It should be located in ``Applications/Utilities``. You
can use Spotlight to locate it, as well (:kbd:`cmd+space` and type
“Terminal”).

Type ``which git`` and press :kbd:`Return`. If it prints a path
(e.g. ``/usr/bin/git``), Git is already installed.

If no path is printed, follow the instructions at `Software
Carpentry <https://carpentries.github.io/workshop-template/#git>`__ for
MacOS.

Linux
~~~~~

Open the terminal. Type ``which git`` and press Enter. If it prints a
path (e.g. ``/usr/bin/git``), Git is already installed. If not, for
Debian/Ubuntu run ``sudo apt-get install git`` and for Fedora run
``sudo dnf install git``.

Configure git global settings
-----------------------------

When we use Git on a new computer for the first time, we need to
configure a few settings. Below are a few examples of configurations we
will set as we get started with Git: 

- our name and email address 
- what our preferred text editor is 
- and that we want to use these settings globally (i.e., for every project).

**Windows**: Open “Git Bash”, or run the command ``bash`` in your
Command Prompt.

**MacOS**: Open a bash shell in Terminal.

**Linux**: Use your terminal.

In the bash shell, run the following commands (with your information).
The leading ``$`` indicates that the command should be run in ``bash``;
do not insert an additional ``$`` in your own terminal. If these
configuration commands are successful, nothing will print to the
terminal.

To use ``git`` commands, we use the syntax ``git SOME_COMMAND``. We will
be using ``git config`` with some added parameters to set up ``git``. We
will also add the flag ``--global`` to make sure these settings apply to
any of our future repositories.

Name configuration
~~~~~~~~~~~~~~~~~~

To configure your username, run the following code, replacing "InigoMontoya"
with your GitHub username.

.. tab:: Bash

   .. code:: bash

      $ git config --global user.name "InigoMontoya"

Email configuration
~~~~~~~~~~~~~~~~~~~

-  Log in to `GitHub.com <https://github.com>`__
-  Click on your profile icon at the top right corner
-  Go to Settings
-  Click on Emails in the left menu
-  Select the check box “Keep my email addresses private” and use the
   private github.com-supplied email listed in the configuration below the check box.
   You can highlight and copy it with :kbd:`Ctrl+C` or :kbd:`cmd+C` (Mac), and
   paste to the command line with :kbd:`Ctrl+V` or :kbd:`cmd+V`.

Again, remember to replace the email listed below with the private email mentioned above.

.. tab:: Bash

   .. code:: bash

      $ git config --global user.email "1234username@users.noreply.github.com"

Line Heading configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~

As with other keys, when you hit Return on your keyboard, your computer
encodes this input as a character. Different operating systems use
different character(s) to represent the end of a line. Because Git uses
these characters to compare files, it may cause unexpected issues when
editing a file on different machines.

**Windows**

.. tab:: Bash

   .. code:: bash

      $ git config --global core.autocrlf true

**MacOS and Linux**

.. tab:: Bash

   .. code:: bash

      $ git config --global core.autocrlf input

Editor configuration
~~~~~~~~~~~~~~~~~~~~

In these sessions, we will be using a basic editor called nano. There
are other ways to configure for more popular editors
`here <http://swcarpentry.github.io/git-novice/02-setup/index.html>`__.

.. tab:: Bash

   .. code:: bash

      $ git config --global core.editor "nano -w"

Check your settings at any time with:

.. tab:: Bash

   .. code:: bash

      $ git config --list

Recap:
------

-  ``git config --global``: set up your settings across all your repos

Resources
---------

-  `GitHub Docs <https://docs.github.com/en/get-started>`__
-  `Atlassian <https://www.atlassian.com/git/tutorials/setting-up-a-repository>`__

This workshop has been adapted from `the Software Carpentry <https://software-carpentry.org/>`__.

