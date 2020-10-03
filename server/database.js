    const mongoose = require('mongoose');
    console.log('bd');
    if (process.env.NODE_ENV !== 'production') {
      require('dotenv').config()
    } else {
      
    }
    
    
    const UR = 'mongodb://localhost/web'
    const uri = "mongodb+srv://admin:abc.52106@mywebpage.5cmep.mongodb.net/MyWebPage?retryWrites=true&w=majority";

    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((db) => {
        console.log('DB is connected ' + db);
    }).catch((err) => {
        console.error(err);
    });
    
    module.exports = mongoose;