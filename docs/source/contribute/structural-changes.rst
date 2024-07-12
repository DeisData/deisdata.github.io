=================================
How to suggest structural changes
=================================

When making large changes to a Sphinx document or set of documents, it is easiest
if you have locally installed Sphinx to your machine. This allows you to locally 
build the website to check that your changes work as intended. 

Necessary installations for local builds
========================================

Install Git
-----------

To clone the website your repository, you will need Git installed 
on your machine. This allows you to interact with the GitHub repository
and commit your changes to version control. 

Please follow :doc:`our instructions for installing Git </git/setup-install>`.

Install Miniconda
-----------------

You will need to install a Python distribution in order to run Sphinx. 
We recommend to installing Anaconda or Miniconda. Anaconda contains
hundreds of pre-installed packages, none of which we need for this project
however. Miniconda, on the other hand, simply includes the tools we need
to install a virtual Python environment to use for this project using ``conda``.

If you already have a Python distribution installed and would like to use it,
you can skip this installation.

Installation adapted from the `Anaconda documentation <https://docs.anaconda.com/free/miniconda/index.html>`__.

.. tab:: Windows

    1. Open Git Bash.
    2. Download the installer by running this command in Git Bash:
       
       .. code:: bash

            curl https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe -o miniconda.exe
    3. Run the installer:
       
       .. code:: bash

            ./miniconda.exe
    4. This will open a graphical interface to install. Follow the instructions and 
       accept the defaults until you reach **Advanced Installation Options**. If you use
       another Python installation and would like to keep using it primarily, uncheck 
       "Register Miniconda3 as my default Python 3.12".
    5. Click "Install" and then "Next" and "Finished" once completed.
    6. Remove the installer:
       
       .. code:: bash
            
            rm miniconda.exe
    7. To make sure you have access to conda when booting Git Bash,
       run the following:

       .. code:: bash

            echo '. ~/miniconda3/etc/profile.d/conda.sh' >> ~/.bashrc
    8. Restart Git Bash.

.. tab:: MacOS

    1. Open Terminal.
    2. Make a directory to store miniconda in with this command in Terminal:
       
       .. code:: bash

            mkdir -p ~/miniconda3

    3. Download the installer:
       
       .. code:: bash

            curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh

    4. Run the installer:
       
       .. code:: bash

            bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
    
    5. Remove the installer file:
       
       .. code:: bash

            rm -rf ~/miniconda3/miniconda.sh

    6. Initialize conda in bash and zsh:
       
       .. code:: bash

            ~/miniconda3/bin/conda init bash
            ~/miniconda3/bin/conda init zsh   

.. tab:: Linux

    1. Open Terminal.
    2. Make a directory to store miniconda in with this command in Terminal:
       
       .. code:: bash

            mkdir -p ~/miniconda3

    3. Download the installer:
       
       .. code:: bash

            wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh


    4. Run the installer:
       
       .. code:: bash

            bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
    
    5. Remove the installer file:
       
       .. code:: bash

            rm -rf ~/miniconda3/miniconda.sh

    6. Initialize conda in bash and zsh:
       
       .. code:: bash

            ~/miniconda3/bin/conda init bash
            ~/miniconda3/bin/conda init zsh   

To use conda, you can use ``conda activate``:

.. code:: bash

    conda activate

This will slightly change your console view to add ``(base)``, which is
the default conda environment. To make conda activate when you open your console, you can run:

.. code:: bash

    echo 'conda activate' >> ~/.bashrc

When you reboot, the change will be in effect.

Install a text editor
---------------------

To edit the document files, you will need a text editor. We recommend `VS Code <https://code.visualstudio.com/>`__,
as it is a flexible editing environment. Once you install VS Code, make sure to
also install the `Python extension <https://marketplace.visualstudio.com/items?itemName=ms-python.python>`__. 

Install sphinx and dependencies
-------------------------------

First, we're going to use ``conda`` to create a virtual environment. 
This allows us to download and install different software with 
compatible versions to installed without conflicts arising. 

.. code:: bash

    conda create -n sphinx
    conda activate sphinx

You should now be inside your new conda environment. We're going to install
``sphinx`` with conda. 

.. code:: bash

    conda install sphinx

Once you run this command, you'll eventually see a list of packages that will be
installed along with sphinx. These are dependencies that sphinx needs to work
that will be installed along with it. Type ``y`` and hit enter when prompted.

We need to install some necessary packages for our specific project. 

.. code:: bash   

    conda install -c conda-forge furo sphinx-inline-tabs sphinx-toolbox sphinx-reredirects sphinxcontrib-youtube

``-c conda-forge`` specifies that we are installing these from ``condaforge``. ``furo`` 
is used for the specific style of our website. ``sphinx-inline-tabs`` is used to create 
tabs, mostly used to show code languages and/or output. ``sphinx-toolbox`` is used for a 
variety of different utilities. ``sphinx-reredirects`` handles redirects of pages.
``sphinxcontrib-youtube`` allows easy embedding of YouTube videos.


Check the ``source/requirements.txt`` file for the full list of required sphinx packages.

Making changes
==============

Clone the repository
--------------------

If you have not already, make sure to fork the repository to your 
personal GitHub account. Once you've made the fork, you can :doc:`clone </git/quick-start>` 
your forked repo and use a text editor (like VS Code).

Adding a new set of pages 
~~~~~~~~~~~~~~~~~~~~~~~~~

While you can in theory place a new document RST file anywhere in the
``source/`` directory, our structure is to put the home page of a topic
directly in the ``source/`` directory. The subpages for that topic are 
stored in subdirectories of ``source/``. For example, the ``Python`` 
documents are stored in ``source/python/``. Please follow this convention
when adding any new pages. 

Make sure to update the toctree of relevant documents to include any 
documents you add. When you build the website, you'll get a warning 
if there is a document that's not included in any toctree.

Make sure to :doc:`stage and commit </git/quick-start>` all changes you make in the repository. 

``make html``
-------------

Once you've edited documents, you will want to deploy the website on
your local machine to ensure all the changes you've made are working as intended.
Anyone reviewing the changes should also do this before deploying the changes
to the live website.

To do this, we'll be using the ``make html`` command. This command will build the 
website and render the .rst documents into html files.

**Make sure you navigate to the** ``docs/`` **directory and run** ``conda activate sphinx`` 
**before running** ``make html``. 

The ``make html`` command sometimes runs into issues when run repeatedly without
making changes to any documents, even if you change other files. If this occurs,
make a small change to a document (like adding space or blank line) and then rerun 
``make html``.

Once ``make html`` runs successfully, go to your file browser and find the folder
for the website. The html files you've just built will be in ``docs/build/html/``.
You can open these files in any browser by double clicking them, and from here, you 
can navigate the site just like you would on the live website.

Once you are ready, you can commit your changes and push them to your forked repo.
Due to the default .gitignore settings, the build will not be commited; 
only the source files will be in version control.
