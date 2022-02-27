---
title: "Laravel queue supervisor"
date: "2021-09-20"
categories: 
  - "development"
  - "environment"
  - "php"
  - "terminal"
tags: 
  - "laravel"
  - "php"
  - "queue"
coverImage: "Laravel-queue-supervisor.png"
---

A laravel queue is an useful tool for a variety of scenarios. It can be used for things ranging from email sending to video compression in background. It's all in all a good experience, until you have to manage the queue on production :) . The problem arises when you need some more reliability out of the setup. Just running \`queue:work\` will most likely result into a killed process and a halted queue. That's no good.

That's why you have to use a supervisor. A supervisor is a tool which makes sure that other processes in the system run correctly and handle things like shutdown and restart in a predictable manner.

## Prerequisites

The supervisor itself it a tool, which lives within the actual infrastructure of the project, rather than the application side of things. Therefore, depending on where you plan to deploy or develop your application, some things may vary.  
Below I'm going to describe the necessary dependencies needed for a basic **Ubuntu 20.04** server machine which you most likely will find under the hood of most projects.

```bash
# Pull the latest package remotes
sudo apt-get update 

# Install the supervisor
sudo apt-get install supervisor
```

Once you have that installed, and the bash ( or whatever shell you run ) restarted, you would have a series of new commands available. Out of which, the most use for us would present the **_supervisorctl_** command.

## Setup

The configuration files are stored in the \`**/etc/supervisor/conf.d**\` directory. To append a new application, just create a file with a suggestive name.

```bash
touch my-laravel-queue.conf
```

Once you have that done, open the file ( **with root privileges** ) and insert the following boilerplate.

```bash
[program:my-laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /home/<your_user>/<your_app_location>/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=<your_user>
numprocs=8
redirect_stderr=true
stdout_logfile=/home/<your_user>/<your_app_location>/worker.log
stopwaitsecs=3600
```

As you can see, this config file contains quite a lot of knobs and triggers which give you some control over the way the worker would operate. For instance:

- **_numprocs -_** Number of process instances started by the supervisor
- **_autostart -_** If true, the process will start automatically once the supervisor is booted
- **_autorestart -_** If true, will restart the process in case it gets killed or shuts down.
- **_user -_** Sets the user out of which name the process is run
- **_stdout\_logfile -_** Put process stdout output in this file

If you would like to go into much more depth on the topic of configuration, you are very welcome to check the official documentation regarding this section [here](http://supervisord.org/configuration.html#program-x-section-settings) ( [http://supervisord.org/configuration.html#program-x-section-settings](http://supervisord.org/configuration.html#program-x-section-settings) )

Once you have done all of that you can save the file.

## Usage

Now, when you have configured the processes the way you like them the most, it's time to write all the changes into the local register. To do that, run the following commands.

```bash
# Read the new or changed configuration files
sudo supervisorctl reread

# Update the process settings based on the new configuration files
sudo supervisorctl update
```

If no error occurs, the next step is to run the processes themselves, supervised based on the configuration above.

```bash
sudo supervisorctl start my-laravel-worker:*
```

In this case the \` **:\*** \` denotes the number of worker of the process, since in this case it's a group of 8 processes. So what the command above states, is that it requires the supervisor to start all processes.

**And that's it!**

Now your application's queue is being supervised, logged nicely, and made sure to run for months on end.  
To check the status of certain processes, you can run the \` **_sudo supervisorctl status_** \` command which will show all the important information nicely formatted.

**_P.S. When you change something within the Jobs inside the application, you have to re-run always have to re-run the queue. To do that, a good practice would be to restart it after each deployment, just like that:_**

```bash
sudo supervisorctl restart my-laravel-worker:*
```

**Enjoy!** 😉
