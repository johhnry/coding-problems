# Coding problems

This repository contains many coding problems that needs to be implemented in JavaScript.

## Getting started

To start solving the problems, you need to clone the repository and install the dependencies:

```shell
$ git clone https://github.com/johhnry/coding-problems
$ cd coding-problems
$ npm install # install the dependencies
```

## Rules

In the `src/problems` directory, you will find a folder for each problem with a source file and a test file (`.test.js`).

You need to implement the function with the given signature and run the tests accordingly:

```bash
$ npm run test:problem 5 # runs the tests for problem n°5
$ npm run tests # or run all the tests when you're finished
```

## Add a new problem

To add a new problem, run the following NPM script:

```bash
$ npm run create:problem
```

It will ask for a problem number (default to the latest + 1), a difficulty and it will create the corresponding files in `src/problems/problem-{problemNumber}`.

## Credits

Most of the problems are taken from real world coding interviews by tech companies. Suscribe to [Daily Coding Problems](https://www.dailycodingproblem.com/) to know more about it!
