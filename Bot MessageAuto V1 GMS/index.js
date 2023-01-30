const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Connecté à ${client.user.tag}!`);
  client.user.setActivity(`${client.guilds.cache.size} serveurs`, { type: "WATCHING" });
});

setInterval(() => {
  const channel = client.channels.cache.get('ID_DU_CANAL');
  channel.send('Exemple de message');
//Temps en millisecondes 
}, 172800000);

client.login('TOKEN');