---
layout: git
---

# Session 3: Repo History and Ignoring Files

Previously, we used `git diff` to see the difference between a local and incoming remote file. However, it can also be used more generally to show differences across a file's history. 

Let's simulate making a poor change to our code by adding a line to our README with `nano`.

```bash
$ nano README.md
```
![git log](/assets/images/bad_change.png)

In our specific case, it's pretty easy to remember what change we made and remove it. But if you are editing code across many lines of different files, it can be become more challenging finding where changes are. 

Running `git diff` on its own will show you all unstaged changes across all of the files in the repository. If we specify the filename, it will only show the changes in that specific file. 

```
$ git diff README.md
```

#### Bonus
Some text editors and Integrated Development Environments (IDEs) will label modified lines and can display the full differences within the editor, as well as having other Git integrations. [VS Code](https://code.visualstudio.com/) is one such example of a powerful editor with Git integration.