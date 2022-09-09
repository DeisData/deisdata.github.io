---
layout: shell
---

# Loops
Linking together programs is why Unix has been so successful.
Now, we improve productivity through automation -- with loops!
All those commands we have learned will be put to use.

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

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


<span class="lesson">
    [&nbsp;<a href="/shell/pipes-filters">previous</a>&nbsp;]
    [&nbsp;<a href="/shell/shell-scripts">next</a>&nbsp;]    
</span>
