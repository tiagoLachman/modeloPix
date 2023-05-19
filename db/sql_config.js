require('dotenv').config();

const sqlConfig = {
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    server: process.env.SERVER_DB,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}



module.exports = sqlConfig