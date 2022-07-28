---
layout: git
---

# Setup and Installation
In this workshop, we are using **Git** and [GitHub.com](https://github.com/).

**Git** is a version control system that lets you track who made changes, when those changes were made, and what they were. It allows for for easily updating a version of your work. 

**GitHub.com** allows you to host repositories online to collaborate with others on your projects. You will need a free account for part of this workshop. We will follow the instruction to keep your email address private at GitHub.

## Register for a GitHub Account
Go to [GitHub.com](https://github.com), register for an account, and verify it. 

## Git Installation Instructions

### Windows

You will installing [Git Bash](https://gitforwindows.org/) (also called Git for Windows). Detailed instructions can be found via [the Software Carpentry](https://carpentries.github.io/workshop-template/#shell).

### MacOS

Open Terminal. It should be located in `Applications/Utilities`. You use Spotlight to locate it as well (<kbd>cmd</kbd> + <kbd>space</kbd> and type "Terminal").

Type `which git` and press Return. If it prints a path (e.g. `/usr/bin/git`), Git is already installed. 

If no path is printed, follow the instructions at [the Software Carpentry](https://carpentries.github.io/workshop-template/#git) for MacOS.

### Linux

Open the terminal. Type `which git` and press Return. If it prints a path (e.g. `/usr/bin/git`), Git is already installed. If not, for Debian/Ubuntu run `sudo apt-get install git` and for Fedora run `sudo dnf install git`.

## Configure git global settings
When we use Git on a new computer for the first time, we need to configure a few things. Below are a few examples of configurations we will set as we get started with Git:
- our name and email address,
- what our preferred text editor is,
- and that we want to use these settings globally (i.e., for every project).

**Windows**:  Open the git shell "Git Bash" you downloaded through the bash installation procedures, or run the command "bash" in your Command Prompt.

**MacOS**:  Open a bash shell in Terminal.

**Linux**:  Use your terminal.

In the bash shell, run the following commands (with your information). The leading `$` indicates that the command should be run in `bash`. Do not insert an additional `$` in your own terminal. If these configuration commands are successful, nothing will print to the terminal.

To use `git` commands, we use the syntax `git SOME_COMMAND`. We will be using `git config` with some added parameters to set up `git`. We will also add the flag `--global` to make sure these settings apply to any of our future repositories. 

#### **Name configuration**

```bash
$ git config --global user.name "InigoMontoya"
```

#### **Email configuration**
- Log in to [GitHub.com](https://github.com)
- Click on your profile icon at the top right corner
- Go to Settings
- Click on Emails in the left menu
- Select the check box "Keep my email addresses private" and use the private github.com-supplied email listed in the configuration below.  You can highlight and copy it with <kbd>Ctrl</kbd> + <kbd>C</kbd> or <kbd>cmd</kbd> + <kbd>C</kbd> (Mac), and paste to the command line with <kbd>Ctrl</kbd> + <kbd>V</kbd> or <kbd>cmd</kbd> + <kbd>V</kbd>.
 
```bash
$ git config --global user.email "1234username@users.noreply.github.com"
```

#### **Line Heading configuration**

As with other keys, when you hit Return on your keyboard, your computer encodes this input as a character. Different operating systems use different character(s) to represent the end of a line. Because Git uses these characters to compare files, it may cause unexpected issues when editing a file on different machines. 

**Windows**
```bash 
$ git config --global core.autocrlf true
```

**MacOS and Linux**
```bash 
$ git config --global core.autocrlf input
```

#### **Editor configuration**

In these sessions, we will be using a basic editor called nano.  There are other ways to configure for more popular editors [here](http://swcarpentry.github.io/git-novice/02-setup/index.html).
```bash
$ git config --global core.editor "nano -w"
```

Check your settings at any time with:  
```bash
$ git config --list
```

## Recap:
- `git config --global`: set up your settings across all your repos

## Resources
- GitHub Docs: <https://docs.github.com/en/get-started>
- Atlassian: <https://www.atlassian.com/git/tutorials/setting-up-a-repository>


This workshop has been adapted from [the Software Carpentry](https://software-carpentry.org/).