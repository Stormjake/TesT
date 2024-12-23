const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "h6U3xRBA#myBHlDl5gGMo7WK4MB07Kc1XvNHI7JvqZTXbWbqsAjY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/KrWVCH1/FB-IMG-17250502056703306.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 👋 i am ALIEN-X, I am alive!!!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
