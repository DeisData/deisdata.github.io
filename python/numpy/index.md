---
layout: python
---

# NumPy

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


#### Bonus
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

#### Question: NumPy math

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

#### Question: NumPy operations

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


#### Question: Slicing

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


## NumPy constants

Math has many constants and important terms that are not present in vanilla Python. Here is a short list of some important ones:

- Positive infinity ($+\infty$): `numpy.Inf` or `numpy.inf` or `numpy.Infinity` or `numpy.PINF` or `numpy.infty`
- Negative infinity ($\infty$): `numpy.NINF`
- Euler's constant $e$: `numpy.e`
- Missing values/ Not a Number (NaN): `np.nan` or `np.NaN` or `np.NAN`
- pi ($\pi$): `np.pi`

#### Question: Math

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



## Resources

- [NumPy docs](https://numpy.org/doc/stable/index.html)
- [NumPy getting started](https://numpy.org/doc/stable/user/quickstart.html)
- [Random samples with NumPy](https://numpy.org/doc/stable/reference/random/index.html)

This lesson is adapted from 
[Software Carpentry](http://swcarpentry.github.io/python-novice-gapminder/design/).