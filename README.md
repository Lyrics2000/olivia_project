# wendy_seller_and_technician_connect

## Table of content

1. installing python
1. Download visual studio code
1. Download and install Gitbash
1. Installing Requirements.txt
1. Opening in the browser

---

### installing python

#### steps

1. Open a browser window and navigate to the Python. org [Download page for window](https://www.python.org/downloadswindows/)

1. Under the “Python Releases for Windows” heading, click the link for the Latest Python 3 Release - Python 3.x.x. As of this writing, the latest version was Python 3.8.4.

1. Scroll to the bottom and select either Windows x86-64 executable installer for 64-bit or Windows x86 executable installer for 32-bit.

#### Run python installer

Once you’ve chosen and downloaded an installer, run it by double-clicking on the downloaded file. A dialog box like the one below will appear:

![Installating python image](https://files.realpython.com/media/Screen_Shot_2020-07-16_at_11.19.15_AM.6e62bfc6eede.png)

There are four things to notice about this dialog box:

1. The Add Python 3.8 to PATH checkbox is unchecked by default. There are several reasons that you might not want Python on PATH, so make sure you understand the implications before you check this box.

---

### Installing Visual Studio Code

![Visual Studio Code](https://mspoweruser.com/wp-content/uploads/2017/02/vs-code.jpg)

#### Steps

1. Dowload the [Visual studio for windows](https://go.microsoft.com/fwlink/?LinkID=534107)
1. Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). This will only take a minute.

---

### Download and install Gitbash

![Git for windows](https://www.stanleyulili.com/assets/images/posts/2019-08-13-install-git-bash/featured-image.jpg)

#### Steps

1 [Visit the official website](https://git-scm.com/) and download git for windows

![Git windows](https://www.stanleyulili.com/assets/images/posts/2019-08-13-install-git-bash/official-homepage.jpg)

Click the “Download for windows” button

1. Start Gitbash download

Next, you will be redirected to a page that lets you know that you are about to start downloading.

![Gitbash download](https://www.stanleyulili.com/assets/images/posts/2019-08-13-install-git-bash/download-starting.jpg)

## If all goes well, the download should start automatically

### Installing Gitbash

#### Steps

1. Run the installer

Once you have downloaded the Git Bash executable, click it to run the installer.

![Installer for gitash](https://www.stanleyulili.com/assets/images/posts/2019-08-13-install-git-bash/accept-license.jpg)

1. Select the file location

Next, select the location you want to install Git Bash. I would recommend you just leave the default option as it is, and click “Next”

![File location select](https://www.stanleyulili.com/assets/images/posts/2019-08-13-install-git-bash/installation-directory.jpg)

1 . Click Next Button untill you reach finish to install

The Git Bash terminal will now open and you will be able to enter Git and Bash commands

![Gitbash Command](https://www.stanleyulili.com/assets/images/posts/2019-08-13-install-git-bash/git-bash.jpg)

---

## Lauch gitbash

The following are just some tips on how you can easily launch Git Bash.

1. Right-click on any folder, anywhere and it will have the launch Git Bash option on the context menu

![gitbash launcher](https://www.stanleyulili.com/assets/images/posts/2019-08-13-install-git-bash/folder-context.jpg)

### Cloning github repo to run the code

---

#### Steps

1. After lauching Gitbash
   Type

```Bash
 git clone https://github.com/Lyrics2000/wendy_seller_and_technician_connect.git .

```

1. Installing virtual environment

```Bash

Pip install virtualenv
```

1. Creating virtuals env

```Bash
virtualenv venv
```

1. installing requirements.txt

```Bash
  pip install -r requirements.txt
```

1. Running the project

```Bash

python manage.py runserver

```

Open the browser at localhost : 127.0.0.0.1:8000 and you shall see the project
