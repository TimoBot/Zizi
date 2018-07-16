const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("t.");
var randnum = 0;
var prefixadmin = ("tim.");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 't.help | TimBot | V1 | By TheGeek', type: 0}})
    console.log("Le bot est prêt !");
});

bot.on('message', message => {
    if  (message.content === prefix + "ping"){
        message.channel.sendMessage("Pong !");
        console.log('Commande Ping demandée !');
    }
    
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#13CDB4')
        .addField("t.help", "Affiche les commandes du Bot...")
        .addField("t.ping", "Le Bot réponds pong...")
        .addField("t.TheGeek", "Dis à TheGeek que quelqu'un le demande...")
        .addField("t.invite", "Donne l'invitation officielle du serveur...")
        .addField("t.site", "Donne le lien du site intternet à TheGeek...")
        .addField("t.connect", "Pour savoir si le Bot est connecté...")
        .addField("t.staff", "Dis qui sont tous les Membres du Staff...")
        .addField("t.recrutement", "Dis si le serveur recrute ou non...")
        .addField("t.infos", "Donne toutes les informations sur le Bot...")
        .addField("t.amis", "Donne la liste des amis de TheGeek sur ce serveur...")
        .setFooter("By TheGeek | V1")
        message.channel.sendEmbed(help_embed);
       //message.channel.sendMessage("Voici les commandes du bot :\n \n t.help (afficher les commandes du bot) \n t.ping (pong)");
        console.log('Commande t.help demandée !');
    }

    if (message.content === prefix + "TheGeek"){
        message.channel.sendMessage("  TheGeek, quelqu'un te demande !");
        console.log("Commande t.TheGeek demandée !")
    }

    if (message.content === prefix + "invite"){
        message.channel.sendMessage("L'invitation officielle du serveur : https://discord.gg/VbGBWj2 !")
        console.log("Commande t.invite demandée !")
    }

    if (message.content === prefix + "site"){
        message.channel.sendMessage("Le site de __**TheGeek**__ est : https://timotheverot.wixsite.com/geek !")
        console.log("Commande t.site demandée !")
    }       

    if (message.content === prefix + "connect"){
        message.channel.sendMessage("Le bot est bien connecté !")
    console.log("Commande t.connect demandée !")
    }

    if (message.content === prefix + "staff"){
        message.channel.sendMessage("__**Les Membres du Staff sont :**__\n \n -Fondateur (TheGeek) \n -Développeur Discord (Ilian0112) \n -Super Administrateur (Axouu306 et Kimbo) \n -Administrateur (Remi/XNava98) \n -Animateur (TheHitekFive) \n -Modérateur (Phocors)")
        console.log("Commande t.staff demandée !")
    }

    if (message.content === prefix + "recrutement"){
        message.channel.sendMessage("Le recrutement est __**ON**__. Nous recrutons **un Animateur** et **un Helpeur** qui pourra prochainement devenir **Modérateur**.")
        console.log("Commande t.recrutement demandée !")
    }

    if (message.content === prefix + "infos"){
        message.channel.sendMessage("__**Informations sur le Bot :**__ \n \n Nom du Bot : TimBot ! \n - \n Date de création : Dimanche 10 Juin ! \n - \n Créateur : TheGeek ! \n - \n Language de développement : Node.js !")
        console.log("Commande t.infos demandée !")
    }

    if (message.content === prefix + "amis"){
        message.channel.sendMessage("Les amis IRL de TheGeek sur ce serveur sont les suivants : \n \n -Axouu306 \n \n ------------------ \n Les amis IG de TheGeek sur ce serveur sont les suivants : \n \n -Kimbox \n -Rémi/Xnava98 \n -Ilian \n -Fall_ \n -DADY \n -TardOsTV \n -TheHitekFive \n -Volzonas")
        console.log("Commande t.amis demandée")
    }

    if (message.content === prefixadmin + "annonce"){
        message.reply("Bot en développement, plusieurs commandes ont été ajoutées. Tapez **t.help** dans #commandes-bots. Bye bye *[@everyone]*")
        console.log("Commande d'annonce demandée (admin)")
    }
    
});

bot.login(process.env.TOKEN)
