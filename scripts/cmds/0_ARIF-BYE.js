module.exports = {
 config: {
   name: "bye",
   version: "1.0",
   author: "MR.ARIF",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "bye") {
 return message.reply({
 body: "𝐁𝐘𝐄 𝐁𝐘𝐄 🙋‍♂ 𝐓𝐀𝐊𝐄 𝐂𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 😇",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/FzW4sh97/BYE.gif")
 });
 }
 }
}
