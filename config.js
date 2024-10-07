const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_11_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGQweFVNZFRDZEc0YnlpUmhEVFM1a1FKcHBwWVZINFZvK25WUWtRRGx4ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MjkyNDI4ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5MTNCNEJENDNBMUMxODY1NzU4MTdCMDM4MDkwRUVGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI4NTA4MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQyOTI0Mjg4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkIwQjBGNTg2Q0ExQUFDRUY5NEEyNkE2MEJDREEyMzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4Mjg1MDgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtqN3hKb1V6UUNXbXFTRnRjN0MzclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmNhMWRhMDEtZmExOC00MjAxLWExZGMtMzA0MDY3NGY2Nzg2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE1NyxcbiAgICAgIDU5LFxuICAgICAgODcsXG4gICAgICAyMTEsXG4gICAgICAyMixcbiAgICAgIDIwMyxcbiAgICAgIDYxLFxuICAgICAgMzIsXG4gICAgICA0NCxcbiAgICAgIDI3LFxuICAgICAgMjQ3LFxuICAgICAgMjIsXG4gICAgICA2OSxcbiAgICAgIDUwLFxuICAgICAgMTU2LFxuICAgICAgNzMsXG4gICAgICAyMTIsXG4gICAgICAxNzksXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxNTEsXG4gICAgICAyNTUsXG4gICAgICAxMDQsXG4gICAgICAyMzMsXG4gICAgICAyMyxcbiAgICAgIDIyMCxcbiAgICAgIDEwNyxcbiAgICAgIDk5LFxuICAgICAgMjUzLFxuICAgICAgMTMwLFxuICAgICAgMTUsXG4gICAgICAxNzIsXG4gICAgICA5MSxcbiAgICAgIDc4LFxuICAgICAgMTI1LFxuICAgICAgNTksXG4gICAgICA0OSxcbiAgICAgIDE2OCxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyUUNZVEJMNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDI5MjQyODgwOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQ4NjI4MjI5ODE3NjQ6NDhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+HtfCfh7BQYWvwn4e18J+HsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zVGdkTUVFSktUanJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODMxMFNvTi9NQmpDY3pGM1BoNC91SUFJRThXYzBDdG1TS3ExZE8rdjZGdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpb0ZtYndibEMyNHJ5MzJkWjExMERseXdFVEwwU2JBa09YWHA3UCtONXpSWWlGc3RQVmFWbGt6NjZyeTlwUk9YYTN3b1VjYzJOSVE0RzJKZTluMm1BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVb2lvRmpuVjdkZ3pqUUcyZU4xNXNwNWVrLzRrREZWcHZyMmRVaVUrSFgyME1BQ3prb2tGYjFkdEdoOFllTXVNUGRjcENhdlVvazhPbDBDQTdOMldpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MjkyNDI4ODA6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODI4NTA3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdDeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0N5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNVRNM3I0MFBTN2dxTGVKU2R6dkRaYWNMdXZ3eFowaUxJZE9iVkVwSStwYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ3ODMyNTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgyODUwODA3MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
