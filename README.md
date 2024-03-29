# Setting up a new repo: LINTERS + SCSS
## Project description
This is a tutorial on how to create a repository on GitHub, sync it locally with VSCode, and set up its linters and SCSS.

## Objectives
- Setup linters for HTML + CSS + JavaScript
- Setup SASS/SCSS environment
- Setup ES6 modules
- Apply these settings to a project: Awesome Books
## Tutorial
### 1. REPOSITORY: CREATE AND SYNC
1. Create a new repo on GitHub (only create a MIT LICENSE file, nothing else, no README, no nothing)
2. Open vscode > Clone Git Repository > Clone from GitHub > choose the one you created
3. Choose a local folder to sync the repo > open the project
4. With the project open in vscode, open the VSCODE TERMINAL
5. Initial SYNC/PUSH to the GitHub repository:
  ```
  git push --set-upstream origin main
  ```
> If you get any errors, make sure you connect your local Git instalation to your remote Github repository properly.

6. Create a new branch and Push:
  ```
  git checkout -b repoSetup
  git push --set-upstream origin repoSetup
  ```

7. Open LICENSE file and add a *blank line* to the end of the file
8. SAVE: ADD: COMMIT: PUSH:
  ```
  git add .
  git commit -m "Initial commit"
  git push
  ```
9. Open GitHub and open a new *pull request* from this branch (remmember to **do it like a pro**).

Now you're gonna use vscode for everything. Almost no GitHub from now on.

### 2. HTML + CSS LINTER CONFIGURATION
> *IMPORTANT NOTE:* the following instructions are based on [this Microverse tutorial](https://github.com/microverseinc/linters-config/tree/master/html-css-js)

**SET-UP GITHUB ACTIONS:**
1. Create a `.github/workflows` folder and add a copy of [`.github/workflows/linters.yml`](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.github/workflows/linters.yml) to that folder.
  ```
  mkdir .github; mkdir .github/workflows; touch .github/workflows/linters.yml
  ```
> Make sure you copy/paste the content of [`.github/workflows/linters.yml`](https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.github/workflows/linters.yml) to the file above.

3. If you work with SCSS files, you need to perform a few modifications to the linter configuration files.
> Thanks to [@akeegandev](https://github.com/akeegandev "Aaron Keegan's GitHub profile") for the help on the step below:
- In the file `.github/workflows/linters.yml` [line 48](https://github.com/microverseinc/linters-config/blob/master/html-css/.github/workflows/linters.yml#L48) replace
  ```
  npx stylelint "**/*.{css,scss}"
  ```
  With:
  ```
  npx stylelint "**/*.scss"
  ```

- Use `npx stylelint "**/*.scss"` to lint you SCSS files and not the generated CSS

**SET-UP LOCAL LINTERS:**
- Create a `.gitignore` file in your *ROOT* directory and add `node_modules` to it:
  ```
  touch .gitignore; echo 'node_modules' >> .gitignore
  ```

**LIGHTHOUSE:**
You can get the Lighthouse report by any of the following ways:
- [In Chrome DevTools](https://developers.google.com/web/tools/lighthouse#devtools)
- [From the command line](https://developers.google.com/web/tools/lighthouse#cli)
- [As a Node module](https://developers.google.com/web/tools/lighthouse#programmatic)
- [From a web UI](https://developers.google.com/web/tools/lighthouse#psi)
  To access the report generated by Lighthouse on your pull request, click the `Details` link for the `Linters/Lighthouse` check and you will see the full output of the action

**WEBHINT:**
1. Run
  ```
  npm init -y; npm install --save-dev hint@6.x
  ```

2. Copy [.hintrc](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.hintrc) to the root directory of your project.
  ```
  touch .hintrc
  ```
> Make sure you copy/paste the content of [.hintrc](https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.hintrc) to that file.

3. Run the following command on the root directory of your project to fix your html's linter errors:
  ```
  npx hint .
  ```

**STYLELINT:**
1. Run
  ```
  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
  ```

2. Copy [.stylelintrc.json](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.stylelintrc.json) to the root directory of your project
  ```
  touch .stylelintrc.json
  ```
> Make sure you copy/paste the content of [.stylelintrc.json](https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.stylelintrc.json) to that file.

3. Run the following command on the root directory of your project to fix your scss linter errors:
  ```
  npx stylelint "**/*.scss"
  ```
> This will lint your SCSS files and not the generated CSS

**ESLINT**
1. Run
```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

2. Copy [.eslintrc.json](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.eslintrc.json) to the root directory of your project
  ```
  touch .eslintrc.json
  ```
Make sure you copy/paste the content of [.eslintrc.json](https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.eslintrc.json) to that file.

3. Run the following command on the root directory of your project to fix your JS files' linter errors:
  ```
  npx eslint .
  ```

**SAVE > COMMIT > PUSH**

Once finished the linter configurations, make sure you saved all the created files, then:
  ```
  git add .
  git commit -m "Set up linter configurations"
  git push
  ```

### 3. INITIAL FILES AND FOLDERS
> *IMPORTANT NOTE:* the following instructions are based on [this Microverse tutorial](https://github.com/microverseinc/curriculum-javascript/blob/main/books/books_with_es6.md).

1. Create README.md file: do it like a PRO (you can copy this one, to begin, then make changes)
2. SAVE: ADD: COMMIT: PUSH: 
  ```
  git add .
  git commit -m "Add README.md file"
  git push
  ```

3. Create your scripts folder and index file:
  ```
  mkdir scripts
  touch ./scripts/index.js
  ```
4. Create your styles' folder and index files:
  ```
  mkdir styles
  touch ./styles/index.css
  ```
5. Create the main `index.html` file.
  ```
  touch index.html
  ```
6. Inside your empty `index.html` file, on the first line, type `!` and click on the first option to fill it with the basics.
7. Link your `index.js` and `index.css` files in the `index.html` file:
  - Before opening `<title>` > `<link rel="stylesheet" href="./styles/index.css" />`
  - Before closing `</body>` > `<script src="/scripts/index.js"></script>`
  - Your `index.html` should look similar to this:
  ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/index.css" />
    <title>title</title>
  </head>
  <body>
  
  <script src="./modules/index.js"></script>
  </body>
  </html>
  ```
8. Create a directory called `modules`.
  ```
  mkdir modules
  ```
9. ADD: COMMIT: PUSH: 
  ```
  git add .
  git commit -m "Add initial folders and files"
  git push
  ```

### 4. SCSS SETTINGS
> Thanks again to [@akeegandev](https://github.com/akeegandev "Aaron Keegan's GitHub profile") for the help here.
1. Make sure you have the "LIVE SASS COMPILER" extension installed on your VSCODE
2. Create a `index.scss` inside your styles directory
  ```
  touch ./styles/index.scss
  ```
  then, open it.
  
3. On the bottom of your VSCODE, click on the "WATCH SASS" command
  > Remmember to click that command everytime you open your project, in case it's not activated automatically

4. Test your SCSS: type some css lines inside your `index.scss` file, save it, and see if your indes.css updates automatically.
5. Use `npx stylelint "**/*.scss"` to lint you SCSS files and not the generated CSS

### 5. LINT EVERYTHING
To linter your files locally (before pushing to your GitHub repository), use the following commands:
1. Markup (`*.html` files): `npx hint .`
2. Styles (`*.scss` files): `npx stylelint "**/*.scss"`
3. JavaScript (`*.js` files): `npx eslint .`

Or... use it all together:
```
npx hint .; npx stylelint "**/*.scss"; npx eslint .
```

## Built with
- HTML5
- CSS3
- JavaScript

## Live Demo
- Live version: N/A
- Mobile version: N/A

## Authors
**Judá Teixeira**
- GitHub: [@mrjuda](https://github.com/mrjuda "Judá Teixeira's GitHub profile")
- LinkedIn: [@judateixeira](https://www.linkedin.com/in/judateixeira "Judá Teixeira's Linkedin profile")

## Contributors
**Aaron Keegan**
- GitHub: [@akeegandev](https://github.com/akeegandev "Aaron Keegan's GitHub profile")

## 📝License
This project is [MIT](https://github.com/mrjuda/linked-list/blob/main/LICENSE) licensed.
