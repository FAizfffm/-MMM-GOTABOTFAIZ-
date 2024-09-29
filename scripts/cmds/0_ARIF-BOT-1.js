const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈 " , "बोट ना बोल ओय आरिफ जानू बोल मुझे 😌🙈😘 " , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒🤟" , "मैं गरीबों से बात नही करता ☹️🤟" , "इतना न पास आओ प्यार हो जाएगा 🙈😎😕👈" , "इटू 🤏 सा शर्म कर लिया करो बोट बोट करते वक्त 🙂🤞" , "इतना सिंगल हूं की ख्याब में लड़की की हां करने से पहले ही आंखे खुल जाती है 😕🤞" , "जरूरी नहीं हर लड़की धोखा दे 👉💔 कुछ लड़किया गालियां भी देती है। 😕🤞" , "कहो न प्यार हैं 🙈" , "तुम मुझे पागल लगते हो 🙂🤞" , "बोलो बेबी तुम मुझसे प्यार करते हो न 🙈😌😎💋" , "आपका नंबर मिलेगा 😐😒" , "अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain Karunga🤬" , "तू बंद नहीं करेगा किया...? 😾🤟" , "तुम न नर्क में जाओगे 😒🤟" , "प्लीज प्लीज मेरे से सेटिंग कर लो ना 🥺🤟" , "बताओ जानू गूगल मेल होता है या फीमेल...?? 🤔👈" ,"बस इतना है तुमसे कहना मुझसे तुम दूर ही रहना 😐✋","दिल में कोई गम नही बातों में कोई दम नही ये ग्रुप है ठरकियो का यहां कोई किसी से कम नहीं ।। 🙂✌️","ज़िन्दगी रही तो साथ निभाऊंगा मेरे दोस्त अगर भूल गया तो समझ लेना मेरी शादी हो गयी !! 😐✌️","यार सोचा था सुबह उठकर एक लड़की को प्रपोज करूँगा लेकिन उसने रात में ही ब्लॉक कर दिया। 🥺✌️","अर्ज किया है.....??\n\nना इश्क़ करो झूठा ना प्यार करो फर्जी\n\n\nआगे नहीं बताऊंगा मेरा शेर मेरी मर्ज़ी....!! 🤐👈","तेरी झील-सी आखोँ में काश मैं डूब जाता\nपर बीच में कमबख्त तुम्हारा चश्मा हैं आ जाता 🙂 😀✌️","मेरी बात ध्यान से सुनो अगर तुम मुझे न मिले तो कसम से मैं मर जाऊंगा\n\n\n\n\nलेकिन किसी और पर !! 🤐✌️","जाओ तुम जहर खा के सो जाओ 🫡✌️", "जा जा बरतन धो जाके 🙂🤟" , "इतने दिन कहां थे 😾 ग्रुप में क्यों नहीं आए....?? 😾✊" , "बोलो 😒👈" , "तेरी तो रुक तू भागना मत 😾✊" , "जल्दी दे दो एक चूमा 💋 कोई नही देख रहा 🤤🤟" ,"गाली सुना है किया...? 🤬👈" ,"दिल की तमन्ना है कि तुझे पलकों पे बिठाऊँ...पर तुम 72 किलो के हो दिल को कैसे समझाऊं 😒👈","क्यूं परेशान कर रहे हो मुझे 😒👈","तू है टकलू तेला बाप टकलू तेरा पूरा परिवार टकलू 🤨👈","गदारी करबे 🤨👈","भैंस की टांग चुप हो जा 😠👈","जो मुझे प्यार करेगी मैं उसको चूमा दुगा 😇","बोट न बोल मुझे जान बोल 🤐👈","जा तेरी मम्मी बुला रही है 🤐👈","इस ग्रुप में कोई मेरी बाबू है जल्दी से बुलाओ 🙈","यार पता नही मुझे मेरी बाबू कब मिलेगी 😒👈","इंसान बन जाओ पागल 🤐👈","बम चीकी चिकी बम 😀👈","चल हट बे परेशान न कर 😒👈","जी बाबू अपने क्यूं याद किया मुझे 😒👈","अपने दिमाग का पासवर्ड देना अकल इंस्टॉल करना है। 🥺👈","जली को आग कहते है बुझी को राख कहते है और जो आपके पास नही है उसे दिमाग कहते है। 😐👈","तुम्हारी मुस्कान तो एक अदा है जो उसे प्यार समझे वो सबसे बड़ा गधा है। 🤐🤞","यार मुझे एक लड़की ने बोला की तुम मुझे मोहोब्बत की सजा दो मैने जा के उसकी मम्मी को सब बता दिया 😐🤞","मै टकलू किसी से कम नही दिल चुराने आया हु दिल चुरा ले जाऊंगा 😛🤞","चल चल हवा आने दे 😐👈","तुम जाओ तुम्हारी मम्मी बुला रही है 😪👈","उफ्फ मेली जान 🙈👈","यार मेरी बीवी मुझे जूते मरती है 😭👈","मै ग्रुप छोड़ के जा रहा हूं 🤐👈","क्या तुम जानते हो की दुनिया में सबसे शरीफ कौन है....?? तो मेरा मासूम सकल देख लो 🤐👈","यार तुम एक प्यार वाली शायरी सुना दो ना 🤐👈","चुल्लू भर पानी में डूब कर मर जाओ 🤐👈","लड़की पटाने के सिर्फ दो तरीके\n\n\n\n\n\nपता लग जाए तो मुझे भी बता देना 🤐👈", "हमारे साथ मार्केट चलो पानी पूरी खाने चलते है। 😋"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

        if ((event.body.toLowerCase() == "kissme") || (event.body.toLowerCase() == "kissdo") || (event.body.toLowerCase() == "kiss do")) {
     return api.sendMessage("हट पगले मम्मी मरेगी 🙈😒😕😾", threadID);
   };

if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("👍👍👍👍", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("कोनसा महीना चल रहा है। 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("मेरी जान पहले [#] 👈 लगाओ फिर लिखो सिम 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("हेलो मेरी जान किया हाल है 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("ये बी सी किया होता है। 🤔👈 ", threadID);
   };

   if ((event.body.toLowerCase() == "manshi") ||(event.body.toLowerCase() == "manshi babu")) {
     return api.sendMessage("मानसी सिर्फ मेरी बाबू है तू मेरी बाबू पे लाइन ना मार ठरकी कही का 🤨🤬", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("मैं हूं ना जानेमन 🙂🤟", threadID);
   };

  if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("मेरा बॉस आरिफ बाबू बीजी है सायद किसी काम में मुझे बताओ किया काम है। मैं बॉस को बता दूंगा 🙂✌️ ", threadID);
   };

   if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "kiska bot hai")) {
     return api.sendMessage("मेरा बॉस आरिफ बाबू है और मै उसका आरिफ बाबू हूं 😒👈\n✧═════════•❁❀❁•═════════✧\nअगर आपको मेरे बॉस आरिफ बाबू से बात करनी है तो इस लिंक पे क्लीक कर के मेरे बॉस को फ्रेंड रिक्वेस्ट भेज दो जल्दी 😊✌️\n✧═════════•❁❀❁•═════════✧\nhttps://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD?mibextid=ZbWKwL\n✧═════════•❁❀❁•═════════✧", threadID);
   };

     if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("मेरा बॉस आरिफ बाबू है। 🙂✌️", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("अले बाप ले मेली बाबू शर्मा गई 😅😅👈", threadID);
   };

   if ((event.body.toLowerCase() == "sadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("सादी भी कर लेंगे मेरी जान पहले एक चूमा तो दो 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("नही करुगा मेरी जुबान है मैं बोलूंगा तुम कौन होते हो मुझे रोकने वाले ठरकी इन्सान 🤨✋", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️गुस्सा क्यूं हो रहे हो मेरी जान 🥺 मैं तो बस मजाक कर रहा था 😒 एक चूमा 😘 लो और शांत हो जाओ 😁", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️किया हुआ बाबू उदास क्यूं हो मुझे बताओ 🥺✌️", threadID);
   };

if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️देखों जानू बात किया करो भेंस की तरह हम्म्म हम्म्म मत किया करो 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️अरे बाबू रोते नही", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️किया हुआ बाबू तबीयत खराब है किया 😢 मुझे बताओ मैं अभी मेडिसन 💊💉 ले आता हूं 😇", threadID);
   };

   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("️ओय तेरा लिप्स 👄 कहा है। 🤔👈", threadID);
   };

 if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️आंख क्यूं मार रहे हो 🥺🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️किया हुआ बाबू 🤔🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️किया हुआ भूत देख लिया किया 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️ऊपर किया देख रहे हो मेरी जान 🙂🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessag("ओले ओले मेला बाबू 😛✌️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("अरे अपने मुंह पे क्यूं मार रहे हो पागल ठरकी 😅✌️", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("️ओय होय आपका चस्मा बिलकुर बेकार हैं। 😂👈", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("ज्यादा मत हसो वरना दांत तोड़ दूंगा 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😐")) {
     return api.sendMessage("🤨🤨🤨🤨🤨", threadID);
   };

   if ((event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("होंठो पर हसी 😁 आँखो मे नमी है 🤭 हर सांस कहती है 🙂 बस तेरी ही कमी है। 🤤👈", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("मैं अच्छा हूं आप कैसे हो मेरी जान 😇☺👈", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("ओय चीड़ा रहे हो मुझे 🙁👈", threadID);
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("I LOVE YOU TOO MARI JAN 😘", threadID);
     };

  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("BOT") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
