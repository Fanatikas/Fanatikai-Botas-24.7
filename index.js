const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **Zinutes issiustos** `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log(' Botas Ijungtas!');
    let statuses = [
        "  Robotukas ",
        "  Linezas#0011 ",
        "  Linezo Robotukas " // U can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"WATCHING"})
    
        }, 3000) //Seconds to Random



});

client.login("Njk5MjE5NDU1Mzc2MzU5NTU0.XpRNFQ.XD_OHTKMBWFSPCp8AlmgCnyJ4GY");