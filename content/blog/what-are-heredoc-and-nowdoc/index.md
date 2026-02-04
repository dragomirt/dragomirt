---
title: "What are Heredoc and Nowdoc?"
date: "2021-02-08"
categories: 
  - "development"
  - "php"
  - "til"
  - "tricks"
tags: 
  - "development"
  - "php"
  - "todayilearned"
coverImage: "Jungle-Beats-1.png"
---

Most of the time, using a regular string for large outputs is not the optimal solution, especially if the content is spread across multiple lines. There're several tricks to achieve the desired result with different levels of cleanliness.  
  
Instead of writing everything in one line with breaks, a better option would be to use a predefined language tool which does just what we want.

```php
// Bad Example
echo "Hi there!\n This is a bad example of using multiline strings\n Not cool :(";
```

So that's why there exist **Heredoc** and **Nowdoc** syntaxes. Both are very similar in usage with small differences in the way the content is managed.  
Using a **Heredoc** would look like the following.

```php
$text = <<<HERE
    Hi there!
    This is a nice example

    Looks good!
HERE;

echo $text;
```

It is much cleaner and readable, two parameters which make the code objectively better ;)

## Differences between Heredoc and Nowdoc

* * *

Now you might ask yourself, what is different between these two, and the answer is quite straightforward.

> Nowdocs are to single-quoted strings what heredocs are to double-quoted strings. A nowdoc is specified similarly to a heredoc, but no parsing is done inside a nowdoc. The construct is ideal for embedding PHP code or other large blocks of text without the need for escaping.
> 
> [http://php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc](http://php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc)

All the aforementioned quote is telling us is that with **Heredocs** you can use variables within the content, meanwhile with **Nowdocs** you get not variable parsing at all. An example showcasing the differences looks like the following.

```php
$variable = 'banana';

$here = <<<HERE
    It's a $variable!
HERE;

$now = <<<'NOW'
    It's a $variable!
NOW;

// Which print "It's a banana" and "It's a $variable" respectively.
```

## Closing Words

With this freshly gathered knowledge in hands, you can proceed creating cleaner and more readable multiline text statements, be it custom templating or hardcoded text. It's up to you to decide!
