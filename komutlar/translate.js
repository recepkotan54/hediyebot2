
const Discord = require('discord.js');
const translate = require('google-translate-api');
const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

module.exports.run = async (bot, message, args) => {

    if (!args[0]) {

        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("**Çevirilecek kelimeyi-cümleyi girmediniz.**\nDoğru Kullanım: `bf!çevir <çevirilecekdil> <metin>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send('**Please give me something to translate.** `bf!çevir <language> <text>`');

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Lütfen Çevirilecek dili giriniz.\nÖrnek kullanım: bf!çevir english Selam**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Çeviri", bot.user.displayAvatarURL)
                    .addField(`Varsayılan Dil`, `\`\`\`${args}\`\`\``)
                    .setColor("RANDOM")
                    .addField(`Çevirilen Dil`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);

            });

        }

    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çevir'],
  permLevel: 4
};

exports.help = {
  name: 'translate',
  description: 'Translate komutu yükler.',
  usage: 'Translate <yaz adı>'
};
