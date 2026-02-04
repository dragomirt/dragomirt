---
title: "Composer memory limit"
date: "2021-06-12"
categories: 
  - "development"
  - "environment"
  - "php"
  - "terminal"
tags: 
  - "environment"
  - "php"
coverImage: "composer_memory_limit.png"
---

Have you ever encountered a situation, where while installing or updating composer packages, it failed?  
  
Some of us did, and it's always frustrating. The reason for that can range from incompatible package versions, to outdated interpreter or lacking system dependencies. But one of the most frustrating and at the same time, the easiest to fix is the **"memory limit".**

The memory limit occurs, when there is not enough available RAM to handle the install, and composer just shuts down mid-operation. You could experience that, by getting the following message after you run **php artisan install.**

```
PHP Fatal error: Allowed memory size of XXXXXX bytes exhausted <...>
```

The reason for that is either that:

- There is more than enough RAM, but composer has a "**software limit**"
- The machine has not enough physical ram

## Software limit

In case we are talking about software, it's quite straightforward in most cases. There are 2 ways of allowing composer to eat up more RAM than it's configured by default.

```bash
# Either run the install or update as
COMPOSER_LIMIT=-1 composer require laravel/laravel # or any other package or operation, like update

# Where -1 is all system memory available, and other value is max size in bytes
```

Another method is to alter the limit directly from within the php interpreter, but in that case there is a need to call the **composer** executable directly, not as a bash command.

```bash
php -d memory_limit=-1 composer.phar <...>

# Where -1 is all system memory available, and composer.phar is the actual composer exceutable.
# The path to the executable might vary.
```

To find up more about all the flags and limitation, please consult the official documentation on the topic, which you can find [here](https://getcomposer.org/doc/articles/troubleshooting.md#memory-limit-errors) ( [https://getcomposer.org/doc/articles/troubleshooting.md#memory-limit-errors](https://getcomposer.org/doc/articles/troubleshooting.md#memory-limit-errors) )

## Not enough physical RAM

The second case is not that widely spread, unless you try to install a big application with webdriver or other heavy dependencies on a cheap VPS, or shared hosting. In that case you could do the following:

- The obvious one, plug in more RAM modules if you have physical access to the server
- Use a pre-built **.lock file**, which would use less memory since there is no discovery step involved.
- [Increase system Swap partition](https://askubuntu.com/questions/178712/how-to-increase-swap-space), to have more space to unload working processes.
- Temporarily disable other processes within the system, and in extreme cases, you could even shutdown the actual database or server, if you use a **TESTING** environment. **( not recommended for production use :) )**
- Download more RAM :)

Most of the time, this is all it takes to make your next **composer** operation, to run flawlessly!
