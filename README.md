# mpa-scafflod
a scafflod project based on handlebars.js, jquery and aralejs for multiple pages web application

# how to run it?
1 navigate to the root directory(where this README.md file resides)

2 execute: yarn              --> installs all dependencies, if yarn doesn't work on your machine, use 'cnpm install' instead

3 execute: npm run build     --> this builds the project into ./dist directory and watch it

4 execute: npm start         --> this starts up express.js web-server to serve the ./dist directory
                             --> it's recommended to use nginx server instead to serve ./dist directory

5 use web browser, navigate to http://localhost:3000/index/index.html

# project structure conventions
1 resources are grouped by pages using directories
  1.1 put page specific .css, .html, and .js files under the same directory, per page per directory

2 pages are placed under ./src/pages directory

3 each page directory should have at least 1 html file
l
4 each page directory could have multiple js, and css files, and at least 1 js
  file as 'entry point' for webpack

5 and the js file as 'entry point' should have the same name as the .html file
