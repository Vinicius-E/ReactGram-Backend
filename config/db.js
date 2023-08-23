const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    // sem o AWAIT EXIBE NORMALMENTE CONECTOU AO BANCO
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.trnnsgg.mongodb.net/` 
    );
    console.log("Conectou ao Banco!");
    return dbConn;
  
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;

// connection
