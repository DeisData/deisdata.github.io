=================================
How to suggest structural changes
=================================

When making large changes to a Sphinx document or set of documents, it is easiest
if you have locally installed Sphinx to your machine. This allows you to locally 
build the website to check that your changes work as intended. 

Necessary installations for local builds
========================================

Install GitBash
---------------

If you have MacOS, you can skip this step

Install Miniconda
-----------------

You will need to install a Python distribution in order to run Sphinx. 
We recommend to installing Anaconda

Install a text editor
---------------------

To edit the document files, you will need a text editor. We recommend VS Code,
as it is a flexible editing environment. Once you install VS Code, make sure to
also install the Python extension. 

Install sphinx and dependencies
-------------------------------

furo
sphinx-inline-tabs
sphinx_toolbox
sphinx-reredirects

Check the requirements.txt file for the full list

Making changes
==============

Clone the repository
--------------------

Clone forked repo and use a text editor (like VS Code)
Make sure to stage and commit all changes
Adding a new set of pages 

Make sure to update the toctree of relevant documents to include any 
documents you add. When you build the website, you'll get a warning 
if theres a document that's not included in any toctree.

Make sure to build locally to test what the changes look like

make html
---------

Once you've edited documents, you will want to deploy the website on
your local machine to ensure all the changes you've made are working as intended.
Anyone reviewing the changes should also do this before deploying the changes
to the live website.

To do this, we'll be using the ``make html`` command. This command will build the 
website and render the .rst documents into html files.

Make sure you navigate to the ``docs`` directory before running ``make html``. 

The ``make html`` command sometimes runs into issues when run repeatedly without
making changes to any documents, even if you change other files. If this occurs,
make a small change to a document (like adding space or blank line) and then rerun 
``make html``.

Once ``make html`` runs successfully, go to your file browser and find the folder
for the website. The html files you've just built will be in ``docs/build/html``.
You can open these files in any browser by double clicking them, and from here, you 
can navigate the site just like you would on the live website.

Once you are ready, you can commit your changes and push them to your forked repo.
Due to the default .gitignore settings, the build will not be commited; 
only the source files will be in version control.

Liberally link Sphinx documentation
