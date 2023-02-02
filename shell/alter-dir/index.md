---
layout: shell
---

# Altering files and directories

## Questions to think about:
- How can I create, copy, and delete files and directories?
- How can I edit files?

## Creating Directories or Files
`mkdir` creates a new directory, followed by the name of the new directory. 

```bash
$ mkdir new_dir
$ ls -F
```

```
new_dir/
```

`mkdir -p` can be used to make subdirectories.

```bash
mkdir -p code/python/analysis
ls -RF # displays subdirectory structure
```

```
code/

./code:
python/

./code/python:
analysis/

./code/python/analysis:
```


`nano filename.txt` runs a text editor called `nano` to create a new file by the name given. For example, `nano thesis.txt` creates a text file named `thesis.txt` in the working directory. 
 
```bash
$ nano filename.txt
```

![nano](/assets/images/shell/alter-dir/nano.png)

 
`touch filename.txt` creates an empty (0 byte) file by the new name given. Why bother? Some programs require empty files to populate with output.

```bash
$ touch filename2.txt
$ ls -F
```

```
filename.txt
filename2.txt
```
  
## Moving or renaming directories or files safely

`mv filename.txt new_location` command move has two arguments.  The first tells `mv` what we're moving, while the second is where it will go.

```bash
$ mv filename.txt new_dir
$ ls -F new_dir
```

```
filename.txt
```

`mv -i` or `mv -interactive` must be used to make `mv` ask for confirmation before overwriting any existing file or directory with the same name as the second argument. (Otherwise, beware! It will silently overwrite.)
  
## Copying directories and/or files  

`cp old new` command copies a file (first argument) to a new location (second argument)

```bash
$ cp filename2.txt new_dir
$ ls -F
```

```
filename2.txt
new_dir/
```

- `cp -r` adds the recursive option to copy a directory and all its contents to another directory (second argument).  For example, we can make a backup with `cp -r thesis thesis_backup`.
- `cp` can be used on multiple filenames as long as a destination directory is the last argument. For example, `cp a.txt b.txt c.txt backup/` will copy the three text files into the subdirectory `backup/`.


## Removing files and directories safely: **Deleting is forever**

`rm` is used to remove items from a directory. Using it without any options, however, can be dangerous, as deleted items do not go to a trash or recycling bin.

- `rm -i path` command for remove with interactive option to ask for confirmation before deleting.
- `rm -i -r path` command with interactive option and recursive option will **remove a directory and all its contents** with confirmation prompts.

```bash
$ rm -i -r new_dir
$ ls
```

```
filename2.txt
```
  

## Tips for good names for files and directories
1. Don't use spaces.  Use `-` or `_` or _camelCase_.
2. Don't begin a name with a `-` (dash).  It will look like a command option.  Names should start with letters or numbers.
3. Avoid special characters.  Some have special meanings.

_If you need to refer to names of files or directories that have spaces, put them in quotes ("")._


### What's in a name?
A **filename extension** is the second part of the filename after the dot (`.`).  They help us and programs tell different kinds of files apart.  A few examples:
- .txt: plain text file
- .csv: comma separated value file
- .pdf: PDF document
- .cfg: configuration file of parameters for a program
- .png: an image file

The **wildcard** `*` matches zero or more characters.  For example, to copy all text files in a directory, use `cp *.txt DIR_NAME`.

The **wildcard** `?` matches exactly one character.
  
## Which editor should I use?
`nano` is a built-in text editor that only works with plain character data (i.e. no tables, images, or other media).  It is the least complex, but you may want to try more powerful editors.

**For Unix Systems (Linux and macOS)** 
- [Emacs](http://www.gnu.org/software/emacs)
- [Vim](http://vim.org/)
- [Gedit](http://projects.gnome.org/gedit/) is a graphical editor

**For Windows**
- [Notepad++](http://notepad-plus-plus.org/)
- `notepad` is built-in and can be run in the command line

_If you start an editor from the shell, it will use your current working directory as its default location._

_In editor commands, the Control key is also called Ctrl or ^._

## Challenge Questions
**(1) Moving files.** We accidentally put the files `sucrose.dat` and `maltose.dat` into the wrong folder, `analyzed/`. Fill in the blanks to move these files into the `raw/` folder.
```bash
$ ls -F
  analyzed/  raw/
$ ls -F analyzed/
  fructose.dat glucose.dat maltose.dat sucrose.dat
$ cd analyzed
```
My next line of code should be (fill in the blanks):
```bash
$ mv sucrose.dat matose.dat ___/___
```
<details>
  <summary>Solution</summary>

  <div class="container" markdown="1">

  Think about `../raw`
  Recall that `..` refers to the parent directory (i.e. one above the current directory).
  </div>
</details>

**(2) Renaming Files.** We mispelled a filename!  Which of the following commands will correct our mistake?
<ol type="a">
  <li><code>cp statstics.txt statistics.txt</code></li>
  <li><code>mv statstics.txt statistics.txt</code></li>
  <li><code>lmv statistics.txt .</code></li>
  <li><code>cp statstics.txt .</code></li>
</ol>

<details>
  <summary>Solution</summary>

  <div class="container" markdown="1">


<ol type="a">
<li>Will copy the file, so we will end up with the mispelled and correct version.</li>
<li>Will move (i.e. rename) the incorrect file name to a correct filename.</li>
<li>Not a working command.</li>
<li>Will not work. Remember <code>.</code> is the current directory.</li>
</ol>

  </div>

</details>

**(3) Removal.** What happens when we execute `rm -i thesis/finaldraft.txt`? Why would we want this protection when using `rm`?
<details>
  <summary>Solution</summary>

  <div class="container" markdown="1">

  The program will confirm that we want to delete the thesis final draft file.  Remember, deletion is forever!  There is no trash can or recycle bin.

  </div>
</details>

**(4) Removal.** What is wrong with the command `rm -i thesis`?
<details>
  <summary>Solution</summary>
  <div class="container" markdown="1">

  The remove command will not act on a directory unless the recursive option <code>-r</code> is given. 
  </div>
</details>

**(5) Removal.** What is wrong with the command `rm -r thesis`?
<details>
  <summary>Solution</summary>

  <div class="container" markdown="1">

  This remove command will successfully delete the directory thesis and all its contents, but we forgot to check for confirmation with the interaction option (-i).  Remember, deletion is permanent!
  
  </div>

</details>

**(6) Wildcards.**  Which of the following matches the file names `ethane.dat` and `methane.dat`?

<ol type="a">
  <li><code>ls ?ethane.dat</code></li>
  <li><code>ls *ethane.dat</code></li>
  <li><code>ls ???ane.dat</code></li>
  <li><code>ls ethane.*</code></li>
</ol>

<details>
  <summary>Hint</summary>

  <div class="container" markdown="1">

  Remember the <code>?</code> wildcard matches to exactly one character. The <code>*</code> wildcard can match to zero to many characters.

  </div>
</details>
<details>
  <summary>Solution</summary>
  <div class="container" markdown="1">
<ol type="a">
  <li>Matches <code>methane.dat</code> only (needs one character before <code>ethane.dat</code>).</li>
  <li>Matches both, can have any number of characters (including zero) before <code>ethane.dat</code>.</li>
  <li>Matches <code>ethane.dat</code> only (requires only 3 characters before <code>ane.dat</code>).</li>
  <li>Matches <code>ethane.dat</code> only (requires no characters before <code>ethane</code>).</li>
</ol>
  </div>
</details>

 

### Challenge Project
Before heading on a trip, you want to back up your data and send some datasets to Ford.  Fill in the following commands to get the job done.  First, let's set up a directory and files.
```bash 
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

While in your `fake_data` directory, copy and paste the code from this file and run it.

```bash
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
1.  Create a directory named send_to_ford and copy all the data from June 11th to it. 


<details markdown="1">
  <summary>Get a hint</summary>

  <div class="container" markdown="1">

  
<h4>Create a backup directory with subdirectories for data and calibration files</h4>
- Hint: You will use `mkdir`

```bash
mkdir ___
mkdir ___/___
mkdir ___/___
```
  
<h4 markdown="1">Copy data files to `backup/data`. (Use a similiar approach for calibration files.)</h4>
- Hint:  Use the copy command `cp` with wildcards
  
```bash
cp *-data.txt backup/___
```
  
<h4 markdown="1">Copy June 11th files to `send_to_ford/`.</h4>
- Hint:  Use the copy command `cp` with wildcards!
  
```bash
cp *-11-*.txt send_to_ford/
```
  </div>
</details>

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


<span class="lesson">
    [&nbsp;<a href="/shell/navigating">previous</a>&nbsp;]
    [&nbsp;<a href="/shell/pipes-filters">next</a>&nbsp;]    
</span>

