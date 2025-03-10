const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVWZOyOBT9L3nV/mSRRau6ahBQEBdU3HpqHgIEjKyGIGCX/32Ktru6q75lenhKheTcc+895+YVpBkukIUaMHwFOcFXSFG7pE2OwBCMyiBABHSBDykEQ6BPNIQX2Uw1VnZ2EqLQjveHLfaCXJ5oF5cclZd+brqVw5rP4N4FeenG2PsD4HJkeE5P3A105piPpojMjqeeIwdlcRCNaNRrHJ14/qaejlfP4N4iQkxwGur5CSWIwNhCjQ0x+R59bz5VN+fxesfWodwZawuuiGM3s8NtQQY4ZtSaXpiLZ/tp9T36Zb+3ZC+ISaoX09z2NpJlzVZksqyI4zsC7HS4wa6SluSM5Qf9Aocp8k0fpRTT5tt1j2ZcrC2mJYpKgUf4bMVXuiw9opWUd8c3PjXHfLzIUp3pf4+4MClcJ9op+vIq3HrEXOmhFx0ru1O8KKoUZiwjBt402R6b1VfiNvnQSvR/6o4tKcr30bqeXWszctSTsHg5KhwxwujFU6/9W1krZ1VKSOR9j34qTnd27i5q5wQdt5wnCbZXYxJJkbJc8XuajPT9mlOgq4ef9CEtyZ9YVraN5zj1bjtth1BzVs8ShuXZMr3Lwr7J66zK5NFWZ3mzlI0iwfVR7E1uoqZQDZuHY9goYkQPtmxtO/VYn6zDy/h8rp7fMopQY/pgyN67gKAQF5RAirO03RtIXQD96wZ5BNG36oIxg5aKz9F0cZTW0mZzPrHKVTbc8KUOeM9h1zmPd/NeOdjpz6ALcpJ5qCiQb+CCZqSZo6KAISrA8O+3RrU5E5RkFE2xD4aAE0Spz0gMwwnCX8WP6gRpAfP8R4oo6IKAZMkcgSElJeqCtwsKI4qcqnFcv8+Ko74u6KP+SFJ0SWM0VdS1NsPkEdTBCSooTHIwZKU+Kww4kefu/3RBimr6kE+btMh2QYBJQbdpmccZ9D+09fETel5WpnTTpJ7aLhABQ+ZzG1GK07BoMytTSLwTviK1zQMMAxgX6N4FPrpiD7V44DwrJ+pMC5zj0yVi9rdN/6kZr9rKnbL0ccTjXR66DPfkMrz31BdF/8nlg+ApkPoDnxVFHkkBaMvxcG5757dCitOdvEVIy9VK96B/OStJPOqZ4SFk3sTwUAAiyP+osgu9qMydLELpH3A1R6iawJxcN+rMECe+Z5VYUNLaErwvuA9lgeHr57RUM7/F0wRN1VY6B9putXF+UsNQ/lkPKWwPg2WRwLSN8t6C9r6PKMRxAYZAtWbJFRaabqGqJP3JRFmFihoq4LNlHw58SPzkQm9iHvPgcNh3QrucxrzQSVmlEg3NSG5GozdrP0QD+XB8/gUIGIKihyKpd47NsmMUiT01WL+JGkWO94J6RQySQ1sSJVzr/caqFWuaR6qrejC4jqr1riLQdtmzy/MDw42VvVpuYu420Vq7fkjna7Bw71n64rgx+YC5yS7SFGm8qbNCC+zYHtfSFo9Gvc18INbKcuvmBEpmtumpq4MxaM4z+6bd6r2JiopJqtC2DKfj75qT8pgNb7Mpfn8T8LttH0ILMHobse89+K9WfUqeuXe/QLzP7N/IanTcc+kIT6wDy7LXTJPwi98J8sFqvjxVtVDU8mkeHY7GNRhz4N56OY8hDTKStF1IXAi6IIYFVT4t+4spwA26IGmUPN9QSD+cDpT2M7gC3P8F6HePE4sIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

