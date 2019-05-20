const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "!";
let owner = "292711852192825345"; // Buraya kendi IDnizi yazın.

bot.on("ready", () => {
    console.log("Bağlandım!")
});

bot.login("NTc5MzgxNTM1MzMwMDA5MTIz.XOBVgA.B-h4fY2aCKCuguDSSEWcEyVz6lQ")

bot.on("message", message => {

    if (message.content.toLowerCase() === "saqwedfsfqweqfjfhjfhjfhfhfhfhfhfhfhfhfhf") {
        message.reply("**Aleyküm Selam!**")
    }

    if (message.content === prefix + "sdfsdfdsfsdfgdfgherrwergrgwerrwerwi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "siskiksdjfhfjghdkjghdkjfgdgfdgd") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)

            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

    if (message.content === prefix + "destek") {
        message.channel.sendMessage(stripIndents`
**Selam, ben ${bot.user.username}!** Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.

**Bilgi Komutları**
\`\`\`fix
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
\`\`\` `)
    }

});

bot.on("message", message => {

    const kufur = ["amk", "aq", "Oruspu Çocuğu", "Oruspu Evladı", "Ananı Sikeyim", "Piç", "Gavat", "Oruspu", "Oç", "Pezevenk",];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Senin gibi bir insana, bu argo kelimeyi yakıştıramadım... :flushed:**")
        message.delete()
    }

});
