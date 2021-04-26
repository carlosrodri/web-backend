    const mongoose = require('mongoose');
    console.log('bd');
    if (process.env.NODE_ENV !== 'production') {
      require('dotenv').config()
    } else {
      
    }
    
    
    const UR = 'mongodb://localhost/web'
    const uri = "here your production db url";

    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((db) => {
        console.log('DB is connected ' + db);
    }).catch((err) => {
        console.error(err);
    });
    
    module.exports = mongoose;