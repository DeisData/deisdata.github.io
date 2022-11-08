---
layout: python
---

# Statistics with Python

Objectives 
* Import data into a `pandas` data frame
* Import some standard and useful libraries for python
* Introduce some model fitting


**Reference and Resource**

This lesson and data is adapted from 
<a href='https://www.linkedin.com/learning/python-statistics-essential-training/'>LinkedIn Learning: Python Statistics Essential Training</a>.  See these lessons for more details including working with categorical data.


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


```python
# Have a question about a package?
# Get documentation with the question mark ?
# INSTRUCTIONS:  Ask about a library here:

?scipy.stats
```

    [0;31mType:[0m        module
    [0;31mString form:[0m <module 'scipy.stats' from '/Users/fordfishman/opt/anaconda3/envs/workshop/lib/python3.9/site-packages/scipy/stats/__init__.py'>
    [0;31mFile:[0m        ~/opt/anaconda3/envs/workshop/lib/python3.9/site-packages/scipy/stats/__init__.py
    [0;31mDocstring:[0m  
    .. _statsrefmanual:
    
    ==========================================
    Statistical functions (:mod:`scipy.stats`)
    ==========================================
    
    .. currentmodule:: scipy.stats
    
    This module contains a large number of probability distributions,
    summary and frequency statistics, correlation functions and statistical
    tests, masked statistics, kernel density estimation, quasi-Monte Carlo
    functionality, and more.
    
    Statistics is a very large area, and there are topics that are out of scope
    for SciPy and are covered by other packages. Some of the most important ones
    are:
    
    - `statsmodels <https://www.statsmodels.org/stable/index.html>`__:
      regression, linear models, time series analysis, extensions to topics
      also covered by ``scipy.stats``.
    - `Pandas <https://pandas.pydata.org/>`__: tabular data, time series
      functionality, interfaces to other statistical languages.
    - `PyMC <https://docs.pymc.io/>`__: Bayesian statistical
      modeling, probabilistic machine learning.
    - `scikit-learn <https://scikit-learn.org/>`__: classification, regression,
      model selection.
    - `Seaborn <https://seaborn.pydata.org/>`__: statistical data visualization.
    - `rpy2 <https://rpy2.github.io/>`__: Python to R bridge.
    
    
    Probability distributions
    =========================
    
    Each univariate distribution is an instance of a subclass of `rv_continuous`
    (`rv_discrete` for discrete distributions):
    
    .. autosummary::
       :toctree: generated/
    
       rv_continuous
       rv_discrete
       rv_histogram
    
    Continuous distributions
    ------------------------
    
    .. autosummary::
       :toctree: generated/
    
       alpha             -- Alpha
       anglit            -- Anglit
       arcsine           -- Arcsine
       argus             -- Argus
       beta              -- Beta
       betaprime         -- Beta Prime
       bradford          -- Bradford
       burr              -- Burr (Type III)
       burr12            -- Burr (Type XII)
       cauchy            -- Cauchy
       chi               -- Chi
       chi2              -- Chi-squared
       cosine            -- Cosine
       crystalball       -- Crystalball
       dgamma            -- Double Gamma
       dweibull          -- Double Weibull
       erlang            -- Erlang
       expon             -- Exponential
       exponnorm         -- Exponentially Modified Normal
       exponweib         -- Exponentiated Weibull
       exponpow          -- Exponential Power
       f                 -- F (Snecdor F)
       fatiguelife       -- Fatigue Life (Birnbaum-Saunders)
       fisk              -- Fisk
       foldcauchy        -- Folded Cauchy
       foldnorm          -- Folded Normal
       genlogistic       -- Generalized Logistic
       gennorm           -- Generalized normal
       genpareto         -- Generalized Pareto
       genexpon          -- Generalized Exponential
       genextreme        -- Generalized Extreme Value
       gausshyper        -- Gauss Hypergeometric
       gamma             -- Gamma
       gengamma          -- Generalized gamma
       genhalflogistic   -- Generalized Half Logistic
       genhyperbolic     -- Generalized Hyperbolic
       geninvgauss       -- Generalized Inverse Gaussian
       gibrat            -- Gibrat
       gompertz          -- Gompertz (Truncated Gumbel)
       gumbel_r          -- Right Sided Gumbel, Log-Weibull, Fisher-Tippett, Extreme Value Type I
       gumbel_l          -- Left Sided Gumbel, etc.
       halfcauchy        -- Half Cauchy
       halflogistic      -- Half Logistic
       halfnorm          -- Half Normal
       halfgennorm       -- Generalized Half Normal
       hypsecant         -- Hyperbolic Secant
       invgamma          -- Inverse Gamma
       invgauss          -- Inverse Gaussian
       invweibull        -- Inverse Weibull
       johnsonsb         -- Johnson SB
       johnsonsu         -- Johnson SU
       kappa4            -- Kappa 4 parameter
       kappa3            -- Kappa 3 parameter
       ksone             -- Distribution of Kolmogorov-Smirnov one-sided test statistic
       kstwo             -- Distribution of Kolmogorov-Smirnov two-sided test statistic
       kstwobign         -- Limiting Distribution of scaled Kolmogorov-Smirnov two-sided test statistic.
       laplace           -- Laplace
       laplace_asymmetric    -- Asymmetric Laplace
       levy              -- Levy
       levy_l
       levy_stable
       logistic          -- Logistic
       loggamma          -- Log-Gamma
       loglaplace        -- Log-Laplace (Log Double Exponential)
       lognorm           -- Log-Normal
       loguniform        -- Log-Uniform
       lomax             -- Lomax (Pareto of the second kind)
       maxwell           -- Maxwell
       mielke            -- Mielke's Beta-Kappa
       moyal             -- Moyal
       nakagami          -- Nakagami
       ncx2              -- Non-central chi-squared
       ncf               -- Non-central F
       nct               -- Non-central Student's T
       norm              -- Normal (Gaussian)
       norminvgauss      -- Normal Inverse Gaussian
       pareto            -- Pareto
       pearson3          -- Pearson type III
       powerlaw          -- Power-function
       powerlognorm      -- Power log normal
       powernorm         -- Power normal
       rdist             -- R-distribution
       rayleigh          -- Rayleigh
       rice              -- Rice
       recipinvgauss     -- Reciprocal Inverse Gaussian
       semicircular      -- Semicircular
       skewcauchy        -- Skew Cauchy
       skewnorm          -- Skew normal
       studentized_range    -- Studentized Range
       t                 -- Student's T
       trapezoid         -- Trapezoidal
       triang            -- Triangular
       truncexpon        -- Truncated Exponential
       truncnorm         -- Truncated Normal
       truncweibull_min  -- Truncated minimum Weibull distribution
       tukeylambda       -- Tukey-Lambda
       uniform           -- Uniform
       vonmises          -- Von-Mises (Circular)
       vonmises_line     -- Von-Mises (Line)
       wald              -- Wald
       weibull_min       -- Minimum Weibull (see Frechet)
       weibull_max       -- Maximum Weibull (see Frechet)
       wrapcauchy        -- Wrapped Cauchy
    
    Multivariate distributions
    --------------------------
    
    .. autosummary::
       :toctree: generated/
    
       multivariate_normal    -- Multivariate normal distribution
       matrix_normal          -- Matrix normal distribution
       dirichlet              -- Dirichlet
       wishart                -- Wishart
       invwishart             -- Inverse Wishart
       multinomial            -- Multinomial distribution
       special_ortho_group    -- SO(N) group
       ortho_group            -- O(N) group
       unitary_group          -- U(N) group
       random_correlation     -- random correlation matrices
       multivariate_t         -- Multivariate t-distribution
       multivariate_hypergeom -- Multivariate hypergeometric distribution
    
    Discrete distributions
    ----------------------
    
    .. autosummary::
       :toctree: generated/
    
       bernoulli                -- Bernoulli
       betabinom                -- Beta-Binomial
       binom                    -- Binomial
       boltzmann                -- Boltzmann (Truncated Discrete Exponential)
       dlaplace                 -- Discrete Laplacian
       geom                     -- Geometric
       hypergeom                -- Hypergeometric
       logser                   -- Logarithmic (Log-Series, Series)
       nbinom                   -- Negative Binomial
       nchypergeom_fisher       -- Fisher's Noncentral Hypergeometric
       nchypergeom_wallenius    -- Wallenius's Noncentral Hypergeometric
       nhypergeom               -- Negative Hypergeometric
       planck                   -- Planck (Discrete Exponential)
       poisson                  -- Poisson
       randint                  -- Discrete Uniform
       skellam                  -- Skellam
       yulesimon                -- Yule-Simon
       zipf                     -- Zipf (Zeta)
       zipfian                  -- Zipfian
    
    An overview of statistical functions is given below.  Many of these functions
    have a similar version in `scipy.stats.mstats` which work for masked arrays.
    
    Summary statistics
    ==================
    
    .. autosummary::
       :toctree: generated/
    
       describe          -- Descriptive statistics
       gmean             -- Geometric mean
       hmean             -- Harmonic mean
       pmean             -- Power mean
       kurtosis          -- Fisher or Pearson kurtosis
       mode              -- Modal value
       moment            -- Central moment
       skew              -- Skewness
       kstat             --
       kstatvar          --
       tmean             -- Truncated arithmetic mean
       tvar              -- Truncated variance
       tmin              --
       tmax              --
       tstd              --
       tsem              --
       variation         -- Coefficient of variation
       find_repeats
       trim_mean
       gstd              -- Geometric Standard Deviation
       iqr
       sem
       bayes_mvs
       mvsdist
       entropy
       differential_entropy
       median_abs_deviation
    
    Frequency statistics
    ====================
    
    .. autosummary::
       :toctree: generated/
    
       cumfreq
       percentileofscore
       scoreatpercentile
       relfreq
    
    .. autosummary::
       :toctree: generated/
    
       binned_statistic     -- Compute a binned statistic for a set of data.
       binned_statistic_2d  -- Compute a 2-D binned statistic for a set of data.
       binned_statistic_dd  -- Compute a d-D binned statistic for a set of data.
    
    Correlation functions
    =====================
    
    .. autosummary::
       :toctree: generated/
    
       f_oneway
       alexandergovern
       pearsonr
       spearmanr
       pointbiserialr
       kendalltau
       weightedtau
       somersd
       linregress
       siegelslopes
       theilslopes
       multiscale_graphcorr
    
    Statistical tests
    =================
    
    .. autosummary::
       :toctree: generated/
    
       ttest_1samp
       ttest_ind
       ttest_ind_from_stats
       ttest_rel
       chisquare
       cramervonmises
       cramervonmises_2samp
       power_divergence
       kstest
       ks_1samp
       ks_2samp
       epps_singleton_2samp
       mannwhitneyu
       tiecorrect
       rankdata
       ranksums
       wilcoxon
       kruskal
       friedmanchisquare
       brunnermunzel
       combine_pvalues
       jarque_bera
       page_trend_test
       tukey_hsd
    
    .. autosummary::
       :toctree: generated/
    
       ansari
       bartlett
       levene
       shapiro
       anderson
       anderson_ksamp
       binom_test
       binomtest
       fligner
       median_test
       mood
       skewtest
       kurtosistest
       normaltest
    
    
    Quasi-Monte Carlo
    =================
    
    .. toctree::
       :maxdepth: 4
    
       stats.qmc
    
    Resampling Methods
    ==================
    
    .. autosummary::
       :toctree: generated/
    
       bootstrap
       permutation_test
       monte_carlo_test
    
    Masked statistics functions
    ===========================
    
    .. toctree::
    
       stats.mstats
    
    
    Other statistical functionality
    ===============================
    
    Transformations
    ---------------
    
    .. autosummary::
       :toctree: generated/
    
       boxcox
       boxcox_normmax
       boxcox_llf
       yeojohnson
       yeojohnson_normmax
       yeojohnson_llf
       obrientransform
       sigmaclip
       trimboth
       trim1
       zmap
       zscore
       gzscore
    
    Statistical distances
    ---------------------
    
    .. autosummary::
       :toctree: generated/
    
       wasserstein_distance
       energy_distance
    
    Sampling
    --------
    
    .. toctree::
       :maxdepth: 4
    
       stats.sampling
    
    Random variate generation / CDF Inversion
    -----------------------------------------
    
    .. autosummary::
       :toctree: generated/
    
       rvs_ratio_uniforms
    
    Distribution Fitting
    --------------------
    
    .. autosummary::
       :toctree: generated/
    
       fit
    
    Circular statistical functions
    ------------------------------
    
    .. autosummary::
       :toctree: generated/
    
       circmean
       circvar
       circstd
    
    Contingency table functions
    ---------------------------
    
    .. autosummary::
       :toctree: generated/
    
       chi2_contingency
       contingency.crosstab
       contingency.expected_freq
       contingency.margins
       contingency.relative_risk
       contingency.association
       fisher_exact
       barnard_exact
       boschloo_exact
    
    Plot-tests
    ----------
    
    .. autosummary::
       :toctree: generated/
    
       ppcc_max
       ppcc_plot
       probplot
       boxcox_normplot
       yeojohnson_normplot
    
    Univariate and multivariate kernel density estimation
    -----------------------------------------------------
    
    .. autosummary::
       :toctree: generated/
    
       gaussian_kde
    
    Warnings / Errors used in :mod:`scipy.stats`
    --------------------------------------------
    
    .. autosummary::
       :toctree: generated/
    
       DegenerateDataWarning
       ConstantInputWarning
       NearConstantInputWarning
       FitError


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



### Descriptive statistics

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


    
![png](/assets/images/python/stats/stats_13_0.png)
    



```python
gapminder.age5_surviving.mean()
```




    84.45266533242852




```python
gapminder.life_expectancy.plot(kind='hist')
plt.ylabel('Percentage Surviving')
plt.show()
```


    
![png](/assets/images/python/stats/stats_15_0.png)
    


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


    
![png](/assets/images/python/stats/stats_24_0.png)
    


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


    
![png](/assets/images/python/stats/stats_30_0.png)
    



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


    
![png](/assets/images/python/stats/stats_34_0.png)
    



```python
groupmeans.params
```




    region[Africa]     6.321321
    region[America]    3.658182
    region[Asia]       4.775577
    region[Europe]     2.035682
    dtype: float64



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



    
![png](/assets/images/python/stats/stats_38_1.png)
    


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


```python
sm.stats.anova_lm(surviving, typ=2)
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
      <th>sum_sq</th>
      <th>df</th>
      <th>F</th>
      <th>PR(&gt;F)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>region</th>
      <td>973.988539</td>
      <td>4.0</td>
      <td>253.819435</td>
      <td>3.707717e-72</td>
    </tr>
    <tr>
      <th>life_expectancy</th>
      <td>96.833677</td>
      <td>1.0</td>
      <td>100.938638</td>
      <td>4.459475e-19</td>
    </tr>
    <tr>
      <th>Residual</th>
      <td>169.801784</td>
      <td>177.0</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>


