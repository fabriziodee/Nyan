let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*OH MA LO VUOI USARE BENE?*\n\n📌 *TESTA DI CAZZO COSI:_*
${usedPrefix}daradmin *@tag*\n${usedPrefix}promote *rispondi ad un msg*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `⚠️ *_Il numero del fra, è sbagliato_*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `✅ *_Confermato._*`, m)
}}
handler.help = ['daradmin', 'promote']
handler.tags = ['group']
handler.command = /^(promote|potere|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
