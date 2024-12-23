const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "VrFzEQQD#6QouNwFE6UxPbdvhKSa5yiR1B9JLrTzOQccI3tu8dcU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/zxPtLwb/FB-IMG-17328242694165669.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 👋 i am ☠️PAIN☠️, I am alive!!!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
