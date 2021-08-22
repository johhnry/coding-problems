"use strict";
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { consoleSuccess, exitWithError } = require("./utils");

// Open the README template file
const readmeTemplatePath = "src/template/README.template.md";
let readmeContent;

try {
  readmeContent = fs.readFileSync(readmeTemplatePath, "utf8");
} catch (err) {
  exitWithError(`Error reading README template file: ${err}`);
}

// Get the last problem number
const problemsDirectory = path.join("src", "problems");
let problemDirectory;
const problems = fs
  .readdirSync(problemsDirectory)
  .map((p) => Number(p.split("-")[1]));
const lastProblemNumber = Math.max(...problems) + 1;
let problemNumber;

// Use readline for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for problem number
rl.question(`Problem number (default: ${lastProblemNumber}): `, function (pnb) {
  if (pnb.length === 0) {
    pnb = String(lastProblemNumber);
  } else {
    if (!Number.parseInt(pnb)) {
      exitWithError("You need to pass a valid problem number");
    }
  }

  problemNumber = pnb;

  problemDirectory = path.join(problemsDirectory, `problem-${problemNumber}`);

  // Test if problem already exists
  if (fs.existsSync(problemDirectory)) {
    exitWithError(
      `Folder ${problemDirectory} already exists, can't create the problem`
    );
  }

  rl.question(
    "Difficulty (easy, medium, hard) (default: medium): ",
    function (problemDifficulty) {
      if (problemDifficulty.length === 0) {
        problemDifficulty = "medium";
      } else {
        const isValid = ["easy", "medium", "hard"].find(
          (d) => d === problemDifficulty
        );

        if (!isValid) {
          exitWithError(`Invalid difficulty given: ${problemDifficulty}`);
        }
      }

      readmeContent = readmeContent
        .replace(/{{problemNumber}}/g, problemNumber)
        .replace(/{{problemDifficulty}}/g, problemDifficulty);

      rl.close();
    }
  );
});

rl.on("close", function () {
  if (problemDirectory) {
    try {
      fs.mkdirSync(problemDirectory);
    } catch (err) {
      exitWithError(`Couldn't create directory ${problemDirectory}: ${err}`);
    }

    consoleSuccess(`-> Created directory ${problemDirectory}`);

    const sourceFileName = `problem-${problemNumber}`;

    try {
      const sourceFilePath = path.join(
        problemDirectory,
        `${sourceFileName}.js`
      );
      fs.closeSync(fs.openSync(sourceFilePath, "w"));
      consoleSuccess(`-> Created file ${sourceFilePath}`);

      const testFilePath = path.join(
        problemDirectory,
        `${sourceFileName}.test.js`
      );
      fs.closeSync(fs.openSync(testFilePath, "w"));
      consoleSuccess(`-> Created file ${testFilePath}`);
    } catch {
      exitWithError(`Couldn't create source file: ${err}`);
    }

    const readmeFilePathDest = path.join(problemDirectory, "README.md");
    fs.writeFileSync(readmeFilePathDest, readmeContent);
    consoleSuccess(`-> Created file ${readmeFilePathDest}`);
  }
});
