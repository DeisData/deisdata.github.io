[< home](index.html) | [< shell >](shell.html) | [lesson 3 >](shell-3.html)

# Session 2: Working with files and directories

## Questions of the day:
- How can I create, copy, and delete files and directories?
- How can I edit files?


## Challenge Questions
1. Moving files.  We accidentally put the files `sucrose.dat` and `maltose.dat` into the wrong folder, `analyzed/`.  Fill in the blanks to move these files into the `raw/` folder.
```
$ ls -F
  analyzed/  raw/
$ ls -F analyzed/
  fructose.dat glucose.dat maltose.dat sucrose.dat
$ cd analyzed
```
My next line of code should be (fill in the blanks):
```
$ mv sucrose.dat matose.dat ___/___
```
<details>
  <summary>Solution</summary>
  Think about ../raw
  Recall that .. refers to the parent directory (i.e. one above the current directory).
</details>

2. Renaming Files. We mispelled a filename!  Which of the following commands will correct our mistake?
    - a. `cp statstics.txt statistics.txt`
    - b. `mv statstics.txt statistics.txt`
    - c. `mv statistics.txt . `
    - d. `cp statstics.txt .`

<details>
  <summary>Solution</summary>
  <p>(a.) Will copy the file, so we will end up with the mispelled and correct version.
  (b.) Will move (i.e. rename) the incorrect file name to a correct filename.
    (c.) and (d.) will not work. Remember . is the current directory.</p>
</details>

3. Removal. What happens when we execute `rm -i thesis/finaldraft.txt`? Why would we want this protection when using `rm`?
<details>
  <summary>Solution</summary>
  The program will confirm that we want to delete the thesis final draft file.  Remember, deletion is forever!  There is no trash can or recycle bin.
</details>

4. Removal. What is wrong with the command `rm -i thesis`?
<details>
  <summary>Solution</summary>
  The remove command will not act on a directory unless the recursive option (-r)is given. 
</details>

5. Removal. What is wrong with the command `rm -r thesis`?
<details>
  <summary>Solution</summary>
  This remove command will delete the directory thesis and all its contents, but we forgot to check for confirmation with the interaction option (-i).  Remember, deletion is permanent!
</details>

6. Wildcards.  Which of the following matches the file names `ethane.dat` and `methane.dat`?
   - a. `ls ?ethane.dat`
   - b. `ls *ethane.dat`
   - c. `ls ???ane.dat`
   - d. `ls ethane.*`
<details>
  <summary>Hint</summary>
  Remember ? wildcard matches to exactly one character.  * wildcard can match to zero to many characters.
</details>

 

## Tips for good names for files and directories
1. Don't use spaces.  Use `-` or `_` or _camelCase_.
1. Don't begin a name with a `-` (dash).  It will look like a command option.  Names should start with letters or numbers.
1. Avoid special characters.  Some have special meanings.

_If you need to refer to names of files or directories that have spaces, put them in quotes ("")._


### What's in a name?
A **filename extension** is the second part of the filename after the dot (.).  They help us and programs tell different kinds of files apart.  A few examples:
 - .txt: plain text file
 - .csv: comma separated value file
 - .pdf: PDF document
 - .cfg: configuration file of parameters for a program
 - .png: an image file

The **wildcard** `*` matches zero or more characters.  For example, to access all the text files in a directory, use `*.txt`.

The **wildcard** `?` matches exactly one character. 

## Commands of the Day
- Creating Directories or Files:
  - `mkdir path` creates a new directory
  - `nano new` runs a text editor called Nano to create a new file by the new name given.  For example, `nano thesis.txt` creates a text file named `thesis.txt` in the working directory. 
  - `touch new` creates an empty (0 byte) file by the new name given. Why bother? Some programs require empty files to populate with output.
- Moving or Renaming directories or files safely:
  - `mv old new` command move has two arguments.  The first tells `mv` what we're moving, while the second is where it's to go.
  - `mv -i` or `mv -interactive` must be used to make `mv` ask for confirmation before overwriting any existing file or directory with the same name as the second argument. (Otherwise, Beware! It will silently overwrite.)
- Copying directories and/or files:  
  - `cp old new` command copies a file (first argument) to a new location (second argument)
  - `cp -r` adds the recursive option to copy a directory and all its contents to another directory (second argument).  For example, we can make a backup with `cp -r thesis thesis_backup`.
  - `cp` can be used on multiple filenames as long as a destination directory is the last argument. For example, `cp a.txt b.txt c.txt backup/` will copy the three text files into the subdirectory `backup/`.
- Removing files and directories safely: **Deleting is forever**
  - `rm -i path` command for remove with interactive option to ask for confirmation before deleting.
  - `rm -i -r path` command with interactive option and recursive option will **remove a directory and all its contents** with confirmation prompts.    
  

  
## Which editor should I use?
- `nano` is a built-in text editor that only works with plain character data (i.e. no tables, images, or other media).  It is the least complex, but you may want to try more powerful editors.

**For Unix Systems (Linux and macOS)** 
- [Emacs](http://www.gnu.org/software/emacs)
- [Vim](http://vim.org/)
- [Gedit](http://projects.gnome.org/gedit/) is a graphical editor

**For Windows**
- [Notepad++](http://notepad-plus-plus.org/)
- `notepad` is built-in and can be run in the command line

_If you start an editor from the shell, it will use your current working directory as its default location._

_In editor commands, the Control key is also called Ctrl or ^._



### Challenge Project
Before heading on a trip, you want to back up your data and send some datasets to Claire.  Fill in the following commands to get the job done.  First, let's set up a directory and files.
``` 
# Hashtag denotes a comment. The line will be skipped

# Change to your desktop 
cd ~/Desktop

# Make a new folder for our fake data
mkdir fake_data
cd fake_data

# Create some empty files.
touch 2020-06-09-data.txt
touch 2020-06-09-calibration.txt

# Make sure the new files are created. Notice we can combine options)
ls -Fs

# Let's add some info to our file and confirm it with the editor (spoiler alert - redirects!)
echo Hello World > 2020-06-09-data.txt
nano 2020-06-09-data.txt

# Let's edit and add information to another.
nano 2020-06-09-calibration.txt
```
The next piece is provided in the shell script `session2challenge.sh`.
Copy it to your fake_data directory.

```
# session2challenge.sh creates more fake data and callibration files

fmonth="2020-06"
echo $fmonth

# Loop through days to create data files and calibration files
for i in `seq -w 10 30`
do
  # Define the filename
  printf -v fname '%s-%02d-data.txt' "$fmonth" "$i"
  # Create an empty file
  touch "$fname"
  # Redirect in some data
  echo data $i > "$fname"
  
  printf -v fname '%s-%02d-calibration.txt' "$fmonth" "$i"
  touch "$fname"
  echo $i > "$fname"
done
```

Now, it's your turn!
1.  Create a backup directory with separate subdirectories for data and calibration files. Copy files to the appropriate locations.
1.  Create a directory named send_to_claire and copy all the data from June 11th to it. 

[Add your code to the Jamboard!](https://jamboard.google.com/d/1d7hZeDHuvs4EnHiJFMrxhNPJDzQ_clPnqjzd_iBsAZ8/edit?usp=sharing)

<details>
  <summary>Get a hint</summary>
  
  #### Create a backup directory with subdirectories for data and calibration files
  - Hint: You will use `mkdir`
  ```
  mkdir ___
  mkdir ___/___
  mkdir ___/___
  ```
  
  #### Copy data files to `backup/data`. (Use a similiar approach for calibration files.)
  - Hint:  Use the copy command `cp` with wildcards
  ```
  cp *-data.txt backup/___
  ```
  
  #### Copy June 11th files to `send_to_claire/`. 
  - Hint:  Use the copy command `cp` with wildcards!
  ```
  cp *-11-*.txt send_to_claire/
  ```
</details>

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


[< home](index.html) | [< shell >](shell.html) | [lesson 3 >](shell-3.html)

