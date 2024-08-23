const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bitch i am online!');
});

client.on('message', message => {

    if(message.author.bot)
    return;

    if(message.content.toLowerCase().startsWith("?paly"))
    {
        let channelId = '18 numaric size long';  //put channel ID here 
        let VoiceChannel = message.guild.channels.find(channel => channel.id === channelId );
        if(VoiceChannel !=null)
        {
            console.log(VoiceChannel.name + "was found and is a" + VoiceChannel.type + "channel.");
            VoiceChannel.join()
            .then(connection => {
                console.log("Bot joined the channel.");
            })
            .catch();
        }
    }
});




//last line
client.login(process.env.token);