const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb+srv://soumyak:Soumyak_2001@cluster0.5yll1.mongodb.net/authentication?retryWrites=true&w=majority");
}

module.exports = connect;