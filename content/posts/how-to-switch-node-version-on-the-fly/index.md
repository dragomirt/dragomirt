---
title: "How to switch Node version on the fly?"
date: "2020-11-16"
categories: 
  - "development"
  - "environment"
  - "javascript"
  - "nodejs"
  - "terminal"
  - "tricks"
  - "workspace"
tags: 
  - "javascript"
  - "nodejs"
  - "nvm"
  - "terminal"
  - "tool"
coverImage: "How-to-switch-Node-version-on-the-fly.-The-right-tool-for-the-job-1-1.png"
---

So you want to **install Node JS**? Or maybe you want to update, downgrade, or switch its version on demand. **You are in the right place!**

Every developer at some point encounters some form of technical incompatibilities, which require extensive debugging.

Often times that happens, it's due to the fact that the application has outdated and unmaintained components which do not play well with the newest runtime, and vice versa, a shiny new package which requires the features from the latest and greatest.  
  
In these moments, the best choice is to use the right tool for the job, and switch to whatever is required. But such an action begs the question, **how to even achieve that?**  
  
I've thought about this, and below there is a short explanation, so you can get it working as fast as possible ;).

As with everything in the development world, there is a tool for that ;)  
**Node Version Manager** or **nvm** accomplishes this very task.  
[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

## Why would I even need to switch my Node version?  
Isn't the latest one the best choice?

* * *

Most of the time, yes, it's best to keep up to date with the latest runtime, to have available all the latest syntactic sugar, perfomance and security improvements. But as we might know from experience, maintaining legacy projects is sometimes a requirement, and in such use cases, versions are important.  
  
A personal situation that I have encountered was while compiling **Gulp 2**. It just didn't want to bundle the code, spitting out cryptic issues, unrelated to any changes that were made. As it appeared, it only supported Node up to the **12.x** version. A quick nvm into version 10 and it works like a charm to this day.

## Where do I get it?

* * *

### Install nvm on a Mac

With **Homebrew** installed it is as easy as running in the terminal:

```
brew install nvm
```

### Install nvm on Linux

The installation process for a **Debian** based machine, looks like this:

```
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile # to have the command easily accessible from the shell

# Now restart the shell and enjoy nvm 
```

After you pulled the binary from above, check the install by running the usual \`--version\` argument to be sure that everything got installed as supposed.

![](/images/how-to-switch-node-version-on-the-fly/Screen-Shot-2020-11-16-at-21.51.52-1-1024x713.png)

nvm --version demo

## How can I use it?

* * *

### Install Node JS

In case of a clean system, first of all, you'll need to have node installed to run any project. To achieve that, run the following:

```
nvm install node # "node" is an alias for the latest version
```

Ok, that was for latest build, if you'd like to have a specific version, use the following syntax:

```
nvm install 10.19 # or 12.2.1, 8.9.1, etc
```

### Control Node versions

Managing all those versions is hard, but to combat that issue, nvm has the ls-remote command, which showcases in an ordered list, all the available, installed and special editions of the runtime.

```
nvm ls-remote
```

![](/images/how-to-switch-node-version-on-the-fly/Screen-Shot-2020-11-18-at-09.55.54-1024x603.png)

nvm ls-remote

And finally, to switch the version itself, run:

```
# nvm use <version>
nvm use 10.19 # switches to 10.19.0
```

## Tips

* * *

One of the previous posts was dedicated to creating a [configurable local development environment based on Vagrant](https://practicalphp.dev/how-to-use-vagrant/). Despite the project being just enough for a basic PHP project, it lacked any sorts of Node interpreter.  
As has been noted, that can be easily solved by adding the Debian install instructions to the **provision.sh** file, thus setting up the latest available version of the engine, therefore providing virtually endless possibilities regarding script bundling and application functionality.

## Conclusion

* * *

Either you need to always keep up with the latest version or you want to support a legacy code base, **nvm** helps you achieve that in a neat and useful command line interface. **_Have fun coding!_**

**Thanks for reading!**

If you have a suggestion, please feel free to let me know below or on any social media!
