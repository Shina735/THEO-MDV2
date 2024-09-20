const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "" SUHAIL_08_53_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNQVFNCR2dOdU8rR2ZYSVZPR3VxZE9Ud20rLys4MW5qUnQ3Q1JGcTUvcGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIngteXlaSDVQU3dPV0c4Wlhkc3FDaGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTg1MmZlNTYtMjNjMS00ZDIwLTk0NTUtOTcxZTc1ODhmOTJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDEyMixcbiAgICAgIDIxMyxcbiAgICAgIDEzOSxcbiAgICAgIDExNyxcbiAgICAgIDkzLFxuICAgICAgMjIsXG4gICAgICAxNTMsXG4gICAgICAxOTAsXG4gICAgICAyMjIsXG4gICAgICAxOTIsXG4gICAgICA1MyxcbiAgICAgIDk0LFxuICAgICAgMTA2LFxuICAgICAgNzYsXG4gICAgICA1MCxcbiAgICAgIDI4LFxuICAgICAgMSxcbiAgICAgIDcxLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMzIsXG4gICAgICAxMjksXG4gICAgICAxMzQsXG4gICAgICAyMixcbiAgICAgIDE5OCxcbiAgICAgIDg2LFxuICAgICAgMTgsXG4gICAgICAxMDQsXG4gICAgICAxMzQsXG4gICAgICAxODQsXG4gICAgICAxNjUsXG4gICAgICAxNjIsXG4gICAgICA0NyxcbiAgICAgIDI0LFxuICAgICAgMTQ2LFxuICAgICAgMTk4LFxuICAgICAgOTQsXG4gICAgICAxNDUsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlM2RUdSTVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjU0NzQ3MzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImxpbF9wb3N0XCIsXG4gICAgXCJsaWRcIjogXCI2ODk0MzMwMTYxMTU5MToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ011OWo4b0RFTzd2dExjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL2RsaEV5ajlWbm1SRWNhcWRoTW5qd2NvdllsUzFVeGV3RTJqOHpoZEx5RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJneFdSajVHYUlZdExVQ3dCVXk5N1dqcmtiUzA5bElZSjExbnl4dEV6Zm1YbTZqSnBNSkhNVVQyeHNmR1k2eDBjdHpLREVVOEdEY1hiMkFvYUpPUTBBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKZE8rb3pKMDQ5bk9HakIxdGFtWTd5NGUyZmZmcm42UE9MUFJSTjFSVVFrOUxWYyt3Mmk1TTE4Z2pTdXdrbURaWURYTHRUci80dlJyWFNvOGdYdVNCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY1NDc0NzM1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4MjIzODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


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
