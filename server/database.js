    const mongoose = require('mongoose');
    console.log('bd');
    if (process.env.NODE_ENV !== 'production') {
      require('dotenv').config()
    } else {
      
    }
    
    
    const UR = 'mongodb://localhost/web'
    // const URIM = 'mongodb://admin:tuyxib4rhCdTMZrc@SG-brindis-31778.servers.mongodirector.com:51690,SG-brindis-31779.servers.mongodirector.com:51690,SG-brindis-31780.servers.mongodirector.com:51690/admin?replicaSet=RS-brindis-0&ssl=true'
    // const MONGO_DB_URI = 'mongodb+srv://admin:abc.52106@cluster0-5cmep.mongodb.net/test?retryWrites=true&w=majority'
    
    /*const MongoClient = require('mongod').MongoClient();
    const uri = "mongodb+srv://admin:abc.52106@cluster0-5cmep.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });*/
    
    
    
    mongoose.connect(UR, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((db) => {
        console.log('DB is connected ' + db);
    }).catch((err) => {
        console.error(err);
    });
    
    module.exports = mongoose;