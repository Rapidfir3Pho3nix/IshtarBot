const { owner_id, announcements_id } = require("../config.json");

module.exports = {
    name: "announce",
    description: "Make an announcement.",
    async execute(message, args) {
        if (message.author.id === owner_id) {
            const response = args.join(' ');
            const channel = message.guild.channels.cache.get(announcements_id);
            await message.delete();

            channel.startTyping();
            setTimeout(() => {
                channel.send(response);
                channel.stopTyping(true);
            }, 1500);
        }    
    },
};