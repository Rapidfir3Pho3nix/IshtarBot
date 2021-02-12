const { DiscordAPIError } = require("discord.js");
const { affiliates_id, owner_id } = require("../config.json");

module.exports = {
    name: "affiliate",
    description: "Posts an affiliated server link to the affiliated channel.",
    async execute(message, args) {
        let affiliates = message.guild.channels.cache.get(affiliates_id);
        let reactConfirm = '✅';
        const filter1 = m => (m.content.toLowerCase().includes('discord.gg') ||  m.content.toLowerCase().includes('discord.com') || m.content.toLowerCase().includes('cancel')) && m.author.id === owner_id;
        
        await message.channel.send("Master, what is the link to the affialte server? (Type \"Cancel\" without quotes at any time to stop)");
        const collector1 = message.channel.createMessageCollector(filter1, { time: 15000, max: 1 });
        collector1.on('collect', m => {
            if (m.content.toLowerCase().trim() == 'cancel') {
                message.channel.send("Process cancelled.");
                return;
            };

            message.channel.send("Master, enter the message(s) for the description of the affiliate server and click the checkmark when finished. (Enter description with text markup included)")
            .then(msgToReact => {
                msgToReact.react(reactConfirm);

                let collectedMessages = [];
                const filter2 = m => m.content !== "" && m.author.id === owner_id;
                const reactFilter = (reaction, user) => {
                    return reaction.emoji.name === reactConfirm && user.id === owner_id;
                };

                const collector2 = message.channel.createMessageCollector(filter2, { time: 60000 });
                const collector3 = msgToReact.createReactionCollector(reactFilter, { time: 60000, max: 1 });

                collector2.on('collect', n => {
                    if (n.content.toLowerCase().trim() == 'cancel') {
                        collector3.stop();
                        message.channel.send("Process cancelled.");
                        return;
                    };
                    collectedMessages.push(n.content);
                });
             
                collector3.on('collect', (reaction, user) => {
                    collector2.stop();
                    collectedMessages.forEach((msg) => {
                        affiliates.send(msg);
                    });
                    affiliates.send(`${m.content}`);
                });
            });

            
        });
    },
};