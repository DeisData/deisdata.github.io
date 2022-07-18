---
layout: shell
---

# Session 4: Loops
Linking together programs is why Unix has been so successful.
Now, we improve productivity through automation -- with loops!
All those commands we have learned will be put to use.

### Nested Loops Challenge!
What does this do?

```bash
$ for species in cubane ethane methane
> do
>     for temperature in 25 30 37 40
>     do
>         mkdir $species-$temperature
>     done
> done
```

## Questions of the day:
- How can I perform the same actions on many different files?

## Commands of the Day
**Loop Structure**
```bash
for thing in list_of_things
do
   operation_using $thing
done
```

## Loop Examples

### List the contents of working directory one item at a time
```bash
for itemname in *
do
   ls $itemname
done
```

### Output part of files in a directory
```bash
cd Desktop/data-shell/creatures
for filename in basilisk.dat minotaur.dat unicorn.dat
do 
   head -n 2 $filename
done
```

### Write files in a directory to a new file
```bash
cd Desktop/data-shell/creatures
for filename in basilisk.dat minotaur.dat unicorn.dat
do 
   cat -n 2 $filename >> all.pdb
done
```

### Repeat running a program with all your input data files
Nell has files NENE00000A.txt and NENE00000B.txt that need needs to run through th program
`goostats` one at a time.  The program `goostats` has two arguments, the input data file, and the output statistics file.

```bash
cd ../north-pacific-gyre/2012-07-03
for datafile in NENE*[AB].txt
do
    echo $datafile
    bash goostats $datafile stats-$datafile   #where stats-$datafile is the output of goostats program.
done
```

### Checking on your loop before you run it!
It can be a good idea to run your loop with `echo` in front of you commands, to make sure it will act the way you believe.  For example, in the loop above I may want to first run `echo "bash goostats $datafile stats-$datafile"` before I run the loop to execute the `goostats` program.  

## Commands We Already Know
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
  

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


<span class="lesson">
    [&nbsp;<a href="/shell/shell-3"> previous</a>&nbsp;]
    [&nbsp;<a href="/shell/shell-5"> next</a>&nbsp;]    
</span>
