---
title: "TIL: strtotime function"
date: "2020-11-16"
tags:
  - "php"
  - "til"
coverImage: "TIL_-strtotime-1.png"
---

While researching the \`setcookie\` function, another one caught my eye. Apparently, instead of writing the time of expiration in unix seconds, you can use human-readable format, neatly parsed by **strtotime()** !

```php
<?php

echo strtotime("+1min") === time() + 60; // true
echo strtotime("now") === time(); // true

// Other formats

echo strtotime("now"), "\n";
echo strtotime("10 September 2000"), "\n";
echo strtotime("+1 day"), "\n";
echo strtotime("+1 week"), "\n";
echo strtotime("+1 week 2 days 4 hours 2 seconds"), "\n";
echo strtotime("next Thursday"), "\n";
echo strtotime("last Monday"), "\n";
```

It for sure improves the readability of the code, which is a huge deal in any modern codebase. **_Happy coding!_**

**Thanks for reading!**

If you have a suggestion, please feel free to let me know below or on any social media!
