Shell Setup
===========

.. raw:: html

  <div style="max-width:960px"><div style="position:relative;padding-bottom:56.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/4297403/sp/429740300/embedIframeJs/uiconf_id/48867372/partner_id/4297403?iframeembed=true&playerId=kaltura_player&entry_id=1_0koy5hmm&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_hieplttd" width="960" height="540" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Unix Shell1: Introduction" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>


*Adapted from* `Software
Carpentry <https://software-carpentry.org>`__

The shell is a program that enables us to send commands to the computer
and receive output. It is also referred to as the terminal or command
line.

Some computers include a default Unix Shell program. The steps below
describe some methods for identifying and opening a Unix Shell program
if you already have one installed. There are also options for
identifying and downloading a Unix Shell program, a Linux/UNIX emulator,
or a program to access a Unix Shell on a server.


If none of the options below address your circumstances, try an online
search for: Unix shell [your computer model] [your operating system].

Linux
-----

The default Unix Shell for Linux operating systems is usually Bash. On
most versions of Linux, it is accessible by running the `(Gnome) Terminal 
<https://help.gnome.org/users/gnome-terminal/stable/>`__
or `(KDE) Konsole <https://konsole.kde.org/>`__ or `xterm <https://en.wikipedia.org/wiki/Xterm>`__, 
which can be found via the applications menu
or the search bar. If your machine is set up to use something other than
Bash, you can run it by opening a terminal and typing ``bash`` and hitting :kbd:`Enter`.

macOS
-----

For a Mac computer running macOS Mojave or earlier releases, the default
Unix Shell is Bash. For a Mac computer running macOS Catalina or later
releases, the default Unix Shell is Zsh. Your default shell is available
via the Terminal program within your Utilities folder.

To open Terminal, try one or both of the following:

- In Finder, select the Go menu, then select Utilities. 
  Locate Terminal in the Utilities folder and open it.
- Use the Mac ‘Spotlight’ computer search function. Search for: **Terminal**
  and press :kbd:`Return`.

To check if your machine is set up to use something other than Bash,
type ``echo $SHELL`` in your terminal window. 


If your machine is set up to use something other than Bash, you can run
it by opening a terminal and typing ``bash``. However, it is not strictly speaking necessary to 
use bash for our purposes. Other shells, like ``zsh``, will work as well.


To change the default shell, follow `these
instructions <https://www.howtogeek.com/444596/how-to-change-the-default-shell-to-bash-in-macos-catalina/>`__.

Windows
-------

Computers with Windows operating systems do not automatically have a
Unix Shell program installed. In this lesson, we encourage you to use an
emulator included in `Git for Windows <https://git-for-windows.github.io/>`__, 
which gives you access to both Bash shell commands and Git. If you are attending a Software Carpentry
workshop session, it is likely you have already received instructions on
how to install Git for Windows.

Once installed, you can open a terminal by running the program Git Bash
from the Windows start menu.

Other solutions are available for running Bash commands on Windows.
There is now a Bash shell command-line tool available for Windows 10.
Additionally, you can run Bash commands on a remote computer or server
that already has a Unix Shell, from your Windows machine. This can
usually be done through a Secure Shell (SSH) client. One such client
available for free for Windows computers is `PuTTY <https://www.putty.org/>`__. See the reference
below for information on installing and using PuTTY, using the Windows
10 command-line tool, or installing and using a Unix/Linux emulator.

- `Git for Windows - Recommended <https://git-for-windows.github.io/>`__

For advanced users, you may choose one of the following alternatives:


- `Install the Windows Subsystem for Linux <https://docs.microsoft.com/en-us/windows/wsl/install-win10>`__
- `Using a Unix/Linux emulator (Cygwin) <https://www.cygwin.com/>`__ or `Secure Shell (SSH) client
  (PuTTy) <https://www.putty.org/>`__

.. warning::

   Please note that commands in the Windows Subsystem for Linux (WSL) or
   Cygwin may differ slightly from those shown in the lesson or presented
   in the workshop.


Resources
---------

This lesson is adapted from `The Unix Shell on Software
Carpentry <http://swcarpentry.github.io/shell-novice/>`__.

