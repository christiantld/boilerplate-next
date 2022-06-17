<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">boilerplate-next</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/christiantld/boilerplate-next.svg)](https://github.com/christiantld/boilerplate-next/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/christiantld/boilerplate-next.svg)](https://github.com/christiantld/boilerplate-next/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This boilerplate provides a set of extra configurations to start a Next.Js project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tests](#tests)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

It includes:
- Next.Js
- Sass
- Eslint and Prettier
- Jest
- Cypress
- Git Hooks with Husky
- Commit Lint + Pretty Quick
- Plop component generator.
- PR Template
- This Readme template itself

## 🏁 Getting Started <a name = "getting_started"></a>

How to use this boilerplate:
```
npx create-next-app@latest -e https://github.com/christiantld/boilerplate-next --use-npm
# or
yarn create next-app -e https://github.com/christiantld/boilerplate-next
# or
pnpm create next-app -e https://github.com/christiantld/boilerplate-next --use-pnpm
```

After run one of the commands above, you will see a new folder called `boilerplate-next` in your current directory.

```
cd boilerplate-next

# here you should run using the corresponding package manager
npm run development
```

## 🔧 Running the tests <a name = "tests"></a>

## 🎈 Usage <a name="usage"></a>

### Scripts

```
  # start the server
    "dev": "next dev",
  # build for production
    "build": "next build",
  # start the server for production
    "start": "next start",
  # fix linting
    "lint": "next lint",
  # generate component.tsx, scss module and test file
    "generate": "plop --plopfile ./generators/plopfile.js",
  # runs unit test in watch mode
    "test:unit": "jest --watch",
  # runs cypress on window mode
    "cypress": "cypress open",
  # runs cypress on terminal mode
    "cypress:headless": "cypress run --quiet",
  # start server and runs cypress in window mode
    "e2e": "start-server-and-test dev http://localhost:3000 cypress",
    # start server and runs cypress in terminal mode
    "e2e:headless": "start-server-and-test dev http://localhost:3000 cypress:headless",
  # run on pre-commit routine
    "test": "jest --passWithNoTests",
  # run on pre-commit routine
    "prepare": "husky install"
```

## 🚀 Deployment <a name = "deployment"></a>


## ⛏️ Built Using <a name = "built_using"></a>

## ✍️ Authors <a name = "authors"></a>

- [@christiantld](https://github.com/christiantld)
- [@italobarrosme](https://github.com/italobarrosme)
- [@rodrigo-martins](https://github.com/rodrigo-martins)
- [@tboerc](https://github.com/tboerc)
