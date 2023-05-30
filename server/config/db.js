const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //     poolSize: 10,
    //     authSource: "admin",
    //     user: "admin",
    //     pass: "password",
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false 
    // });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;