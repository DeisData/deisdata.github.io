---
layout: shell
---

# Searching and finding

## Questions of the day:
How can we find files?
How can we find things in files?

## Commands of the Day
- `grep` is a contraction of global/regular expression/print.  It finds and prints lines in files that match a pattern.
  - **regular expressions** are patterns that can include wildcards
  - Usage: `grep pattern filename`
  - `grep -w` limits to word boundaries
  - `grep -n` prints the line numbers that match
  - `grep -i` makes search case-insensitive
  - `grep -v` inverts the search to output that does not contain the pattern
  - `grep -E` notes that the pattern is an extended regular expression that can contain wildcards

- `find`  command finds files!
  - `-type` d or f for directories or files
  - `-name` matches a name, but look out for order of execution!  Filenames with wildcards need quotes.  For example, `find . -name "*.txt"`
- `$()` to combine commands. Code inside this runs first! 
  - For example, `wc -l $(find . -name "*.txt")`
  

## Commands and Concepts We Already Know
- Navigating File System
  - `ls`: listing contents of working directory with many options: `-F` classify, `-a` list all, `-s` size, `-S` sort by size
  - `pwd` print working directory
  - `clear` the terminal
  - `man` will give you the manual for a command
  - `cd` will change working directory
  - `cd ..` change up to parent directory
  - `cd ~` change to home directory
- Creating Directories or Files:
  - `mkdir path` creates a new directory
  - `nano new` runs a text editor 
  - `touch new` creates an empty (0 byte) file
- Moving or Renaming directories or files safely:
  - `mv -i old new` 
- Copying directories and/or files:  
  - `cp old new` 
  - `cp -r` to copy a directory and all contents
- Removing / Deleting Safely: **Deleting is forever**
  - `rm -i path` delete file with confirmation
  - `rm -i -r path` delete directory and contents    
- Wildcards
  - `?` matches to one character
  - `*` matches to zero to many characters
- Filters 
  - `wc` is the word count 
  - `echo` prints text or the value of a variable
  - `sort` sorts the contents of a file.  `sort -n ` sorts numerically.
- Write to a file from Prompt
  - `>` **redirects** a command's output to a file 
  - `>>` **redirects* a command's output to append to end of a file 
- View particular file contents
  - `cat`concatentate prints the contents of files
  - `less` displays a screenful of the file and then stops
  - `head` shows the first few lines of a file
  - `tail` shows the last few lines of a file
  - `cut` removes or cuts out certain sections of each line in a file
     - `-d` option specifies a delimeter 
     - `-f` option specifies the column for extraction
  - `uniq` filters out adjecent matching lines in a file.
- Piping Commands Together
  - `|` command **pipe** tells the shell to use the output of a command on the left as the input of the command on the right
- Loop Structure: 
```bash
for thing in list_of_things
do
   operation_using $thing
done
```
- Writing Shell Scripts (See Session 5 notes)

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


<span class="lesson">
    [&nbsp;<a href="/shell">shell</a>&nbsp;]
    [&nbsp;<a href="/shell/setup/">setup</a>&nbsp;]
    [&nbsp;<a href="/shell/navigating">1</a>&nbsp;]
    [&nbsp;<a href="/shell/alter-dir">2</a>&nbsp;]
    [&nbsp;<a href="/shell/pipes-filters">3</a>&nbsp;]
    [&nbsp;<a href="/shell/loops">4</a>&nbsp;]
    [&nbsp;<a href="/shell/shell-scripts">5</a>&nbsp;]
    [&nbsp;<a href="/shell/search-find">6</a>&nbsp;]
</span>


