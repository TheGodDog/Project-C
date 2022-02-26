const Discord = require('discord.js')

const Client = new Discord.Client({
    intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES ]
})

const prefix = 'z';

Client.on('message', messageCreate => {
    if(!messageCreate.content.startsWith(prefix) || messageCreate.author.bot) return;

    const args = messageCreate.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        messageCreate.channel.send('pong!')
    }else if(command === 'fightfinalboss'){
        messageCreate.channel.send('sasuke')
    }
})

Client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Tổng Tư Lệnh Tối Cao')
})

Client.once('ready', ()=>{
    console.log('Zephilzeda is online!')
})

Client.login('OTM4MDY5NDI0MTMxNDMyNDk4.Yfk7Ow.Ilza7PIBWZcFP1XkeAufbRSF9Pk')