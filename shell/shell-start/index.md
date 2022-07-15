[< home](/) | [< shell >](/shell/) | [lesson 1 >](/shell/shell-1/)

_Adapted from [Software Carpentry]("https://software-carpentry.org")_
# Opening a Unix Shell in Bash

**Where to type commands: How to open a new shell**
  <p>The shell is a program that enables us to send commands to the computer and receive output. It is also referred to as the terminal or command line.</p>

  <p>Some computers include a default Unix Shell program. 
The steps below describe some methods for identifying and opening a Unix Shell program if you already have one installed. 
There are also options for identifying and downloading a Unix Shell program, a Linux/UNIX emulator, or a program to access a Unix Shell on a server.</p>

  <p>If none of the options below address your circumstances, try an online search for: Unix shell [your computer model] [your operating system].</p>

  <h3 id="linux">Linux</h3>
  <p>The default Unix Shell for Linux operating systems is usually Bash.
On most versions of Linux, it is accessible by running the <a href="https://help.gnome.org/users/gnome-terminal/stable/">(Gnome) Terminal</a>
or <a href="https://konsole.kde.org/">(KDE) Konsole</a>
or <a href="https://en.wikipedia.org/wiki/Xterm">xterm</a>,
which can be found via the applications menu or the search bar.
If your machine is set up to use something other than Bash, you can run it by opening a terminal and typing <code class="language-plaintext highlighter-rouge">bash</code>.</p>

  <h3 id="macos">macOS</h3>
  <p>For a Mac computer running macOS Mojave or earlier releases, the default Unix Shell is Bash.
For a Mac computer running macOS Catalina or later releases, the default Unix Shell is Zsh.
Your default shell is available via the Terminal program within your Utilities folder.</p>

  <p>To open Terminal, try one or both of the following:</p>
  <ul>
    <li>In Finder, select the Go menu, then select Utilities. Locate Terminal in the Utilities folder and open it.</li>
    <li>Use the Mac ‘Spotlight’ computer search function. Search for: <code class="language-plaintext highlighter-rouge">Terminal</code> and press <kbd>Return</kbd>.</li>
  </ul>

  <p>To check if your machine is set up to use something other than Bash, type <code class="language-plaintext highlighter-rouge">echo $SHELL</code> in your terminal window.</p>

  <p>If your machine is set up to use something other than Bash, you can run it by opening a terminal and typing <code class="language-plaintext highlighter-rouge">bash</code>.</p>

  <h4 id="reference">Reference</h4>
  <p><a href="http://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/">How to Use Terminal on a Mac</a></p>

  <h3 id="windows">Windows</h3>
  <p>Computers with Windows operating systems do not automatically have a Unix Shell program installed.
In this lesson, we encourage you to use an emulator included in Git for Windows, 
which gives you access to both Bash shell commands and Git. 
If you are attending a Software Carpentry workshop session, it is likely you have already received instructions on how to install Git for Windows.</p>

  <p>Once installed, you can open a terminal by running the program Git Bash from the Windows start menu.</p>

  <p>Other solutions are available for running Bash commands on Windows. 
There is now a Bash shell command-line tool available for Windows 10. 
Additionally, you can run Bash commands on a remote computer or server that already has a Unix Shell, from your Windows machine. 
This can usually be done through a Secure Shell (SSH) client. 
One such client available for free for Windows computers is PuTTY. 
See the reference below for information on installing and using PuTTY, 
using the Windows 10 command-line tool, or installing and using a Unix/Linux emulator.</p>

  <h4 id="reference-1">Reference</h4>
  <ul>
    <li><a href="https://git-for-windows.github.io/">Git for Windows</a> - <em>Recommended</em></li>
  </ul>

  <h3 id="for-advanced-users-you-may-choose-one-of-the-following-alternatives">For advanced users, you may choose one of the following alternatives:</h3>
  <ul>
    <li><a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">Install the Windows Subsystem for Linux</a></li>
    <li><a href="http://faculty.smu.edu/reynolds/unixtut/windows.html">Using a Unix/Linux emulator (Cygwin) or Secure Shell (SSH) client (Putty)</a></li>
  </ul>
</blockquote>
<blockquote>
  <p>*Please note that commands in the Windows Subsystem for Linux (WSL) or Cygwin may differ slightly from those shown in the lesson or presented in the workshop.</p>
</blockquote>

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


[< home](/) | [< shell >](/shell/) | [lesson 1 >](/shell/shell-1/)
