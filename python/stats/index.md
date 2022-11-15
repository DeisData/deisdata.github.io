---
layout: python
---

# Statistics with Python

### Objectives 
* Import data into a `pandas` data frame
* Import some standard and useful libraries for python
* Introduce some model fitting


### Reference and Resource

This lesson and data is adapted from 
<a href='https://www.linkedin.com/learning/python-statistics-essential-training/'>LinkedIn Learning: Python Statistics Essential Training</a>. See these lessons for more details including working with categorical data.


## Importing Libraries and Data

We will use several packages for our statistical analyses. In particular, we will use `scipy.stats` and `statsmodels` for running hypothesis testing and model fitting.


```python
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

```

To find out more about a library and see the documentation, you can run `?LIBRARY_NAME`.

```python
# Have a question about a package?
# Get documentation with the question mark ?
# INSTRUCTIONS:  Ask about a library here:

?scipy.stats
```


## Describe and plot distributions

Let's first import our <a href="https://www.gapminder.org">GapMinder</a> data set and summarize it.



```python
# Import data
gapminder = pd.read_csv('../data/gapminder.csv')
gapminder.info()
```

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



```python
gapminder
```




<div>
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
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>country</th>
      <th>year</th>
      <th>region</th>
      <th>population</th>
      <th>life_expectancy</th>
      <th>age5_surviving</th>
      <th>babies_per_woman</th>
      <th>gdp_per_capita</th>
      <th>gdp_per_day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Afghanistan</td>
      <td>1800</td>
      <td>Asia</td>
      <td>3280000.0</td>
      <td>28.21</td>
      <td>53.142</td>
      <td>7.00</td>
      <td>603.0</td>
      <td>1.650924</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Afghanistan</td>
      <td>1810</td>
      <td>Asia</td>
      <td>3280000.0</td>
      <td>28.11</td>
      <td>53.002</td>
      <td>7.00</td>
      <td>604.0</td>
      <td>1.653662</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Afghanistan</td>
      <td>1820</td>
      <td>Asia</td>
      <td>3323519.0</td>
      <td>28.01</td>
      <td>52.862</td>
      <td>7.00</td>
      <td>604.0</td>
      <td>1.653662</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Afghanistan</td>
      <td>1830</td>
      <td>Asia</td>
      <td>3448982.0</td>
      <td>27.90</td>
      <td>52.719</td>
      <td>7.00</td>
      <td>625.0</td>
      <td>1.711157</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Afghanistan</td>
      <td>1840</td>
      <td>Asia</td>
      <td>3625022.0</td>
      <td>27.80</td>
      <td>52.576</td>
      <td>7.00</td>
      <td>647.0</td>
      <td>1.771389</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>14735</th>
      <td>Zimbabwe</td>
      <td>2011</td>
      <td>Africa</td>
      <td>14255592.0</td>
      <td>51.60</td>
      <td>90.800</td>
      <td>3.64</td>
      <td>1626.0</td>
      <td>4.451745</td>
    </tr>
    <tr>
      <th>14736</th>
      <td>Zimbabwe</td>
      <td>2012</td>
      <td>Africa</td>
      <td>14565482.0</td>
      <td>54.20</td>
      <td>91.330</td>
      <td>3.56</td>
      <td>1750.0</td>
      <td>4.791239</td>
    </tr>
    <tr>
      <th>14737</th>
      <td>Zimbabwe</td>
      <td>2013</td>
      <td>Africa</td>
      <td>14898092.0</td>
      <td>55.70</td>
      <td>91.670</td>
      <td>3.49</td>
      <td>1773.0</td>
      <td>4.854209</td>
    </tr>
    <tr>
      <th>14738</th>
      <td>Zimbabwe</td>
      <td>2014</td>
      <td>Africa</td>
      <td>15245855.0</td>
      <td>57.00</td>
      <td>91.900</td>
      <td>3.41</td>
      <td>1773.0</td>
      <td>4.854209</td>
    </tr>
    <tr>
      <th>14739</th>
      <td>Zimbabwe</td>
      <td>2015</td>
      <td>Africa</td>
      <td>15602751.0</td>
      <td>59.30</td>
      <td>92.040</td>
      <td>3.35</td>
      <td>1801.0</td>
      <td>4.930869</td>
    </tr>
  </tbody>
</table>
<p>14740 rows × 9 columns</p>
</div>



## Descriptive statistics

We can use built in functions in pandas to summarize key aspects of our data.


```python
max_pop = gapminder.population.max()
ave_bpw = gapminder.babies_per_woman.mean()
var_bpw = gapminder.babies_per_woman.var()

print('Max population:', max_pop)
print('Mean babies per woman:', ave_bpw)
print('Variance in babies per woman:', var_bpw)
```

    Max population: 1376048943.0
    Mean babies per woman: 4.643471506105837
    Variance in babies per woman: 3.9793570162855287


We examine quartiles using the `.quantile()` method and specifying 0.25, 0.50 and 0.75. 


```python
gapminder.life_expectancy.quantile([0.25,0.50,0.75])
```




    0.25    44.23
    0.50    60.08
    0.75    70.38
    Name: life_expectancy, dtype: float64



For very simple plots, we can plot directly from pandas, specifying the type of plot with the argument `kind`. Here we make a box plot and a histogram. We can then add labels with matplotlib.


```python
gapminder.life_expectancy.plot(kind='box')
plt.ylabel('Percentage Surviving')
plt.show()
```


<div class="row container">
    <div class="col-12">
        <img src="/assets/images/python/stats/stats_13_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder box plot">
    </div>
</div>

    



```python
gapminder.age5_surviving.mean()
```




    84.45266533242852




```python
gapminder.life_expectancy.plot(kind='hist')
plt.ylabel('Percentage Surviving')
plt.show()
```

<div class="row container">
    <div class="col-12">
        <img src="/assets/images/python/stats/stats_15_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder histogram">
    </div>
</div>
        


### Hypothesis Testing

Statistical methods are used to test **hypotheses**. One of the most foundational hypotheses we can ask is "Is the mean of this sample different from some value?" Typically, the value we are comparing the mean to has some sort of relavence.

While the actual mean of the sample might be different, we want to know if our data could have been generated if the true mean was a certain value. To do this, we use a **1-sample t-test**. 

To run a 1-sample t-test, we can use the `ttest_1sample()` function from the `scipy.stats` module.


```python
# 1 Sample t-test
# Is the mean of the data 84.4?
scipy.stats.ttest_1samp(gapminder['life_expectancy'], 57)
```




    Ttest_1sampResult(statistic=-1.2660253842508842, pvalue=0.20552400415951508)



If we want to compare the means in two samples, we need to run a **2-sample t-test**, also called an **independent samples t-test**. We can use the function `ttest_ind()` for this.


```python
# 2 sample t-test
gdata_us = gapminder[gapminder.country == 'United States']
gdata_canada = gapminder[gapminder.country == 'Canada']

scipy.stats.ttest_ind(gdata_us.life_expectancy, gdata_canada.life_expectancy)   
```




    Ttest_indResult(statistic=-0.741088317096773, pvalue=0.4597261729067277)



## Fitting Models to Data

We have described the sample of a population with statistics.
Now let's understand what we can say about a population from a sample of data.


```python
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
```

Using the custom function we just specified, let's visualize the relationship between `age5_surviving` and `babies_per_woman`.


```python
plotdata()
```


<div class="row container">
    <div class="col-12">
        <img src="/assets/images/python/stats/stats_24_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder scatter">
    </div>
</div>
    


We can see there seems to be some sort of negative relationship between the two variables. There also might be a relationship between region and `babies_per_woman`, as well.

## statmodels

**statsmodels** has many capabilities.

Here we will use Ordinary Least Squares (OLS).
Least squares means models are fit by minimizing the squared difference between predictions and observations.

statsmodels lets us specify models using the "tilda" notation (also used in R)
response variable ~ model terms.  

For example: `babes_per_woman ~ age5surviving`.

Below we use the formula `babies_per_woman ~ 1`. This will essential just use the mean `babies_per_woman` value as the prediction for all data points. 


```python
# Ordinary least squares model
model = smf.ols(formula='babies_per_woman ~ 1',data=gdata)
#    where babies per woman is the response variable and
#    1 represents a constant

# Next, we fit the model
grandmean = model.fit()
```

Let's make a new function to visualize these results, using the old function we just made and adding in our predictions from our model on top. 


```python
# Let's make a function to plot the data against the model prediction
def plotfit(fit):
    plotdata()
    plt.scatter(gdata.life_expectancy, fit.predict(gdata),
              c=colors,s=30,linewidths=0.5,edgecolor='k',marker='D')
    
plotfit(grandmean)
```

<div class="row container">
    <div class="col-12">
        <img src="/assets/images/python/stats/stats_30_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder scatter">
    </div>
</div>
    



```python
grandmean.params
```




    Intercept    4.360714
    dtype: float64



Ever single data points get predicted to have the same value: 4.36. Thus, this is a very poor model.

Let's try a slightly better model, using the region to preduct babies per woman. We use `-1` in the formula to say we do not want to include a constant in the model.


```python
groupmeans = smf.ols(formula='babies_per_woman ~ -1 + region',data=gdata).fit()
```


```python
plotfit(groupmeans)
```

  
<div class="row container">
    <div class="col-12">
        <img src="/assets/images/python/stats/stats_34_0.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder group means">
    </div>
</div>

We can check the parameters of our fitted model to see the main effect of each region. 

```python
groupmeans.params
```




    region[Africa]     6.321321
    region[America]    3.658182
    region[Asia]       4.775577
    region[Europe]     2.035682
    dtype: float64

An ANOVA can be used to test if these effects are significant. 


```python
sm.stats.anova_lm(groupmeans)
```




<div>
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
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>df</th>
      <th>sum_sq</th>
      <th>mean_sq</th>
      <th>F</th>
      <th>PR(&gt;F)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>region</th>
      <td>4.0</td>
      <td>3927.702839</td>
      <td>981.925710</td>
      <td>655.512121</td>
      <td>2.604302e-105</td>
    </tr>
    <tr>
      <th>Residual</th>
      <td>178.0</td>
      <td>266.635461</td>
      <td>1.497952</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




This is a much more informed model, but we can still do a lot better. Let's take `life_expectancy` into account in a new model.


```python
surviving = smf.ols(formula='babies_per_woman ~ -1 + region + life_expectancy',data=gdata).fit()
```


```python
plotfit(surviving)
print(surviving.params)
```

    region[Africa]     12.953805
    region[America]    11.885657
    region[Asia]       12.452629
    region[Europe]     10.703060
    life_expectancy    -0.119281
    dtype: float64



<div class="row container">
    <div class="col-12">
        <img src="/assets/images/python/stats/stats_38_1.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="gapminder scatter">
    </div>
</div>
    


Now, we have a much better model.

**statsmodels** provides a summary for the fit with Goodness of Fit statistics, and also provides an anova table for the significance of the added variables.


```python
surviving.summary()
```




<table class="simpletable">
<caption>OLS Regression Results</caption>
<tr>
  <th>Dep. Variable:</th>    <td>babies_per_woman</td> <th>  R-squared:         </th> <td>   0.768</td>
</tr>
<tr>
  <th>Model:</th>                   <td>OLS</td>       <th>  Adj. R-squared:    </th> <td>   0.763</td>
</tr>
<tr>
  <th>Method:</th>             <td>Least Squares</td>  <th>  F-statistic:       </th> <td>   146.9</td>
</tr>
<tr>
  <th>Date:</th>             <td>Tue, 08 Nov 2022</td> <th>  Prob (F-statistic):</th> <td>4.01e-55</td>
</tr>
<tr>
  <th>Time:</th>                 <td>10:18:04</td>     <th>  Log-Likelihood:    </th> <td> -251.93</td>
</tr>
<tr>
  <th>No. Observations:</th>      <td>   182</td>      <th>  AIC:               </th> <td>   513.9</td>
</tr>
<tr>
  <th>Df Residuals:</th>          <td>   177</td>      <th>  BIC:               </th> <td>   529.9</td>
</tr>
<tr>
  <th>Df Model:</th>              <td>     4</td>      <th>                     </th>     <td> </td>   
</tr>
<tr>
  <th>Covariance Type:</th>      <td>nonrobust</td>    <th>                     </th>     <td> </td>   
</tr>
</table>
<table class="simpletable">
<tr>
         <td></td>            <th>coef</th>     <th>std err</th>      <th>t</th>      <th>P>|t|</th>  <th>[0.025</th>    <th>0.975]</th>  
</tr>
<tr>
  <th>region[Africa]</th>  <td>   12.9538</td> <td>    0.674</td> <td>   19.227</td> <td> 0.000</td> <td>   11.624</td> <td>   14.283</td>
</tr>
<tr>
  <th>region[America]</th> <td>   11.8857</td> <td>    0.836</td> <td>   14.209</td> <td> 0.000</td> <td>   10.235</td> <td>   13.536</td>
</tr>
<tr>
  <th>region[Asia]</th>    <td>   12.4526</td> <td>    0.776</td> <td>   16.045</td> <td> 0.000</td> <td>   10.921</td> <td>   13.984</td>
</tr>
<tr>
  <th>region[Europe]</th>  <td>   10.7031</td> <td>    0.875</td> <td>   12.229</td> <td> 0.000</td> <td>    8.976</td> <td>   12.430</td>
</tr>
<tr>
  <th>life_expectancy</th> <td>   -0.1193</td> <td>    0.012</td> <td>  -10.047</td> <td> 0.000</td> <td>   -0.143</td> <td>   -0.096</td>
</tr>
</table>
<table class="simpletable">
<tr>
  <th>Omnibus:</th>       <td>19.859</td> <th>  Durbin-Watson:     </th> <td>   1.967</td>
</tr>
<tr>
  <th>Prob(Omnibus):</th> <td> 0.000</td> <th>  Jarque-Bera (JB):  </th> <td>  37.777</td>
</tr>
<tr>
  <th>Skew:</th>          <td> 0.529</td> <th>  Prob(JB):          </th> <td>6.26e-09</td>
</tr>
<tr>
  <th>Kurtosis:</th>      <td> 4.965</td> <th>  Cond. No.          </th> <td>1.41e+03</td>
</tr>
</table><br/><br/>Notes:<br/>[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.<br/>[2] The condition number is large, 1.41e+03. This might indicate that there are<br/>strong multicollinearity or other numerical problems.



We can also use the `anova_lm()` function with our model to estimate the importance of factors in our model.

