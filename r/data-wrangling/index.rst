Data wrangling with the Tidyverse
=================================

`Workshop
materials <https://drive.google.com/drive/folders/1e-8Qs_AZBH-QcQqmmCloT9ghZesV55z6>`__

When running an analysis, data cleaning and pre-processing can often
take longer than doing the statistical tests. R is an excellent tool to
speed up this process, with many powerful tools to manipulate and
prepare data for analysis and plotting.

Install and Load Tidyverse Packages
-----------------------------------

You will need to run ``install.packages()`` just once to download
libraries onto your computer. After that, use ``library()`` any time you
want to access the tools and functions in a package.

.. code:: r

   # To install packages:
   install.packages("tidyverse")

   library(tidyverse)

Load our data from a file into R environment
--------------------------------------------

We will be using data about various penguin species on different
islands. To read in our data, we will use the function ``read_csv()``,
which is from a package in the Tidyverse called ``readr``.

.. code:: r

   penguins <- read_csv("penguins.csv")

::

   ## Rows: 344 Columns: 8
   ## ── Column specification ────────────────────────────────────────────────────────
   ## Delimiter: ","
   ## chr (3): species, island, sex
   ## dbl (5): bill_length_mm, bill_depth_mm, flipper_length_mm, body_mass_g, year
   ## 
   ## ℹ Use `spec()` to retrieve the full column specification for this data.
   ## ℹ Specify the column types or set `show_col_types = FALSE` to quiet this message.

Data examination
----------------

Tidyverse expects our data to be **tidy**: 1. Each column is a variable.
2. Each row is an observation. 3. Each cell has a value.

Our data conform to these rules. Let’s start to explore our data set,
first using ``glimpse()`` to see a summary that shows the dimensions of
the data, the column names, and what type of data live in each column.

.. code:: r

   glimpse(penguins)

::

   ## Rows: 344
   ## Columns: 8
   ## $ species           <chr> "Adelie", "Adelie", "Adelie", "Adelie", "Adelie", "A…
   ## $ island            <chr> "Torgersen", "Torgersen", "Torgersen", "Torgersen", …
   ## $ bill_length_mm    <dbl> 39.1, 39.5, 40.3, NA, 36.7, 39.3, 38.9, 39.2, 34.1, …
   ## $ bill_depth_mm     <dbl> 18.7, 17.4, 18.0, NA, 19.3, 20.6, 17.8, 19.6, 18.1, …
   ## $ flipper_length_mm <dbl> 181, 186, 195, NA, 193, 190, 181, 195, 193, 190, 186…
   ## $ body_mass_g       <dbl> 3750, 3800, 3250, NA, 3450, 3650, 3625, 4675, 3475, …
   ## $ sex               <chr> "male", "female", "female", NA, "female", "male", "f…
   ## $ year              <dbl> 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007…

Select columns
--------------

To take specific columns we can use the function ``select()``. This
function takes at least two **arguments** (inputs). The first must be
the name of the data frame (e.g., ``penguins``). Any subsequent
arguments must be column names.

.. code:: r

   select(penguins,species, body_mass_g, sex)

::

   ## # A tibble: 344 × 3
   ##    species body_mass_g sex   
   ##    <chr>         <dbl> <chr> 
   ##  1 Adelie         3750 male  
   ##  2 Adelie         3800 female
   ##  3 Adelie         3250 female
   ##  4 Adelie           NA <NA>  
   ##  5 Adelie         3450 female
   ##  6 Adelie         3650 male  
   ##  7 Adelie         3625 female
   ##  8 Adelie         4675 male  
   ##  9 Adelie         3475 <NA>  
   ## 10 Adelie         4250 <NA>  
   ## # … with 334 more rows

We can also use ``columnA:columnB`` to select all of the columns from
``columnA`` to ``columnB``.

.. code:: r

   select(penguins, species:body_mass_g)

::

   ## # A tibble: 344 × 6
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           39.1          18.7               181        3750
   ##  2 Adelie  Torgersen           39.5          17.4               186        3800
   ##  3 Adelie  Torgersen           40.3          18                 195        3250
   ##  4 Adelie  Torgersen           NA            NA                  NA          NA
   ##  5 Adelie  Torgersen           36.7          19.3               193        3450
   ##  6 Adelie  Torgersen           39.3          20.6               190        3650
   ##  7 Adelie  Torgersen           38.9          17.8               181        3625
   ##  8 Adelie  Torgersen           39.2          19.6               195        4675
   ##  9 Adelie  Torgersen           34.1          18.1               193        3475
   ## 10 Adelie  Torgersen           42            20.2               190        4250
   ## # … with 334 more rows

If we put a ``-`` before the column names, we will include all but those
columns.

.. code:: r

   select(penguins, -year, -island)

::

   ## # A tibble: 344 × 6
   ##    species bill_length_mm bill_depth_mm flipper_length_mm body_mass_g sex   
   ##    <chr>            <dbl>         <dbl>             <dbl>       <dbl> <chr> 
   ##  1 Adelie            39.1          18.7               181        3750 male  
   ##  2 Adelie            39.5          17.4               186        3800 female
   ##  3 Adelie            40.3          18                 195        3250 female
   ##  4 Adelie            NA            NA                  NA          NA <NA>  
   ##  5 Adelie            36.7          19.3               193        3450 female
   ##  6 Adelie            39.3          20.6               190        3650 male  
   ##  7 Adelie            38.9          17.8               181        3625 female
   ##  8 Adelie            39.2          19.6               195        4675 male  
   ##  9 Adelie            34.1          18.1               193        3475 <NA>  
   ## 10 Adelie            42            20.2               190        4250 <NA>  
   ## # … with 334 more rows

We can also use the function ``starts_with()`` to return a data frame
with columns starting with certain characters. Note you will need to put
the characters in quotes.

.. code:: r

   select(penguins, starts_with("bill"))

::

   ## # A tibble: 344 × 2
   ##    bill_length_mm bill_depth_mm
   ##             <dbl>         <dbl>
   ##  1           39.1          18.7
   ##  2           39.5          17.4
   ##  3           40.3          18  
   ##  4           NA            NA  
   ##  5           36.7          19.3
   ##  6           39.3          20.6
   ##  7           38.9          17.8
   ##  8           39.2          19.6
   ##  9           34.1          18.1
   ## 10           42            20.2
   ## # … with 334 more rows

We can accomplish a similar task with ``ends_with()``.

.. code:: r

   select(penguins, ends_with("mm"))

::

   ## # A tibble: 344 × 3
   ##    bill_length_mm bill_depth_mm flipper_length_mm
   ##             <dbl>         <dbl>             <dbl>
   ##  1           39.1          18.7               181
   ##  2           39.5          17.4               186
   ##  3           40.3          18                 195
   ##  4           NA            NA                  NA
   ##  5           36.7          19.3               193
   ##  6           39.3          20.6               190
   ##  7           38.9          17.8               181
   ##  8           39.2          19.6               195
   ##  9           34.1          18.1               193
   ## 10           42            20.2               190
   ## # … with 334 more rows

Filtering rows
--------------

We can also subset the data frame based on certain conditions with the
``filter()`` function. For instance, we can pick all of the samples from
a specific ``island`` using the ``==`` operator. Note that a single
``=`` does not work for this.

.. code:: r

   filter(penguins, island=="Torgersen")

::

   ## # A tibble: 52 × 8
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           39.1          18.7               181        3750
   ##  2 Adelie  Torgersen           39.5          17.4               186        3800
   ##  3 Adelie  Torgersen           40.3          18                 195        3250
   ##  4 Adelie  Torgersen           NA            NA                  NA          NA
   ##  5 Adelie  Torgersen           36.7          19.3               193        3450
   ##  6 Adelie  Torgersen           39.3          20.6               190        3650
   ##  7 Adelie  Torgersen           38.9          17.8               181        3625
   ##  8 Adelie  Torgersen           39.2          19.6               195        4675
   ##  9 Adelie  Torgersen           34.1          18.1               193        3475
   ## 10 Adelie  Torgersen           42            20.2               190        4250
   ## # … with 42 more rows, and 2 more variables: sex <chr>, year <dbl>

We can also use other conditions, like inequalities. - less than: ``<``
- less than or equal to: ``<=`` - greater than: ``>`` - greater than or
equal to: ``>=``

.. code:: r

   filter (penguins, year<=2008)

::

   ## # A tibble: 224 × 8
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           39.1          18.7               181        3750
   ##  2 Adelie  Torgersen           39.5          17.4               186        3800
   ##  3 Adelie  Torgersen           40.3          18                 195        3250
   ##  4 Adelie  Torgersen           NA            NA                  NA          NA
   ##  5 Adelie  Torgersen           36.7          19.3               193        3450
   ##  6 Adelie  Torgersen           39.3          20.6               190        3650
   ##  7 Adelie  Torgersen           38.9          17.8               181        3625
   ##  8 Adelie  Torgersen           39.2          19.6               195        4675
   ##  9 Adelie  Torgersen           34.1          18.1               193        3475
   ## 10 Adelie  Torgersen           42            20.2               190        4250
   ## # … with 214 more rows, and 2 more variables: sex <chr>, year <dbl>

We can use multiple conditions at the same time, as well.

.. code:: r

   filter (penguins, island=="Torgersen", sex=="male")

::

   ## # A tibble: 23 × 8
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           39.1          18.7               181        3750
   ##  2 Adelie  Torgersen           39.3          20.6               190        3650
   ##  3 Adelie  Torgersen           39.2          19.6               195        4675
   ##  4 Adelie  Torgersen           38.6          21.2               191        3800
   ##  5 Adelie  Torgersen           34.6          21.1               198        4400
   ##  6 Adelie  Torgersen           42.5          20.7               197        4500
   ##  7 Adelie  Torgersen           46            21.5               194        4200
   ##  8 Adelie  Torgersen           41.8          19.4               198        4450
   ##  9 Adelie  Torgersen           39.7          18.4               190        3900
   ## 10 Adelie  Torgersen           45.8          18.9               197        4150
   ## # … with 13 more rows, and 2 more variables: sex <chr>, year <dbl>

We can use complex conditions too, such as putting ``|`` between two
conditions. ``|`` means “or”, so the only rows that are kept must
satisfy one condition or the other. You can do a similar operation with
``&``, which means “and”.

.. code:: r

   filter(penguins, species == "Chinstrap" | species == "Gentoo")

::

   ## # A tibble: 192 × 8
   ##    species island bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>           <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Gentoo  Biscoe           46.1          13.2               211        4500
   ##  2 Gentoo  Biscoe           50            16.3               230        5700
   ##  3 Gentoo  Biscoe           48.7          14.1               210        4450
   ##  4 Gentoo  Biscoe           50            15.2               218        5700
   ##  5 Gentoo  Biscoe           47.6          14.5               215        5400
   ##  6 Gentoo  Biscoe           46.5          13.5               210        4550
   ##  7 Gentoo  Biscoe           45.4          14.6               211        4800
   ##  8 Gentoo  Biscoe           46.7          15.3               219        5200
   ##  9 Gentoo  Biscoe           43.3          13.4               209        4400
   ## 10 Gentoo  Biscoe           46.8          15.4               215        5150
   ## # … with 182 more rows, and 2 more variables: sex <chr>, year <dbl>

The ``%in%`` operator checks to see if values are contained in a given
vector.

.. code:: r

   filter(penguins, species %in% c("Chinstrap", "Gentoo"))

::

   ## # A tibble: 192 × 8
   ##    species island bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>           <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Gentoo  Biscoe           46.1          13.2               211        4500
   ##  2 Gentoo  Biscoe           50            16.3               230        5700
   ##  3 Gentoo  Biscoe           48.7          14.1               210        4450
   ##  4 Gentoo  Biscoe           50            15.2               218        5700
   ##  5 Gentoo  Biscoe           47.6          14.5               215        5400
   ##  6 Gentoo  Biscoe           46.5          13.5               210        4550
   ##  7 Gentoo  Biscoe           45.4          14.6               211        4800
   ##  8 Gentoo  Biscoe           46.7          15.3               219        5200
   ##  9 Gentoo  Biscoe           43.3          13.4               209        4400
   ## 10 Gentoo  Biscoe           46.8          15.4               215        5150
   ## # … with 182 more rows, and 2 more variables: sex <chr>, year <dbl>

Data sets often contain missing values for various samples. We can check
our missing data with ``is.na()``.

.. code:: r

   filter(penguins, is.na(sex))

::

   ## # A tibble: 11 × 8
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           NA            NA                  NA          NA
   ##  2 Adelie  Torgersen           34.1          18.1               193        3475
   ##  3 Adelie  Torgersen           42            20.2               190        4250
   ##  4 Adelie  Torgersen           37.8          17.1               186        3300
   ##  5 Adelie  Torgersen           37.8          17.3               180        3700
   ##  6 Adelie  Dream               37.5          18.9               179        2975
   ##  7 Gentoo  Biscoe              44.5          14.3               216        4100
   ##  8 Gentoo  Biscoe              46.2          14.4               214        4650
   ##  9 Gentoo  Biscoe              47.3          13.8               216        4725
   ## 10 Gentoo  Biscoe              44.5          15.7               217        4875
   ## 11 Gentoo  Biscoe              NA            NA                  NA          NA
   ## # … with 2 more variables: sex <chr>, year <dbl>

We can also only return samples without missing data using ``!``, which
means “not”, before ``is.na()``.

.. code:: r

   filter(penguins, !is.na(sex))

::

   ## # A tibble: 333 × 8
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           39.1          18.7               181        3750
   ##  2 Adelie  Torgersen           39.5          17.4               186        3800
   ##  3 Adelie  Torgersen           40.3          18                 195        3250
   ##  4 Adelie  Torgersen           36.7          19.3               193        3450
   ##  5 Adelie  Torgersen           39.3          20.6               190        3650
   ##  6 Adelie  Torgersen           38.9          17.8               181        3625
   ##  7 Adelie  Torgersen           39.2          19.6               195        4675
   ##  8 Adelie  Torgersen           41.1          17.6               182        3200
   ##  9 Adelie  Torgersen           38.6          21.2               191        3800
   ## 10 Adelie  Torgersen           34.6          21.1               198        4400
   ## # … with 323 more rows, and 2 more variables: sex <chr>, year <dbl>

Tidyverse pipelines
-------------------

Pipes
~~~~~

**Pipes** let you take the output of one function and send it directly
to the next, which is useful when you need to do many consecutive tasks
to the same dataset. This means you don’t need to include the name of
the data frame within each function we use.

``%>%`` is the pipe operator in R. You can read the pipe like the word
“then”.

.. code:: r

   # Using pipes
   penguins_biscoe <- penguins %>%
       filter(island == "Biscoe") %>%
       select(species, body_mass_g, sex)

Notice there is no output for this command, since we are saving the
resulting data frame as ``penguins_biscoe``.

Exercise:
~~~~~~~~~

Create a new object with the data subset to include all species except
Adelie and retain the species column and the ones relating to their
bill.

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: r

      penguins %>%
          filter(species != "Adelie") %>%
          select(species, bill_length_mm, bill_depth_mm)

   ::

      ## # A tibble: 192 × 3
      ##    species bill_length_mm bill_depth_mm
      ##    <chr>            <dbl>         <dbl>
      ##  1 Gentoo            46.1          13.2
      ##  2 Gentoo            50            16.3
      ##  3 Gentoo            48.7          14.1
      ##  4 Gentoo            50            15.2
      ##  5 Gentoo            47.6          14.5
      ##  6 Gentoo            46.5          13.5
      ##  7 Gentoo            45.4          14.6
      ##  8 Gentoo            46.7          15.3
      ##  9 Gentoo            43.3          13.4
      ## 10 Gentoo            46.8          15.4
      ## # … with 182 more rows

.. raw:: html

   </details>

Mutate
~~~~~~

Frequently you’ll want to create new columns based on the values in
existing columns for tasks like unit conversion or finding the ratio of
values in two columns. For this, we’ll use ``mutate()``.

We might be interested in the body mass of penguins in kg instead of g:

.. code:: r

   penguins %>%
       mutate(body_mass_kg = body_mass_g / 1000)

::

   ## # A tibble: 344 × 9
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           39.1          18.7               181        3750
   ##  2 Adelie  Torgersen           39.5          17.4               186        3800
   ##  3 Adelie  Torgersen           40.3          18                 195        3250
   ##  4 Adelie  Torgersen           NA            NA                  NA          NA
   ##  5 Adelie  Torgersen           36.7          19.3               193        3450
   ##  6 Adelie  Torgersen           39.3          20.6               190        3650
   ##  7 Adelie  Torgersen           38.9          17.8               181        3625
   ##  8 Adelie  Torgersen           39.2          19.6               195        4675
   ##  9 Adelie  Torgersen           34.1          18.1               193        3475
   ## 10 Adelie  Torgersen           42            20.2               190        4250
   ## # … with 334 more rows, and 3 more variables: sex <chr>, year <dbl>,
   ## #   body_mass_kg <dbl>

Split-apply-combine data analysis and summarize
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Many data analysis tasks can be approached using the split-apply-combine
paradigm: split the data into groups, apply some analysis to each group,
and then combine the results. ``dplyr`` makes this very easy through the
use of the ``group_by()`` function.

The summarize() function
^^^^^^^^^^^^^^^^^^^^^^^^

``group_by()`` is often used together with ``summarize()``, which
collapses each group into a single-row summary of that group.

``group_by()`` takes in the column names that contain the categorical
variables for which you want to calculate the summary statistics.

So to compute the average body mass by species:

.. code:: r

   penguins %>%
     group_by(species) %>% 
     summarize(body_mass_g_mean = mean(body_mass_g, na.rm=TRUE))

::

   ## # A tibble: 3 × 2
   ##   species   body_mass_g_mean
   ##   <chr>                <dbl>
   ## 1 Adelie               3701.
   ## 2 Chinstrap            3733.
   ## 3 Gentoo               5076.

You can also group by multiple columns:

.. code:: r

   penguins %>%
       group_by(island, species) %>%
       summarize(flipper_length_mm_mean = mean(flipper_length_mm, na.rm = TRUE),
                 flipper_length_mm_min = min(flipper_length_mm, na.rm = TRUE),
                 flipper_length_mm_max = max(flipper_length_mm, na.rm = TRUE),
                 flipper_length_mm_sd = sd(flipper_length_mm, na.rm = TRUE))

::

   ## `summarise()` has grouped output by 'island'. You can override using the
   ## `.groups` argument.

   ## # A tibble: 5 × 6
   ## # Groups:   island [3]
   ##   island    species   flipper_length_mm_mean flipper_length_mm… flipper_length_…
   ##   <chr>     <chr>                      <dbl>              <dbl>            <dbl>
   ## 1 Biscoe    Adelie                      189.                172              203
   ## 2 Biscoe    Gentoo                      217.                203              231
   ## 3 Dream     Adelie                      190.                178              208
   ## 4 Dream     Chinstrap                   196.                178              212
   ## 5 Torgersen Adelie                      191.                176              210
   ## # … with 1 more variable: flipper_length_mm_sd <dbl>

Counting
--------

When working with data, we often want to know the number of observations
found for each factor or combination of factors. For this task,
``dplyr`` provides ``count()``.

If we wanted to count the number of penguins by species, we would do the
following:

.. code:: r

   penguins %>%
     count(species)

::

   ## # A tibble: 3 × 2
   ##   species       n
   ##   <chr>     <int>
   ## 1 Adelie      152
   ## 2 Chinstrap    68
   ## 3 Gentoo      124

For convenience, ``count()`` provides the ``sort`` argument to get
results in decreasing order:

.. code:: r

   penguins %>%
     count(species, sort = TRUE)

::

   ## # A tibble: 3 × 2
   ##   species       n
   ##   <chr>     <int>
   ## 1 Adelie      152
   ## 2 Gentoo      124
   ## 3 Chinstrap    68

We can add more than one variable:

.. code:: r

   penguins %>%
     count(species, island, sex)

::

   ## # A tibble: 13 × 4
   ##    species   island    sex        n
   ##    <chr>     <chr>     <chr>  <int>
   ##  1 Adelie    Biscoe    female    22
   ##  2 Adelie    Biscoe    male      22
   ##  3 Adelie    Dream     female    27
   ##  4 Adelie    Dream     male      28
   ##  5 Adelie    Dream     <NA>       1
   ##  6 Adelie    Torgersen female    24
   ##  7 Adelie    Torgersen male      23
   ##  8 Adelie    Torgersen <NA>       5
   ##  9 Chinstrap Dream     female    34
   ## 10 Chinstrap Dream     male      34
   ## 11 Gentoo    Biscoe    female    58
   ## 12 Gentoo    Biscoe    male      61
   ## 13 Gentoo    Biscoe    <NA>       5

Arrange the order of your rows
------------------------------

The default is to arrange in ascending order. You can use the ``desc()``
function on the variable inside ``arrange()`` to arrange in descending
order.

.. code:: r

   penguins %>%
     arrange(body_mass_g)

::

   ## # A tibble: 344 × 8
   ##    species   island    bill_length_mm bill_depth_mm flipper_length_… body_mass_g
   ##    <chr>     <chr>              <dbl>         <dbl>            <dbl>       <dbl>
   ##  1 Chinstrap Dream               46.9          16.6              192        2700
   ##  2 Adelie    Biscoe              36.5          16.6              181        2850
   ##  3 Adelie    Biscoe              36.4          17.1              184        2850
   ##  4 Adelie    Biscoe              34.5          18.1              187        2900
   ##  5 Adelie    Dream               33.1          16.1              178        2900
   ##  6 Adelie    Torgersen           38.6          17                188        2900
   ##  7 Chinstrap Dream               43.2          16.6              187        2900
   ##  8 Adelie    Biscoe              37.9          18.6              193        2925
   ##  9 Adelie    Dream               37.5          18.9              179        2975
   ## 10 Adelie    Dream               37            16.9              185        3000
   ## # … with 334 more rows, and 2 more variables: sex <chr>, year <dbl>

We can rename columns using the ``rename()`` functions.

.. code:: r

   penguins %>% 
     rename(bill_length = bill_length_mm)

::

   ## # A tibble: 344 × 8
   ##    species island   bill_length bill_depth_mm flipper_length_… body_mass_g sex  
   ##    <chr>   <chr>          <dbl>         <dbl>            <dbl>       <dbl> <chr>
   ##  1 Adelie  Torgers…        39.1          18.7              181        3750 male 
   ##  2 Adelie  Torgers…        39.5          17.4              186        3800 fema…
   ##  3 Adelie  Torgers…        40.3          18                195        3250 fema…
   ##  4 Adelie  Torgers…        NA            NA                 NA          NA <NA> 
   ##  5 Adelie  Torgers…        36.7          19.3              193        3450 fema…
   ##  6 Adelie  Torgers…        39.3          20.6              190        3650 male 
   ##  7 Adelie  Torgers…        38.9          17.8              181        3625 fema…
   ##  8 Adelie  Torgers…        39.2          19.6              195        4675 male 
   ##  9 Adelie  Torgers…        34.1          18.1              193        3475 <NA> 
   ## 10 Adelie  Torgers…        42            20.2              190        4250 <NA> 
   ## # … with 334 more rows, and 1 more variable: year <dbl>

We can combine ``mutate()`` with the function ``case_when()`` to
generate values in a new column based on conditions. For instance, here
we make a new column called ``body_type``. Values in this column are
``small``, ``normal``, or ``large`` based on the value in the same row
of ``body_mass_g``, which are specified as individual conditions.

.. code:: r

   penguins %>%
     mutate(body_type = case_when(
          body_mass_g < 3000 ~ "small",
          body_mass_g >= 3000 & body_mass_g < 4500 ~ "normal",
          body_mass_g >= 4500 ~ "large"))

::

   ## # A tibble: 344 × 9
   ##    species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
   ##    <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
   ##  1 Adelie  Torgersen           39.1          18.7               181        3750
   ##  2 Adelie  Torgersen           39.5          17.4               186        3800
   ##  3 Adelie  Torgersen           40.3          18                 195        3250
   ##  4 Adelie  Torgersen           NA            NA                  NA          NA
   ##  5 Adelie  Torgersen           36.7          19.3               193        3450
   ##  6 Adelie  Torgersen           39.3          20.6               190        3650
   ##  7 Adelie  Torgersen           38.9          17.8               181        3625
   ##  8 Adelie  Torgersen           39.2          19.6               195        4675
   ##  9 Adelie  Torgersen           34.1          18.1               193        3475
   ## 10 Adelie  Torgersen           42            20.2               190        4250
   ## # … with 334 more rows, and 3 more variables: sex <chr>, year <dbl>,
   ## #   body_type <chr>

Wide and long data transformation
---------------------------------

Sometimes, it might be more useful to have data in a **wide** format,
where columns represent different values or levels of a variable. We can
reshape our data using two tidyr functions, ``pivot_wider()`` and
``pivot_longer()``.

.. code:: r

   penguins %>%
     pivot_longer(contains("_"))

::

   ## # A tibble: 1,376 × 6
   ##    species island    sex     year name               value
   ##    <chr>   <chr>     <chr>  <dbl> <chr>              <dbl>
   ##  1 Adelie  Torgersen male    2007 bill_length_mm      39.1
   ##  2 Adelie  Torgersen male    2007 bill_depth_mm       18.7
   ##  3 Adelie  Torgersen male    2007 flipper_length_mm  181  
   ##  4 Adelie  Torgersen male    2007 body_mass_g       3750  
   ##  5 Adelie  Torgersen female  2007 bill_length_mm      39.5
   ##  6 Adelie  Torgersen female  2007 bill_depth_mm       17.4
   ##  7 Adelie  Torgersen female  2007 flipper_length_mm  186  
   ##  8 Adelie  Torgersen female  2007 body_mass_g       3800  
   ##  9 Adelie  Torgersen female  2007 bill_length_mm      40.3
   ## 10 Adelie  Torgersen female  2007 bill_depth_mm       18  
   ## # … with 1,366 more rows

Here we pivot the penguin data so that all the bill measurements are in
the same column.

.. code:: r

   penguins %>%
     pivot_longer(starts_with("bill"))

::

   ## # A tibble: 688 × 8
   ##    species island    flipper_length_mm body_mass_g sex     year name       value
   ##    <chr>   <chr>                 <dbl>       <dbl> <chr>  <dbl> <chr>      <dbl>
   ##  1 Adelie  Torgersen               181        3750 male    2007 bill_leng…  39.1
   ##  2 Adelie  Torgersen               181        3750 male    2007 bill_dept…  18.7
   ##  3 Adelie  Torgersen               186        3800 female  2007 bill_leng…  39.5
   ##  4 Adelie  Torgersen               186        3800 female  2007 bill_dept…  17.4
   ##  5 Adelie  Torgersen               195        3250 female  2007 bill_leng…  40.3
   ##  6 Adelie  Torgersen               195        3250 female  2007 bill_dept…  18  
   ##  7 Adelie  Torgersen                NA          NA <NA>    2007 bill_leng…  NA  
   ##  8 Adelie  Torgersen                NA          NA <NA>    2007 bill_dept…  NA  
   ##  9 Adelie  Torgersen               193        3450 female  2007 bill_leng…  36.7
   ## 10 Adelie  Torgersen               193        3450 female  2007 bill_dept…  19.3
   ## # … with 678 more rows

We can remove NAs at the same time.

.. code:: r

   penguins %>%
     pivot_longer(starts_with("bill"),
                  values_drop_na = TRUE)

::

   ## # A tibble: 684 × 8
   ##    species island    flipper_length_mm body_mass_g sex     year name       value
   ##    <chr>   <chr>                 <dbl>       <dbl> <chr>  <dbl> <chr>      <dbl>
   ##  1 Adelie  Torgersen               181        3750 male    2007 bill_leng…  39.1
   ##  2 Adelie  Torgersen               181        3750 male    2007 bill_dept…  18.7
   ##  3 Adelie  Torgersen               186        3800 female  2007 bill_leng…  39.5
   ##  4 Adelie  Torgersen               186        3800 female  2007 bill_dept…  17.4
   ##  5 Adelie  Torgersen               195        3250 female  2007 bill_leng…  40.3
   ##  6 Adelie  Torgersen               195        3250 female  2007 bill_dept…  18  
   ##  7 Adelie  Torgersen               193        3450 female  2007 bill_leng…  36.7
   ##  8 Adelie  Torgersen               193        3450 female  2007 bill_dept…  19.3
   ##  9 Adelie  Torgersen               190        3650 male    2007 bill_leng…  39.3
   ## 10 Adelie  Torgersen               190        3650 male    2007 bill_dept…  20.6
   ## # … with 674 more rows

When making our data into a long format, we can split the former column
names into multiple new columns.

.. code:: r

   penguins_long <- penguins %>% 
     pivot_longer(contains("_"),
                  names_to = c("part", "measure" , "unit"),
                  names_sep = "_",
                  values_drop_na = TRUE)
   penguins_long

::

   ## # A tibble: 1,368 × 8
   ##    species island    sex     year part    measure unit   value
   ##    <chr>   <chr>     <chr>  <dbl> <chr>   <chr>   <chr>  <dbl>
   ##  1 Adelie  Torgersen male    2007 bill    length  mm      39.1
   ##  2 Adelie  Torgersen male    2007 bill    depth   mm      18.7
   ##  3 Adelie  Torgersen male    2007 flipper length  mm     181  
   ##  4 Adelie  Torgersen male    2007 body    mass    g     3750  
   ##  5 Adelie  Torgersen female  2007 bill    length  mm      39.5
   ##  6 Adelie  Torgersen female  2007 bill    depth   mm      17.4
   ##  7 Adelie  Torgersen female  2007 flipper length  mm     186  
   ##  8 Adelie  Torgersen female  2007 body    mass    g     3800  
   ##  9 Adelie  Torgersen female  2007 bill    length  mm      40.3
   ## 10 Adelie  Torgersen female  2007 bill    depth   mm      18  
   ## # … with 1,358 more rows

pivot_wider()
~~~~~~~~~~~~~

We can also take a long data set and make it wide.

First, let’s create a simple long datafame.

.. code:: r

   penguins_long_simple <- penguins %>% 
     pivot_longer(contains("_"))
   penguins_long_simple

::

   ## # A tibble: 1,376 × 6
   ##    species island    sex     year name               value
   ##    <chr>   <chr>     <chr>  <dbl> <chr>              <dbl>
   ##  1 Adelie  Torgersen male    2007 bill_length_mm      39.1
   ##  2 Adelie  Torgersen male    2007 bill_depth_mm       18.7
   ##  3 Adelie  Torgersen male    2007 flipper_length_mm  181  
   ##  4 Adelie  Torgersen male    2007 body_mass_g       3750  
   ##  5 Adelie  Torgersen female  2007 bill_length_mm      39.5
   ##  6 Adelie  Torgersen female  2007 bill_depth_mm       17.4
   ##  7 Adelie  Torgersen female  2007 flipper_length_mm  186  
   ##  8 Adelie  Torgersen female  2007 body_mass_g       3800  
   ##  9 Adelie  Torgersen female  2007 bill_length_mm      40.3
   ## 10 Adelie  Torgersen female  2007 bill_depth_mm       18  
   ## # … with 1,366 more rows

If we want to make this wider again we can use ``pivot_wider()``,
specifying the names of the columns we want to expand.

.. code:: r

   penguins_long_simple %>% 
     pivot_wider(names_from = name, 
                 values_from = value)

::

   ## # A tibble: 35 × 8
   ##    species island    sex     year bill_length_mm bill_depth_mm flipper_length_mm
   ##    <chr>   <chr>     <chr>  <dbl> <list>         <list>        <list>           
   ##  1 Adelie  Torgersen male    2007 <dbl [7]>      <dbl [7]>     <dbl [7]>        
   ##  2 Adelie  Torgersen female  2007 <dbl [8]>      <dbl [8]>     <dbl [8]>        
   ##  3 Adelie  Torgersen <NA>    2007 <dbl [5]>      <dbl [5]>     <dbl [5]>        
   ##  4 Adelie  Biscoe    female  2007 <dbl [5]>      <dbl [5]>     <dbl [5]>        
   ##  5 Adelie  Biscoe    male    2007 <dbl [5]>      <dbl [5]>     <dbl [5]>        
   ##  6 Adelie  Dream     female  2007 <dbl [9]>      <dbl [9]>     <dbl [9]>        
   ##  7 Adelie  Dream     male    2007 <dbl [10]>     <dbl [10]>    <dbl [10]>       
   ##  8 Adelie  Dream     <NA>    2007 <dbl [1]>      <dbl [1]>     <dbl [1]>        
   ##  9 Adelie  Biscoe    female  2008 <dbl [9]>      <dbl [9]>     <dbl [9]>        
   ## 10 Adelie  Biscoe    male    2008 <dbl [9]>      <dbl [9]>     <dbl [9]>        
   ## # … with 25 more rows, and 1 more variable: body_mass_g <list>

However, the output looks a little strange. This is due to how
``pivot_wider()`` identifies unique rows.

To guarentee this does not happen, make sure to include the original row
number in the long data set.

Note the alternative pipe operator here (``|>``). This is equivalent to
``%>%``.

.. code:: r

   penguins_long_simple <- penguins |> 
     mutate(sample = row_number()) |> 
     pivot_longer(contains("_"))
   penguins_long_simple

::

   ## # A tibble: 1,376 × 7
   ##    species island    sex     year sample name               value
   ##    <chr>   <chr>     <chr>  <dbl>  <int> <chr>              <dbl>
   ##  1 Adelie  Torgersen male    2007      1 bill_length_mm      39.1
   ##  2 Adelie  Torgersen male    2007      1 bill_depth_mm       18.7
   ##  3 Adelie  Torgersen male    2007      1 flipper_length_mm  181  
   ##  4 Adelie  Torgersen male    2007      1 body_mass_g       3750  
   ##  5 Adelie  Torgersen female  2007      2 bill_length_mm      39.5
   ##  6 Adelie  Torgersen female  2007      2 bill_depth_mm       17.4
   ##  7 Adelie  Torgersen female  2007      2 flipper_length_mm  186  
   ##  8 Adelie  Torgersen female  2007      2 body_mass_g       3800  
   ##  9 Adelie  Torgersen female  2007      3 bill_length_mm      40.3
   ## 10 Adelie  Torgersen female  2007      3 bill_depth_mm       18  
   ## # … with 1,366 more rows

We can also use ``pivot_wider()`` across multiple columns.

.. code:: r

   penguins_long <- penguins %>% 
     mutate(sample = row_number()) %>%
     pivot_longer(contains("_"),
                  names_to = c("part", "measure" , "unit"),
                  names_sep = "_",
                  values_drop_na = TRUE)
   penguins_long

::

   ## # A tibble: 1,368 × 9
   ##    species island    sex     year sample part    measure unit   value
   ##    <chr>   <chr>     <chr>  <dbl>  <int> <chr>   <chr>   <chr>  <dbl>
   ##  1 Adelie  Torgersen male    2007      1 bill    length  mm      39.1
   ##  2 Adelie  Torgersen male    2007      1 bill    depth   mm      18.7
   ##  3 Adelie  Torgersen male    2007      1 flipper length  mm     181  
   ##  4 Adelie  Torgersen male    2007      1 body    mass    g     3750  
   ##  5 Adelie  Torgersen female  2007      2 bill    length  mm      39.5
   ##  6 Adelie  Torgersen female  2007      2 bill    depth   mm      17.4
   ##  7 Adelie  Torgersen female  2007      2 flipper length  mm     186  
   ##  8 Adelie  Torgersen female  2007      2 body    mass    g     3800  
   ##  9 Adelie  Torgersen female  2007      3 bill    length  mm      40.3
   ## 10 Adelie  Torgersen female  2007      3 bill    depth   mm      18  
   ## # … with 1,358 more rows

.. code:: r

   penguins_long %>% 
     pivot_wider(names_from = c("part", "measure", "unit"),
                 names_sep = "_",
                 values_from = value)

::

   ## # A tibble: 342 × 9
   ##    species island    sex     year sample bill_length_mm bill_depth_mm
   ##    <chr>   <chr>     <chr>  <dbl>  <int>          <dbl>         <dbl>
   ##  1 Adelie  Torgersen male    2007      1           39.1          18.7
   ##  2 Adelie  Torgersen female  2007      2           39.5          17.4
   ##  3 Adelie  Torgersen female  2007      3           40.3          18  
   ##  4 Adelie  Torgersen female  2007      5           36.7          19.3
   ##  5 Adelie  Torgersen male    2007      6           39.3          20.6
   ##  6 Adelie  Torgersen female  2007      7           38.9          17.8
   ##  7 Adelie  Torgersen male    2007      8           39.2          19.6
   ##  8 Adelie  Torgersen <NA>    2007      9           34.1          18.1
   ##  9 Adelie  Torgersen <NA>    2007     10           42            20.2
   ## 10 Adelie  Torgersen <NA>    2007     11           37.8          17.1
   ## # … with 332 more rows, and 2 more variables: flipper_length_mm <dbl>,
   ## #   body_mass_g <dbl>

Using dplyr to merge tables
---------------------------

Merging data frames is an important aspect of data pre-processing, and
there are various methods for doing so.

To start, let’s create two small data sets with some overlapping
information.

.. code:: r

   data1<- data.frame(country=c("Germany","Australia", "Ecuador"),
   region=c("Europe","Western Pacific", "Americas" ),
   life_exp=c(81, 83, 75))

   data2<-data.frame(country=c("Germany","Australia", "Iceland"),
   region=c("Europe","Western Pacific", "Europe" ),
   urban_pop=c(76, 86, 94))

   data1
   data2

::

   ##     country          region life_exp
   ## 1   Germany          Europe       81
   ## 2 Australia Western Pacific       83
   ## 3   Ecuador        Americas       75

   ##     country          region urban_pop
   ## 1   Germany          Europe        76
   ## 2 Australia Western Pacific        86
   ## 3   Iceland          Europe        94

We can merge tables with various **join** functions. These join
functions require us to provide at least one column to act as an
identifier.

**Inner joins** return rows where both data sets have data, according to
the identifier column. In the following example, we use ``inner_join()``
to return rows with countries present in both data frames.

.. code:: r

   inner_join(data1, data2, by="country")

::

   ##     country        region.x life_exp        region.y urban_pop
   ## 1   Germany          Europe       81          Europe        76
   ## 2 Australia Western Pacific       83 Western Pacific        86

A **left join** keeps what is in the first data frame and any matches to
that in the second data frame.

.. code:: r

   left_join(data1, data2, by="country")

::

   ##     country        region.x life_exp        region.y urban_pop
   ## 1   Germany          Europe       81          Europe        76
   ## 2 Australia Western Pacific       83 Western Pacific        86
   ## 3   Ecuador        Americas       75            <NA>        NA

A **right join** does just the opposite and keeps matches to items in
the second data frame.

.. code:: r

   right_join(data1, data2, by="country")

::

   ##     country        region.x life_exp        region.y urban_pop
   ## 1   Germany          Europe       81          Europe        76
   ## 2 Australia Western Pacific       83 Western Pacific        86
   ## 3   Iceland            <NA>       NA          Europe        94

A **full join** will include all data from both data frames.

.. code:: r

   full_join(data1, data2, by="country")

::

   ##     country        region.x life_exp        region.y urban_pop
   ## 1   Germany          Europe       81          Europe        76
   ## 2 Australia Western Pacific       83 Western Pacific        86
   ## 3   Ecuador        Americas       75            <NA>        NA
   ## 4   Iceland            <NA>       NA          Europe        94

Filtering joins
~~~~~~~~~~~~~~~

Sometimes, we want to filter our data frame based on another. There are
several methods for this. ``semi_join()`` will keep rows in the first
data frame for entries present in the second.

.. code:: r

   semi_join(data1, data2, by="country")

::

   ##     country          region life_exp
   ## 1   Germany          Europe       81
   ## 2 Australia Western Pacific       83

We can do the opposite with ``anti_join()``. This only keeps rows of the
first data frame that do not have entries in the second.

.. code:: r

   anti_join(data1, data2, by="country")

::

   ##   country   region life_exp
   ## 1 Ecuador Americas       75

Combining
~~~~~~~~~

Let’s make two new data frame for the next examples.

.. code:: r

   data3<- data.frame(country=c("Germany","Ecuador"),
   life_exp=c(81,  75))

   data4<-data.frame(country=c("Germany","Australia" ),
   life_exp=c(81, 83 ))

If we simply want to add new rows on top of each other, we can use the
``bind_rows()`` function.

.. code:: r

   bind_rows(data3, data4)

::

   ##     country life_exp
   ## 1   Germany       81
   ## 2   Ecuador       75
   ## 3   Germany       81
   ## 4 Australia       83

We can keep rows that are the same in both data frames with
``intersect()``.

.. code:: r

   intersect(data3, data4)

::

   ##   country life_exp
   ## 1 Germany       81

``setdiff()`` returns the rows that appear in the first but not the
second data frame.

.. code:: r

   setdiff(data3, data4)

::

   ##   country life_exp
   ## 1 Ecuador       75

Finally, ``union()`` returns all unique rows.

.. code:: r

   union(data3, data4)

::

   ##     country life_exp
   ## 1   Germany       81
   ## 2   Ecuador       75
   ## 3 Australia       83

Exporting data
--------------

Now that you have learned how to use ``dplyr`` to extract information
from or summarize your raw data, you may want to export these new data
sets to share them with your collaborators or for archival.

Similar to the ``read_csv()`` function used for reading CSV files into
R, there is a ``write_csv()`` function that generates CSV files from
dataframes.

.. code:: r

   write_csv(data4, 'countries.csv')

   help(write_csv)
