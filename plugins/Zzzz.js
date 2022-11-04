// JANGAN TERLALU TOLOL ANAK MUDA

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hello kak ${ye} Mau Ngapain ? 

💌 CARI SOSMED AKU YAHH ?

📮 YOU TUBE :
youtube.com/c/mrrevolt

📮 GITHUB :
github.com/funixxxx

📮 JANGAN LUPA MAMPIR :
https://rev-bot.my.id`

await conn.sendBut(m.chat, esce, '📮 DONT FORGET TO FOLLOW MY ACCOUNT', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'source code']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
