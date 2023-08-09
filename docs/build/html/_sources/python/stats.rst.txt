Statistics with Python
======================

Objectives
----------

-  Import data into a ``pandas`` data frame
-  Import some standard and useful libraries for python
-  Introduce some model fitting

Reference and Resource
----------------------

This lesson and data is adapted from LinkedIn Learning: Python
Statistics Essential Training. See these lessons for more details
including working with categorical data.

Importing Libraries and Data
----------------------------

We will use several packages for our statistical analyses. In
particular, we will use ``scipy.stats`` and ``statsmodels`` for running
hypothesis testing and model fitting.

.. code:: python

   # Load standard libraries for data analysis
   import numpy as np
   import pandas as pd

   import matplotlib
   import matplotlib.pyplot as plt

   # packages for statistics
   import scipy.stats

   import statsmodels
   import statsmodels.api as sm
   import statsmodels.formula.api as smf

   %matplotlib inline

To find out more about a library and see the documentation, you can run
``?LIBRARY_NAME``.

.. code:: none

   ?scipy.stats

Describe and plot distributions
-------------------------------

Let’s first import our GapMinder data set and summarize it.

.. code:: python

   # Import data
   gapminder = pd.read_csv('../data/gapminder.csv')
   gapminder.info()

.. code:: none

   <class 'pandas.core.frame.DataFrame'>
   RangeIndex: 14740 entries, 0 to 14739
   Data columns (total 9 columns):
    #   Column            Non-Null Count  Dtype  
   ---  ------            --------------  -----  
    0   country           14740 non-null  object 
    1   year              14740 non-null  int64  
    2   region            14740 non-null  object 
    3   population        14740 non-null  float64
    4   life_expectancy   14740 non-null  float64
    5   age5_surviving    14740 non-null  float64
    6   babies_per_woman  14740 non-null  float64
    7   gdp_per_capita    14740 non-null  float64
    8   gdp_per_day       14740 non-null  float64
   dtypes: float64(6), int64(1), object(2)
   memory usage: 1.0+ MB

.. code:: python

   gapminder

.. container::

   .. raw:: html

      <style scoped>
          .dataframe tbody tr th:only-of-type {
              vertical-align: middle;
          }

          .dataframe tbody tr th {
              vertical-align: top;
          }

          .dataframe thead th {
              text-align: right;
          }
      </style>

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

   7.00

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

   7.00

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

   7.00

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

   7.00

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

   7.00

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

   Zimbabwe

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2011

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Africa

   .. raw:: html

      </td>

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

   90.800

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.64

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1626.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.451745

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

   Zimbabwe

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2012

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Africa

   .. raw:: html

      </td>

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

   91.330

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.56

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1750.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.791239

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

   Zimbabwe

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2013

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Africa

   .. raw:: html

      </td>

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

   91.670

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.49

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1773.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.854209

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

   Zimbabwe

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2014

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Africa

   .. raw:: html

      </td>

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

   91.900

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.41

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1773.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.854209

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

   Zimbabwe

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2015

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   Africa

   .. raw:: html

      </td>

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

   92.040

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3.35

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1801.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   4.930869

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

   14740 rows × 9 columns

   .. raw:: html

      </p>

Descriptive statistics
----------------------

We can use built in functions in pandas to summarize key aspects of our
data.

.. code:: python

   max_pop = gapminder.population.max()
   ave_bpw = gapminder.babies_per_woman.mean()
   var_bpw = gapminder.babies_per_woman.var()

   print('Max population:', max_pop)
   print('Mean babies per woman:', ave_bpw)
   print('Variance in babies per woman:', var_bpw)

.. code:: none

   Max population: 1376048943.0
   Mean babies per woman: 4.643471506105837
   Variance in babies per woman: 3.9793570162855287

We examine quartiles using the ``.quantile()`` method and specifying
0.25, 0.50 and 0.75.

.. code:: python

   gapminder.life_expectancy.quantile([0.25,0.50,0.75])

.. code:: none

   0.25    44.23
   0.50    60.08
   0.75    70.38
   Name: life_expectancy, dtype: float64

For very simple plots, we can plot directly from pandas, specifying the
type of plot with the argument ``kind``. Here we make a box plot and a
histogram. We can then add labels with matplotlib.

.. code:: python

   gapminder.life_expectancy.plot(kind='box')
   plt.ylabel('Percentage Surviving')
   plt.show()

.. container:: row

   .. code:: none

      <div class="col-12">
          <img src="/_static/images/python/stats/stats_13_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder box plot">
      </div>

.. code:: python

   gapminder.age5_surviving.mean()

.. code:: none

   84.45266533242852

.. code:: python

   gapminder.life_expectancy.plot(kind='hist')
   plt.ylabel('Percentage Surviving')
   plt.show()

.. container:: row

   .. code:: none

      <div class="col-12">
          <img src="/_static/images/python/stats/stats_15_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder histogram">
      </div>

Hypothesis Testing
~~~~~~~~~~~~~~~~~~

Statistical methods are used to test **hypotheses**. One of the most
foundational hypotheses we can ask is “Is the mean of this sample
different from some value?” Typically, the value we are comparing the
mean to has some sort of relavence.

While the actual mean of the sample might be different, we want to know
if our data could have been generated if the true mean was a certain
value. To do this, we use a **1-sample t-test**.

To run a 1-sample t-test, we can use the ``ttest_1sample()`` function
from the ``scipy.stats`` module.

.. code:: python

   # 1 Sample t-test
   # Is the mean of the data 84.4?
   scipy.stats.ttest_1samp(gapminder['life_expectancy'], 57)

.. code:: none

   Ttest_1sampResult(statistic=-1.2660253842508842, pvalue=0.20552400415951508)

If we want to compare the means in two samples, we need to run a
**2-sample t-test**, also called an **independent samples t-test**. We
can use the function ``ttest_ind()`` for this.

.. code:: python

   # 2 sample t-test
   gdata_us = gapminder[gapminder.country == 'United States']
   gdata_canada = gapminder[gapminder.country == 'Canada']

   scipy.stats.ttest_ind(gdata_us.life_expectancy, gdata_canada.life_expectancy)   

.. code:: none

   Ttest_indResult(statistic=-0.741088317096773, pvalue=0.4597261729067277)

Fitting Models to Data
----------------------

We have described the sample of a population with statistics. Now let’s
understand what we can say about a population from a sample of data.

.. code:: python

   # Get data subset
   gdata = gapminder.query('year == 1985')
   # grab population for point sizes
   size = 1e-6 * gdata.population
   # assign colors to regions
   colors = gdata.region.map({'Africa': 'skyblue', 'Europe': 'gold', 'America': 'palegreen', 'Asia': 'coral'})

   # create plotting function
   def plotdata():
       gdata.plot.scatter('life_expectancy','babies_per_woman',
                          c=colors,s=size,linewidths=0.5,edgecolor='k',alpha=0.5)

Using the custom function we just specified, let’s visualize the
relationship between ``age5_surviving`` and ``babies_per_woman``.

.. code:: python

   plotdata()

.. container:: row

   .. code:: none

      <div class="col-12">
          <img src="/_static/images/python/stats/stats_24_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder scatter">
      </div>

We can see there seems to be some sort of negative relationship between
the two variables. There also might be a relationship between region and
``babies_per_woman``, as well.

statmodels
----------

**statsmodels** has many capabilities.

Here we will use Ordinary Least Squares (OLS). Least squares means
models are fit by minimizing the squared difference between predictions
and observations.

statsmodels lets us specify models using the “tilda” notation (also used
in R) response variable ~ model terms.

For example: ``babes_per_woman ~ age5surviving``.

Below we use the formula ``babies_per_woman ~ 1``. This will essential
just use the mean ``babies_per_woman`` value as the prediction for all
data points.

.. code:: python

   # Ordinary least squares model
   model = smf.ols(formula='babies_per_woman ~ 1',data=gdata)
   #    where babies per woman is the response variable and
   #    1 represents a constant

   # Next, we fit the model
   grandmean = model.fit()

Let’s make a new function to visualize these results, using the old
function we just made and adding in our predictions from our model on
top.

.. code:: python

   # Let's make a function to plot the data against the model prediction
   def plotfit(fit):
       plotdata()
       plt.scatter(gdata.life_expectancy, fit.predict(gdata),
                 c=colors,s=30,linewidths=0.5,edgecolor='k',marker='D')
       
   plotfit(grandmean)

.. container:: row

   .. code:: none

      <div class="col-12">
          <img src="/_static/images/python/stats/stats_30_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder scatter">
      </div>

.. code:: python

   grandmean.params

.. code:: none

   Intercept    4.360714
   dtype: float64

Ever single data points get predicted to have the same value: 4.36.
Thus, this is a very poor model.

Let’s try a slightly better model, using the region to preduct babies
per woman. We use ``-1`` in the formula to say we do not want to include
a constant in the model.

.. code:: python

   groupmeans = smf.ols(formula='babies_per_woman ~ -1 + region',data=gdata).fit()

.. code:: python

   plotfit(groupmeans)

.. container:: row

   .. code:: none

      <div class="col-12">
          <img src="/_static/images/python/stats/stats_34_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder group means">
      </div>

We can check the parameters of our fitted model to see the main effect
of each region.

.. code:: python

   groupmeans.params

.. code:: none

   region[Africa]     6.321321
   region[America]    3.658182
   region[Asia]       4.775577
   region[Europe]     2.035682
   dtype: float64

An ANOVA can be used to test if these effects are significant.

.. code:: python

   sm.stats.anova_lm(groupmeans)

.. container::

   .. raw:: html

      <style scoped>
          .dataframe tbody tr th:only-of-type {
              vertical-align: middle;
          }

          .dataframe tbody tr th {
              vertical-align: top;
          }

          .dataframe thead th {
              text-align: right;
          }
      </style>

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

   df

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   sum_sq

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   mean_sq

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   F

   .. raw:: html

      </th>

   .. raw:: html

      <th>

   PR(>F)

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

   region

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   4.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   3927.702839

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   981.925710

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   655.512121

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   2.604302e-105

   .. raw:: html

      </td>

   .. raw:: html

      </tr>

   .. raw:: html

      <tr>

   .. raw:: html

      <th>

   Residual

   .. raw:: html

      </th>

   .. raw:: html

      <td>

   178.0

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   266.635461

   .. raw:: html

      </td>

   .. raw:: html

      <td>

   1.497952

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

This is a much more informed model, but we can still do a lot better.
Let’s take ``life_expectancy`` into account in a new model.

.. code:: python

   surviving = smf.ols(formula='babies_per_woman ~ -1 + region + life_expectancy',data=gdata).fit()

.. code:: python

   plotfit(surviving)
   print(surviving.params)

.. code:: none

   region[Africa]     12.953805
   region[America]    11.885657
   region[Asia]       12.452629
   region[Europe]     10.703060
   life_expectancy    -0.119281
   dtype: float64

.. container:: row

   .. code:: none

      <div class="col-12">
          <img src="/_static/images/python/stats/stats_38_1.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder scatter">
      </div>

Now, we have a much better model.

**statsmodels** provides a summary for the fit with Goodness of Fit
statistics, and also provides an anova table for the significance of the
added variables.

.. code:: python

   surviving.summary()

.. raw:: html

   <table class="simpletable">

.. raw:: html

   <caption>

OLS Regression Results

.. raw:: html

   </caption>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Dep. Variable:

.. raw:: html

   </th>

.. raw:: html

   <td>

babies_per_woman

.. raw:: html

   </td>

.. raw:: html

   <th>

R-squared:

.. raw:: html

   </th>

.. raw:: html

   <td>

0.768

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Model:

.. raw:: html

   </th>

.. code:: none

                <td>OLS</td>       <th>  Adj. R-squared:    </th> <td>   0.763</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Method:

.. raw:: html

   </th>

.. code:: none

          <td>Least Squares</td>  <th>  F-statistic:       </th> <td>   146.9</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Date:

.. raw:: html

   </th>

.. code:: none

          <td>Tue, 08 Nov 2022</td> <th>  Prob (F-statistic):</th> <td>4.01e-55</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Time:

.. raw:: html

   </th>

.. code:: none

              <td>10:18:04</td>     <th>  Log-Likelihood:    </th> <td> -251.93</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

No. Observations:

.. raw:: html

   </th>

.. code:: none

   <td>   182</td>      <th>  AIC:               </th> <td>   513.9</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Df Residuals:

.. raw:: html

   </th>

.. code:: none

       <td>   177</td>      <th>  BIC:               </th> <td>   529.9</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Df Model:

.. raw:: html

   </th>

.. code:: none

           <td>     4</td>      <th>                     </th>     <td> </td>   

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Covariance Type:

.. raw:: html

   </th>

.. code:: none

   <td>nonrobust</td>    <th>                     </th>     <td> </td>   

.. raw:: html

   </tr>

.. raw:: html

   </table>

.. raw:: html

   <table class="simpletable">

.. raw:: html

   <tr>

.. raw:: html

   <td>

.. raw:: html

   </td>

.. raw:: html

   <th>

coef

.. raw:: html

   </th>

.. raw:: html

   <th>

std err

.. raw:: html

   </th>

.. raw:: html

   <th>

t

.. raw:: html

   </th>

.. raw:: html

   <th>

P>|t\|

.. raw:: html

   </th>

.. raw:: html

   <th>

[0.025]

.. raw:: html

   </th>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

region[Africa]

.. raw:: html

   </th>

.. raw:: html

   <td>

12.9538

.. raw:: html

   </td>

.. raw:: html

   <td>

0.674

.. raw:: html

   </td>

.. raw:: html

   <td>

19.227

.. raw:: html

   </td>

.. raw:: html

   <td>

0.000

.. raw:: html

   </td>

.. raw:: html

   <td>

11.624

.. raw:: html

   </td>

.. raw:: html

   <td>

14.283

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

region[America]

.. raw:: html

   </th>

.. raw:: html

   <td>

11.8857

.. raw:: html

   </td>

.. raw:: html

   <td>

0.836

.. raw:: html

   </td>

.. raw:: html

   <td>

14.209

.. raw:: html

   </td>

.. raw:: html

   <td>

0.000

.. raw:: html

   </td>

.. raw:: html

   <td>

10.235

.. raw:: html

   </td>

.. raw:: html

   <td>

13.536

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

region[Asia]

.. raw:: html

   </th>

.. raw:: html

   <td>

12.4526

.. raw:: html

   </td>

.. raw:: html

   <td>

0.776

.. raw:: html

   </td>

.. raw:: html

   <td>

16.045

.. raw:: html

   </td>

.. raw:: html

   <td>

0.000

.. raw:: html

   </td>

.. raw:: html

   <td>

10.921

.. raw:: html

   </td>

.. raw:: html

   <td>

13.984

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

region[Europe]

.. raw:: html

   </th>

.. raw:: html

   <td>

10.7031

.. raw:: html

   </td>

.. raw:: html

   <td>

0.875

.. raw:: html

   </td>

.. raw:: html

   <td>

12.229

.. raw:: html

   </td>

.. raw:: html

   <td>

0.000

.. raw:: html

   </td>

.. raw:: html

   <td>

8.976

.. raw:: html

   </td>

.. raw:: html

   <td>

12.430

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

life_expectancy

.. raw:: html

   </th>

.. raw:: html

   <td>

-0.1193

.. raw:: html

   </td>

.. raw:: html

   <td>

0.012

.. raw:: html

   </td>

.. raw:: html

   <td>

-10.047

.. raw:: html

   </td>

.. raw:: html

   <td>

0.000

.. raw:: html

   </td>

.. raw:: html

   <td>

-0.143

.. raw:: html

   </td>

.. raw:: html

   <td>

-0.096

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   </table>

.. raw:: html

   <table class="simpletable">

.. raw:: html

   <tr>

.. raw:: html

   <th>

Omnibus:

.. raw:: html

   </th>

.. code:: none

    <td>19.859</td> <th>  Durbin-Watson:     </th> <td>   1.967</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Prob(Omnibus):

.. raw:: html

   </th>

.. raw:: html

   <td>

0.000

.. raw:: html

   </td>

.. raw:: html

   <th>

Jarque-Bera (JB):

.. raw:: html

   </th>

.. raw:: html

   <td>

37.777

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Skew:

.. raw:: html

   </th>

.. code:: none

       <td> 0.529</td> <th>  Prob(JB):          </th> <td>6.26e-09</td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <th>

Kurtosis:

.. raw:: html

   </th>

.. code:: none

   <td> 4.965</td> <th>  Cond. No.          </th> <td>1.41e+03</td>

.. raw:: html

   </tr>

.. raw:: html

   </table>

Notes:[1] Standard Errors assume that the covariance matrix of the
errors is correctly specified.[2] The condition number is large,
1.41e+03. This might indicate that there arestrong multicollinearity or
other numerical problems.

We can also use the ``anova_lm()`` function with our model to estimate
the importance of factors in our model.
