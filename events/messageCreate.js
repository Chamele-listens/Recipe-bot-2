const { Events } = require('discord.js')

module.exports = {
    name : Events.MessageCreate,
    execute(messageCreate){
        if (messageCreate.author.bot){
            console.log("ignore me!");
            return;
        }
        
        if (messageCreate.content.includes('bot')){
            messageCreate.reply('yes?');
        }
        if (messageCreate.content.includes('gay')){
            messageCreate.reply('no!');
        }
    }
};