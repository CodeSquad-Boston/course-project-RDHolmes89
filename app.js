require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/index-routes');



app.set('view engine', 'ejs');

require('./config/connection');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});