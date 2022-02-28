---
title: "PHP Variables in strings"
date: "2021-02-08"
categories: 
  - "development"
  - "php"
  - "til"
tags: 
  - "php"
  - "todayilearned"
coverImage: "Jungle-Beats-2.png"
---

There are several methods to write variables in strings in PHP, but one of the cleanest and apparently the fastest is by using the double-quotes notation. To achieve that wrap the desired variable within curly braces and place that inside the desired string, which will automatically concatenate the contents with the dynamic data. To depict the idea, an example is attached below.

```php
$fruit = "apple";
$greeting = ["hey" => "hello"];

echo "{$greeting["hey"]}, would you like an {$fruit}?"; // hello, would you like an apple?
```

The whole idea with this method, as you might have noticed above, is that you can use even arrays and objects. The keys are callable even from inside the string, thus removing potential redundancy and speeding up development!
