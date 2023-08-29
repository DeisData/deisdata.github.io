=============================
Quick start to Git and GitHub
=============================


This guide will show you the basics of making a repository on GitHub,
cloning it to your machine, and committing changes to version control.

Create a remote repository on GitHub
====================================

Go to GitHub and create a new repository by clicking **New**.

.. figure:: /_static/images/git/quick-start/github_newrepo.png
   :alt: Make a repo

Give your repo a short but descriptive name without spaces or special
characters. Note that your account cannot have two repos with exactly
the same name.

.. figure:: /_static/images/git/quick-start/github_reponame.png
   :alt: Name your repo

You can choose whether or not to make your repository to be private. If
you plan to collaborate with others, you are required to have a public
repository unless you pay for a premium GitHub account.

Make sure to initialize with a README, which will give general
information about your repository. You can also initialize with a
license, which defines what others can and cannot do with your code. For
more information, see `the Software Carpentry’s primer on
licenses <https://swcarpentry.github.io/git-novice/11-licensing/index.html>`__.

Clone the remote repository to your machine
===========================================

To get this repository onto our local machine, we will clone it, which
copies its contents. Go to the repository you just made on GitHub. You
will see a ``README.md`` file and a license file. Click on **Code**,
which opens a dropdown menu. Copy the **HTTPS** link, which will be
``https://github.com/{USERNAME}/{REPO-NAME}.git``, with your username
and repo name, respectively, with no brackets.

.. figure:: /_static/images/git/quick-start/github_clone.png
   :alt: clone repo

Go back to your terminal. Create a new ``GitHub`` folder in your home
directory by running:

.. tab:: Bash

   .. code:: bash

      $ mkdir ~/GitHub

This uses the Unix command ``mkdir`` (Make Directory) to create a new
folder. We then want to go to that folder with the ``cd`` (Change
Directory) command.

.. tab:: Bash

   .. code:: bash

      $ cd ~/GitHub

To clone your repository, run the following, again inserting your link:

.. tab:: Bash

   .. code:: bash

      $ git clone https://github.com/{USERNAME}/{REPO-NAME}.git

Move to your newly cloned local repository and list the files with
``ls`` command.

.. tab:: Bash

   .. code:: bash

      $ cd {REPO-NAME}
      $ ls

You should see the names of the files ``LICENSE`` (if you made one) and
``README.md`` printed to the terminal.

Alter the README
================

You now have a local **downstream** repository on your machine. The
remote GitHub repository is referred to as the **upstream** repository.
If other users make changes reflected in the upstream repository, you
will receive and implement them locally.

We are going to write a line of text to the README and commit that
change to version control.

First, we are going to use a text editor called ``nano`` to open
``README.md``.

.. tab:: Bash

   .. code:: bash

      $ nano README.md


.. figure:: /_static/images/git/quick-start/nano1.png
   :alt: nano blank

Tap the :kbd:`↓` key to get to a new line. Type whatever your heart desires
(“Hello World!” is a classic). To save or “write” your changes, press
:kbd:`Ctrl+O`, and then hit Return. Press :kbd:`Ctrl+X` to exit ``nano``.

Note: use :kbd:`Ctrl` regardless of your OS.

.. figure:: /_static/images/git/quick-start/nano2.png
   :alt: nano blank

Now that you’ve made a change, you can check the status of the
repository with ``git status``.

.. tab:: Bash

   .. code:: bash

      $ git status

.. figure:: /_static/images/git/quick-start/git_status.png
   :alt: git status

This command prints out a lot of information. It says we are on the main
branch (more on this in the future). It says we are up to date with
``origin/main``. This means thats GitHub doesn’t have any commits that
aren’t present locally, and we don’t have any local commits that aren’t
reflected in GitHub. It then lists ``README.md`` in red as modified but
not yet staged, as well the commands for how to stage it. Finally, it
says that nothing has yet been added to commit yet.

Stage modified file
-------------------

We want to stage our modified file. Staging a file means we want to
commit it. To do this, we’ll use the ``git add`` command.

.. tab:: Bash

   .. code:: bash

      $ git add README.md

If we run ``git status`` again, we’ll see that ``README.md`` is now
staged for commit and in green text.

.. figure:: /_static/images/git/quick-start/git_add.png
   :alt: git add

Make a commit
-------------

Now we are ready to commit these changes. We are going to use
``git commit`` with a message flag (``-m``). The message we write should
give a short description of the changes you made in this commit.

.. tab:: Bash

   .. code:: bash

      $ git commit -m "Updated the README"

The terminal will print out some information about your commit including
how many files were changed and how many lines were inserted and
deleted.

If we run ``git status`` again, we’ll notice a few things.

.. tab:: Bash

   .. code:: bash

      $ git status

.. figure:: /_static/images/git/quick-start/post_commit.png
   :alt: post commit

It now tells us that we no longer have any changes to commit in our
local repository. It also is telling us that we are ahead of the
upstream repository on GitHub by 1 commit. This is because our changes
have not yet been sent or “pushed” to that remote repository yet.

Recap
=====

-  ``git clone``: copy a remote repository locally
-  ``git status``: shows what is in staging and was is being commited.
-  ``git add file_name``: Moves a file to staging.
-  ``git commit -m "Detailed log message goes here."``: Commits files in
   staging to history and documents message to the log.

Resources
=========

-  `GitHub Docs <https://docs.github.com/en/get-started>`__
-  `Atlassian <https://www.atlassian.com/git/tutorials/setting-up-a-repository>`__

This workshop has been adapted from `the Software
Carpentry <https://software-carpentry.org/>`__.

