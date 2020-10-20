const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Enable EJS
app.set('view engine', 'ejs');

// Enable body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Enable public folder
app.use(express.static('public'));


// Start listening
app.listen(3000, () => {
   console.log('Server started listening on port 3000');
});