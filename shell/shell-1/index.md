---
title: Shell Workshop
---

[< home](/) | [< bash >](/shell/) | [lesson 2 >](/shell/shell-2/)

# Session 1:  Shell for Navigating to Files and Directories

## Your challenges of the day:
1. Does type case matter?  Is there a difference between `ls -s` and `ls -S`?
1. Do spaces matter?  Is there a difference between `ls-F` and `ls -F`?

**Explore more `ls` flags.**  
1. What does `-l` option do? What if you use `-l` and `-h`?
1. The default `ls` lists contents in alphabetical order.  What option do I use to see them by time of last change?


## Questions of the day:
- What is a command shell and why should I use one?
- How can I move around on my computer?
- How can I see what files and directories I have?
- How can I specify the location of a file or directory on my computer?

## What is Unix Shell?
- _It is different from how we usually interact with our devices, on a **graphical user interface** (GUI)_
- Shell is a **Command-Line Interface** (CLI) 
  - Type commands in the **prompt** `$`
  - Invoke complicated programs
- Shell is a scripting language
- We will use the Unix Shell: Bash (Bourne Again SHell by Stephen Bourne)

## Why use Bash?
- Combine existing tools into powerful pipelines and handle large volumes of data automatically. 
- Sequences of commands can be written into a script, improving the reproducibility of workflows.
- Essential to interface with hardware, HPCC, and remote machines.
- Commands and the grammar of shell are used in other coding languages.

## Navigating files and directories
- **File System**: The part of the operating system responsible for managing files and directories
  - **Files** hold information
  - **Directories** (or **folders**) hhold files or other directories.  Thinks of them like _places_.
- **Current working directory** is the place where you are in the file system when you are using the shell.
- **Root directory** is the top directory that holds everything else.  It is refered to by a slash `/` on its own.  This is the leading slash in other directory paths, for example `/Users/claire/`
- **Hidden files and directories** start with `.` like `.bash_profile`.  They are usually configuration settings and are hidden to prevent cluttering the terminal with a standard `ls` command.  Add the `-a` option see hidden files. 
-  
## Commands of the day:
- `ls`: listing.  This command will list the contents of the current directory
  - `-F` option (switch or flag) tells ls to classify the output by adding a marker to file and directory names to indicate what they are.
  - `-s` option displays the size of files and directories
  - `-S` option will sort the files and directories by size
  - `--help` option will tell us how to use the command and what options it accepts
- `pwd`: print working directory.  Directories are like places, at any time while we are using shell, we are in one place, called our current working directory
- `clear`:  clears the terminal if it gets to cluttered
- up and down arrows can be used to access previous commands (or scroll)
- `man` will give you the manual for a command, for example `man ls` will tell us all about listing
- `cd` will change your working directory.  `cd` can only see sub-directories inside your current working directory.
  - `cd ..` is a shortcut to move up one directory to the _parent directory_ of the one we are in
  - `cd ~/` is a shortcut to move to the current user's home directory.  For example, if my home directory is `/Users/claire`, then `~/data` is equivalent to `Users/claire/data'

## General syntax of a shell command
**Bash**
```
$ ls -F /
```
`ls` is the **command**, with an **option** (or **switch** or **flag**) `-F` and an **argument** `/`.
**Options** start with a single dash (`-`) or two dashes (`--`) and change the behavior of the command.
Arguments tell the command what to operate on (e.g. files and directories).
Options and argements are refered to as **parameters**.

_Type case is important._
_Spaces are important between command and options. (But options can be combined with a single - and no spaces)_

### Getting help
- The help option can be used with a command, for example `ls --help`
- The manual (`man`) for a command can be accessed, for example `man ls`



### References
- [Intermediate Linux Commands](https://docs.google.com/document/d/1xY7fSNBzChx5PMPF_tGoBWOwXef5wVsH1Mf7vLdgJz0/edit?usp=sharing)
- [Software Carpentry Unix Shell](http://swcarpentry.github.io/shell-novice/)

[< home](/) | [< shell >](/shell/) | [lesson 2 >](/shell/shell-2/)
