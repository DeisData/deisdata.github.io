=======================
reStructuredText basics
=======================

The base language for this website is reStructuredText (RST). It is used 
to produce documents with formatted text, similar to the language markdown. RST documents are built into HTML web pages with the help of Sphinx, a document generator. 

RST Syntax
==========

Plain text
----------

In RST, lines of code that are not formatted will be displayed as text. 
Long lines of text will be wrapped into a single paragraph when rendered. 

.. tab:: RST

    .. code:: rst

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultrices magna, ac volutpat nisi. Sed sed finibus libero, eget luctus massa. Praesent pulvinar orci in metus mollis consectetur. Integer gravida dolor ut quam efficitur euismod. Phasellus vitae elementum massa. Praesent volutpat sed purus id mollis. Maecenas sit amet libero ac mauris porta mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur augue hendrerit at.

.. tab:: Output

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultrices magna, ac volutpat nisi. Sed sed finibus libero, eget luctus massa. Praesent pulvinar orci in metus mollis consectetur. Integer gravida dolor ut quam efficitur euismod. Phasellus vitae elementum massa. Praesent volutpat sed purus id mollis. Maecenas sit amet libero ac mauris porta mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur augue hendrerit at.

In addition, subsequent lines of text will be considered one paragraph, 
as well. This is to enhance readability of the RST files.

.. tab:: RST

    .. code:: rst

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec at ultrices magna, ac volutpat nisi. Sed sed finibus 
        libero, eget luctus massa. Praesent pulvinar orci in metus 
        mollis consectetur. Integer gravida dolor ut quam efficitur 
        euismod. Phasellus vitae elementum massa. Praesent volutpat 
        sed purus id mollis. Maecenas sit amet libero ac mauris porta 
        mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada 
        pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur 
        augue hendrerit at.

.. tab:: Output

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec at ultrices magna, ac volutpat nisi. Sed sed finibus 
    libero, eget luctus massa. Praesent pulvinar orci in metus 
    mollis consectetur. Integer gravida dolor ut quam efficitur 
    euismod. Phasellus vitae elementum massa. Praesent volutpat 
    sed purus id mollis. Maecenas sit amet libero ac mauris porta 
    mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada 
    pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur 
    augue hendrerit at.

If you separate lines of text with blank lines in between, this creates 
a new paragraph.

.. tab:: RST

    .. code:: rst

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec at ultrices magna, ac volutpat nisi. Sed sed finibus 
        libero, eget luctus massa. Praesent pulvinar orci in metus 
        mollis consectetur. Integer gravida dolor ut quam efficitur 
        euismod. 
        
        Phasellus vitae elementum massa. Praesent volutpat 
        sed purus id mollis. Maecenas sit amet libero ac mauris porta 
        mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada 
        pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur 
        augue hendrerit at.

.. tab:: Output

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec at ultrices magna, ac volutpat nisi. Sed sed finibus 
    libero, eget luctus massa. Praesent pulvinar orci in metus 
    mollis consectetur. Integer gravida dolor ut quam efficitur 
    euismod. 
    
    Phasellus vitae elementum massa. Praesent volutpat 
    sed purus id mollis. Maecenas sit amet libero ac mauris porta 
    mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada 
    pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur 
    augue hendrerit at.

Headers and titles
------------------

RST has the ability to make headers in your document by underlining text 
with different characters. 

.. tab:: RST

    .. code:: rst

        My header
        =========


Titles can also be made with underling and overlining equals signs. 

.. tab:: RST

    .. code:: rst

        ========
        My Title
        ========

Please visit the `documentation <https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#sections>`__ 
for more information on headings.

In-line text formatting
-----------------------

Any text can be formatted to be italic, bold, or as in-line code.

.. tab:: RST

    .. code:: rst

        *italics*
        
        **bold**

        ``inline code``

.. tab:: Output

    *italics*
    
    **bold**

    ``inline code``

You can also make bulleted and numbered lists. If you would like to put an 
entry on two adjacent lines for visual clarity, make sure the second line 
is tabbed over to start at the same horizontal location as the previous 
line.

.. tab:: RST

    .. code:: rst

        -  Small bullet
        -  Multi-line 
           bullet point
        -  Small bullet

        1. Number 1
        2. Number 2
           is longer
        3. Number 3

.. tab:: Output

    -  Small bullet
    -  Multi-line 
       bullet point
    -  Small bullet

    1. Number 1
    2. Number 2
       is longer
    3. Number 3


You can also do sub-bullets with additional tabbing. 

.. tab:: RST

    .. code:: rst

        -  Main bullet
            -  sub bullet
        - Another main bullet

.. tab:: Output

    -  Main bullet
        -  sub bullet
    - Another main bullet

Directives
==========

Some formatted text requires using a directive. This is a way to denote a 
block of code for a specific purpose. There are some built-in directives, 
but also many from extensions that we will use.  ``.. code::``, 
for instance, creates a code block with highlighting of the specified 
language. 

.. tab:: RST

    .. code:: rst

        .. code:: python

            def my_func():
                print('hello world')

.. tab:: Output

    .. code:: python

        def my_func():
            print('hello world')    

There are many codecs you can use for code highlighting, which you can
view `here <https://docs.typo3.org/m/typo3/docs-how-to-document/main/en-us/WritingReST/Reference/Code/Codeblocks.html>`__. 

Similarly, sphinx_inline_tabs gives access to the ``.. tab::`` 
directive. This is commonly used throughout this site to display code and 
output. The text following the directive will be used as the name on the tab.

.. tab:: RST

    .. code:: rst

        .. tab:: First tab

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec at ultrices magna, ac volutpat nisi. Sed sed finibus 
            libero, eget luctus massa. Praesent pulvinar orci in metus 
            mollis consectetur. Integer gravida dolor ut quam efficitur 
            euismod. 
        
        .. tab:: Second tab
        
            Phasellus vitae elementum massa. Praesent volutpat 
            sed purus id mollis. Maecenas sit amet libero ac mauris porta 
            mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada 
            pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur 
            augue hendrerit at.
    
.. tab:: Output

    .. tab:: First tab

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec at ultrices magna, ac volutpat nisi. Sed sed finibus 
        libero, eget luctus massa. Praesent pulvinar orci in metus 
        mollis consectetur. Integer gravida dolor ut quam efficitur 
        euismod. 
        
    .. tab:: Second tab
    
        Phasellus vitae elementum massa. Praesent volutpat 
        sed purus id mollis. Maecenas sit amet libero ac mauris porta 
        mattis. Nam at ullamcorper nulla. Donec eu leo eu nunc malesuada 
        pharetra id ac justo. Nulla facilisis magna ante, vitae consectetur 
        augue hendrerit at.

The spacing and tabbing here is important. Any named arguments must come 
on the next line after the directive and tabbed over. Any content in the 
directive has to be tabbed over and have a blank line after the directive 
and arguments. Nested directives also follow this pattern. 

.. tab:: RST

    .. code:: rst

        .. tab:: Python

            .. code:: python

                print('hello world')
        
        .. tab:: Output

            .. code:: none

                hello world

.. tab:: Output

    .. tab:: Python

        .. code:: python

            print('hello world')
        
    .. tab:: Output

        .. code:: none

            hello world

If you have two sets of tabs one after the other, you can use the
``:new-set:`` argument to separte the sets of tabs.

.. tab:: RST

    .. code:: rst

        .. tab:: Python

            .. code:: python

                print('hello world')
        
        .. tab:: Output

            .. code:: none

                hello world
        
        .. tab:: Python
            :new-set:

            .. code:: python

                print(2 + 4)
            
        .. tab:: Output

            .. code:: none

                6

.. tab:: Output

    .. tab:: Python

        .. code:: python

            print('hello world')
        
    .. tab:: Output

        .. code:: none

            hello world
    
    .. tab:: Python
        :new-set:

        .. code:: python

            print(2 + 4)
            
    .. tab:: Output

        .. code:: none

            6



Toctree
=======

One of the most important directives is the toctree - the table of 
contents tree. It defines the structure of the website and how different 
documents relate to each other. The navigation on the left-hand side of 
the website is determined by the toctrees present in different documents. 
Every document must be listed in another document’s toctree to appear in 
the navigation. 

This is the toctree of ``index.rst``, the base page of the website:

.. code:: rst

    .. toctree::
        :hidden:
        :maxdepth: 2
        :caption: Contents:
        
        python
        R <r>
        shell
        git
        sql
        Contribute to DeisData <contribute>

The toctree directive here has 3 specified parameters. ``:hidden:`` means 
that the toctree will only be displayed in the page navigation and not in 
the main body of the document. ``:maxdepth: 2`` means that the displayed 
toctree will show 2 levels deep. For instance index.rst contains 
``python.rst`` in its toctree, which contains ``setup-install.rst`` in its 
toctree. If ``setup-install.rst`` had documents in its toctree, these would 
not be displayed, as that would be a depth of 3. ``:caption: Contents:`` 
right now is not doing anything because the toctree is hidden, but if it 
were not, this would be the title of it in the document. 

Underneath the arguments are documents we want to include in the toctree. 
The names specified are the names of the documents without the .rst file 
extension. In the navigation, the name specified will be the title of that 
document. If you would like to use a different name, you can write the 
name you prefer and include the name of the document afterwards in angle 
brackets -> ``Contribute to DeisData <contribute>``.

If the document is in a subdirectory of ``source``, like the ``python`` directory, 
you’ll need to specify the relative path to the document from the source 
directory. For example, to add the ``setup-install.rst`` document, you’ll need 
to specify ``python/setup-install``. Sometimes, adding a leading slash is necessary
``/python/setup-install`` depending on the directory.

Links
=====

In RST, we separate links into two categories: external references and 
internal references. External references can go to any URL and are a 
little simpler.

.. tab:: RST

    .. code:: rst

        Check out `this link <https://en.wikipedia.org/wiki/Main_Page>`__.

.. tab:: Output

    Check out `this link <https://en.wikipedia.org/wiki/Main_Page>`__.


Internal references, on the other hand, are used to link to other 
documents or to other labeled points of interest on any given document. 
When linking to documents you can specify the document you want to like 
to with ``:doc:`docname```.

.. tab:: RST

    .. code:: rst

        For more on Python, check out our :doc:`installation guide </python/setup-install>`.

.. tab:: Output

    
    For more on Python, check out our :doc:`installation guide </python/setup-install>`.

We can also make links to internal headings or any other places of 
interest. 

.. tab:: RST

    .. code:: rst

        .. _test reference:

        Some text to reference.

        This points to :ref:`the test reference <test reference>`.


Images
======

You can also include images or figures through a couple of different 
methods, including using the ``.. figure: directive``.

.. tab:: RST

    .. code:: rst

        .. figure:: /_static/images/contribute/cat.jpeg
            :alt: cat pic

.. tab:: Output

    .. figure:: /_static/images/contribute/cat.jpeg
        :alt: cat pic

In our directory structure, images are stored in the `source/_static/images` directory. 

You can also include images with the ``.. image::`` directive. In several documents,
we use this approach combined with tagging with ``|image tag name|`` to refer to 
images.

.. tab:: RST

    .. code:: rst

        |cat image|

        .. |cat image| image:: /_static/images/contribute/cat.jpeg

Embed Kaltura videos
====================

The videos on this site are hosted on Kaltura. To embed a Kaltura video, follow
these instructions.

1. Upload video to Kaltura as an unlisted or public video.
2. Go to the video.
3. Below the video, select **Share** and then **Embed**.
4. Under **Player Size**, select **960x540**.
5. Toggle on **Responsive Sizing**.
6. Copy the embed code (will be HTML).
7. Use the following RSS syntax, replacing ``<div> … </div>`` with the copied embed code:

.. tab:: RST

    .. code:: rst

        .. raw:: html
	
            <div> … </div>


Documentation
-------------

Please view the `Sphinx primer on RST <https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html>`__ 
for more information.

