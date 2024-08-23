module.exports = {
    name: 'fine',
    description: "Sends fine reply!",
    execute(message, args){
        message.channel.send('Bitch, Im busy');
    }
}