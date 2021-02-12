const {serverInfo_id, serverFeedback_id, 
    announcements_id, usInfo_id, jpInfo_id, welcome_id, selfRole_id, affiliates_id,
    ishTemple_id, ishSacredTemple_id, waifuTemples_id, sacredWaifuTemples_id,
    general_id, usFGO_id, jpFGO_id, usGacha_id, jpGacha_id, usFriend_id, jpFriend_id,
    offTopic_id, gaming_id, entertainment_id, art_id, mature_id, 
    botCommands_id,
    voiceChat_id, botMusic_id, generalVoice_id, music_id, 
    follower_id, trueFollower_id, favorite_id, patron_id
} = require("../config.json");
const Discord = require("discord.js");

module.exports = {
    name: "init",
    description: "Initialize the administrative server channels with messages from Ishtar.",
    async execute(message, args) {
        // return;

        // rule channel initialization
        let serverInfo = message.guild.channels.cache.get(serverInfo_id);
        let serverFeedback = message.guild.channels.cache.get(serverFeedback_id);

        let announcements = message.guild.channels.cache.get(announcements_id);
        let usInfo = message.guild.channels.cache.get(usInfo_id);
        let jpInfo = message.guild.channels.cache.get(jpInfo_id);
        let welcome = message.guild.channels.cache.get(welcome_id);
        let selfRole = message.guild.channels.cache.get(selfRole_id);
        let affiliates = message.guild.channels.cache.get(affiliates_id);

        let ishTemple = message.guild.channels.cache.get(ishTemple_id);
        let ishSacredTemple = message.guild.channels.cache.get(ishSacredTemple_id);
        let waifuTemples = message.guild.channels.cache.get(waifuTemples_id);
        let sacredWaifuTemples = message.guild.channels.cache.get(sacredWaifuTemples_id);

        let general = message.guild.channels.cache.get(general_id);
        let usFGO = message.guild.channels.cache.get(usFGO_id);
        let jpFGO = message.guild.channels.cache.get(jpFGO_id);
        let usGacha = message.guild.channels.cache.get(usGacha_id);
        let jpGacha = message.guild.channels.cache.get(jpGacha_id);
        let usFriend = message.guild.channels.cache.get(usFriend_id);
        let jpFriend = message.guild.channels.cache.get(jpFriend_id);

        let offTopic = message.guild.channels.cache.get(offTopic_id);
        let gaming = message.guild.channels.cache.get(gaming_id);
        let entertainment = message.guild.channels.cache.get(entertainment_id);
        let art = message.guild.channels.cache.get(art_id);
        let mature = message.guild.channels.cache.get(mature_id);

        let botCommands = message.guild.channels.cache.get(botCommands_id);

        let voiceChat = message.guild.channels.cache.get(voiceChat_id);
        let botMusic = message.guild.channels.cache.get(botMusic_id);
        let generalVoice = message.guild.channels.cache.get(generalVoice_id);
        let music = message.guild.channels.cache.get(music_id);
        
        let heartGem = message.guild.emojis.cache.find(emoji => emoji.name === 'heartGem');
        let pouting = message.guild.emojis.cache.find(emoji => emoji.name === 'ishyPouting');

        let follower = message.guild.roles.cache.get(follower_id);
        let trueFollower = message.guild.roles.cache.get(trueFollower_id);
        let favorite = message.guild.roles.cache.get(favorite_id);
        let patron = message.guild.roles.cache.get(patron_id);

        // await affiliates.send(`**Ereshkigal Praising Server** - Ehhhh? Well, whatever. Go here if you want to praise my sister, Ereshkigal...Baka.`);
        // await affiliates.send(`${pouting}`);
        // await affiliates.send("https://discord.gg/JvKdkEJ");

        // await affiliates.send(`**Knights of the Unlucky Order** - "Ever tired of getting unlucky with your rolls? Then this server will be perfect for you. Come and share your pain with us, the Knights of the Unlucky Order. We are a fate grand order based server with the a more focused camelot theme for people who are unlucky with their rolls. We have channels like gacha rolls where you can share your most likely very lucky rolls, support setups on both JP and NA! and plenty more!"`);
        // // await affiliates.send(`${pouting}`);
        // await affiliates.send("https://discord.gg/JMsX5Ty");

        //await affiliates.send("```HISTORICAL WAIFUS AND BLOOD GORE. ```\n<<**FATE : OUTERBOX** >>\n\n:boxing_glove:Welcome to our Fate-Type Moon roleplay oriented server! We are centred and based on one of the hottest asian franchises out there owned by Type Moon. The Fate franchise! Here you can be your own favourite historical/mythical character and a fellow magus of Chaldea Organisation who are tasked to protect the course and history of humanity. :earth_africa::ear_of_rice:\n> ```Here you can be Super-powered historical/mythical characters that are reincarnated as servants.```:crossed_swords:\n> ```Fight alongside those servants as magus and witches.``` :crystal_ball:\n> ```And generally get to know our community and the franchise a little better.```:broom:\nHere we mainly roleplay Holy Grail Wars, Chaldea missions etc. We can’t promise you amity from toxic members because well, they do exist but we do have our own code of conduct as part of our community guidelines. Join us into roleplay and discussions! :raised_hands_tone3:\n```You’ll learn fast. We encourage you to.\nClick the link now!```\n> >https://discord.gg/3Fxf293\n> >https://static.comicvine.com/uploads/original/13/134077/3841753-saber1.gif");

        // await affiliates.send(`🕊️ You have been cordially invited to join  † **__The Cult of Jeanne__** †\n\nFor all FATE/Typemoon fans, Anime otakus, and Gaming enthusiasts, you'll find a new home here within our holy land 💙\n\nWe hold frequent server events including:\n• **Movie Night Streams**\n• **Original "Singularity" Events**\n• **Raffles/Giveaways**\nand more to come!\n\nSee you there!\n- *Jannukisu, Owner*\nhttps://discord.gg/KhEYazd`);

        // await affiliates.send(`**Sakura's Clubhouse** - Go here if you want to praise my siste- eh? Why am I calling this human my sister? Anyways, go here if you want to praise her! ... Baka!`);
        // await affiliates.send(`${pouting}`);
        // await affiliates.send("https://discord.gg/6HsAEFH");

        // await affiliates.send(`**Tohsaka's Server** - Go here if you want to praise ... me? It's me, but human? Oh I get it, this must be a server dedicated to my human host! Anyways, go there to praise her...me? This is too confusing, just do what you want! Baka!`);
        // await affiliates.send("https://discord.gg/kBBXcAA");

        // await affiliates.send(`**Tamamo Café** - Come for Tamamo and stay for the fun and loving community! Features regularly scheduled events and activities as well as self-assignable roles. Anyone is welcome to join and hangout with us!`);
        // await affiliates.send("https://discord.gg/aYkQTzy");

        // const welcomeImage = new Discord.MessageAttachment('./img/ishtar_welcome.png');
        // await serverInfo.send(welcomeImage);

        // await serverInfo.send('Invite Link: https://discord.gg/tEThA9Y');

        // const rulesImage = new Discord.MessageAttachment('./img/ishtar_rules.png');
        // await serverInfo.send(rulesImage);

        // const rulesEmbed = new Discord.MessageEmbed()
        //     .setColor('#f7d018')
        //     .setTitle("Rules of Inanna")
        //     .setFooter("Temple of Ishtar", "https://i.imgur.com/c1dLiZE.png")
        //     .setDescription(`These are general rules that apply throughout the server. Follow these rules so that you don't get yourself kicked or banned. I don't need any followers that don't have any basic decency!\n\n${heartGem} **Rule 1 - Behavior**\n\nBe nice, use common sense, and respect fellow followers. I will not tolerate any form of harassment or discrimination here. If you feel that you are being harassed or discriminated against then please bring it up to the temple staff so that it can promptly be taken care of.\n\n${heartGem} **Rule 2 - Spam**\n\nShould be pretty obvious but don't spam. Bot commands can be spammed in ${botCommands} and images can be spammed in **The Temple** category as long as the right images are posted in the correct channels.\n\n${heartGem} **Rule 3 - Advertisements**\n\nThis is MY Discord Server so it should be obvious that I don't want anyone advertising other servers or communities without the permission of my staff! Get in touch with them if you want to advertise something.\n\n${heartGem} **Rule 4 - Temple Staff**\n\nThe Temple Staff govern this place and enforce my rules so their word is law! If they tell you to do something, then you should probably do it. They have full discretion when it comes when and how punishment is dealt so it's in your best interest to be a good follower and follow my rules~♪`);

        // await serverInfo.send(rulesEmbed);

        // const channelGuideEmbed1 = new Discord.MessageEmbed()
        //     .setColor('#f7d018')
        //     .setTitle("Channel Guide")
        //     .setDescription(`Here is a basic overview of the channels we have here. In addition to above rules, there will be basic rules outlined in the topics of some of the channels. Make sure to read and follow them properly!\n\n**✨ Venus ✨**\n\n${serverInfo} - where you are reading this right now. Contains rules and information about my server. Read it carefully!\n${serverFeedback} - offer feedback and suggestions that could improve the server\n\n**⛅ The Heavens ⛅**\n\n${announcements} - server announcements\n${usInfo} - a feed for the NA version of the game\n${jpInfo} - a feed for the JP version of the game\n${welcome} - a channel for welcoming my new followers\n${selfRole} - here you can set your own roles\n${affiliates} - other servers that we are affiliated with`);

        // const channelGuideEmbed2 = new Discord.MessageEmbed()
        //     .setColor('#f7d018')
        //     .setDescription(`**🙏🏻 The Temple 🙏🏻**\n\n${ishTemple} - a temple dedicated to worshipping me! Only pictures of me are allowed here!\n${ishSacredTemple} - a special and sacred temple for worshipping me~♡\n${waifuTemples} - even though I should be the only person being worshipped I've set up another temple for others. See, aren't I such an amazingly generous Goddess?\n${sacredWaifuTemples} - a sacred temple for the others. I really am a truly amazing Goddess. I better get extra praise for this!\n\n**🏆 Fate/Grand Order 🏆**\n\n${general} - the general chat of the server\n${usFGO} - chat about the US version of Fate/Grand Order here\n${jpFGO} - chat about the JP version of Fate/Grand Order here\n${usGacha} - gacha salt channel for the US version of Fate/Grand Order\n${jpGacha} - gacha salt channel for the JP version of Fate/Grand Order\n${usFriend} - friend support channel for the US version of Fate/Grand Order\n${jpFriend} - friend support channel for the JP version of Fate/Grand Order`);

        // const channelGuideEmbed3 = new Discord.MessageEmbed()
        //     .setColor('#f7d018')
        //     .setFooter("Temple of Ishtar", "https://i.imgur.com/c1dLiZE.png")
        //     .setDescription(`**🐫 Mesopotamia 🐫**\n\n${offTopic} - off topic chat for the server\n${gaming} - chat about video games and related topics here\n${entertainment} - chat about general entertainment (Anime, Movies, Manga, Books, etc) here\n${art} - share cool art that you've found here\n${mature} - a mature channel for discussing serious issues and things going on IRL\n\n**🤖 Bots 🤖**\n\n${botCommands} - a channel for using bot commands\n\n**🔊 Voice 🔊**\n\n${voiceChat} - a text channel to interact with those in ${generalVoice} if you don't have a mic\n${botMusic} - a channel for entering bot commands to play music in ${music}\n${generalVoice} - general voice chat\n${music} - music voice chat`);

        // await serverInfo.send(channelGuideEmbed1);
        // await serverInfo.send(channelGuideEmbed2);
        // await serverInfo.send(channelGuideEmbed3);

        // const nsfwImage = new Discord.MessageAttachment('./img/ishtar_nsfw.png');
        // await serverInfo.send(nsfwImage);

        // const nsfwEmbed = new Discord.MessageEmbed()
        //     .setColor('#f7d018')
        //     .setTitle("NSFW")
        //     .setFooter("Temple of Ishtar", "https://i.imgur.com/c1dLiZE.png")
        //     .setDescription(`NSFW Content is allowed here as long as images are posted in the proper channels and as long as my followers are following Discord's guidelines properly. This includes, but is not limited to: no porn or sexual images of lolis or shotas; no posting of images that show extreme gore or violence, no images that are extremely disturbing whether that be vomit, blood, poop, etc. To see the NSFW channels you will need the nsfw role that you can assign yourself in ${selfRole}.`);
        // await serverInfo.send(nsfwEmbed);

        // Self role channel initialization
        // const roleImage = new Discord.MessageAttachment('./img/ishtar_roles.png');
        // await selfRole.send(roleImage);

        // await selfRole.send(`By default, everyone has the ${follower} role. I mean, why else would you be here if you weren't one of my followers?! As you spend more time here, you'll slowly gain experience which will increase your rank. The required amount of experience for higher ranks can be found below.`);
        // await selfRole.send("```C++\n0                - Followers of Ishtar\n5000             - Faithful Followers of Ishtar\n10000            - Disciples of Ishtar\n25000            - Prophets of Venus\n50000            - Apostles of the Heavens\n100000           - Divine Followers of Ishtar\n\nYou get 10 to 20 XP per message on a 2 minute cooldown.\n//So spamming won't help you level up quickly```");
        // await selfRole.send(`In addition to these roles are a few other special roles:\n\n${trueFollower} - you can only get this role if you show proof of having me at lv. 100 and with maxed skills.\n${favorite} - you can only get this role if you show proof of having me at Bond 10\n${patron} - you can only get this role by supporting server by using Nitro boosts\n\nThe other roles are self-assignable. These roles will determine what color your username is so choose wisely!`);
    },
};