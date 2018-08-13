# au-movies

[PluralSight Course](https://app.pluralsight.com/library/courses/building-applications-aurelia/table-of-contents)

in terminal: 
`npm init -y`

the add this under scripts in package.json:

`   "start": "./node_modules/.bin/http-server -a localhost -p 8000 -c-1",`

then npm start to serve pages. 

Hello World illustrating es5 methodology
problems:
You have to load all your js files in teh right order
Your index file is doing loading, not just presentation logic.
Also, vars declared in js files are at global scope. Closures are "hideous" way to encapsulate variables.