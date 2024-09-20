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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_51_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICA1LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwLFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwienhjb2wySFdrb3ViVGp5cm95R25laHFqa3VLVWlCRE9pY3RxemVKclE0Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRHhjTVJLandTSk9Gd3pySjBFUzRIUVwiLFxuICBcInBob25lSWRcIjogXCJhOWQwMzgwMC0zNThjLTQ4NGUtOTM4MC0xZmU2Yjc3YTM5MTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDI3LFxuICAgICAgMixcbiAgICAgIDE5MCxcbiAgICAgIDg1LFxuICAgICAgMTcyLFxuICAgICAgNDIsXG4gICAgICAzLFxuICAgICAgODAsXG4gICAgICA5LFxuICAgICAgMTksXG4gICAgICA1MCxcbiAgICAgIDkxLFxuICAgICAgMjI4LFxuICAgICAgOTIsXG4gICAgICAzMyxcbiAgICAgIDE4NCxcbiAgICAgIDUxLFxuICAgICAgMTQ0LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgNjAsXG4gICAgICA4LFxuICAgICAgMTE3LFxuICAgICAgMjA4LFxuICAgICAgMjQ2LFxuICAgICAgMTMsXG4gICAgICAxMDYsXG4gICAgICAxMTAsXG4gICAgICAxMjgsXG4gICAgICAxNSxcbiAgICAgIDksXG4gICAgICAyNDYsXG4gICAgICAxLFxuICAgICAgMTA5LFxuICAgICAgMTIxLFxuICAgICAgNjMsXG4gICAgICAxNzgsXG4gICAgICAyMTAsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzYxQUdTNVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjU0NzQ3MzU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImxpbF9wb3N0XCIsXG4gICAgXCJsaWRcIjogXCI2ODk0MzMwMTYxMTU5MTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015OWo4b0RFS0NMdGJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL2RsaEV5ajlWbm1SRWNhcWRoTW5qd2NvdllsUzFVeGV3RTJqOHpoZEx5RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuekJuanlnOGs3OGNyR1A3S0tlL2ZDUktNakxYM0tsYUlZRVZYQnY2bjFwcmY2QkFUWTVpRnNsT3R0dzJYRWtjd21JYW9DaytmZGZObkFnam1hazhBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsNURNTzFPOXFOcGdtQ1hxdVp1bXpxTkFwU1lySEVlTlBwU09WRXVrVkhCVU90SWRoOHJaQkt5eGVXcUxnamZKeURWdnpsNzlVNjA4NU51TkJqeFRoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY1NDc0NzM1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4MjU4OTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEZjFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURmMS5qc29uIjogIntcImtleURhdGFcIjpcImxuZ0FvNllzMXMxUFhwbmNhdFFXYlRlL1NXWStyNzdkb25NclpWanViWTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTYwNzQ5MjU5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "SHINA😎",


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
