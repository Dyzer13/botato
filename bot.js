const Discord = require('discord.js');
const client = new Discord.Client();
const heros = new Discord.Client();
const other = new Discord.Client();

client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("510204462527152129").join(); //by : iBeAnthonyD
    });

client.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("508795184528621588").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},5000);
});
other.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("508795184528621588").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},5000);
});
heros.on('ready', async () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("508795184528621588").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},5000);
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login(process.env.BOT_TOKEN2);
client.login(process.env.SPAM);
heros.login(process.env.HER);
other.login(process.env.OTH);
