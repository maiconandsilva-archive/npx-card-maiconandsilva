#! /usr/bin/env node

const process = require('process')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

function concat_template(cmd, args, i = 0) {
  result = []
  while (cmd[i]) {
    result.push(args[i] ? cmd[i] + args[i++] : cmd[i++])
  }
  return result.join("")
}

async function x(cmdarray, ...args) {
  const cmd = concat_template(cmdarray, args)
  console.info(`command: ${cmd}`)

  try {
    const { stdout, stderr } = await exec(cmd)

    if (stdout) console.log(`stdout: ${stdout}`)
    if (stderr) console.error(`stderr: ${stderr}`)

    return stdout
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

x`npm version minor`
x`npm publish`
