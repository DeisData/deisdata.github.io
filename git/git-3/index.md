---
layout: git
---

# Session 3: Repo History and Ignoring Files

## git diff

Previously, we used `git diff` to see the difference between a local and incoming remote file. However, it can also be used more generally to show differences across a file's history. 

Let's simulate making a poor change to our code by adding a line to our README with `nano`.

```bash
$ nano README.md
```
![git log](/assets/images/bad_change.png)

In our specific case, it's pretty easy to remember what change we made and remove it. But if you are editing code across many lines of different files, it can be become more challenging finding where changes are. 

Running `git diff HEAD` will show you all unstaged changes across all of the files in the repository. `HEAD` is essentially a variable that by default references the last made commit. Thus, `git diff HEAD` shows the difference between the last commit and our uncommitted changes. 

If we only want to see changes for a specific file, we can specify that filename, as well. 

```
$ git diff HEAD README.md
```

![git diff bad](/assets/images/git_diff_bad.png)

*Note: If you don't include `HEAD` (`git diff`), the command will work only when the changes are unstaged. You can add `git diff --staged` for changes in staged files specifically.*

We can also see the difference between our uncommitted changes and several commits ago by adding `~NUMBER` to `HEAD`.

```bash
$ git diff HEAD~2 README.md
```
![git head 2](/assets/images/git_head_2.png)

This shows us the changes from 2 commits prior to `HEAD`, the current commit.

You can also use the first 7 or so characters of the commit ID to compare.

```bash
$ git diff 36237fea README.md
```
### Restoring old versions of files

If we want to restore a previous commit of a file, we can use `git checkout` with the commit ID and filename. This will erase all uncommitted changes and revert the file. 

```bash
$ git checkout 36237fea README.md
```

If you run `cat`, you can see the file has indeed changed. Running `git status` shows that our file has staged changes as well. `git diff HEAD` shows that the staged changes are indeed removing lines added after this commit.

If we want to return to our last made commit, we can still do that, as well.

```bash
$ git checkout HEAD README.md
```

`git status` will now show no uncommitted changes. 

### Bonus
Some text editors and Integrated Development Environments (IDEs) will label modified lines and can display the full differences within the editor, as well as having other Git integrations. [VS Code](https://code.visualstudio.com/) is one such example of a powerful editor with Git integration.