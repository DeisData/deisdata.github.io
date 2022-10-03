---
layout: git
title: Quick Start to GitHub
---

# Quick Start to GitHub

This guide will show you the basics of making a repository on GitHub, cloning it to your machine, and committing changes to version control.

## Create a remote repository on GitHub

Go to GitHub and create a new repository by clicking "New". 

<br>

![Make a repo](/assets/images/git/quick-start/github_newrepo.png)

<br>

Give your repo a short but descriptive name without spaces or special characters. Note that your account cannot have two repos with exactly the same name. 

<br>

![Name your repo](/assets/images/git/quick-start/github_reponame.png)

<br>

You can choose whether or not to make your repository to be private. If you plan to collaborate with others, you are required to have a public repository unless you pay for a premium GitHub account.

Make sure to initialize with a README, which will give general information about your repository. You can also initialize with a license, which defines what others can and cannot do with your code. For more information, see [the Software Carpentry's primer on licenses](https://swcarpentry.github.io/git-novice/11-licensing/index.html).

## Clone the remote repository to your machine

To get this repository onto our local machine, we will clone it, which copies its contents. Go to the repository you just made on GitHub. You will see a `README.md` file and a license file. Click on "Code", which opens a dropdown menu. Copy the **HTTPS** link, which will be `https://github.com/{USERNAME}/{REPO-NAME}.git`, with your username and repo name, respectively.

<br>

![clone repo](/assets/images/git/quick-start/github_clone.png)

<br>

Go back to your terminal. Create a new `GitHub` folder in your home directory by running:

```bash
$ mkdir ~/GitHub
```

This uses the Unix command `mkdir` (Make Directory) to create a new folder. We then want to go to that folder with the `cd` (Change Directory) command.

```bash
$ cd ~/GitHub
```

To clone your repository, run the following, again inserting your link:

```bash
$ git clone https://github.com/{USERNAME}/{REPO-NAME}.git
```

Move to your newly cloned local repository and list the files with `ls` command.

```bash
$ cd {REPO-NAME}
$ ls
```

You should see the names of the files `LICENSE` (if you made one) and `README.md` printed to the terminal. 

## Alter the README 

You now have a local **downstream** repository on your machine. The remote GitHub repository is referred to as the **upstream** repository. If other users make changes reflected in the upstream repository, you will receive and implement them locally.

We are going to write a line of text to the README and commit that change to version control. 

First, we are going to use a text editor called `nano` to open `README.md`.

```bash
$ nano README.md
```

<br>

![nano blank](/assets/images/git/quick-start/nano1.png)

<br>

Tap the <kbd>&#8595;</kbd> key to get to a new line. Type whatever your heart desires ("Hello World!" is a classic). To save or "write" your changes, press <kbd>Ctrl</kbd> + <kbd>O</kbd>, and then hit <kbd>Return</kbd>. Press <kbd>Ctrl</kbd> + <kbd>X</kbd> to exit `nano`.

Note: use <kbd>Ctrl</kbd> regardless of your OS.

<br>

![nano blank](/assets/images/git/quick-start/nano2.png)

<br>

Now that you've made a change, you can check the status of the repository with `git status`.

```bash
$ git status
```

![git status](/assets/images/git/quick-start/git_status.png)

This command prints out a lot of information. It says we are on the main branch (more on this in the future). It says we are up to date with `origin/main`. This means thats GitHub doesn't have any commits that aren't present locally, and we don't have any local commits that aren't reflected in GitHub. It then lists `README.md` in red as modified but not yet staged, as well the commands for how to stage it. Finally, it says that nothing has yet been added to commit yet.  

### Stage modified file

We want to stage our modified file. Staging a file means we want to commit it. To do this, we'll use the `git add` command.

```bash
$ git add README.md
```

If we run `git status` again, we'll see that `README.md` is now staged for commit and in green text.

![git add](/assets/images/git/quick-start/git_add.png)

### Make a commit

Now we are ready to commit these changes. We are going to use `git commit` with a message flag (`-m`). The message we write should give a short description of the changes you made in this commit.

```bash
$ git commit -m "Updated the README"
```

The terminal will print out some information about your commit including how many files were changed and how many lines were inserted and deleted.

If we run `git status` again, we'll notice a few things. 

![post commit](/assets/images/git/quick-start/post_commit.png)

It now tells us that we no longer have any changes to commit in our local repository. It also is telling us that we are ahead of the upstream repository on GitHub by 1 commit. This is because our changes have not yet been sent or "pushed" to that remote repository yet. 

## Recap
- `git clone`: copy a remote repository locally
- `git status`: shows what is in staging and was is being commited.
- `git add file_name`: Moves a file to staging.
- `git commit -m "Detailed log message goes here."`: Commits files in staging to history and documents message to the log.

## Contact

Please reach out to <dataservices@brandeis.edu> with any questions or concerns.

## Resources
- GitHub Docs: <https://docs.github.com/en/get-started>
- Atlassian: <https://www.atlassian.com/git/tutorials/setting-up-a-repository>


This workshop has been adapted from [the Software Carpentry](https://software-carpentry.org/).

<span class="lesson">
    [&nbsp;<a href="/git/setup-install/">previous</a>&nbsp;]
    [&nbsp;<a href="/git/pushing/">next</a>&nbsp;]    
</span>