const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169644468";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_01_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2TERaYkF6TU5NcktxN2FMcDROWmlncDFBeHJTQllObmFHbUNaMVJyRDUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIOGtMRHRaV1JLV2E2aFRiZ0JsZEJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2MTA2YWI1LTRhMDAtNDIwNC1hZWZhLTU3YzQ2NjMzNWZmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxOTcsXG4gICAgICAyMzQsXG4gICAgICA5MixcbiAgICAgIDE2MSxcbiAgICAgIDQyLFxuICAgICAgMTUsXG4gICAgICAzLFxuICAgICAgMTIyLFxuICAgICAgMTU0LFxuICAgICAgMTkzLFxuICAgICAgMTM3LFxuICAgICAgNDcsXG4gICAgICAzNixcbiAgICAgIDM5LFxuICAgICAgMjM2LFxuICAgICAgMjA4LFxuICAgICAgODYsXG4gICAgICAyMzcsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgODksXG4gICAgICAyMDIsXG4gICAgICAxMTMsXG4gICAgICAxMjMsXG4gICAgICAyMDMsXG4gICAgICAyMjksXG4gICAgICAxMzQsXG4gICAgICAxMzMsXG4gICAgICAxMDksXG4gICAgICAxODgsXG4gICAgICAyMjIsXG4gICAgICA3LFxuICAgICAgMTU1LFxuICAgICAgMTc0LFxuICAgICAgMTQ2LFxuICAgICAgMTk4LFxuICAgICAgOTcsXG4gICAgICAxMjMsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTloxWEQ1OEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjk2NDQ0Njg6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXSVNET00gRU5URVJQUklTRVNcIixcbiAgICBcImxpZFwiOiBcIjE4MzQ4NTcxNzMxOTcwNjoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRDlwclVGRU9XNThMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitvVzdheFMvL0NJQS9vamI4OWwxNDhsd2pKSENxbGlWVFdydTBhVFdXVWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2dsTzMzcUlGdkJ2cHRpZVZzVGMxZENjNTAvUGF3MzJ2VmFEcEE2N0JRa1dzbGFSYVR6VUplLzE1d29yb0x4Z3ZGTmM1WUhmTlNYVFVOU1lBNzhnRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWpxMGFnL09uMGlFL1pPbGJ0SGdkVldhUFdWZXFqaUtoalNNMlhJUUhTOG8wUVJSL1BybmdrU3hURWlrK1EwZkZMUXY4MTRWc0dWa0NHdVI1OUpnaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2OTY0NDQ2ODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc3OTg1MDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
