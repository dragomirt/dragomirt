---
title: "PDF to plain text with OCR"
date: "2021-06-30"
categories: 
  - "development"
  - "php"
tags: 
  - "development"
  - "php"
coverImage: "pdf_to_plain_text_cover.png"
---

Parsing a PDF document within a laravel application, is not really a problem nowadays. There are multiple packages already made just for that, which could help you achieve any desired functionality to a level of extent.  
  
My favourite, like for many, is the Spatie's package named simply [pdf-to-text](https://github.com/spatie/pdf-to-text) ( https://github.com/dragomirt/pdf-to-text ). In the particular use case which I utilized it for, it allowed me to extract using Regex matching, some information out of pdf invoices.

## How do I handle files without text?

Is the question I asked myself not that long ago. I was fiddling around with CLI tools but haven't seen anything premade so far. At that point I remembered about the powers of open source, and promptly created a fork of spatie/pdf-to-text.

The tool which allows the magick to happen is called **"[ocrmypdf](https://ocrmypdf.readthedocs.io/en/latest/)"**

![](https://practicalphp.dev/wp-content/uploads/2021/07/ocrmypdf.svg)

(https://ocrmypdf.readthedocs.io/en/latest/) which does just that, reads and embeds actual plaintext data within the bare PDF, using the tesseract ocr tool and its language packages.

For files with digitaly rendered text, the results so far were very good. Even text from images is recognized, since to perform the recognition, the pdf is rasterized and scanned as an image. Cool stuff ;)

To merge those both tegether, we could use a simple UNIX pipe as in the following command.

```
ocrmypdf —force-pdf file.pdf file.pdf && pdftotext -layout file.pdf && cat file.txt
```

That would give us the plaintext contents of the file.pdf

Fortunately, to use CLI calls within Laravel, a special class exists. Its name is **[Illuminate/Console](https://laravel.com/api/5.8/Illuminate/Console.html) (** https://laravel.com/api/5.8/Illuminate/Console.html ). It allow runninng local binnaries all from within the application’s environment.

Good thing is that pdf-to-text is actually one single class containing a Console class instance, which utilizez the systems **_pdftotext_** executable from the **_poppler-utils_** package.

Knowig the above, the modification is quite trivial. Just add another executable path, write a method to execute it, and a bulilder method to pass parameters. Once thats done, a multi-command flow is in place, even using the same instance of **Illuminate/Console.**

## How to use it?

To use it, simply install the revamped [package](https://github.com/dragomirt/pdf-to-text) ( https://github.com/dragomirt/pdf-to-text ) from within composer. There were no modifications to the core functionality, therefore you could use this package instead of your regular pdf-to-text one without any trouble.

To achieve that, within your project run the following

```
composer require dragomirt/pdf-to-text
```

On your production machine, the dependencies have to be installed. To achieve that, please run the following. This example is for a Debian-based system.

```
apt-get udpate
apt-get install tesseract-ocr ocrmypdf -y
apt-get intsall qpdf -y
```

Once done that, you can require \`Spatie\\PdfToText\\Pdf\` into your project and run the actual extraction as follows.

```
            $text = (new Pdf())
                ->setPdf($path)
                ->setOptions(['layout'])
                ->setScanOptions(['-l eng', '--skip-text'])
                ->decrypt()
                ->scan()
                ->text();
```

Enjoy!
