require('dotenv').config();

const app = require('./src/app');
const connectTODB = require('./src/config/database');

connectTODB();





app.listen(4000, () => {
    console.log('Server is running on port 4000');
});