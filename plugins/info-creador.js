import fs from 'fs'
function handler(m, { conn }) {
let text = `
*—◉ LOS NUMEROS DEL TEMA TAINUX 𝙴𝚂 wa.me/573125484672 OWNER PRINCIPAL ANDREA wa.me/573161901631ANTONIO TEAM TAINUX *
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙾𝚆𝙽𝙴𝚁',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu.jpg"),
sourceUrl: `https://wa.me/573125484672`}}})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
