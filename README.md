# Bacon Recipe Calculator
This is a custom calculator for our homemade bacon recipe. The measurements are taken from Babish's recipe, except for the curing salt, since we use a lower ppm (for safety).

## Source recipes
* Curing salt :
https://amazingribs.com/tested-recipes/salting-brining-curing-and-injecting/curing-meats-safely
* All other ingredients:
https://www.bingingwithbabish.com/recipes/orangemochafrapp-fpm9l

## Directory structure
```
.
├── README.md
├── prd
│   ├── index.html
│   └── js
│       └── script.js
└── src
    └── index.pug
```

## Working with pug
* How to convert pug code to html: `pug src --out prd -P`<br>
The syntax is `pug <source dir> --out <target dir>`, and the `-P` flag means pretty, which makes the output html use indentation and line breaks.
