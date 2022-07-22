---
layout: git
---

# Session 2: Interacting with GitHub

In this session, you will be making more changes to your repository, as well as sending those changes to the remote upstream repository on GitHub. This is known as **pushing**. 

## Pushing changes

### Make a new file

Let's practice making another change and commiting it. We'll use the `touch` command to make a new empty file called `notes.txt`. Make sure you are in the directory containing your repository first. You can do this by running `pwd` (Print Working Directory) and then using `cd` to navigate to the repository. 

```bash
$ touch notes.txt
```

Running `ls` will show you that `notes.txt` is now in your working directory. Run `git status` to see that we can now stage and commit this file. 

```bash
$ git add notes.txt
$ git commit -m "Added notes files"
$ git status
```

`git status` will let us know that all changes have been committed and that we are now 2 commits ahead of what is on GitHub.

### Adding a Personal Access Token
GitHub now requires users to use personal access tokens in order to push commits and perform other actions. To create a personal access token, follow these instructions:

1. Go to GitHub.
2. Click on your profile in the top right, and go to "Settings".
3. Scroll to the bottom and click Developer Settings".
4. Go to "Personal access tokens".
5. Click "Generate new token".
6. Write a short note for what the token is used for (e.g., "My MacBook").
7. (Optional) For maximum security, give an expiration to the token.
8. Check the "repo" box. Make sure all the sub-boxes are checked, as well.
9. Generate token, copy the key, and make sure to store it somewhere securely. You will need to paste it into the terminal when we run `git push`.

### Pushing to GitHub
Now that we've created the token, we can push our changes to GitHub.

```bash
$ git push
```

Once you run this command, you will prompted to enter your GitHub username followed by the key for the token you just created. Hit <kbd>Enter</kbd> after typing in your username. Paste in the key with <kbd>Ctrl</kbd>+<kbd>V</kbd> or <kbd>cmd</kbd>+<kbd>V</kbd> (MacOS). Once you paste, it will not display the key in the terminal for security purposes. Hit <kbd>Enter</kbd> again. 

*Note: The prompt for the key may ask for a password, but your account password will not work. Please use the personal access token regardless of the prompt's wording.*

Once the push goes through, the terminal will print some information describing the pushing process, and your changes should now be reflected on GitHub. 

![git push](/assets/images/git_push.png)

## Fetch and merge from GitHub

If we are collaborating with others on a project, often our local repository will be out of sync with the remote GitHub repository. In the simplest case, we will simply be one or more commits behind what is on GitHub. To address this, we first want to **fetch**, or retrieve, any commits from GitHub and then **merge** them into our local repository. For instance, if someone has created a new file `data.text` and committed it to the GitHub repo, we can run `git fetch` followed by `git merge` to have that file reflected on our machine. If we are simply behind what is on GitHub, it will be a painless process that updates our local repository. When collaborating with others, it is a healthy practice to run these commands before we make any changes and before we push changes. 

### Make changes to the README on GitHub

To demonstrate how this might work, we are going to alter and commit a file on GitHub and then fetch and merge this commit locally.

1. Go to your repository on GitHub.
2. Click on `README.md` and then go into edit mode either by clicking the edit button (looks like a pencil) or by tapping <kbd>E</kbd>.
3. Write something on the third line. 
4. Scroll down and write a commit message. You don't need an extended description.
5. Make sure "Commit directly to `main` branch" is selected, and commit changes.

Your change should be reflected in the README.

### Retrieve changes locally

Go back to terminal and run `git fetch` to retrieve the changes. The terminal will print out some information about the process.

```bash
$ git fetch
```

The commit is now in our local system, but the change is not yet reflected in our file yet. We can see this by running `cat`, which will print out our file.

```bash
$ cat README.md
```

To view the differences between our local file and the new commit, we can run the `git diff` command with some specifications for the file we're interested in and the two sources of the file. 

```
$ git diff HEAD origin/main README.md
```
![git diff](/assets/images/git_diff.png)

This command and the output are somewhat complicated, so let's step through them.

- `HEAD` specifies our local version of the file.
- `origin/main` specifies the version of the file commited on GitHub. We'll get into exactly what this means in a later session.
- Putting `HEAD` and `origin/main` in the command followed by `README.md` means that we want to compare the differences between the two versions of the README.
- The output labels the `HEAD` version as `a/README.md` and the `origin/main` version as `b/README.md`.
- Lines marked as `-` are present in the local file, and lines with `+` are the incoming version.

The output shows a red `-` on a blank line and a green `+` on the line with new text. This means that in our local file, there is a blank line, whereas in the new version, there is text. This means that if we run `git merge`, this will cause the blank line to become text locally. 

We can now merge the file. A summary will print after we do so.

```bash
$ git merge
```

![git merge](/assets/images/git_merge.png)

*Note: The command `git pull` is equivalent to running `git fetch` immediately followed by `git merge`, though it may lead to some unexpected behavior at times. We will discuss this later.*

If you run `cat README.md` again, you will see the change present in our local file. If we want to see a history of changes in this repository, you can use `git log`.

```bash
$ git log
```

![git log](/assets/images/git_log.png)

This will print out information on all of this repo's commits, including, the commit ID, the author of the commit, when the commit was made, and its description. You can hit <kbd>Enter</kbd> to scroll down or use the arrow keys to go either direction. Hit <kbd>Q</kbd> to exit this view.

## Recap

- `git push`: send local commits to a remote repository
- `git fetch`: retrieve commits from a remote repository (GitHub)
- `git merge`: merge remote commits with local changes
- `git diff`: display the difference between working and committed file
- `git log`: shows the history of commits