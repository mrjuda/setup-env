# Sandbox: Books ES6
## Project description
This is a testing lab for implementing "Awesome Books" on ES6 standards.

## Objectives
- Setup linters for HTML + CSS + JavaScript
- Setup SASS/SCSS environment
- Setup ES6 modules
- Apply these settings to a project: Awesome Books
### Tutorial
- PART 1: Repo: create, sync, initial PR:
  - New repo on GitHub (MIT LICENSE ONLY, no README, no nothing)
  - Open vscode > Clone Git Repository > Clone from GitHub > choose the one you created
  - Choose a local folder to sync the repo > open the project
  - With the project open in vscode, open the VSCODE TERMINAL
  - Initial SYNC/PUSH to the GitHub repository:
  - `git push --set-upstream origin main` (make sure there are no errors)

    - > If you get any errors, make sure you connect your local Git instalation to your remote Github repository properly.
  
  - Create a new branch > Add > Commit > Push:
  - `git checkout -b repoSetup` >> `git push --set-upstream origin repoSetup`
  - Open LICENSE file > ADD A BLANK LINE to the end of the file
  - SAVE: ADD: COMMIT: PUSH: `git add .` >> `git commit -m "Initial commit"` >> `git push`
  - Open GitHub > Open a new PULL REQUEST from this branch **(DO IT LIKE A PRO)**
  - Now, you're gonna use vscode for everything. Almost no GitHub from now on.

- PART 2: Initial files and folders
> *IMPORTANT NOTE:* the following instructions were based on [this Microverse tutorial](https://github.com/microverseinc/curriculum-javascript/blob/main/books/books_with_es6.md).
  - Create README.md file: do it like a PRO (you can copy this one, to begin, then make changes)
  - SAVE: ADD: COMMIT: PUSH: `git add .` >> `git commit -m "Add README.md file"` >> `git push`
  - Use `npm init -y` command to create package.json file.
  - Create the entry point for your JavaScript code called `index.js`
  - Create `index.css` file for your styles.
  - Create the main `index.html` file.
  - Inside your empty `index.html` file, on the first line, type `!` and click on the first option to fill it with the basics.
  - Link your `index.js` and `index.css` files in the `index.html` file:
    - Before opening `<title>` >> `<link rel="stylesheet" href="index.css" />`
    - Before closing `</body>` >> `<script src="index.js"></script>`
  - Create a directory called `modules`.
  - ADD: COMMIT: PUSH: `git add .` >> `git commit -m "Add initial folders and files"` >> `git push`


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
