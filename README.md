# au-movies

[PluralSight Course](https://app.pluralsight.com/library/courses/building-applications-aurelia/table-of-contents)

in terminal: 
`npm init -y`

the add this under scripts in package.json:

`   "start": "./node_modules/.bin/http-server -a localhost -p 8000 -c-1",`

then npm start to serve the index page...

since this example has the content moved into wwwroot, use this to start server in terminal:

`C:\workspaces\davidjmcclelland\au-movies\wwwroot>http-server -p 8001`

* jspm install aurelia-framework
* jspm install aurelia-bootstrapper
* jspm install aurelia-http-client


* load json and transform it into a table
* load json via a class that is injected into app instead of implemented within it.