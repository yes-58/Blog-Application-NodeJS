const mongoose = require("mongoose")
mongoose.set("strictQuery",true);
uri = "mongodb+srv://dbuser:dbuser@blogify.vhc8o.mongodb.net/blogify?retryWrites=true&w=majority&appName=blogify"

async function connectToMongoDb() {
    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = {connectToMongoDb};