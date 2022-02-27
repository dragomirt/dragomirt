---
title: "TIL: stdObject custom string keys"
date: "2020-12-16"
categories: 
  - "development"
  - "php"
  - "til"
  - "tricks"
tags: 
  - "php"
  - "tip"
  - "todayilearned"
  - "trick"
coverImage: "stdObject-key.png"
---

Hi there!  
For quite some time I've been using objects in a wrong way. Every time after a **json\_decode**, I was by inertia casting the returned **stdObject** into an array to use with some more "special" keys. The ones with special symbols, numbers, dashes and such.  
  
But after some research, a new way of doing this caught my eye. Apparently if you write down the key within a couple **{}** it can be typed as if it were a string. Looks something like this:

```
// use the same key
$obj = (object) array("1my-sample$-key" => "hi there!");

// Wrong way! Don't do it like that
print_r($obj->1my-sample$-key); // Parse error: syntax error, unexpected '1' (T_LNUMBER), expecting identifier (T_STRING) or variable (T_VARIABLE) or '{' or '$'

// pull the value from the object
print_r($obj->{'1my-sample$-key'}); // hi there!
```

**Thanks for reading!**

If you have a suggestion, please feel free to let me know below or on any social media!
