/**
 * Runs mocha for a specific problem
 * Usage: node run-mocha-for-problem.js 5
 * See: https://github.com/mochajs/mocha/wiki/Using-Mocha-programmatically
 */

"use strict";

const Mocha = require("mocha");
const fs = require("fs");
const path = require("path");

/**
 * Exit the script with an error message
 * @param {string} message error output
 */
function exitWithError(message) {
  console.error(message);
  process.exit(1);
}

// Get the problem number as argument
const problemNumber = process.argv.slice(2)[0];

if (!Number.parseInt(problemNumber)) {
  exitWithError("You need to pass a valid problem number");
}

// Construct the directory path
const directory = path.join("src", "problems", `problem-${problemNumber}`);

if (!fs.existsSync(directory)) {
  exitWithError("The given problem doesn't exist yet!");
}

// Create a new instance of Mocha
const mocha = new Mocha();

// Read the files in the directory
fs.readdirSync(directory)
  .filter((file) => {
    // Test if it's a test file
    const isTestFile = /(.+)\.test\.js/;
    return file.match(isTestFile);
  })
  .forEach(function (file) {
    // Add that file to mocha test suite
    mocha.addFile(path.join(directory, file));
  });

// Run mocha and modify the exit code
mocha.run(function (failures) {
  process.exitCode = failures ? 1 : 0;
});
