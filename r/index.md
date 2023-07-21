---
title: Installing R
layout: r
---

# Install/Update R & RStudio

## Before the first session
To participate in Programming with R, 
please bring a laptop with R and RStudio installed. 
We recommend that you have the latest version of R.

You need to have RStudio installed, but it is less crucial that you are using the most recent version.

### Do you already have R and RStudio installed?

**No**: follow the instructions for “I do not have R installed”. 

**Yes**: follow the instructions for “I have R installed”.

### Installing R

**Windows**:
- Go to <https://cloud.r-project.org/bin/windows/base/>
- Click the “Download R 4.3.1 for Windows” link.
- When the file finishes downloading, double-click to install. You should be able to click “Next” to all dialogs to finish the installation.
  
**Mac**:
- Go to <https://cloud.r-project.org/bin/macosx/>.
- Click the link “R-4.3.1.pkg”.
- When the file finishes downloading, double-click to install. You should be able to click “Next” to all dialogs to finish the installation.
  
#### Installing RStudio
- Go to <https://www.rstudio.com/products/rstudio/download/#download>.
- Under “Installers for Supported Platforms” select the appropriate installer for your operating system:
  - Windows: “RSTUDIO-2023.06.1-524.EXE”
  - Mac: “RSTUDIO-2023.06.1-524.DMG”
- When the file finishes downloading, double-click to install. You should be able to click “Next” to all dialogs to finish the installation.

You are ready for Data Science Essentials for R!

### Already Installed R
The workshops run more smoothly when everyone is using the same version of R. Please update R, if necessary (and less crucially, RStudio).

#### Verify R version
- Open RStudio. 
- At the top of the Console you will see session info. The first line tells you which version of R you are using. 
- If RStudio is already open and you’re deep in a session, type R.version.string to print out the R version.

#### Do you have R version 4.3.1 ("Beagle Scouts") installed?

**No**: follow the instructions for “Updating R”.

**Yes**: You are ready for Data Science Essentials for R!

### Updating R/RStudio
**Windows**

To update R on Windows, try using the package installr (only for Windows).

#### Install and load installr
- install.packages("installr") and library(installr)
- Call updateR() function. This will start the updating process of your R installation by: “finding the latest R version, downloading it, running the installer, deleting the installation file, copy and updating old packages to the new R installation.”
- From within RStudio, go to Help > Check for Updates to install newer version of RStudio (if available, optional).

You are ready for Data Science Essentials for R!

**Mac**

On Mac, you can simply download and install the newest version of R. When you restart RStudio, it will use the updated version of R.

- Go to https://cloud.r-project.org/bin/macosx/
- Click the link “R-4.3.1.pkg”
- When the file finishes downloading, double-click to install. You should be able to click “Next” to all dialogs to finish the installation.
- From within RStudio, go to Help > Check for Updates to install newer version of RStudio (if available, optional).

## Data set and code

1. Intro to R and Tidyverse [ <a href="https://drive.google.com/drive/folders/1e-8Qs_AZBH-QcQqmmCloT9ghZesV55z6" target="_blank">code and data</a> ]



