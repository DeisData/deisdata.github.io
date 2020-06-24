[< home](index.html) | [< shell >](shell.html) | lesson 6 coming soon.


# Session 5: Shell Scripts
We finally see what makes the shell a powerful programming environment.  
We will take commands we repeat and save them in a **shell script**- a small program, so we can re-run operations with a single command.

## Questions of the day:
- How can I save and re-use commands?

## Fun Resources
- [Bash Help Sheet](https://www.shell-tips.com/sheets/bash-help-sheet.pdf) has shortcuts for quick navigating and editing in your shell
- [Mastering Bash with Tips and Tricks](https://www.shell-tips.com/bash/) has some great examples of how scripts can be used in a variety of ways.v
- [30 Bash Script Examples](https://linuxhint.com/30_bash_script_examples/) depicts some basic to more complex scripting examples
- [StackOverflow thread of most powerful examples of Unix Commands or Scripts every programmer should know](https://stackoverflow.com/questions/1102986/most-powerful-examples-of-unix-commands-or-scripts-every-programmer-should-know) is old but has some great examples.  In general, StackOverflow is a great community for technical questions.


## Writing Shell Scripts
### Shabang the top line of a script:
```
#!/bin/bash
```
Uses the special marker `#!` and path `/bin/bash` the instruct the shell to pass the script to the bash program for execution.  
Other scripts may point to other shells (e.g. `#!/usr/bin/perl` will tell the shell to run a perl script.) 

### Use an argument on the command line executing a script
For example, `$1` means the first argument on the command line in the script `header.sh`.

**header.sh:**
```
#!/bin/bash
# This script prints the first 15 lines of the file named in the command line (datafile.txt)
head -n 15 $1 
```
**Command line:**
```
$  bash header.sh datafile.txt
```

### Use multiple arguments on the command line executing a script
- Use double quotes around a variable in case a filename happens to contain spaces.
- Use special variables `$1`, `$2`, and `$3`, etc.
**header.sh:**
```
#!/bin/bash
# This script prints the top $2 lines of the file $1, then writes the top lines to file $3
head -n "$2" "$1" > "$3" 
```
**Command line:**
```
$  bash header.sh datafile.txt 10 topdata.txt
```

### Use special syntax to handle one or more filenames
- Use `$@` to indicate all of the command-line arguments to the shell script.  Add quotations in case of filename spaces `"$@"`
**sorted.sh:**
```
#!/bin/bash
# Sort files by their length
# USAGE: bash sorted.sh one_or_more_filenames
wc -l "$@" | sort -n
```
**Command line:**
```
$  bash sorted.sh  *.pdb  ../creatures/*.dat
```

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
```
for thing in list_of_things
do
   operation_using $thing
done
```

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


[< home](index.html) | [< shell >](shell.html) | lesson 6 coming soon.
