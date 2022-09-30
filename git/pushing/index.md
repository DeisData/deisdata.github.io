---
layout: git
---

# Pushing changes

In this session, you will be making more changes to your repository, as well as sending those changes to the remote upstream repository on GitHub. This is known as **pushing**. 

## Make a new file

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

## Adding a Personal Access Token
GitHub now requires users to use personal access tokens in order to push commits and perform other actions. To create a personal access token, follow these instructions:

1. Go to GitHub.
2. Click on your profile in the top right, and go to **Settings**.
3. Scroll to the bottom and click **Developer Settings**.
4. Go to **Personal access tokens**.
5. Click **Generate new token**.
6. Write a short note for what the token is used for (e.g., "My MacBook").
7. (Optional) For maximum security, give an expiration to the token.
8. Check the **repo** box. Make sure all the sub-boxes are checked, as well.
9. Generate token, copy the key, and make sure to store it somewhere securely. You will need to paste it into the terminal when we run `git push`.

## Pushing to GitHub
Now that we've created the token, we can push our changes to GitHub.

```bash
$ git push
```

Once you run this command, you will prompted to enter your GitHub username followed by the key for the token you just created. Hit <kbd>Enter</kbd> after typing in your username. Paste in the key with <kbd>Ctrl</kbd> + <kbd>V</kbd> or <kbd>cmd</kbd> + <kbd>V</kbd> (MacOS). Once you paste, it will not display the key in the terminal for security purposes. Hit <kbd>Enter</kbd> again. 

*Note: The prompt for the key may ask for a password, but your account password will not work. Please use the personal access token regardless of the prompt's wording.*

Once the push goes through, the terminal will print some information describing the pushing process, and your changes should now be reflected on GitHub. 

![git push](/assets/images/git/pushing/git_push.png)

## Recap

- `git push`: send local commits to a remote repository

<span class="lesson">
    [&nbsp;<a href="/git/quick-start/">previous</a>&nbsp;] 
    [&nbsp;<a href="/git/fetch-merge/">next</a>&nbsp;] 
</span>
