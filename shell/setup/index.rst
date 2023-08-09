Bash Setup
==========

*Adapted from* `Software
Carpentry <%22https://software-carpentry.org%22>`__

**Where to type commands: How to open a new shell**

.. raw:: html

   <p>

The shell is a program that enables us to send commands to the computer
and receive output. It is also referred to as the terminal or command
line.

.. raw:: html

   </p>

.. raw:: html

   <p>

Some computers include a default Unix Shell program. The steps below
describe some methods for identifying and opening a Unix Shell program
if you already have one installed. There are also options for
identifying and downloading a Unix Shell program, a Linux/UNIX emulator,
or a program to access a Unix Shell on a server.

.. raw:: html

   </p>

.. raw:: html

   <p>

If none of the options below address your circumstances, try an online
search for: Unix shell [your computer model] [your operating system].

.. raw:: html

   </p>

.. raw:: html

   <h3 id="linux">

Linux

.. raw:: html

   </h3>

.. raw:: html

   <p>

The default Unix Shell for Linux operating systems is usually Bash. On
most versions of Linux, it is accessible by running the (Gnome) Terminal
or (KDE) Konsole or xterm, which can be found via the applications menu
or the search bar. If your machine is set up to use something other than
Bash, you can run it by opening a terminal and typing bash.

.. raw:: html

   </p>

.. raw:: html

   <h3 id="macos">

macOS

.. raw:: html

   </h3>

.. raw:: html

   <p>

For a Mac computer running macOS Mojave or earlier releases, the default
Unix Shell is Bash. For a Mac computer running macOS Catalina or later
releases, the default Unix Shell is Zsh. Your default shell is available
via the Terminal program within your Utilities folder.

.. raw:: html

   </p>

.. raw:: html

   <p>

To open Terminal, try one or both of the following:

.. raw:: html

   </p>

.. raw:: html

   <ul>

.. raw:: html

   <li>

In Finder, select the Go menu, then select Utilities. Locate Terminal in
the Utilities folder and open it.

.. raw:: html

   </li>

.. raw:: html

   <li>

Use the Mac ‘Spotlight’ computer search function. Search for: Terminal
and press Return.

.. raw:: html

   </li>

.. raw:: html

   </ul>

.. raw:: html

   <p>

To check if your machine is set up to use something other than Bash,
type echo $SHELL in your terminal window.

.. raw:: html

   </p>

.. raw:: html

   <p>

If your machine is set up to use something other than Bash, you can run
it by opening a terminal and typing bash.

.. raw:: html

   </p>

To change the default shell, follow `these
instructions <https://www.howtogeek.com/444596/how-to-change-the-default-shell-to-bash-in-macos-catalina/>`__.

.. raw:: html

   <h4 id="reference">

Reference

.. raw:: html

   </h4>

.. raw:: html

   <p>

How to Use Terminal on a Mac

.. raw:: html

   </p>

.. raw:: html

   <h3 id="windows">

Windows

.. raw:: html

   </h3>

.. raw:: html

   <p>

Computers with Windows operating systems do not automatically have a
Unix Shell program installed. In this lesson, we encourage you to use an
emulator included in Git for Windows, which gives you access to both
Bash shell commands and Git. If you are attending a Software Carpentry
workshop session, it is likely you have already received instructions on
how to install Git for Windows.

.. raw:: html

   </p>

.. raw:: html

   <p>

Once installed, you can open a terminal by running the program Git Bash
from the Windows start menu.

.. raw:: html

   </p>

.. raw:: html

   <p>

Other solutions are available for running Bash commands on Windows.
There is now a Bash shell command-line tool available for Windows 10.
Additionally, you can run Bash commands on a remote computer or server
that already has a Unix Shell, from your Windows machine. This can
usually be done through a Secure Shell (SSH) client. One such client
available for free for Windows computers is PuTTY. See the reference
below for information on installing and using PuTTY, using the Windows
10 command-line tool, or installing and using a Unix/Linux emulator.

.. raw:: html

   </p>

.. raw:: html

   <h4 id="reference-1">

Reference

.. raw:: html

   </h4>

.. raw:: html

   <ul>

.. raw:: html

   <li>

Git for Windows - Recommended

.. raw:: html

   </li>

.. raw:: html

   </ul>

.. raw:: html

   <h3 id="for-advanced-users-you-may-choose-one-of-the-following-alternatives">

For advanced users, you may choose one of the following alternatives:

.. raw:: html

   </h3>

.. raw:: html

   <ul>

.. raw:: html

   <li>

Install the Windows Subsystem for Linux

.. raw:: html

   </li>

.. raw:: html

   <li>

Using a Unix/Linux emulator (Cygwin) or Secure Shell (SSH) client
(Putty)

.. raw:: html

   </li>

.. raw:: html

   </ul>

.. raw:: html

   <blockquote>

.. raw:: html

   <p>

\*Please note that commands in the Windows Subsystem for Linux (WSL) or
Cygwin may differ slightly from those shown in the lesson or presented
in the workshop.

.. raw:: html

   </p>

.. raw:: html

   </blockquote>

Resources
---------

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__.

[ previous ] [ next ]
