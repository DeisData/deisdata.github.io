---
layout: git
---

# Forking in GitHub

**Forking** is a technique in GitHub that allows you to take someone else's repository, copy it to your account, and make your own changes to this copy. After pushing commits to the forked (copied) repository, you can also suggest the original repository make these changes using a **pull request**.

A pull request is mechanism for the owner of a repository to review suggested changes before implementing them into their repository. The owner can also give feeback to the pull request and request changes.

Forking repositories is great for playing around with coding projets that other people have put together. It also a great tool for collaborating. Each collaborator can fork a central repository, make changes, and create pull request to the main repo. 

## How to Fork

Go to any account on GitHub (not your own) and pick a repository. Look in the top right where it says "Fork" and click the button.

![Fork button](/assets/images/git/forking/fork.png)

This will take you to a page for initializing the forked repository. Most often, you will keep the fork with the same name as the original repository. 

![New fork](/assets/images/git/forking/new_fork.png)

When you go to your forked repo, it will look slightly different from a normal repository. Underneath the repo name, GitHub tells you where the repo was forked from. 

A little lower, a new bar is here. When you first fork, it will tell you that you are up to date with the original repository. This will likely change, both as you make commits, and as commits are made to the original repository.

![forked repo](/assets/images/git/forking/forked-repo.png)

If you have changes to suggest to original repository, you can click "Contribute" and create a pull request, which we will cover below. 

If there have been commits made to the original repo, you can retrieve them by clicking "Sync fork".

## Creating a pull request

Once we make a commit to our forked repository, we can make a **pull request** to ask the owners of the original repo to review the changes. 

![pull request button](/assets/images/git/forking/pull-req-button.png)

This will open up a form for you to give a name to the pull request and describe it. There are also options to add specific people to review the changes, if you would like.

![pull request form](/assets/images/git/forking/pull-request-form.png)


## Merging a pull request

You may also be interested in merged the changes from a pull request into the main repository yourself. 

You can see pending pull requests in the navigation of your repository. 

![pull request tab](/assets/images/git/forking/pull-request-tab.png)

You can open up the pending pull request here. Here, you can look at the commits made in detail, deciding if you want to add them or not. You can provide feedback and close the pull request, if you will not be adding in the changes.

Importantly, GitHub will check to make sure the changes can be implemented without causing any conflicts.

![merge pull request form](/assets/images/git/forking/merg-pull-req-button.png)

