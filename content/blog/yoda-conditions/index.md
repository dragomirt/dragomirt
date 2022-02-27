---
title: "Yoda Conditions"
date: "2022-01-23"
categories: 
  - "development"
  - "php"
  - "til"
  - "tricks"
tags: 
  - "development"
  - "php"
  - "til"
coverImage: "yoda.jpeg"
---

Yoda conditions are a programming style, which goal is to prevent accidental assignments of variables within conditionals. Such as in the following situations.

```
while ($my_var = false) {
  // this will lead to an infinite loop
}

// or

if ($is_root_user = true) {
  // will lead to accidental access
}
```

To prevent that, the constant is placed at the forefront of the statement, therefore raising an exception in case of such assignments. Therefore preventing bugs caused by mistypes or other errors.

So let's fix the example from above using this method.

```
while (false === $my_var) {
  // this will make sure that the variable is false
}

// or

if (true = $is_root_user) {
  // this will raise an exception
  // PHP Parse error:  syntax error, unexpected '='
}
```

## Coding Standarts

Besides being only a preference, this way of writing conditions is a part of the official coding styles of the [Symfony](https://symfony.com/doc/current/contributing/code/standards.html#structure) and [Wordpress](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#yoda-conditions) projects. It discourages some developers from contributing, but the authors do not seem to have the desire to change this rule of styling. See [https://github.com/symfony/symfony-docs/issues/12965](https://github.com/symfony/symfony-docs/issues/12965) .

## Authors Opinion

Besides the obvious fact that it might prevent some errors, I think that it makes the code be even more readable since the expected result of the operation is showcased right at the beginning of the statement.

```
if (STATUS_ACTIVE === $message->status) {
  // do the thing
}
```

But in the end it's all personal preference.

May the force be with you!
