const Discord = require("discord.js")
module.exports = async (client, member) => {
    let db = client.con;
    db.query("SELECT * FROM `settings` WHERE id = ?", [member.guild.id], async (error, result) => {
        if(result.length == 0) return
        if(result[0].welcomechannel == "none") {
            return
        } else {
            let wec = member.guild.channels.get(result[0].welcomechannel);
            let user = member.user.tag
            let server = member.guild.name
            let embed = new Discord.RichEmbed()
            .setTitle("Leave")
            .setThumbnail(member.user.avtarURL)
            if(result[0].leavemessage == "none") {
                embed.setDescription(`${user} just left ${server}!`)
            } else {
                embed.setDescription((await result[0].leavemessage).replace("${user}", user).replace("${server}", server))
            }
            return wec.send(embed)
        }
    })
}