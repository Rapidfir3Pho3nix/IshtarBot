const { owner_id } = require("../config.json");

module.exports = {
    name: "say",
    description: "Repeat the message that was said.",
    async execute(message, args) {
        if (message.author.id === owner_id) {
            const response = args.join(' ');
            const channel = message.channel;
            await message.delete();

            channel.startTyping();
            setTimeout(() => {
                channel.send(response);
                channel.stopTyping(true);
            }, 1500);
        }    
    },
};