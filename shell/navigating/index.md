---
layout: shell
---

# Navigating to files and directories

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
We usually interact with our devices on a **graphical user interface** (GUI). 
Shell is a **Command-Line Interface** (CLI), where we type commands in the **prompt** `$` 
instead of pointing and clicking. We use it to invoke complicated programs. Shell is a scripting language, 
and we will use the Unix Shell: Bash (Bourne Again SHell by Stephen Bourne).

## Why use Bash?
Bash combines existing tools into powerful pipelines and handle large volumes of data automatically. We can write sequences of commands into a script, improving the reproducibility of workflows. It is essential to interface with hardware, HPCC, and remote machines.

## Navigating files and directories
The **file system** is the part of the operating system responsible for managing files and directories.
  - **Files** hold information.
  - **Directories** (or **folders**) hold files or other directories.  Thinks of them like _places_.
  - The **current working directory** is the place where you are in the file system when you are using the shell.
  - The **root directory** is the top directory that holds everything else.  It is refered to by a slash `/` on its own.  This is the leading slash in other directory paths, for example `/Users/claire/`
  - **Hidden files and directories** start with `.` like `.bash_profile`.  They are usually configuration settings and are hidden to prevent cluttering the terminal with a standard `ls` command.  Add the `-a` option see hidden files. 

## General syntax of a shell command
```bash
$ ls -F /
```
`ls` is the **command**, with an **option** (or **switch** or **flag**) `-F` and an **argument** `/`.
**Options** start with a single dash (`-`) or two dashes (`--`) and change the behavior of the command.
Arguments tell the command what to operate on (e.g. files and directories).
Options and argements are refered to as **parameters**.

**Type case is important.**
**Spaces are important between command and options. (But options can be combined with a single - and no spaces).**

## Listing

We use the `ls` command to list the contents of the current directory.

It has many options we can provide:
  - `-F` option (switch or flag) tells ls to classify the output by adding a marker to file and directory names to indicate what they are.
  - `-s` option displays the size of files and directories
  - `-S` option will sort the files and directories by size
  - `--help` option will tell us how to use the command and what options it accepts


```bash
$ ls -F
```

## Print working directory

To check where you are, use `pwd` to print the path of the **working directory**. 

```bash
$ pwd
```

```
/home/fordfishman/
```

## Change directory

`cd` will change your working directory. `cd` can only see sub-directories inside your current working directory.
- `cd ..` is a shortcut to move up one directory to the _parent directory_ of the one we are in
- `cd ~/` is a shortcut to move to the current user's home directory.  For example, if my home directory is `/Users/claire`, then `~/data` is equivalent to `Users/claire/data'

```bash
$ cd ..
$ pwd
```

```
/home/
```


## Other commands

- `clear`:  clears the terminal if it gets to cluttered
- up and down arrows can be used to access previous commands (or scroll)
- `man` will give you the manual for a command, for example `man ls` will tell us all about listing
- The help option can be used with a command, for example `ls --help`


### References
- [Intermediate Linux Commands](https://docs.google.com/document/d/1xY7fSNBzChx5PMPF_tGoBWOwXef5wVsH1Mf7vLdgJz0/edit?usp=sharing)
- [Software Carpentry Unix Shell](http://swcarpentry.github.io/shell-novice/)

<span class="lesson">
    [&nbsp;<a href="/shell/setup/">previous</a>&nbsp;]
    [&nbsp;<a href="/shell/alter-dir">next</a>&nbsp;]
</span>
