require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  ws: {
    intents: [
      "GUILDS",
      "GUILD_MESSAGES",
    ],
  },
});

client.on('message', message => {
	if (message.content === 'hemp'||message.content === 'HEMP'||message.content === 'Hemp') {
	message.channel.send('Missy is Pissy');

}  else if (message.content === `Srop`||message.content === `srop`||message.content === `SROP`) {
	message.channel.send('MissyPissyButAlsoHempySropy');
}
else if (message.content === `say my name` &&message.author.username!='_muuse')
 {


		let a=message.author.username;
		message.channel.send(a);
}
else if(message.content === `say my name`&&message.author.username==='_muuse')
{
message.channel.send('Who are you Exactly?');

}
else if (message.content === 'marsh' ||message.content === 'Marsh'||message.content === 'MARSH') {
	message.channel.send('get rekked');
}
	else if (message.content === 'Fuck if'||message.content === 'fuck if') {
	message.channel.send('you cant even swear the right way');
}
		else if (message.content === 'patients'||message.content === 'Patients') {
	message.channel.send('@Melissa is this a hospital?');
}
});
client.login(process.env.BOT_TOKEN);
