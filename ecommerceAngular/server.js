const express = require ('express');
const bodyParser = require ('body-parser');
const {User} = require('./models');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log('server running on port ${PORT}'));