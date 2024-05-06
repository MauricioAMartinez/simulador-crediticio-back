require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./config/mongo.js');
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' , methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'] }));
app.use(express.json());

app.use('/', require('./app/routes'));

dbConnect();

app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`); 
});
