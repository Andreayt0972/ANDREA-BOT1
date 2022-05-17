let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de ANDREA-BOT - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/KBv52eah0Tk0EaJ3MUx74W

*2.-* https://chat.whatsapp.com/IYl8F2b6XIh1YIZmO0w0va
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
