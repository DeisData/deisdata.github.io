---
layout: python
---

# NumPy

### Materials:

- <a href="https://colab.research.google.com/github/DeisData/python/blob/master/sequential/numpy-codealong.ipynb" target="_blank">Code-along Jupyter notebook</a>
- <a href="https://colab.research.google.com/github/DeisData/python/blob/master/sequential/numpy.ipynb" target="_blank">Filled-in Jupyter notebook</a>


NumPy (Numerical Python) is a critical library for manipulating numbers, performing matrix operations, and mathematics in general. 

To use this library, we first have to **import** it with the keyword `import`.


```python
import numpy
```

We now have access to the various tools and functions that NumPy has to offer. The foundation of NumPy is the array, a data structure for holding numbers designed for math. 

The simplest array is a single dimensional vector, essentially a Python list that we can do math with. To make an array, we tend to create a list and convert it to an array with `numpy.array()`.


```python
my_list = [1, 2, 3] # create list

my_array = numpy.array(my_list) # convert list to array
print(my_array)
```

    [1 2 3]


You can always do simple math operations between a number (int or float) and an array.


```python
20 * my_array # 20 * [ 1, 2, 3 ]
```




    array([20, 40, 60])



If we have arrays of the same length, we can do the same operations on them between elements in the same positions.


```python
your_array = numpy.array( [3, 2, 1] ) # you can create the list within the array() function

my_array + your_array # [ 1, 2, 3 ] + [3, 2, 1]
```




    array([4, 4, 4])




```python
my_array * your_array # [ 1, 2, 3 ] * [3, 2, 1]
```




    array([3, 4, 3])



You can also use numpy functions like `add()` and `multiply()` to do these actions, as well. 


```python
print( numpy.add(your_array, my_array) )
print( numpy.multiply(your_array, my_array) )
```

    [4 4 4]
    [3 4 3]


### Bonus
It is common practice in Python to use `import numpy as np` when importing NumPy. This allows you to only need to type `np.` (e.g., `np.add()`) when using a tool within NumPy, which is a bit less clunky and faster.


```python
import numpy as np

np.array([]) # a blank numpy array
```




    array([], dtype=float64)



You could technically import NumPy as any variable name, but **DO NOT DO THIS** to avoid confusion.


```python
### DONT RUN THIS
# import numpy as pandas
```

### Question: NumPy math

Create two NumPy arrays of the same length and subtract one from the other.


```python
### your code here:
```

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


```python
x = numpy.array([0.5, 2.2, 12.3])
y = numpy.array([4.5, 2.1, -4.6])

x - y
```

  </div>

</details>

## 2D Array

NumPy arrays really come into their own when they're used as matrices. Let's first make a 3 x 3 array. To do this, we will call `numpy.array()` with a list that contains other lists, also called a **nested list**. 


```python
# a 3 x 3 array - essentially a matrix
numpy.array( [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]] )
```




    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])



We can get the dimensions of the array by checking the `.shape` attribute.


```python
a = numpy.array( [[1, 1, 1],
                  [1, 1, 1],
                  [1, 1, 1]] )

a.shape # the matrix dimensions, row by column
```




    (3, 3)



Just like the single dimensional array, you can use the standard math operators between 2D arrays, though they have to be of the same shape.


```python
b = numpy.array( [[10, 10, 10],
                  [10, 10, 10],
                  [10, 10, 10]] )
a + b # 1 + 10 nine times
```




    array([[11, 11, 11],
           [11, 11, 11],
           [11, 11, 11]])



Like a 1D vector, you can also do math operations with a single number.


```python
b - 20 # 10 - 20 nine times
```




    array([[-10, -10, -10],
           [-10, -10, -10],
           [-10, -10, -10]])



NumPy comes with many tools to do various more complicated math operations as well. For instance, `numpy.matmul` can be used for matrix multiplication. 


```python
numpy.matmul(a, b)  
```




    array([[30, 30, 30],
           [30, 30, 30],
           [30, 30, 30]])



Here is non-exhaustive list of other useful operations you can calculate with NumPy. Many of them use the submodule `linalg` that specializes in linear algebra operations.
- Natural logarithm: `numpy.log()`
- Base 10 log: `numpy.log10()`
- Exponential ($e^x$): `numpy.exp()`
- Mean: `numpy.mean()`
- Median: `numpy.median()`
- Maximum: `numpy.max()`
- Minimum: `numpy.min()`
- Standard deviation: `numpy.std()`
- Variance: `numpy.var()`
- Dot product: `numpy.dot()`
- Determinant: `numpy.linalg.det()`
- Vector/matrix norm: `numpy.linalg.norm()`
- Matrix rank: `numpy.linalg.det()`
- Matrix inverse: `numpy.linalg.inv()`
- Eigenvalues/eigenvectors: `numpy.linalg.eig()`
- Solutions to linear equations: `numpy.linalg.solve()`

For full usage of these functions and more, please visit the [NumPy reference manual](https://numpy.org/doc/stable/reference/routines.linalg.html).

### Question: NumPy operations

Create a 1D array called `a` with at least 5 values. Find its mean, median, min, max, and standard deviation.

Create another 1D array called `b` with the same length as `a`. Use `numpy.dot(a,b)` to find the dot product of `a` and `b`. 


```python
### your code here:
```

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">

```python
a = numpy.array([13, 15, 17, 19, 21])
print('mean:', numpy.mean(a))
print('median:', numpy.median(a))
print('min:', numpy.min(a))
print('max:', numpy.max(a))
print('std dev:', numpy.std(a))

b = numpy.array([120, 0, 1, -1, -27])
numpy.dot(a, b)
```

  </div>

</details>

## Indexing and slicing in NumPy

Selecting a value in a 1D array is just like indexing in a Python list. If the array has a length of 4, indexes begin at 0 and end at 3. 


```python
x = np.array([3.2, 4.1, 5.6, 8.3])
x[3] # the fourth item in the array
```




    8.3



2D arrays can be indexed in a similar manner with separate column index and row index -> array[row, col]. Both column and row numbers begin with 0.

![array indexing](https://swcarpentry.github.io/python-novice-inflammation/fig/python-zero-index.svg)
*Credit to [Software Carpentry](https://swcarpentry.github.io/python-novice-inflammation/02-numpy/index.html)*.


```python
y = numpy.array([[1., 2., 3., 4.], # adding the decimal makes them floats
              [5., 6., 7., 8.]]) 
y[1,3] # returns the last value (8.0)
```




    8.0



Also like lists, we can use **negative indexing** to get the last values of a column and/or row.


```python
y[-1,-1] # last row, last column
```




    8.0



We can also using **slicing** to return portions of an array -> `array[i:j]`. Slicing is **inclusive** for the first index (`i`) and **exclusive** for the last index (`j`). `array[i:j]` returns values from `i` to `j-1`. 


```python
print(x[0:2]) # returns values from 0 to 1
```

    [3.2 4.1]


We can use this for 2D arrays, as well. We can slice rows, columns, or both at once.


```python
z = numpy.array([[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 [9,10,11,12],
                 [13,14,15,16]])

print(z[0:2, 2]) # first 2 rows of the third column
print(z[1:3, 0:3]) # rows 2 and 3 for columns 1-3
```

    [3 7]
    [[ 5  6  7]
     [ 9 10 11]]


### Question: Slicing

Using slicing, create a variable containing the first two columns of `data`, and another variable containing the last two columns. Subtract the two sets of columns from each other and square the difference. 


```python
data = numpy.array([[0.37568486, 0.39360456, 0.83055883, 0.67256725],
                    [0.68017832, 0.90546118, 0.79336985, 0.80561814],
                    [0.31127419, 0.29518634, 0.48364838, 0.56015636],
                    [0.75994716, 0.01312868, 0.15958863, 0.98516761],
                    [0.76733493, 0.19900552, 0.03471678, 0.06886277]])

### your code here:



```

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


```python
a = data[:,0:2]
b = data[:,2:4]

(a - b)**2
```

  </div>

</details>


### Question: Slicing syntax

What happens when you slice but do not include the first index (`i`), the last index (`j`), or include neither?


```python
### try it out:
```

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


  Using `[i:]` will return items from index `i` to the end of the array. 

  `[:j]` returns items from the beginning of the array until **but not including** `j`.

  `[:]` returns all items. 

  </div>

</details>


### Boolean indexing

Because numpy is focused around numerical values, we can also subset based on conditions.

If you want to get all values of an array greater than 0, you can say `array[array > 0]`.


```python
x = numpy.array([1., -1., -2., 3.])

x[x > 0]
```




    array([1., 3.])



## NumPy constants

Math has many constants and important terms that are not present in vanilla Python. Here is a short list of some important ones:

- Positive infinity ($+\infty$): `numpy.Inf` or `numpy.inf` or `numpy.Infinity` or `numpy.PINF` or `numpy.infty`
- Negative infinity ($\infty$): `numpy.NINF`
- Euler's constant $e$: `numpy.e`
- Missing values/ Not a Number (NaN): `np.nan` or `np.NaN` or `np.NAN`
- pi ($\pi$): `np.pi`

### Question: Math

Calculate the difference between $+\infty$ and $\pi$.


```python
### your code here
```

<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


```python
numpy.inf - numpy.pi
```
  </div>

</details>

## Numpy random

Numpy contains a submodule called `random`. It contains incredibly powerful tools for random sampling, randomizing list orders, and random number generation.

We'll go through a few examples of how to use `numpy.random`.

`np.random.rand()` generates random floats between 0 and 1.


```python
np.random.rand(10)
```




    array([0.25829512, 0.86059639, 0.51045683, 0.5108304 , 0.83965643,
           0.69420288, 0.57987225, 0.8707505 , 0.1403405 , 0.84695063])



We can provide one number for a 1D array output, or we can give a shape.


```python
np.random.rand(5,4)
```




    array([[0.405686  , 0.55911381, 0.10216565, 0.1176069 ],
           [0.54399612, 0.89415105, 0.4038699 , 0.91464262],
           [0.8727333 , 0.78070018, 0.8072012 , 0.95182085],
           [0.45871726, 0.93649965, 0.70878889, 0.04117096],
           [0.04581515, 0.27093262, 0.81162693, 0.85181647]])



`np.random.randint()` gives us back a random integer between a low and a high number. It includes the low number and excludes the high number. The third argument is the shape of the output.


```python
np.random.randint(0, 100, (3,4))
```




    array([[66, 67, 61, 39],
           [18, 42, 73, 35],
           [59, 68, 24, 91]])



`np.random.uniform()` gives you random floats between two intervals. All values between those intervals are equally likely.


```python
np.random.uniform(-100, 100, 5)
```




    array([ 78.88838389, -47.47066046,  78.50047554, -82.99434746,
           -32.23190278])



`np.random.normal()` gives numbers centered around a mean, which is the first value. The second number defines the spread, or how far from the mean the values can be. The last argument is the shape.


```python
np.random.normal(0, 0.5, 10)
```




    array([ 0.41727943,  0.16488726,  0.95159045, -0.164019  ,  0.6812153 ,
           -0.49631379,  0.66193097, -0.53010887,  0.70356419, -0.53807628])



You can get dramatically different values by changing the spread, or **standard deviation**.

1/3 of all values will within 40 of 0 in the example below.


```python
np.random.normal(0, 40, 10)
```




    array([ 42.89262833, -41.19252505,  23.10369224,   7.86300809,
            -1.06910399, -66.537476  ,   2.32921206,  15.6455084 ,
           -47.75769822,  -5.7709003 ])



`np.random.shuffle()` randomly rearranges orders. Here we use a list. 

It re-generates the variable, overwriting the list we had.


```python
my_list = [0,1,2,3,4,5,6,7,8]

np.random.shuffle(my_list)

print(my_list)
```

    [1, 5, 2, 6, 3, 4, 8, 0, 7]


`shuffle()` works on string lists, too.


```python
string_list = ["first", "second", "third", "fourth", "fifth"]

np.random.shuffle(string_list)

print(string_list)
```

    ['second', 'fifth', 'first', 'fourth', 'third']


`np.random.choice()` by default takes a random item from a list that we give it.


```python
np.random.choice(my_list)
```




    6



We can ask for more than one item, as well.


```python
np.random.choice(my_list, 3)
```




    array([8, 2, 5])



We take from the list **with replacement** by default, meaning that we don't remove future possibilities by sampling more.


```python
np.random.choice(my_list, 20)
```




    array([6, 3, 6, 1, 1, 2, 6, 6, 8, 1, 1, 1, 1, 3, 4, 6, 4, 8, 8, 2])



If we say `replace=False`, then we can only get each value once.


```python
np.random.choice(my_list, 8, replace=False)
```




    array([4, 2, 6, 0, 3, 5, 8, 7])



### Question 

Make a for loop that runs `np.random.normal()` to make arrays with a mean of 40, and a standard deviation of 20 with different sample sizes, and then calculates the mean and standard deviation of the random array you have generated.

As you increase n, do you notice any change in the sample mean or standard deviation?


<details markdown="1">
  <summary>Solution</summary>

  <div class="container" markdown="1">


```python
for n in [10, 100, 1000]:

    sample = np.random.normal(40, 20, n)
    print('sample size:',n)
    print('sample mean:',np.mean(sample))
    print('sample stdev:',np.std(sample))
    print()

```

  </div>

</details>

## Resources

- [NumPy docs](https://numpy.org/doc/stable/index.html)
- [NumPy getting started](https://numpy.org/doc/stable/user/quickstart.html)
- [Random samples with NumPy](https://numpy.org/doc/stable/reference/random/index.html)

This lesson is adapted from 
[Software Carpentry](http://swcarpentry.github.io/python-novice-gapminder/design/).

<span class="lesson">
    [&nbsp;<a href="/python/loops">previous</a>&nbsp;]
    [&nbsp;<a href="/python/pandas">next</a>&nbsp;]
</span>