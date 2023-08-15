=============================
How to use a Jupyter notebook
=============================

Jupyter notebooks are a interactive files used to store Python code
along side useful written descriptions. They are a great way to explore
a project and to document code, as well.

Markdown
--------

Jupyter notebooks consist of text cells and code cells. Text cells are
written in the language Markdown, which allows for straightforward text
formatting. When it is executed, Markdown renders into HTML. Here is
some basic ways to specify formatting in Markdown:

.. tab:: Markdown

   .. code:: markdown

      # Heading 1
      ## Heading 2
      ### Heading 3

      - unordered
      - list
      - of 
      - things

      1. Ordered
      2. list
      3. of
      4. things

      *italics*

      **boldface**

      [A link](www.google.com)

      ![An image](https://www.palmpressinc.com/wp-content/uploads/cc_resize/3704-700x0.jpg)

      `Inline code`

      Inline LaTeX math equation: $x^2 + 3$

      Block LaTeX math equation:
      $$ \frac{dy}{dx} = \sqrt{a^x} $$

Here is how that gets rendered: :doc:`Markdown rendering<example-markdown>` 

To run a cell and render it, hit Shift + Enter. You can re-edit this
cell by selecting a cell and hitting Enter or by double clicking.

For more on Markdown, check out `this
cheatsheet <https://www.markdownguide.org/cheat-sheet/>`__.

Python
------

Our Python will live in code cells. These cells will highlight different
types of works and variables as different colors, which will provide a
visual aid.

Below is a code block showing some Python code showing what code
coloring might look like this, with the printed output of the process
below it:

.. tab:: Python

   .. code:: python

      # a comment
      my_list = [0, 1, 2]

      for x in my_list:

         print(x)

.. tab:: Output

   .. code:: none

      0
      1
      2

To run a code cell, you should be able to click a button on the cell.
You may also be able to alternate between putting a cell into Edit and
Command modes. Depending on where you are running Jupyter, you should
also have very handy keyboard shortcuts. For instance:

-  Toggle between modes: Esc and Enter
-  Run cell: Ctrl + Enter
-  Add a cell above: A
-  Add a cell below: B



