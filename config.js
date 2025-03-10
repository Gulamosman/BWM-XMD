const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5WVa4+iWBCG/8v5qj1ykYsmnSwXUVAEvIFuNpsDHC5yFQ4iTvzvG9ru9CQ7M9vLJwKct96qeqr4DvIirtESdWD6HZRVfIUY9be4KxGYArEJAlSBIfAhhmAKEsHfLS7OJWrYvFXXRcAvcoFVCDUJGtW8ju77xuNkY12Q1it4DEHZuGns/Ubw5mJfdkeCSLeUpis+5VgKSs8dJzOkVxqFmOlzYoxzrzu+gkevCOMqzsNZGaEMVTBdos6EcfU1+4N5PiDPy0gOS20cO26crghHO23awh405r1tNvL+knEbP+G/Zn9enJWdzjd7M6ERNOeV2XZj1b6oqTn2dX3U6lDNrlKeifun/ToOc+SrPspxjLsv1/0yCw635np0ypRJV7lKprbNamSt8TsVn5m9dGJOC2N21oj2a8bzg8donoWoiK5S1pO03b7FlDtGRuseyUTdwoLgK349UsIfjZvVByvJ/6l7Iisp5kof7payKipGYIQjUyjCweqw52fyLbkPeOZ4MZO9/jX7hno4BubWGY+2PimeuNnqlB67MCN3MrffWbvkMr9YkSliofi0D3FT/c4lS9HxzCjtRZnEztqTVnntiSfZ6joodtzEWOtzdu5aJDUS916LrseWu6yXSoVGd3vg7M6OPqK5Edwed6nXlVIr21stal/fMkpQp/pgSj6GoEJhXOMK4rjI+2cTfgigf90ir0L4rbogxGLE0hTjaIVy2fuNDW8nytPv8gZTS0VnKpfYjrC7bRzvFQxBWRUeqmvkL+IaF1Wno7qGIarB9M+3RvU5VygrMNJiH0wBxbDcmOAIgmKYP+pvbQRxDcvyW44wGIKgKjIdgSmuGjQEbwfGJKPMKJanJJLgFEUSFYJjJJYlSEHiOJbvM8yeQXdxhmoMsxJMSW5MMjzPs9zjryHI0Q0/8emTpskhCOKqxvu8KdMC+h9sfbyEnlc0Od52uSf1N6gCU+LzMcI4zsO6z6zJYeVF8RVJfR5gGsC0Ro8h8NE19lCvB7aubVXs33gHEYdyvCDhkT1YfeWiIn9+wvEcYliWfZmQNPky9ujgZeJ6xAvNIZ8LeNqjfBL05XhObn/mlyBpN4HDh7Qg+EO5iryDeUOESmWKaSRvMDwJQBXyP6rsQi9pyl2RoPw3usrcWPrnjj7LHB1xuYGSfI2tzC+X+x90n2SB6ffPbSkVfq93GluTw5w1Qd+tPs6/aJj+hIcc9h8Do85g3kd5b0F/3kcYxmkNpkBarrIrrOWZaWybajyfC7NQkEIBfLbsYwKfiEcu9ObqsQwcxx6EZqOlNDPISaFlF/Iiuy+6WbfxQzThnePrT0TAFNyb2FvanQ29wyioVMmdnWKCP+yNy029WaFkVet0HlO3K+IO4eweChtuyYa4tUzdGCyNyu5cbqOUdkTTtoyjItLiiSi89tGe6PwYzJVv/EJZulru3xRGYxlrlK6Y/Wi2NhuvKc3aDvyNstGILONrceLPkk6I2LQatSEfnWJESWi1mCk34eodoc5sch9S5/fd8Lab0vd/Qvw+tk/Qghi9rdj3HvxXqz6RJx7DHyTed/YvsBKPNpWL8XzpkCR5LWQuPvmDoJxYuhG1N6a+8ZGeOMfFNVAo8OhnuUwhDooqA1NQZy4EQ5DCGgufI/uzLTAegqwTynKLIf6YdCD014IqweMfviBjSYsIAAA=',
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

