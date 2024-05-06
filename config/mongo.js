const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');
        console.log('Database name:', mongoose.connection.name);
    } catch (error) {
        console.error('Database connection failed');
    }
}

module.exports = dbConnect;
