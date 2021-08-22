/**
 * ANSI colors escape codes
 */
const COLORS = {
  red: { fg: "\x1b[31m" },
  yellow: { fg: "\x1b[33m" },
  green: { fg: "\x1b[32m" },
};

/**
 * Add an escape sequence with a message
 * @param {string} message the message to colorize
 * @param {string} colorCode ANSI color escape sequence
 */
function withColor(message, colorCode) {
  return `${colorCode}${message}\x1b[0m`;
}

/**
 * Console error red
 */
function consoleError(message) {
  console.error(withColor(message, COLORS.red.fg));
}

/**
 * Console error success green
 */
function consoleSuccess(message) {
  console.log(withColor(message, COLORS.green.fg));
}

/**
 * Exit the script with an error message
 * @param {string} message error output
 */
function exitWithError(message) {
  consoleError(message);
  process.exit(1);
}

module.exports = { COLORS, consoleSuccess, exitWithError };
