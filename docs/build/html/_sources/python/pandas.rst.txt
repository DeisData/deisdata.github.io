Pandas
======

Materials:
----------

-  `Code-along Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/pandas-codealong.ipynb>`__ 
-  `Filled-in Jupyter notebook <https://colab.research.google.com/github/DeisData/python/blob/master/sequential/pandas.ipynb>`__ 

While NumPy can be used to important data, it is optimized around
numerical data. Many data sets include categorical variables. For these
data sets, it is best to use a library called ``pandas``, which focuses
on creating and manipulating data frames.

.. code:: python

   import pandas as pd

Read data
---------

With ``pandas`` imported, we can read in .csv files with the ``pandas``
function ``read_csv()``.

In that function, we can specify the file we want to use with a URL or
with the path to a local file as a string.

This saves the data in a structure called a DataFrame.

.. code:: python

   df = pd.read_csv("https://raw.githubusercontent.com/DeisData/python/master/data/gapminder.csv") # read in data

Our data is now saved as a data frame in Python as the variable ``df``.
With the data now in the environment, we can take a look at the first
few rows with ``df.head()``.

.. code:: python

   df.head()

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   country

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   year

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   region

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   population

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   life_expectancy

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   age5_surviving

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   babies_per_woman

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   gdp_per_capita

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   gdp_per_day

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   Afghanistan

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1800

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Asia

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3280000.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   28.21

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   53.142

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   603.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.650924

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   Afghanistan

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1810

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Asia

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3280000.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   28.11

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   53.002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   604.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.653662

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   Afghanistan

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1820

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Asia

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3323519.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   28.01

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   52.862

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   604.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.653662

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   3

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   Afghanistan

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1830

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Asia

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3448982.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   27.90

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   52.719

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   625.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.711157

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   4

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   Afghanistan

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1840

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Asia

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3625022.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   27.80

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   52.576

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   647.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.771389

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

We can see that this data frame has several different columns, with
information about countries and demography.

Summarize data frame
--------------------

It is important to understand the data we are working with before we
begin analysis. First, let’s look at the dimenions of the data frame
using ``df.shape``. It gives the number of rows by the number of
columns.

.. code:: python

   df.shape

.. code:: none

   (14740, 9)

This shows that our data frame has 14740 rows by 9 columns.

We can also use ``df.columns`` to display the column names.

.. code:: python

   df.columns

.. code:: none

   Index(['country', 'year', 'region', 'population', 'life_expectancy',
          'age5_surviving', 'babies_per_woman', 'gdp_per_capita', 'gdp_per_day'],
         dtype='object')

Categorical variables
---------------------

Next, let’s summarize the categorical, non-numerical variables. For
instance, we can identify how many unique regions we have in the data
set.

First, to select a column, we use the notation ``df['COLUMN_NAME']``.

.. code:: python

   df['region']

.. code:: none

   0          Asia
   1          Asia
   2          Asia
   3          Asia
   4          Asia
             ...  
   14735    Africa
   14736    Africa
   14737    Africa
   14738    Africa
   14739    Africa
   Name: region, Length: 14740, dtype: object

To identify unique entries in this column, we can use the ``.unique()``
function.

.. code:: python

   df['region'].unique()

.. code:: none

   array(['Asia', 'Europe', 'Africa', 'America'], dtype=object)

The ``countries`` column has many unique values, so instead of
``.unique()``, we can use ``.nunique()`` to find the number of unique
countries in the data set.

.. code:: python

   df['country'].nunique()

.. code:: none

   182

Numerical variables
-------------------

Numerical columns can be summarized in several ways. Let’s find the mean
first.

To make things simpler, we’ll just do calculations on the
``population``, ``life_expectancy``, and ``babies_per_woman`` columns.
We can put those names in an arrangement called a ``list`` and then
specify that list for the columns.

.. code:: python

   num_cols = [ 'population', 'life_expectancy', 'babies_per_woman' ] # numerical columns

   df[num_cols]

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   population

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   life_expectancy

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   babies_per_woman

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3280000.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   28.21

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.00

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3280000.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   28.11

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.00

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3323519.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   28.01

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.00

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   3

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3448982.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   27.90

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.00

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   4

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3625022.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   27.80

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7.00

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   …

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   14735

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   14255592.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   51.60

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.64

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   14736

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   14565482.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   54.20

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.56

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   14737

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   14898092.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   55.70

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.49

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   14738

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   15245855.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   57.00

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.41

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   14739

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   15602751.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   59.30

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.35

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

   .. raw:: html

      <p>

   14740 rows × 3 columns

   .. raw:: html

      </p>

With this set of columns, we can run ``.mean()`` to find the mean of
each column.

.. code:: python

   df[num_cols].mean() # returns the mean of each column

.. code:: none

   population          2.252933e+07
   life_expectancy     5.683453e+01
   babies_per_woman    4.643472e+00
   dtype: float64

If we want a larger variety of summary statistics, we can use the
``.describe()`` method.

.. code:: python

   df[num_cols].describe()

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   population

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   life_expectancy

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   babies_per_woman

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   count

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1.474000e+04

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   14740.000000

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   14740.000000

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   mean

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   2.252933e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   56.834526

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.643472

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   std

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   9.307143e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   15.868464

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.994833

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   min

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   2.128000e+03

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.000000

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.130000

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   25%

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   8.990308e+05

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   44.230000

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2.630000

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   50%

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   4.063978e+06

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   60.080000

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   5.060000

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   75%

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1.218722e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   70.380000

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   6.440000

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   max

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1.376049e+09

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   83.300000

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   9.220000

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

We can also break down subgroupings of our data with the method
``.groupby()``.

.. code:: python

   grouped_data = df.groupby('region')
   grouped_data['population'].describe()

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   count

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   mean

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   std

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   min

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   25%

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   50%

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   75%

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   max

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   region

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   Africa

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   4293.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   9.181313e+06

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.655128e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12522.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   996331.00

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3457113.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   9901052.00

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.822020e+08

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   America

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   2673.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.667833e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.411806e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   24000.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   331799.00

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2843246.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   10061519.00

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.217736e+08

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   Asia

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   4212.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.604245e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.658010e+08

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2128.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   512028.25

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4011309.5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   19517390.25

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.376049e+09

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   Europe

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3562.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.520351e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2.463153e+07

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   61428.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2308682.00

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   5186801.5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   10638884.75

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.484358e+08

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

Accessing rows and specific entries
-----------------------------------

You can also to access a specific row using ``df.loc[ROW, :]``. The
colon specifies to select all columns for that row number.

.. code:: python

   df.loc[0, :] # the first row

.. code:: none

   country             Afghanistan
   year                       1800
   region                     Asia
   population            3280000.0
   life_expectancy           28.21
   age5_surviving           53.142
   babies_per_woman            7.0
   gdp_per_capita            603.0
   gdp_per_day            1.650924
   Name: 0, dtype: object

We can use ``.loc`` to find the value of specific entries, as well.

.. code:: python

   df.loc[0, 'country'] # first row entry for column

.. code:: none

   'Afghanistan'

Question
~~~~~~~~

Print out the summary statistics for columns ``age5_surviving``,
``gdp_per_day``, and ``gdp_per_capita``.

.. code:: python

   ### your code below:

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: python

      df[['age5_surviving', 'gdp_per_day', 'gdp_per_capita']].describe()

.. raw:: html

   </details>

Manipulate data
---------------

Subset by row
~~~~~~~~~~~~~

Sometimes, we want to create a subset of the main data frame based on
certain conditions. We do this by using ``df.loc`` and specifying a
condition for the rows.

Below, we take all of the rows where ``babies_per_woman`` is greater or
equal to 4 with ``df['babies_per_woman'] >= 4`` and assign this to a new
data frame.

To check that this was done correctly, we can look at the minimum of the
``babies_per_woman`` column in the new data frame with ``.min()``.

.. code:: python

   # take all rows where babies_per_woman is greater or equal to 4 and make a new data frame
   df_4 = df.loc[df['babies_per_woman'] >= 4, :]
   df_4['babies_per_woman'].min()

.. code:: none

   4.0

We can use the following operators to make subsets: - Equals: ``==`` -
Not equals: ``!=`` - Greater than, less than: ``>``, ``<`` - Greater
than or equal to: ``>=`` - Less than or equal to: ``<=``

We can also subset with categorical variables. Here, we take all rows
where the country is Hungary.

.. code:: python

   df_hungary = df.loc[df['country'] == 'Hungary', :]
   pd.unique(df_hungary['country'])

.. code:: none

   array(['Hungary'], dtype=object)

Math
~~~~

If we multiply a data frame by a single number, each value in the column
will be muliplied by that value.

.. code:: python

   df['babies_per_woman'] * 1000

.. code:: none

   0        7000.0
   1        7000.0
   2        7000.0
   3        7000.0
   4        7000.0
             ...  
   14735    3640.0
   14736    3560.0
   14737    3490.0
   14738    3410.0
   14739    3350.0
   Name: babies_per_woman, Length: 14740, dtype: float64

We can also do math between columns, since they have the same length.
Elements of the same row are added, substacted, multiplied, or divided.

Here, we subtract the ``life_expectancy`` column from the
``age5_surviving`` column and assign it to a new column called
``life_difference``.

.. code:: python

   df['life_difference'] = df['age5_surviving'] - df['life_expectancy'] 
   print(df['life_difference'])

.. code:: none

   0        24.932
   1        24.892
   2        24.852
   3        24.819
   4        24.776
             ...  
   14735    39.200
   14736    37.130
   14737    35.970
   14738    34.900
   14739    32.740
   Name: life_difference, Length: 14740, dtype: float64

This new column is now reflected in the data frame.

.. code:: python

   print(df.columns)

.. code:: none

   Index(['country', 'year', 'region', 'population', 'life_expectancy',
          'age5_surviving', 'babies_per_woman', 'gdp_per_capita', 'gdp_per_day',
          'life_difference'],
         dtype='object')

Question: Working with data
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a subset of data from Lithuania.

Within that subset, calculate the mean GDP per 1000 people across
entries.

*Hint: Multiply per capita GDP by 1000.*

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: python

      df_lth = df.loc[df['country']=='Lithuania',:]
      df_lth['gdp_per_1000'] = 1000 * df_lth['gdp_per_capita']
      print(df_lth['gdp_per_1000'].mean())

.. raw:: html

   </details>

.. code:: python

   ### Your code here:

Create your own data frame
--------------------------

To make your own data frame without a .csv, we use the function
``pd.DataFrame()``. There are many ways to use this function to
construct a data frame.

Here, we show how to convert a dictionary of lists into a data frame.
Each list will be its own column, and you need to make sure the lists
are all the same length. The keys of each list should be the column
names.

.. code:: python

   data_dict = {
       'a': [1, 3, 5],
       'b': ['apple', 'banana', 'apple'],
       'c': [-2., -3., -5.]
   }

   pd.DataFrame(data_dict)

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   a

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   b

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   c

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -2.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   banana

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -3.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -5.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

You can also use lists of lists or 2D NumPy arrays to create data
frames. Each list will be a row, instead of a column, and you will need
to specify the column name as another argument in ``pd.DataFrame()``
called ``columns``.

.. code:: python

   data_list = [
       [1, 'apple', -2.],
       [3, 'banana', -3.],
       [5, 'apple', -5.]
   ]
   pd.DataFrame(data_list, columns=['a', 'b', 'c'])

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   a

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   b

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   c

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -2.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   banana

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -3.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -5.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

Note: we need to save this as a variable to use it in the future.

Sort data frame
---------------

To sort the rows in a data frame by the value of a column, we can use
the ``.sort_values()`` method. The argument ``by`` requires a list with
a column name.

Again, if you want to use the sorted version in the future, you need to
save it as a new variable.

.. code:: python

   my_df = pd.DataFrame(data_list, columns=['a', 'b', 'c'])

   my_df.sort_values(by=['b'])

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   a

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   b

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   c

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -2.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -5.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   banana

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -3.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

You can also sort descending by specifying the ``ascending=False``
argument.

.. code:: python

   my_df.sort_values(by=['b'], ascending=False)

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   a

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   b

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   c

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   banana

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -3.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -2.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -5.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

If desired, multiple column names can be specified, with priority given
to those first in the list.

.. code:: python

   my_df.sort_values(by=['b', 'a'], ascending=False)

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   a

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   b

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   c

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   banana

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -3.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -5.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   apple

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   -2.0

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

Add rows
--------

There are multiple ways to add a new row to a data frame. The most
straightforward way is to use the ``pandas.concat()`` function with a
new data frame with just one row.

We put the the two data frames into a list, and we set ``axis=0`` to
make sure it adds as a row. We will specify ``.reset_index(drop=True)``
to reset row numbers to account for the new row.

.. code:: python

   new_row = pd.DataFrame({
       'a': [2],
       'b': ['banana'],
       'c': [-1.]
   })

   my_df2 = pd.concat([my_df, new_row], axis=0).reset_index(drop=True)

   print(my_df2)

.. code:: none

      a       b    c
   0  1   apple -2.0
   1  3  banana -3.0
   2  5   apple -5.0
   3  2  banana -1.0

You can also use this approach to add multiple rows, as well, by having
the new data frame consist of multiple rows.

.. code:: python

   new_rows = pd.DataFrame({
       'a': [6, 5],
       'b': ['banana', 'orange'],
       'c': [-4., -9.]
   })

   my_df3 = pd.concat([my_df2, new_rows], axis=0).reset_index(drop=True)

   print(my_df3)

.. code:: none

      a       b    c
   0  1   apple -2.0
   1  3  banana -3.0
   2  5   apple -5.0
   3  2  banana -1.0
   4  6  banana -4.0
   5  5  orange -9.0

Join data frames
----------------

A critical tool in data wrangling is combining data frames that share
common values, columns, or identifiers.

Let’s important two new .csv files and join them.

.. code:: python

   surveys_df = pd.read_csv("https://raw.githubusercontent.com/DeisData/python/master/data/surveys.csv", keep_default_na=False, na_values=[""])
   species_df = pd.read_csv("https://raw.githubusercontent.com/DeisData/python/master/data/species.csv", keep_default_na=False, na_values=[""])

   print(surveys_df.head())
   print(species_df.head())

.. code:: none

      record_id  month  day  year  plot_id species_id sex  hindfoot_length  \
   0          1      7   16  1977        2         NL   M             32.0   
   1          2      7   16  1977        3         NL   M             33.0   
   2          3      7   16  1977        2         DM   F             37.0   
   3          4      7   16  1977        7         DM   M             36.0   
   4          5      7   16  1977        3         DM   M             35.0   

      weight  
   0     NaN  
   1     NaN  
   2     NaN  
   3     NaN  
   4     NaN  
     species_id             genus          species    taxa
   0         AB        Amphispiza        bilineata    Bird
   1         AH  Ammospermophilus          harrisi  Rodent
   2         AS        Ammodramus       savannarum    Bird
   3         BA           Baiomys          taylori  Rodent
   4         CB   Campylorhynchus  brunneicapillus    Bird

The shared column between these data frames is ``species_id``, so this
is the column we will want to join around.

Inner Join
~~~~~~~~~~

The pandas function for performing joins is called ``merge()`` and an
Inner join is the default option.

Inner joins take all rows from both data frames that share values from
an identifier column. In our case, this means that our joined data frame
will only include rows with species identifiers present in
``species_df`` and ``surveys_df``.

.. container:: row

   .. code:: none

          <div class="col-12">
              <img src="/_static/images/python/pandas/innerjoin.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="inner join">
          </div>

.. code:: python


   merged_inner = pd.merge(left=surveys_df, right=species_df, left_on='species_id', right_on='species_id')

   # In this case `species_id` is the only column name in  both dataframes, so if we skipped `left_on`
   # And `right_on` arguments we would still get the same result

   # What's the size of the output data?
   print(merged_inner.shape)
   merged_inner

.. code:: none

   (34786, 12)

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   record_id

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   month

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   day

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   year

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   plot_id

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   species_id

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   sex

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   hindfoot_length

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   weight

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   genus

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   species

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   taxa

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   16

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NL

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   32.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Neotoma

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   albigula

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   2

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   16

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NL

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   33.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Neotoma

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   albigula

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   22

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   17

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   15

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NL

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   F

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Neotoma

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   albigula

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   3

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   38

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   17

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   17

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NL

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   33.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Neotoma

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   albigula

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   4

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   72

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   8

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   19

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NL

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Neotoma

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   albigula

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   …

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   34781

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   28988

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   23

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1998

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   6

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   CT

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Cnemidophorus

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   tigris

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Reptile

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   34782

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35512

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   11

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   US

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Sparrow

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   sp.

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Bird

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   34783

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35513

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   11

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   US

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Sparrow

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   sp.

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Bird

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   34784

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35528

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   13

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   US

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Sparrow

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   sp.

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Bird

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   34785

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35544

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   15

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   US

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Sparrow

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   sp.

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Bird

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

   .. raw:: html

      <p>

   34786 rows × 12 columns

   .. raw:: html

      </p>

The result ``merged_inner`` data frame contains all of the columns from
``surveys_df`` (``record_id``, ``month``, ``day``, etc.) as well as all
the columns from ``species_df`` (``species_id``, ``genus``, ``species``,
and ``taxa``).

Left join
~~~~~~~~~

What if we want to add information from ``species_df`` to
``surveys_df``\ without losing any of the information from
``surveys_df``? In this case, we use a different type of join called a
left join, where we keep all rows from the data frame we call left (in
our case ``surveys_df``) and only take rows from the right data frame
(``species_df``) with species IDs in ``surveys_df``.

.. container:: row

   .. code:: none

          <div class="col-12">
              <img src="/_static/images/python/pandas/leftjoin.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="inner join">
          </div>

A left join is performed in pandas by calling the same ``merge()``
function used for inner join, but using the ``how='left'`` argument.

.. code:: python

   merged_left = pd.merge(left=surveys_df, right=species_df, how='left', left_on='species_id', right_on='species_id')
   merged_left

.. container:: table

   .. raw:: html

      <table border="1" class="dataframe">

   .. raw:: html

      <thead>

   .. raw:: html

      <tr style="text-align: right;">

   .. raw:: html

      <th>

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   record_id

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   month

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   day

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   year

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   plot_id

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   species_id

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   sex

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   hindfoot_length

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   weight

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   genus

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   species

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   taxa

   .. raw:: html

      </th>

   .. raw:: html

      </tr>

   .. raw:: html

      </thead>

   .. raw:: html

      <tbody>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   0

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   1

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   16

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NL

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   32.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Neotoma

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   albigula

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   1

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   2

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   16

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NL

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   33.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Neotoma

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   albigula

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   2

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   16

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   DM

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   F

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   37.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Dipodomys

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   merriami

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   3

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   4

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   16

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   DM

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   36.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Dipodomys

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   merriami

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   4

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   16

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1977

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   DM

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   35.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Dipodomys

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   merriami

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   …

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   …

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   35544

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35545

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   15

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   AH

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Ammospermophilus

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   harrisi

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   35545

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35546

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   15

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   AH

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Ammospermophilus

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   harrisi

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   35546

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35547

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   10

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   RM

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   F

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   15.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   14.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Reithrodontomys

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   megalotis

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   35547

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35548

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   7

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   DO

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   M

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   36.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   51.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Dipodomys

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   ordii

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Rodent

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   35548

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   35549

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   12

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   31

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2002

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   5

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   NaN

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      </tbody>

   .. raw:: html

      </table>

   .. raw:: html

      <p>

   35549 rows × 12 columns

   .. raw:: html

      </p>

Export data frame as .csv
-------------------------

If you have made modifications to a data set in Python and want to
export that to a new .csv, you can easily do that with the ``.to_csv()``
method that all pandas data frames have.

.. code:: python

   %%script false --no-raise-error ## comment this line to run the cell

   df_hungary.to_csv('gapminder_hungary.csv', index=False) # index = False makes sure row names are not saved as their own columns

Question: Putting it together
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create two data frames called ``A`` and ``B`` with at least 3 columns
and 4 rows. Make one column in both ``A`` and ``B`` an identifier
column, with at least one ID present in both data frames. Use a left
join with ``A`` as the left data frame, and call the new data frame
``C``. Display the data frame, and export it as a .csv file.

.. code:: python

   ### Your code here:

.. raw:: html

   <details>

.. raw:: html

   <summary>

Solution

.. raw:: html

   </summary>

.. container::

   .. code:: python

      A = pd.DataFrame({
          'ident': [0, 1, 2, 3],
          'size': [2.1, 5.2, 3.1, 1.5],
          'location': ['IL', 'MA', 'CA', 'NE']
          
      })

      B = pd.DataFrame({
          'ident': [5, 4, 0, 1, 3],
          'animal': ['monkey', 'giraffe', 'ape', 'lion', 'fish'],
          'sex': ['M', 'F', 'F', 'F', 'M']
      })

      C = pd.merge(left=A, right=B, how='left', left_on='ident', right_on='ident')
      print(C)

      C.to_csv('joined_data.csv', index=False) 

   .. code:: none

         ident  size location animal  sex
      0      0   2.1       IL    ape    F
      1      1   5.2       MA   lion    F
      2      2   3.1       CA    NaN  NaN
      3      3   1.5       NE   fish    M

.. raw:: html

   </details>

Resources
---------

-  `Pandas docs <https://pandas.pydata.org/docs/>`__
-  `Pandas getting
   started <https://pandas.pydata.org/docs/getting_started/index.html#getting-started>`__
-  `Pandas
   cheatsheet <https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf>`__
-  `PySpark for big
   data <https://spark.apache.org/docs/latest/api/python/>`__

This lesson is adapted from `Software
Carpentry <http://swcarpentry.github.io/python-novice-gapminder/design/>`__.

