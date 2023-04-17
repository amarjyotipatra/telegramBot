
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios=require('axios')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome to Amar\'s Telegram Bot'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('💖'))
bot.on(message('emoji'), (ctx) => ctx.reply('❤'))
bot.command('toplinuxcommand',(ctx)=>ctx.reply('ls cd pwd rm mkdir echo'))
bot.command('whoami',(ctx)=>ctx.reply('You are no one.'))
bot.command('whatismyname',(ctx)=>ctx.reply('What ur parents have given u.'))
bot.on(message('text'), async (ctx) => {
    // Using context shortcut
    // console.log(ctx.update.message.text);
    if(ctx.update.message.text=="I love you"){
       await ctx.reply('How many gfs do u have?');
    }
    else if(ctx.update.message.text=='Who is Amar?'){
        ctx.reply(`Ultra Pro Max Legend`)
    }
    else if(ctx.update.message.text=='Who am I?'){
        ctx.reply(`Just another human being on earth`)
    }
    else if(ctx.update.message.text.includes('Time')){
        let today = new Date();
        let time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log("t",today,time);
        await ctx.reply(time)
    }
    else if(ctx.update.message.text.includes('Date')){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        console.log("D",today,date);
        await ctx.reply(date)
    }
    else if(ctx.update.message.text.includes('bye')){
         ctx.reply('Bye bye')
    }
    else if(ctx.update.message.text.includes('What')){
        ctx.reply('Google it.')
    }
    else if(ctx.update.message.text.includes('When')){
    ctx.reply('Time and tide waits for none.')
    }
    else if(ctx.update.message.text=="When I will get a gf?"){
        ctx.reply('Ruko jara, sabro karo');
    }
    else await ctx.reply(`Hello ${ctx.update.message.text},What u want to know?`);
  });
   bot.on(message('photo'),async (ctx)=> 
   await ctx.reply(`Hey ${ctx.update.message.caption},Should I send this to ur father?`))
 
bot.launch();