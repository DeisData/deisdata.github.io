---
layout: shell
---

# Shell scripts
We finally see what makes the shell a powerful programming environment.  
We will take commands we repeat and save them in a **shell script**- a small program, so we can re-run operations with a single command.

## Questions to think about:
- How can I save and re-use commands?

## Writing Shell Scripts
### Shebang the top line of a script:
```bash
#!/usr/bin/env bash
```
Uses the special marker `#!` and path `/bin/bash` the instruct the shell to pass the script to the bash program for execution.  

Other scripts may point to other shells (e.g. `#!/usr/bin/perl` will tell the shell to run a perl script.) 

### Use an argument on the command line executing a script
For example, `$1` means the first argument on the command line in the script `header.sh`.

**header.sh:**
```bash
#!/bin/bash
# This script prints the first 15 lines of the file named in the command line (datafile.txt)
head -n 15 $1 
```
**Command line:**
```bash
$ bash header.sh datafile.txt
```

### Use multiple arguments on the command line executing a script
- Use double quotes around a variable in case a filename happens to contain spaces.
- Use special variables `$1`, `$2`, and `$3`, etc.
  
**header.sh:**
```bash
#!/bin/bash
# This script prints the top $2 lines of the file $1, then writes the top lines to file $3
head -n "$2" "$1" > "$3" 
```
**Command line:**
```bash
$ bash header.sh datafile.txt 10 topdata.txt
```

### Use special syntax to handle one or more filenames
- Use `$@` to indicate all of the command-line arguments to the shell script.  Add quotations in case of filename spaces `"$@"`
  
**sorted.sh:**
```bash
#!/bin/bash
# Sort files by their length
# USAGE: bash sorted.sh one_or_more_filenames
$ wc -l "$@" | sort -n
```
**Command line:**
```bash
$ bash sorted.sh *.pdb ../creatures/*.dat
```

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).
- [Bash Help Sheet](https://www.shell-tips.com/sheets/bash-help-sheet.pdf) has shortcuts for quick navigating and editing in your shell
- [Mastering Bash with Tips and Tricks](https://www.shell-tips.com/shell/) has some great examples of how scripts can be used in a variety of ways.
- [30 Bash Script Examples](https://linuxhint.com/30_bash_script_examples/) depicts some basic to more complex scripting examples
- [StackOverflow thread of most powerful examples of Unix Commands or Scripts every programmer should know](https://stackoverflow.com/questions/1102986/most-powerful-examples-of-unix-commands-or-scripts-every-programmer-should-know) is old but has some great examples.  In general, StackOverflow is a great community for technical questions.

<span class="lesson">
    [&nbsp;<a href="/shell/loops">previous</a>&nbsp;]
    [&nbsp;<a href="/shell/search-find">next</a>&nbsp;]   
</span>
