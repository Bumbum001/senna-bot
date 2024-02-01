import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['‪2348122716856‬', 'IVY', true],
  ['‪2348122716856‬']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['‪2348122716856‬', '2347069763306']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '🎯Blue' 
global.author = 'icon🎯' 

//--info FG
global.botName = 'ivy bot🎯'
global.fgig = 'https://www.instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://chat.whatsapp.com/HQ26izcpZ7yAWXm2yyExSX'
global.bgp = 'https://chat.whatsapp.com/HQ26izcpZ7yAWXm2yyExSX'
global.bgp2 = 'https://chat.whatsapp.com/HQ26izcpZ7yAWXm2yyExSX'
global.bgp3 = 'https://chat.whatsapp.com/HQ26izcpZ7yAWXm2yyExSX' //--GP NSFW

global.wait = '⌛ _Calms make i do am 🎯..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🎯' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
