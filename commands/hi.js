module.exports = {
    name: 'hi',
    description: "This is a hi command!",
    execute(message, args){
        message.channel.send('Hello Bitch, How are you!');
    }
}