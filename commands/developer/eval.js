const Discord = require("discord.js");
module.exports.run = async (prefix, cmd, client, args, message, config) => {
    if (message.author.id == 292588280304893952) {
        try {
            let command = args.join(" ").slice(" ")
            let evaled = await eval(command);
           let embed = new Discord.RichEmbed()
           .setTitle("Ladybug - Eval")
           .setColor("#dd2b4e")
           .setDescription("```" + evaled + "```")
           message.channel.send(embed)
        } catch (e) {
            let errorembed = new Discord.RichEmbed()
            .setTitle("Ladybug - Eval")
            .setColor("#dd2b4e")
            .setDescription("```js\n" + e + "```")
        }
    } else {
        let emb = new Discord.RichEmbed()
            .setTitle("Eval - Ladybug")
            .setColor("#dd2b4e")
            .setDescription("Sorry but you are not the Bot owner!")
        return message.channel.send(emb)
    }

}