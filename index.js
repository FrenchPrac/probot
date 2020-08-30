const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login("NzQyMDAxNDE4NzgwODAzMTA0.Xy_wqw.RtNuK41o59tPlyf_C0f71KKup60");

bot.on('message', message => {
    if (message.content === '!website') {
      message.reply('Hey ! our site is currently unavailable, it will soon be open to all public!')
    }
  })

  bot.on('message', message => {
    if (message.content === 'website') {
      message.reply('Hey ! our site is currently unavailable, it will soon be open to all public!')
    }
  })

  bot.on('message', message => {
    if (message.content === 'hey') {
      message.reply('Hey !')
    }
  })

  bot.on('message', message => {
    if (message.content === '!help') {
      message.reply('Hey ! Soon :)')
    }
  })