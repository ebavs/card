'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  handle: chalk.white('                      EBAVS/'),
  member1: chalk.white('Barbara Casas'),
  member2: chalk.white('Victor Santacreu'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ebavs'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~ebavs'),
  github: chalk.gray('https://github.com/') + chalk.green('ebavs'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('victorsantacreu'),
  linkedin2: chalk.gray('https://linkedin.com/in/') + chalk.blue('barbaracasas'),
  web: chalk.cyan('https://www.ebavs.net'),
  npx: chalk.red('npx') + ' ' + chalk.white('ebavs'),
  labelMembers: chalk.white.bold('       Members:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.handle}`
const working = `${data.labelMembers}  ${data.member1}`
const member2 = `                 ${data.member2}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const linkedining2 = `              ${data.linkedin2}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               member2 + newline +
               newline +
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               linkedining2 + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding + newline


fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
