const { prefix, token, owner_id, welcome_id } = require("./config.json");

const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();

// read commands from files in command directory
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    // ignore bot messages and messages that dont start with prefix and messages not sent by owner
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.author.id !== owner_id) return;

    // get command names and arguments
    const args = message.content.slice(prefix.length).split(/ +/g);
    const commandName = args.shift().toLowerCase();

    // get command if it exists
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName) || 
        client.commands.find(cmd => cmd.aliases.includes(commandsName));

    // execute command
    try {
        command.execute(message, args);
    }
    catch (error) {
        log(true, error);
        message.reply(`Sorry! A problem occurred trying to execute the ${commandName} command.`);
    }
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.get(welcome_id);

    // Do nothing if the channel wasn't found on this server
    if (!channel) return;

    // create embed welcome message
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#f7d018')
        .setTitle("**_Yoohoo!_ If you're here then you must obviously know who I am, but just in case you don't. I am Ishtar, Goddess of Beauty and Governor of Venus and this is my lovely discord server made exclusively for worshipping me! I hope you don't bore me~♪**")
        .setAuthor(`${member.user.username}, welcome to the Temple of Ishtar Discord server!`, "https://i.imgur.com/oDQ9p8I.png")
        .setDescription("Oh yeah, don't forget to read the rules. If you screw up and get in trouble then that's on you!")
        .setThumbnail("https://i.imgur.com/R6vgk8o.gif")
        .setImage("https://i.imgur.com/Fb0O1jj.png")
        .setFooter(`Temple of Ishtar—${member.guild.memberCount}`);

    channel.send(welcomeEmbed)
        .then(message => console.log(`Sent message: ${message.content}`))
        .catch(console.error);
});

client.login(token);

// helper functions

function log() {
    let args = [...arguments];
    let isError = args.shift();
    let date = '[' + new Date().toISOString() + ']';
    if (isError) {
        console.error(date, ...args);
    }
    else {
        console.log(date, ...args);
    }
}