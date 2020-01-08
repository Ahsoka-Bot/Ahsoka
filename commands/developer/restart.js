const { exec } = require("child_process");
const Discord = require("discord.js");

module.exports.run = async (prefix, cmd, client, args, message, config) => {

    if (message.author.id == config.owner) {
        let embed = new Discord.RichEmbed()
            .setTitle("Ahsoka - Restart")
            .setDescription("Restarting...")

        client.user.setPresence({status: "away", game: {name: "Restarting..."}});


        exec("pm2 restart Ahsoka", (err, out, stderr) => {
            if (err && stderr !== "") {
                let erorr = new Discord.RichEmbed()

                    .setTitle("Restart Fail - Ahsoka")
                    .setDescription(`Restart Failed\\n${out}\\n${stderr}`)

                embed.edit(error(message.channel))
            } else {
                let restarted = new Discord.RichEmbed()

                    .setTitle("Restart Sucess - Ahsoka")
                    .setDescription(`Restart was successful!`)

                embed.edit(restarted(message.channel))
            }
        })

    }

}