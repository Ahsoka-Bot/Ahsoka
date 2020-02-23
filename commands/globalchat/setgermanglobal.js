const Discord = require("discord.js");
module.exports.run = async (prefix, cmd, client, args, message, config) => {
    let db = client.con;
    let ch = message.mentions.channels.first()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(await client.string(message.guild.id, "settings.noperms"))
    if(!ch) return message.reply(await client.string(message.guild.id, "settings.ch"))
    db.query("SELECT * FROM `globalde` WHERE guildid = ?", [message.guild.id], async (error , result) => {
        if(result.length == 0) {
            db.query("INSERT INTO globalde(guildid, id) VALUES (?, ?)", [message.guild.id, ch.id])
            let embed = new Discord.RichEmbed()
            .setTitle("Mitsuha  - GlobalChat DE")
            .setDescription(await client.string(message.guild.id, "global.set") + client.channels.get(ch.id))

            return message.channel.send(embed)
        } else {
            return message.reply(await client.string(message.guild.id, "global.already"))
        }
    })

}