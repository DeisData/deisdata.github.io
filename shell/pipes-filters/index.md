---
layout: shell
---

# Pipes and filters
The idea of linking together programs is why Unix has been so successful.
Instead of creating enormous programs that try to do many different things, we focus on lots of simple tools that work well with each other.

**Filters** are programs that transform a stream of input into a stream of output.

## Questions to think about:
- How can I combine existing commands to do new things?
- How can I write to a file from the shell prompt?


## echo

`echo` prints a string or the value of a variable as output as text.

```bash
$ echo hello world
```

```
hello world
```

`echo $SHELL` prints the value of the variable `$SHELL` (a defined path).

```bash
$ echo $SHELL
```

```
/usr/local/bin/bash
```

## wc

`wc` is the word count command for number of lines, words, and characters in a file (left to right in that order). Let's try that out on some of files in `data-shell/molecules`.

```bash
$ cd datashell/molecules
$ wc cubane.pdb
```

```
      20     156    1158 cubane.pdb
```

To only get lines, words, or characters, we can specify the flags `-l`, `-w`, or `-c`, respectively.  


## Write to a file from the prompt
- `>` **redirects** a command's output to a file instead of printing it to the screen.  DO NOT write to the same file.
- `>>` **redirects** a command's output to append to the end of a file 


Here we get the number of lines in all of our files and redirect the output to a new file called `line_count.txt`. 

```bash
$ wc -l *.pdb > line_count.txt
```

We can use `cat` to show the contents of this new file.

```bash
$ cat line_count.txt
```

```
      20 cubane.pdb
      12 ethane.pdb
       9 methane.pdb
      30 octane.pdb
      21 pentane.pdb
      15 propane.pdb
     107 total
```

## sort

`sort` sorts the contents of a file.  `sort -n` sorts a numerical file.

```bash
$ sort -n line_count.txt
```

```
       9 methane.pdb
      12 ethane.pdb
      15 propane.pdb
      20 cubane.pdb
      21 pentane.pdb
      30 octane.pdb
     107 total
```

*Note*: To escape a mistake in the prompt, type <kbd>Ctrl</kbd> + <kbd>C</kbd>. 

## View particular file contents
- `cat`is the concatentate (join together) command that prints the contents of files one after another
- `less` displays a screenful of the file and then stops.  You can go forward one screenful by pressingthe spacebar, or back one by pressing <kbd>B</kbd> and <kbd>Q</kbd> to quit.
- `head` shows the first few lines of a file.  For example, `head -n 5` will show the first 5 lines.
- `tail` shows the last few lines of a file
- `cut` removes or cuts out certain sections of each line in a file
   - `-d` option specifies a delimeter 
   - `-f` option specifies the column for extraction
- `uniq` filters out adjecent matching lines in a file.

## Piping Commands Together
The `|` command **pipe** tells the shell to use the output of a command on the left as the input of the command on the right. 

Here, we take the output of `wc -l *.pdb` and feed that right into `sort -nr`. The `-r` reverses the order of the sort.

```bash
$ wc -l *.pdb | sort -nr 
```

```
     107 total
      30 octane.pdb
      21 pentane.pdb
      20 cubane.pdb
      15 propane.pdb
      12 ethane.pdb
       9 methane.pdb
```

You can chain pipes consecutively between multiple commands. We do so here to grab the first line of the sort with `head -n 1`

```bash
$ wc -l *.pdb | sort -nr | head -n 1
```

```
     107 total
```

We can then redirect this output to a new file.

```bash
$ wc -l *.pdb | sort -nr | head -n 1 > total_lines.txt
```

## Challenge Questions:

<ol>
  <li>In our current directory, we want to find the three files which have the least number of lines.  Which command listed below would work?
    <ol type="a">
      <li><code>$ wc -l * > sort -n > head -n 3</code></li>
      <li><code>$ wc -l * | sort -n | head -n 1-3</code></li>
      <li><code>$ wc -l * | head -n 3 | sort -n</code></li>
      <li><code>$ wc -l * | sort -n | head -n 3</code></li>
    </ol>

<details>
    <summary>Solution</summary>
    
  <div class="container" markdown="1">

```bash 
$ wc -l * | sort -n | head -n 3
```
    
  </div>
  
  </details>


  </li>
  <li markdown="1">

  See the file called `data-shell/data/animals.txt`. What text passes through each of the pipes and the final redirect in the pipeline below? <br>
  
```bash
$ cat animals.txt | head -n 5 | tail -n 3 | sort -r > final.txt
```
  
  Hint:  Build the pipeline up one command at a time to test your understanding.

  <details>
    <summary>Solution</summary>
    
  <div class="container" markdown="1">
    
  `cat animals.txt` returns the full text in the file `animals.txt`.

  `| head -n 5` returns the first 5 lines of the file.

  `| tail -n 3` gives the third, fourth, and fifth lines.

  `| sort -r` sorts the lines in reverse alphabetical order.

  `> final.txt` takes these lines and saves them to a file called `final.txt`.
    
  </div>
  
  </details>
  </li>
  

  <li markdown="1">

   `uniq` filters out adjacent matching lines in a file. How can we extend the pipeline to find out what animals the file `data-shell/data/animals.txt` contains without any duplicates? 

   <details>
    <summary>Solution</summary>
    
  <div class="container" markdown="1">
    
  ```bash
  $ cut -d , -f 2 animals.txt | sort | uniq > animals_unique.txt
  ```
    
  </div>
  
  </details>

  </li>
 
  <li markdown="1">

  Assuming your current working directory is `data-shell/data/`, which command would you use to produce a table that shows the total count of each type of animal in the file `animals.txt`.

  <ol type="a">
    <li><code>$ sort animals.txt | uniq -c</code></li>
    <li><code>$ sort -t, -k2, 2 animals.txt | uniq -c</code></li>
    <li><code>$ cut -d, -f 2 animals.txt | uniq -c</code></li>
    <li><code>$ cut -d, -f 2 animals.txt | sort | uniq -c</code></li>
    <li><code>$ cut -d, -f 2 animals.txt | sort | uniq -c | wc -l</code></li>

  </ol>


  </li>

</ol>

## Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


<span class="lesson">
    [&nbsp;<a href="/shell/alter-dir">previous</a>&nbsp;]
    [&nbsp;<a href="/shell/loops">next</a>&nbsp;]
</span>
