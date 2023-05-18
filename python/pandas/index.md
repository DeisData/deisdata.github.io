---
layout: python
---

# Pandas

### Materials:

- <a href="https://colab.research.google.com/github/DeisData/python/blob/master/sequential/pandas-codealong.ipynb" target="_blank">Code-along Jupyter notebook</a>
- <a href="https://colab.research.google.com/github/DeisData/python/blob/master/sequential/pandas.ipynb" target="_blank">Filled-in Jupyter notebook</a>

While NumPy can be used to important data, it is optimized around numerical data. Many data sets include categorical variables. For these data sets, it is best to use a library called `pandas`, which focuses on creating and manipulating data frames. 


```python
import pandas as pd
```

## Read data
With `pandas` imported, we can read in .csv files with the `pandas` function `read_csv()`.

In that function, we can specify the file we want to use with a URL or with the path to a local file as a string.

This saves the data in a structure called a DataFrame.


```python
df = pd.read_csv("https://raw.githubusercontent.com/DeisData/python/master/data/gapminder.csv") # read in data
```

Our data is now saved as a data frame in Python as the variable `df`. With the data now in the environment, we can take a look at the first few rows with `df.head()`.


```python
df.head()
```


<div class="table">

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
      <td>7.0</td>
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
      <td>7.0</td>
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
      <td>7.0</td>
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
      <td>7.0</td>
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
      <td>7.0</td>
      <td>647.0</td>
      <td>1.771389</td>
    </tr>
  </tbody>
</table>
</div>



We can see that this data frame has several different columns, with information about countries and demography.

## Summarize data frame

It is important to understand the data we are working with before we begin analysis. First, let's look at the dimenions of the data frame using `df.shape`. It gives the number of rows by the number of columns.


```python
df.shape
```




    (14740, 9)



This shows that our data frame has 14740 rows by 9 columns.

We can also use `df.columns` to display the column names.


```python
df.columns
```




    Index(['country', 'year', 'region', 'population', 'life_expectancy',
           'age5_surviving', 'babies_per_woman', 'gdp_per_capita', 'gdp_per_day'],
          dtype='object')



## Categorical variables
Next, let's summarize the categorical, non-numerical variables. For instance, we can identify how many unique regions we have in the data set.

First, to select a column, we use the notation `df['COLUMN_NAME']`.


```python
df['region']
```




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



To identify unique entries in this column, we can use the `pd.unique()` function. 


```python
pd.unique( df['region'] )
```




    array(['Asia', 'Europe', 'Africa', 'America'], dtype=object)



The `countries` column has many unique values, so we'll just use the `len()` function to see how many unique countries we have.


```python
len( pd.unique( df['country'] ) ) # this is called nesting functions -> calling functions within other functions
```




    182



## Numerical variables

Numerical columns can be summarized in several ways. Let's find the mean first.

To make things simpler, we'll just do calculations on the `population`, `life_expectancy`, and `babies_per_woman` columns. We can put those names in an arrangement called a `list` and then specify that list for the columns.


```python
num_cols = [ 'population', 'life_expectancy', 'babies_per_woman' ] # numerical columns

df[num_cols]
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>population</th>
      <th>life_expectancy</th>
      <th>babies_per_woman</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>3280000.0</td>
      <td>28.21</td>
      <td>7.00</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3280000.0</td>
      <td>28.11</td>
      <td>7.00</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3323519.0</td>
      <td>28.01</td>
      <td>7.00</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3448982.0</td>
      <td>27.90</td>
      <td>7.00</td>
    </tr>
    <tr>
      <th>4</th>
      <td>3625022.0</td>
      <td>27.80</td>
      <td>7.00</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>14735</th>
      <td>14255592.0</td>
      <td>51.60</td>
      <td>3.64</td>
    </tr>
    <tr>
      <th>14736</th>
      <td>14565482.0</td>
      <td>54.20</td>
      <td>3.56</td>
    </tr>
    <tr>
      <th>14737</th>
      <td>14898092.0</td>
      <td>55.70</td>
      <td>3.49</td>
    </tr>
    <tr>
      <th>14738</th>
      <td>15245855.0</td>
      <td>57.00</td>
      <td>3.41</td>
    </tr>
    <tr>
      <th>14739</th>
      <td>15602751.0</td>
      <td>59.30</td>
      <td>3.35</td>
    </tr>
  </tbody>
</table>
<p>14740 rows × 3 columns</p>
</div>



With this set of columns, we can run `.mean()` to find the mean of each column.


```python
df[num_cols].mean() # returns the mean of each column
```




    population          2.252933e+07
    life_expectancy     5.683453e+01
    babies_per_woman    4.643472e+00
    dtype: float64



If we want a larger variety of summary statistics, we can use the `.describe()` method.


```python
df[num_cols].describe()
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>population</th>
      <th>life_expectancy</th>
      <th>babies_per_woman</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>1.474000e+04</td>
      <td>14740.000000</td>
      <td>14740.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>2.252933e+07</td>
      <td>56.834526</td>
      <td>4.643472</td>
    </tr>
    <tr>
      <th>std</th>
      <td>9.307143e+07</td>
      <td>15.868464</td>
      <td>1.994833</td>
    </tr>
    <tr>
      <th>min</th>
      <td>2.128000e+03</td>
      <td>4.000000</td>
      <td>1.130000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>8.990308e+05</td>
      <td>44.230000</td>
      <td>2.630000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>4.063978e+06</td>
      <td>60.080000</td>
      <td>5.060000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>1.218722e+07</td>
      <td>70.380000</td>
      <td>6.440000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>1.376049e+09</td>
      <td>83.300000</td>
      <td>9.220000</td>
    </tr>
  </tbody>
</table>
</div>



We can also break down subgroupings of our data with the method `.groupby()`.


```python
grouped_data = df.groupby('region')
grouped_data['population'].describe()
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>count</th>
      <th>mean</th>
      <th>std</th>
      <th>min</th>
      <th>25%</th>
      <th>50%</th>
      <th>75%</th>
      <th>max</th>
    </tr>
    <tr>
      <th>region</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Africa</th>
      <td>4293.0</td>
      <td>9.181313e+06</td>
      <td>1.655128e+07</td>
      <td>12522.0</td>
      <td>996331.00</td>
      <td>3457113.0</td>
      <td>9901052.00</td>
      <td>1.822020e+08</td>
    </tr>
    <tr>
      <th>America</th>
      <td>2673.0</td>
      <td>1.667833e+07</td>
      <td>4.411806e+07</td>
      <td>24000.0</td>
      <td>331799.00</td>
      <td>2843246.0</td>
      <td>10061519.00</td>
      <td>3.217736e+08</td>
    </tr>
    <tr>
      <th>Asia</th>
      <td>4212.0</td>
      <td>4.604245e+07</td>
      <td>1.658010e+08</td>
      <td>2128.0</td>
      <td>512028.25</td>
      <td>4011309.5</td>
      <td>19517390.25</td>
      <td>1.376049e+09</td>
    </tr>
    <tr>
      <th>Europe</th>
      <td>3562.0</td>
      <td>1.520351e+07</td>
      <td>2.463153e+07</td>
      <td>61428.0</td>
      <td>2308682.00</td>
      <td>5186801.5</td>
      <td>10638884.75</td>
      <td>1.484358e+08</td>
    </tr>
  </tbody>
</table>
</div>



## Accessing rows and specific entries

You can also to access a specific row using `df.loc[ROW, :]`. The colon specifies to select all columns for that row number.


```python
df.loc[0, :] # the first row
```




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



We can use `.loc` to find the value of specific entries, as well.


```python
df.loc[0, 'country'] # first row entry for column
```




    'Afghanistan'



#### Question
Print out the summary statistics for columns `age5_surviving`, `gdp_per_day`, and `gdp_per_capita`.


```python
### your code below:

```

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


```python
df[['age5_surviving', 'gdp_per_day', 'gdp_per_capita']].describe()
```

  </div>

</details>

## Manipulate data 

#### Subset by row

Sometimes, we want to create a subset of the main data frame based on certain conditions. We do this by using `df.loc` and specifying a condition for the rows. 

Below, we take all of the rows where `babies_per_woman` is greater or equal to 4 with `df['babies_per_woman'] >= 4` and assign this to a new data frame.

To check that this was done correctly, we can look at the minimum of the `babies_per_woman` column in the new data frame with  `.min()`.


```python
# take all rows where babies_per_woman is greater or equal to 4 and make a new data frame
df_4 = df.loc[df['babies_per_woman'] >= 4, :]
df_4['babies_per_woman'].min()
```




    4.0



We can use the following operators to make subsets:
- Equals: `==`
- Not equals: `!=`
- Greater than, less than: `>`, `<`
- Greater than or equal to: `>=`
- Less than or equal to: `<=`

We can also subset with categorical variables. Here, we take all rows where the country is Hungary. 


```python
df_hungary = df.loc[df['country'] == 'Hungary', :]
pd.unique(df_hungary['country'])
```




    array(['Hungary'], dtype=object)



### Math

If we multiply a data frame by a single number, each value in the column will be muliplied by that value.


```python
df['babies_per_woman'] * 1000
```




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



We can also do math between columns, since they have the same length. Elements of the same row are added, substacted, multiplied, or divided. 

Here, we subtract the `life_expectancy` column from the `age5_surviving` column and assign it to a new column called `life_difference`. 


```python
df['life_difference'] = df['age5_surviving'] - df['life_expectancy'] 
print(df['life_difference'])
```

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


```python
print(df.columns)
```

    Index(['country', 'year', 'region', 'population', 'life_expectancy',
           'age5_surviving', 'babies_per_woman', 'gdp_per_capita', 'gdp_per_day',
           'life_difference'],
          dtype='object')


#### Question: Working with data 

Create a subset of data from Lithuania. 

Within that subset, calculate the mean GDP per 1000 people across entries.

*Hint: Multiply per capita GDP by 1000.*

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


```python
df_lth = df.loc[df['country']=='Lithuania',:]
df_lth['gdp_per_1000'] = 1000 * df_lth['gdp_per_capita']
print(df_lth['gdp_per_1000'].mean())
```
  </div>

</details>


```python
### Your code here:

```


## Create your own data frame

To make your own data frame without a .csv, we use the function `pd.DataFrame()`. There are many ways to use this function to construct a data frame. 

Here, we show how to convert a dictionary of lists into a data frame. Each list will be its own column, and you need to make sure the lists are all the same length. The keys of each list should be the column names.


```python
data_dict = {
    'a': [1, 3, 5],
    'b': ['apple', 'banana', 'apple'],
    'c': [-2., -3., -5.]
}

pd.DataFrame(data_dict)
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>apple</td>
      <td>-2.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>banana</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>apple</td>
      <td>-5.0</td>
    </tr>
  </tbody>
</table>
</div>



You can also use lists of lists or 2D NumPy arrays to create data frames. Each list will be a row, instead of a column, and you will need to specify the column name as another argument in `pd.DataFrame()` called `columns`.


```python
data_list = [
    [1, 'apple', -2.],
    [3, 'banana', -3.],
    [5, 'apple', -5.]
]
pd.DataFrame(data_list, columns=['a', 'b', 'c'])
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>apple</td>
      <td>-2.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>banana</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>apple</td>
      <td>-5.0</td>
    </tr>
  </tbody>
</table>
</div>



Note: we need to save this as a variable to use it in the future.

## Sort data frame

To sort the rows in a data frame by the value of a column, we can use the `.sort_values()` method. The argument `by` requires a list with a column name. 

Again, if you want to use the sorted version in the future, you need to save it as a new variable.


```python
my_df = pd.DataFrame(data_list, columns=['a', 'b', 'c'])

my_df.sort_values(by=['b'])
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>apple</td>
      <td>-2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>apple</td>
      <td>-5.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>banana</td>
      <td>-3.0</td>
    </tr>
  </tbody>
</table>
</div>



You can also sort descending by specifying the `ascending=False` argument.


```python
my_df.sort_values(by=['b'], ascending=False)
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>banana</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>apple</td>
      <td>-2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>apple</td>
      <td>-5.0</td>
    </tr>
  </tbody>
</table>
</div>



If desired, multiple column names can be specified, with priority given to those first in the list.


```python
my_df.sort_values(by=['b', 'a'], ascending=False)
```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>banana</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>apple</td>
      <td>-5.0</td>
    </tr>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>apple</td>
      <td>-2.0</td>
    </tr>
  </tbody>
</table>
</div>



## Add rows
There are multiple ways to add a new row to a data frame. The most straightforward way is to use the `pandas.concat()` function with a new data frame with just one row. 

We put the the two data frames into a list, and we set `axis=0` to make sure it adds as a row. We will specify `.reset_index(drop=True)` to reset row numbers to account for the new row.


```python
new_row = pd.DataFrame({
    'a': [2],
    'b': ['banana'],
    'c': [-1.]
})

my_df2 = pd.concat([my_df, new_row], axis=0).reset_index(drop=True)

print(my_df2)
```

       a       b    c
    0  1   apple -2.0
    1  3  banana -3.0
    2  5   apple -5.0
    3  2  banana -1.0


You can also use this approach to add multiple rows, as well, by having the new data frame consist of multiple rows.


```python
new_rows = pd.DataFrame({
    'a': [6, 5],
    'b': ['banana', 'orange'],
    'c': [-4., -9.]
})

my_df3 = pd.concat([my_df2, new_rows], axis=0).reset_index(drop=True)

print(my_df3)

```

       a       b    c
    0  1   apple -2.0
    1  3  banana -3.0
    2  5   apple -5.0
    3  2  banana -1.0
    4  6  banana -4.0
    5  5  orange -9.0


## Join data frames
A critical tool in data wrangling is combining data frames that share common values, columns, or identifiers.

Let's important two new .csv files and join them.


```python
surveys_df = pd.read_csv("https://raw.githubusercontent.com/DeisData/python/master/data/surveys.csv", keep_default_na=False, na_values=[""])
species_df = pd.read_csv("https://raw.githubusercontent.com/DeisData/python/master/data/species.csv", keep_default_na=False, na_values=[""])

print(surveys_df.head())
print(species_df.head())
```

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


The shared column between these data frames is `species_id`, so this is the column we will want to join around.

### Inner Join
The pandas function for performing joins is called `merge()` and an Inner join is the default option.

Inner joins take all rows from both data frames that share values from an identifier column. In our case, this means that our joined data frame will only include rows with species identifiers present in `species_df` and `surveys_df`.

<div class="row container">
		<div class="col-12">
			<img src="/assets/images/python/pandas/innerjoin.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="inner join">
		</div>
</div>



```python

merged_inner = pd.merge(left=surveys_df, right=species_df, left_on='species_id', right_on='species_id')

# In this case `species_id` is the only column name in  both dataframes, so if we skipped `left_on`
# And `right_on` arguments we would still get the same result

# What's the size of the output data?
print(merged_inner.shape)
merged_inner
```

    (34786, 12)





<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>record_id</th>
      <th>month</th>
      <th>day</th>
      <th>year</th>
      <th>plot_id</th>
      <th>species_id</th>
      <th>sex</th>
      <th>hindfoot_length</th>
      <th>weight</th>
      <th>genus</th>
      <th>species</th>
      <th>taxa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>7</td>
      <td>16</td>
      <td>1977</td>
      <td>2</td>
      <td>NL</td>
      <td>M</td>
      <td>32.0</td>
      <td>NaN</td>
      <td>Neotoma</td>
      <td>albigula</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>7</td>
      <td>16</td>
      <td>1977</td>
      <td>3</td>
      <td>NL</td>
      <td>M</td>
      <td>33.0</td>
      <td>NaN</td>
      <td>Neotoma</td>
      <td>albigula</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>2</th>
      <td>22</td>
      <td>7</td>
      <td>17</td>
      <td>1977</td>
      <td>15</td>
      <td>NL</td>
      <td>F</td>
      <td>31.0</td>
      <td>NaN</td>
      <td>Neotoma</td>
      <td>albigula</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>3</th>
      <td>38</td>
      <td>7</td>
      <td>17</td>
      <td>1977</td>
      <td>17</td>
      <td>NL</td>
      <td>M</td>
      <td>33.0</td>
      <td>NaN</td>
      <td>Neotoma</td>
      <td>albigula</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>4</th>
      <td>72</td>
      <td>8</td>
      <td>19</td>
      <td>1977</td>
      <td>2</td>
      <td>NL</td>
      <td>M</td>
      <td>31.0</td>
      <td>NaN</td>
      <td>Neotoma</td>
      <td>albigula</td>
      <td>Rodent</td>
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
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>34781</th>
      <td>28988</td>
      <td>12</td>
      <td>23</td>
      <td>1998</td>
      <td>6</td>
      <td>CT</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Cnemidophorus</td>
      <td>tigris</td>
      <td>Reptile</td>
    </tr>
    <tr>
      <th>34782</th>
      <td>35512</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>11</td>
      <td>US</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Sparrow</td>
      <td>sp.</td>
      <td>Bird</td>
    </tr>
    <tr>
      <th>34783</th>
      <td>35513</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>11</td>
      <td>US</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Sparrow</td>
      <td>sp.</td>
      <td>Bird</td>
    </tr>
    <tr>
      <th>34784</th>
      <td>35528</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>13</td>
      <td>US</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Sparrow</td>
      <td>sp.</td>
      <td>Bird</td>
    </tr>
    <tr>
      <th>34785</th>
      <td>35544</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>15</td>
      <td>US</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Sparrow</td>
      <td>sp.</td>
      <td>Bird</td>
    </tr>
  </tbody>
</table>
<p>34786 rows × 12 columns</p>
</div>



The result `merged_inner` data frame contains all of the columns from `surveys_df` (`record_id`, `month`, `day`, etc.) as well as all the columns from `species_df` (`species_id`, `genus`, `species`, and `taxa`).

### Left join

What if we want to add information from `species_df` to `surveys_df`without losing any of the information from `surveys_df`? In this case, we use a different type of join called a left join, where we keep all rows from the data frame we call left (in our case `surveys_df`) and only take rows from the right data frame (`species_df`) with species IDs in `surveys_df`.

<div class="row container">
		<div class="col-12">
			<img src="/assets/images/python/pandas/leftjoin.png" class="img-fluid rounded align-middle mx-auto d-block" style="max-width:100%;" alt="inner join">
		</div>
</div>

A left join is performed in pandas by calling the same `merge()` function used for inner join, but using the `how='left'` argument.


```python
merged_left = pd.merge(left=surveys_df, right=species_df, how='left', left_on='species_id', right_on='species_id')
merged_left

```




<div class="table">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>record_id</th>
      <th>month</th>
      <th>day</th>
      <th>year</th>
      <th>plot_id</th>
      <th>species_id</th>
      <th>sex</th>
      <th>hindfoot_length</th>
      <th>weight</th>
      <th>genus</th>
      <th>species</th>
      <th>taxa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>7</td>
      <td>16</td>
      <td>1977</td>
      <td>2</td>
      <td>NL</td>
      <td>M</td>
      <td>32.0</td>
      <td>NaN</td>
      <td>Neotoma</td>
      <td>albigula</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>7</td>
      <td>16</td>
      <td>1977</td>
      <td>3</td>
      <td>NL</td>
      <td>M</td>
      <td>33.0</td>
      <td>NaN</td>
      <td>Neotoma</td>
      <td>albigula</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>7</td>
      <td>16</td>
      <td>1977</td>
      <td>2</td>
      <td>DM</td>
      <td>F</td>
      <td>37.0</td>
      <td>NaN</td>
      <td>Dipodomys</td>
      <td>merriami</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>7</td>
      <td>16</td>
      <td>1977</td>
      <td>7</td>
      <td>DM</td>
      <td>M</td>
      <td>36.0</td>
      <td>NaN</td>
      <td>Dipodomys</td>
      <td>merriami</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>7</td>
      <td>16</td>
      <td>1977</td>
      <td>3</td>
      <td>DM</td>
      <td>M</td>
      <td>35.0</td>
      <td>NaN</td>
      <td>Dipodomys</td>
      <td>merriami</td>
      <td>Rodent</td>
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
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>35544</th>
      <td>35545</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>15</td>
      <td>AH</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Ammospermophilus</td>
      <td>harrisi</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>35545</th>
      <td>35546</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>15</td>
      <td>AH</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Ammospermophilus</td>
      <td>harrisi</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>35546</th>
      <td>35547</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>10</td>
      <td>RM</td>
      <td>F</td>
      <td>15.0</td>
      <td>14.0</td>
      <td>Reithrodontomys</td>
      <td>megalotis</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>35547</th>
      <td>35548</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>7</td>
      <td>DO</td>
      <td>M</td>
      <td>36.0</td>
      <td>51.0</td>
      <td>Dipodomys</td>
      <td>ordii</td>
      <td>Rodent</td>
    </tr>
    <tr>
      <th>35548</th>
      <td>35549</td>
      <td>12</td>
      <td>31</td>
      <td>2002</td>
      <td>5</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>35549 rows × 12 columns</p>
</div>



## Export data frame as .csv

If you have made modifications to a data set in Python and want to export that to a new .csv, you can easily do that with the `.to_csv()` method that all pandas data frames have.


```python
%%script false --no-raise-error ## comment this line to run the cell

df_hungary.to_csv('gapminder_hungary.csv', index=False) # index = False makes sure row names are not saved as their own columns
```


#### Question: Putting it together

Create two data frames called `A` and `B` with at least 3 columns and 4 rows. Make one column in both `A` and `B` an identifier column, with at least one ID present in both data frames. Use a left join with `A` as the left data frame, and call the new data frame `C`. Display the data frame, and export it as a .csv file.

```python
### Your code here:

```

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


```python
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
```

```
   ident  size location animal  sex
0      0   2.1       IL    ape    F
1      1   5.2       MA   lion    F
2      2   3.1       CA    NaN  NaN
3      3   1.5       NE   fish    M
```

  </div>

</details>



## Resources
- [Pandas docs](https://pandas.pydata.org/docs/)
- [Pandas getting started](https://pandas.pydata.org/docs/getting_started/index.html#getting-started)
- [Pandas cheatsheet](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)
- [PySpark for big data](https://spark.apache.org/docs/latest/api/python/)

This lesson is adapted from 
[Software Carpentry](http://swcarpentry.github.io/python-novice-gapminder/design/).

<span class="lesson">
    [&nbsp;<a href="/python/numpy">previous</a>&nbsp;]
    [&nbsp;<a href="/python/figures">next</a>&nbsp;]
</span>

