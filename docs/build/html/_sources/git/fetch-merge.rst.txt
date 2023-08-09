Fetch and merge from GitHub
===========================

If we are collaborating with others on a project, often our local
repository will be out of sync with the remote GitHub repository. In the
simplest case, we will simply be one or more commits behind what is on
GitHub.

To address this, we first want to **fetch**, or retrieve, any commits
from GitHub and then **merge** them into our local repository. For
instance, if someone has created a new file ``data.text`` and committed
it to the GitHub repo, we can run ``git fetch`` followed by
``git merge`` to have that file reflected on our machine.

If we are simply behind what is on GitHub, it will be a painless process
that updates our local repository. When collaborating with others, it is
a healthy practice to run these commands before we make any changes and
before we push changes.

Make changes to the README on GitHub
------------------------------------

To demonstrate how this might work, we are going to alter and commit a
file on GitHub and then fetch and merge this commit locally.

1. Go to your repository on GitHub.
2. Click on ``README.md`` and then go into edit mode either by clicking
   the edit button (looks like a pencil) or by tapping E.
3. Write something on the third line.
4. Scroll down and write a commit message. You don’t need an extended
   description.
5. Make sure “Commit directly to ``main`` branch” is selected, and
   commit changes.

Your change should be reflected in the README.

Retrieve changes locally
------------------------

Go back to terminal and run ``git fetch`` to retrieve the changes. The
terminal will print out some information about the process.

.. code:: bash

   $ git fetch

The commit is now in our local system, but the change is not yet
reflected in our file yet. We can see this by running ``cat``, which
will print out our file.

.. code:: bash

   $ cat README.md

To view the differences between our local file and the new commit, we
can run the ``git diff`` command with some specifications for the file
we’re interested in and the two sources of the file.

::

   $ git diff HEAD origin/main README.md

.. figure:: /_static/images/git/fetch-merge/git_diff.png
   :alt: git diff

   git diff

This command and the output are somewhat complicated, so let’s step
through them.

-  ``HEAD`` specifies our local version of the file.
-  ``origin/main`` specifies the version of the file commited on GitHub.
   We’ll get into exactly what this means later.
-  Putting ``HEAD`` and ``origin/main`` in the command followed by
   ``README.md`` means that we want to compare the differences between
   the two versions of the README.
-  The output labels the ``HEAD`` version as ``a/README.md`` and the
   ``origin/main`` version as ``b/README.md``.
-  Lines marked as ``-`` are present in the local file, and lines with
   ``+`` are the incoming version.

The output shows a red ``-`` on a blank line and a green ``+`` on the
line with new text. This means that in our local file, there is a blank
line, whereas in the new version, there is text. This means that if we
run ``git merge``, this will cause the blank line to become text
locally.

We can now merge the file. A summary will print after we do so.

.. code:: bash

   $ git merge

.. figure:: /_static/images/git/fetch-merge/git_merge.png
   :alt: git merge

   git merge

*Note: The command ``git pull`` is equivalent to running ``git fetch``
immediately followed by ``git merge``, though it may lead to some
unexpected behavior at times.*

If you run ``cat README.md`` again, you will see the change present in
our local file. If we want to see a history of changes in this
repository, you can use ``git log``.

.. code:: bash

   $ git log

.. figure:: /_static/images/git/fetch-merge/git_log.png
   :alt: git log

   git log

This will print out information on all of this repo’s commits,
including, the commit ID, the author of the commit, when the commit was
made, and its description. You can hit Enter to scroll down or use the
arrow keys to go either direction. Hit Q to exit this view.

Recap
-----

-  ``git fetch``: retrieve commits from a remote repository (GitHub)
-  ``git merge``: merge remote commits with local changes
-  ``git diff``: display the difference between working and committed
   file
-  ``git log``: shows the history of commits

