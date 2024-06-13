const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_43_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyLFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejc2M3loZDR6T0xrYjBsTkxZOWliT0ZKM3ZLMnZJSXhjMXYvTzJ5OUZBND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1E5clVFTWVSTHlPNUw4QXA2THZIQVwiLFxuICBcInBob25lSWRcIjogXCI5ZTMwMjVhZi1kNzQ1LTRmMWEtYTIwZC0yZTUwOGM4NGE5MTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDEwOCxcbiAgICAgIDEyOCxcbiAgICAgIDE1MSxcbiAgICAgIDMzLFxuICAgICAgMTIwLFxuICAgICAgMzQsXG4gICAgICAxNzAsXG4gICAgICAxMzksXG4gICAgICA5MCxcbiAgICAgIDYwLFxuICAgICAgMjE1LFxuICAgICAgMTk1LFxuICAgICAgMTAwLFxuICAgICAgMTgyLFxuICAgICAgNTMsXG4gICAgICAxMDIsXG4gICAgICAxOTcsXG4gICAgICAxMTUsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAzNyxcbiAgICAgIDMyLFxuICAgICAgMTAzLFxuICAgICAgOTgsXG4gICAgICAyMTUsXG4gICAgICAxOCxcbiAgICAgIDE3NCxcbiAgICAgIDIwMixcbiAgICAgIDE0OCxcbiAgICAgIDEyMixcbiAgICAgIDM3LFxuICAgICAgMTAwLFxuICAgICAgMjA4LFxuICAgICAgMjQyLFxuICAgICAgMzcsXG4gICAgICA0OCxcbiAgICAgIDEzOCxcbiAgICAgIDc0LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNTOVRFQUxHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI1MjIwMjg3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTUyMDAyODkwOTU5Nzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0phVnJzZ0dFSythcTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0RxR2NxMlp3c25nMjRmd2pXY245Z2RMTFFmekdoRVR1dEc3Nlp0UUt5dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaTEtKQk56UklIelhrcldwMEd5OWpNVU1vWDNxWjdOL29DMEFQaGlHMXN2L2RxQTB2b1VhLzIwbEV4MDBscm9ud2VHQ25wN09DS0pWOGJzaFhHWllDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIY0htclJrTlFqVGQvRlg2WFlZSEFxSVA0RWtRUlhydmtVeGs3cldVU3VidExsQjRIcWZKMjYzM2RuWThSUjZ4V3NBcnhQaHc2NFkveTdCVjJrZEJoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI1MjIwMjg3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyNzUzNzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
