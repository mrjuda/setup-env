# Sandbox: Books ES6
## Project description
This is a testing lab for implementing "Awesome Books" on ES6 standards.

## Objectives
- Setup linters for HTML + CSS + JavaScript
- Setup SASS/SCSS environment
- Setup ES6 modules
- Apply these settings to a project: Awesome Books
### Tutorial
#### PART 1: REPOSITORY: CREATE AND SYNC
1. Create a new repo on GitHub (MIT LICENSE ONLY, no README, no nothing)
2. Open vscode > Clone Git Repository > Clone from GitHub > choose the one you created
3. Choose a local folder to sync the repo > open the project
4. With the project open in vscode, open the VSCODE TERMINAL
5. Initial SYNC/PUSH to the GitHub repository:
  `git push --set-upstream origin main` (make sure there are no errors)

  > If you get any errors, make sure you connect your local Git instalation to your remote Github repository properly.

6. Create a new branch > Add > Commit > Push:
  `git checkout -b repoSetup` >> `git push --set-upstream origin repoSetup`
7. Open LICENSE file > ADD A BLANK LINE to the end of the file
8. SAVE: ADD: COMMIT: PUSH:
  `git add .` >> `git commit -m "Initial commit"` >> `git push`
9. Open GitHub > Open a new PULL REQUEST from this branch **(DO IT LIKE A PRO)**

Now, you're gonna use vscode for everything. Almost no GitHub from now on.

#### PART 2: HTML + CSS LINTER CONFIGURATION
> *IMPORTANT NOTE:* the following instructions are based on [this Microverse tutorial](https://github.com/microverseinc/linters-config/tree/master/html-css-js)

**SET-UP GITHUB ACTIONS:**
1. Create a `.github/workflows` folder and add a copy of [`.github/workflows/linters.yml`](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.github/workflows/linters.yml) to that folder.
  ```
  mkdir .github
  mkdir .github/workflows
  touch .github/workflows/linters.yml
  ```
2. Make sure you copy/paste the content of [`.github/workflows/linters.yml`](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.github/workflows/linters.yml) to that file.

> Thanks to [@akeegandev](https://github.com/akeegandev "Aaron Keegan's GitHub profile") for the help on the step 3 below:

3. If you work with SCSS files, you need to perform a few modifications to the linter configuration files.
  1. In the file `.github/workflows/linters.yml` [line 48](https://github.com/microverseinc/linters-config/blob/master/html-css/.github/workflows/linters.yml#L48) replace `"**/*.{css,scss}"` with `"**/*.scss"`
  2. Use `npx stylelint "**/*.scss"` to lint you SCSS files and not the generated CSS

**SET-UP LOCAL LINTERS:**
- Create a `.gitignore` file in your *ROOT* directory and add `node_module` to it:
  ```
  # .gitignore
  node_modules/
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
  npm init -y
  ```
  then...
  ```
  npm install --save-dev hint@6.x
  ```
2. Copy [.hintrc](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.hintrc) to the root directory of your project.
3. Run the following command to fix validation errors:
  ```
  npx hint .
  ```

**STYLELINT:**
1. Run
```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
2. Copy [.stylelintrc.json](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.stylelintrc.json) to the root directory of your project
3. Run the following command on the root directory of your project to fix linter errors:
  `npx stylelint "**/*.{css,scss}"`

**ESLINT**
1. Run
```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
2. Copy [.eslintrc.json](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.eslintrc.json) to the root directory of your project
3. Run the following command on the root directory of your project to fix linter errors:
  `npx eslint .`

#### PART 3: INITIAL FILES AND FOLDERS
> *IMPORTANT NOTE:* the following instructions are based on [this Microverse tutorial](https://github.com/microverseinc/curriculum-javascript/blob/main/books/books_with_es6.md).

- Create README.md file: do it like a PRO (you can copy this one, to begin, then make changes)
- SAVE: ADD: COMMIT: PUSH: 
  `git add .` >> `git commit -m "Add README.md file"` >> `git push`
- Create your scripts folder and index file:
  `mkdir scripts`
  `touch ./scripts/index.js`
- Create your styles' folder and index files:
  `mkdir styles`
  `touch ./styles/index.css`
- Create the main `index.html` file.
  `touch index.html`
- Inside your empty `index.html` file, on the first line, type `!` and click on the first option to fill it with the basics.
- Link your `index.js` and `index.css` files in the `index.html` file:
  - Before opening `<title>` >> `<link rel="stylesheet" href="./styles/index.css" />`
  - Before closing `</body>` >> `<script src="/scripts/index.js"></script>`
- Create a directory called `modules`.
- ADD: COMMIT: PUSH: 
  `git add .` >> `git commit -m "Add initial folders and files"` >> `git push`

#### PART 4: SCSS SETTINGS
> Thanks again to [@akeegandev](https://github.com/akeegandev "Aaron Keegan's GitHub profile") for the help here.
1. Make sure you have the "LIVE SASS COMPILER" extension installed on your VSCODE
2. Create a `index.scss` inside your styles directory
  `touch ./styles/index.scss`
  then, open it.
3. On the bottom of your VSCODE, click on the "WATCH SASS" command
  > Remmember to click that command everytime you open your project, in case it's not activated automatically
4. Test your SCSS: type some css command and see if your indes.css updates automatically.
## Built with
- HTML5
- CSS3
- JavaScript / ES6

## Live Demo
- Live version: N/A

- Mobile version: N/A

## Authors
**Judá F Teixeira**
- GitHub: [@mrjuda](https://github.com/mrjuda "Judá Teixeira's GitHub profile")
- LinkedIn: [@judateixeira](https://www.linkedin.com/in/judateixeira "Judá Teixeira's Linkedin profile")

## Contributors
**Aaron Keegan**
- GitHub: [@akeegandev](https://github.com/akeegandev "Aaron Keegan's GitHub profile")

## 📝License
This project is [MIT](https://github.com/mrjuda/linked-list/blob/main/LICENSE) licensed.
