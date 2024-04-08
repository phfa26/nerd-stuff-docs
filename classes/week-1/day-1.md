---
sidebar_position: 1
title: "Day 1: Embarking on Your Journey"
authors: paulo
---

# Welcome to Day 1

**Welcome to the first class of pioneers at The Nerd Stuff's Full Stack Software Development BootCamp!**

Today marks the beginning of an exciting journey into technology and innovation. This BootCamp will equip you as a full-stack developer ready to tackle real-world challenges.

## Today's Agenda

- **Introduction | Orientation | Housekeeping**
- **Structure of the Course**
- **Introduction to the Command Line**

### Your Instructors

- **Paulo Amaral - Lead Instructor**
  - 📧 paulo@thenerdstuff.com.au
- **T.A. - Instructional Associate**
  - 📧 ta@thenerdstuff.com.au

## Classroom Values

As a class, we've agreed on the following principles for the next 12 weeks:

```plaintext

** TBD in class **

Suggestions:
- Always be kind
- Have fun
- Share knowledge/motivation
- Ask questions
- Keep it simple
- Make mistakes
- Respect all
- Be patient
```

## Embracing Geek / Hacker Culture

Let's share and enjoy:

- Books
- Movies
- TV series
- Stupid memes

Recommended Reads:
- [The Jargon File](http://www.catb.org/jargon/html/index.html)
- [The Tao of Programming](http://canonical.org/~kragen/tao-of-programming.html)

## Resources

- **Our Docs**: You're reading it right now. Updated daily with notes.
- **Homework Repository**: Submit your homework using GitHub.
- **Code-Along Repository**: Missed something during code-along? Check here.

## Important Links, Meetups, and Newsletters

### Links

- [Gist](https://gist.github.com) - For sharing code and notes.
- REPLs like [REPL.it](https://repl.it) and [Babel](https://babeljs.io/repl).

### Newsletters

- [JavaScript Weekly](https://javascriptweekly.com)

### Meetups

- [Meetup.com](https://www.meetup.com/)

<br/>
---
What will go wrong? Everything. This won't be easy for anyone.

***"If debugging is the practice of removing bugs from software... then programming must be the practice of adding them." – E. W. Dijkstra***

---
<br/>

## The Command Line

Web developers live on the command line. It gives us fast, reliable, and automatable control over computers. Web servers usually don't have graphical interfaces, so we need to interact with them through command line and programmatic interfaces. Once you become comfortable using the command line, staying on the keyboard will also help you keep an uninterrupted flow of work going without the disruption of shifting to the mouse.

The command-line interface - aka "the CLI" or the shell - is a tool that performs specific tasks in response to user-typed commands. It has the potential to save you lots-and-lots of time because it can automate things, loop through items etc.

`date` - Will print the current date and time

`which date` - Will show the relevant file (will probably return /bin/date)

`pwd` - Stands for Print Working Directory, will show you where you are in your computer

`mkdir` - Stands for Make Directory

`rmdir` - Stands for Remove Directory

`echo` - Displays a line of text

`clear` - Will clear the terminal screen (ctrl + l and cmd + k will do this as well, however you still have access to the history if using ctrl + l. cmd + k will clear the screen and kill the history)

`reset` - Will reset your terminal

`cd` - Stands for change directory and will change the current working directory in accordance with the options that follow cd (eg: cd .. will go up one directory; cd ~ will return to the home directory)

`cat filename` - (short for “concatenate“) will show you the contents of the specified file.

`less filename` - will show you the contents of the specified file and extends the capabilities of more. It is a dedicated file reader that reads a file one screen at a time, and loads more of the file as you scroll through it.

`whoami` - Will show the logged in user

`ps` - Will you show you all running processes

`ps aux` - Will show you all of the running processes with more details

`top` - Will show you the Table of Processes

`grep` - Stands for Global Regular Expression Print - useful for finding files or content

`ls` - Short for List. This will show you all of the files and folders in the current directory

`ls /bin` - Will show you all terminal commands

`man` - Stands for Manual. To use it, follow the man command with another command line command (i.e. man grep).

Most commands will have additional flags. A flag is a request for more information.

A good example of this is the following:


```bash
# Basic Commands
echo "Hello World"       # Prints "Hello World"
pwd                      # Shows current directory
ls                       # Lists files and directories
cd <directory>           # Changes the current directory
mkdir <directory>        # Creates a new directory
rm <file>                # Removes a file
```

```bash
# list out contents of current directory (excluding hidden files)
library$ ls
bar.txt bookshelf.txt everything.txt
​
# list out contents of current directory (use a long listing format)
library$ ls -l
-rw-r--r--  1 yourusername  staff  30 10 Sep 14:43 bar.txt
-rw-r--r--  1 yourusername  staff  50 10 Sep 14:51 bookshelf.txt
-rw-r--r--  1 yourusername  staff  80 10 Sep 15:00 everything.txt
```

```bash
# cd can do a lot of things!
> cd
# Will take you back to your "home folder"
> cd /
# Will take you back to your "root folder"
> cd FolderName
# Will take you into the specified folder name
> cd FolderName/AnotherFolderName
# Will take you through FolderName and then into AnotherFolderName
```

```bash
# We use echo to display text
library$ echo Almdudler
Almdudler
# To add the display text to a text file
library$ echo Laphroiagh > bar.txt
library$ cat bar.txt
Laphroiagh
#However, run the command with > again will overwrite the previous text
#To append text instead of overwrite it, use >> operator
library$ echo Almdudler >> bar.txt
library$ cat bar.txt
Laphroiagh
Almdudler
```

```bash
# We can make folders in the CLI by using mkdir
> mkdir projects
# Then we can move into it
> cd projects
# ls will show most of your files (ones that aren't prefixed by a .)
> ls
# ls -la will show every file (even hidden files)
> ls -la
# or 
> ls -l -a
# This will change to the current directory
> cd .
# This will open the current directory in Finder
> open .
# This will go back to the previous directory
> cd ..
# If you hit tab at this point, it would autocomplete for you
> cd pro
# This will create a markdown file called README
> touch README.md
# To open an application in terminal (can use any application that you have)...
> open -a "Atom"
```

```bash
# This will open the file and show the contents
​> cat books
​
# Will show you the contents of 'books' and 'pipe' it into the 'sort' program. 
# This doesn't change the original 'books' file!
> cat books | sort
​
# The pipe character (|) pipes the output of the first command to another command
# This will sort the contents of 'books', and put the sorted contents into the 
# 'sorted_books' file (it will create the 'sorted_books' file if no file with that 
# name exists in the current working directory)
> cat books | sort > sorted_books
​
# This will rename 'sorted_books' to 'books' (and will overwrite the 'books' file if 
# it already exists)
> mv sorted_books books
​
# This will open and show the contents of 'books', and shows only lines that have the 
# word 'script' in them (case sensitive!)
> cat books | grep script
​
# To copy a file, the command is cp (this needs parameters - or arguments - it needs 
# a source and a destination).
# cp [source] [destination]
> cp books my_books
​
# To remove things, use the rm command (this doesn't get moved to your trash! It will 
# delete it permanently and is impossible to undo)
> rm my_books
​
# To remove the contents of an entire directory, the -r flag can be appended. The -r 
# flag means "recursively" (ie every file/folder within the director).
> rm -r projects/
```

**What happens when we run commands?**

```bash
# It will go through all of the folders and files that are shown when we run the 
# following command, and use the contents of the files to decide whether it can run 
# that particular program or command​
> echo $PATH
```

# Essential CLI Resources & Readings

## Useful Websites

- [Explain Shell](https://explainshell.com/) - Understand any shell command in detail.

## Recommended CLI Readings

- [The Linux Command Line](http://linuxcommand.org/tlcl.php) - A complete introduction.
- [Terminal Cheatsheet for Mac](https://github.com/0nn0/terminal-mac-cheatsheet) - Handy shortcuts for macOS users.
- [QuickLeft Command Line Tutorials](https://quickleft.com/blog/tag/command-line/page/4/) - Start from basic to advanced tips.
- [Command Line Crash Course](http://cli.learncodethehardway.org/book/) - Quickly learn CLI essentials.
- [In The Beginning Was The Command Line](http://cristal.inria.fr/~weis/info/commandline.html) - Explore CLI's evolution, also covered on [Wikipedia](https://en.wikipedia.org/wiki/In_the_Beginning..._Was_the_Command_Line).
- [The Unix Programming Environment](http://en.wikipedia.org/wiki/The_Unix_Programming_Environment) - Dive into Unix's core principles.

## Additional CLI Links

- [15 Practical Grep Command Examples](http://www.thegeekstuff.com/2009/03/15-practical-unix-grep-command-examples/) - Master searching with grep.
- [40 Terminal Tips and Tricks](http://computers.tutsplus.com/tutorials/40-terminal-tips-and-tricks-you-never-thought-you-needed--mac-51192) - Enhance your terminal productivity.

Leverage these resources to deepen your command line skills and efficiency.


### Homework for Day 1

- Reflect on today's learning and explore the basic command line commands practiced in class. Prepare any questions you might have for the next class.

:::warning
<br/>
**The tasks below are mandatory - Make sure to complete these steps **BEFORE** the next class**.
:::

- Prepere for next class and try to install Git, understand Github, and do a research on Agile methodologies for Software development projects.
- Open your personal account on `GitHub` - You can [create your free GitHub account here](https://github.com/)
- Download and install the following software:
  - `Node JS` - This software will be necessary for running JavaScript in your computer - [Download Here](https://nodejs.org/en/download)
  - `Visual Studio Code (VSCode)` - [Download here](https://code.visualstudio.com/)
  - `Google Chrome`, if you don't have it already installed - [Download here](https://www.google.com/intl/en_au/chrome/dr/download/)







**Remember, this journey is about growth and learning through every challenge. Let's make the most of it together!**