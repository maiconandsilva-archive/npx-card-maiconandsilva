#! /usr/bin/env node

const colors = require('colors')
const cowsay = require("cowsay")
const prettyjson = require('prettyjson')

let info_json = require('./info.json')

const name = colors.blue(String.raw`
 __  __       _                   __  __
|  \/  |     (_)                 |  \/  |
| \  / | __ _ _  ___ ___  _ __   | \  / |
| |\/| |/ _' | |/ __/ _ \| '_ \  | |\/| |
| |  | | (_| | | (_| (_) | | | | | |  | |_
|_|  |_|\__,_|_|\___\___/|_| |_| |_|  |_(_)
`)

let obsinfo = {}
// let _m = "ma"; _m += "icon.maur"; _m += "icio@p"; _m += "m.me"
// obsinfo[`em${'a'}${'il'}`] = _m

let info = prettyjson.render({...obsinfo, ...info_json}, {
  dashColor: 'cyan',
  multilineStringColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
})

console.log(cowsay.say({
  text : `${name}\n${info}\n`,
  cow: cowsay.SQUIRREL,
  e : "oO",
  T : "U ",
}))
