const globealvariables = require('./config/configuration')
const express = require('express');
const mongoos = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const { mongoDbUrl, PORT } = require('./config/configuration')
const flash = require('connect-flash')
const session = require('express-session')
const { globalVariables } = require('./config/configuration')
const methodOveride = require('method-override')
const app = express();
const firebase = require('./config/firebase')
require('dotenv').config()


/*Configure mongoose to connect to mongodb */
mongoos.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response => {
        console.log('MongoDB Connected Successfully');

    })
    .catch(err => {
        console.log('Database Connection Failed');

    })


/*config express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'public')))


/*CONFIGURE SESSION AND FLASH */
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use(globalVariables);

/*File Upload Middleware */

/*set up views engines to view handle bars */
app.engine('handlebars', hbs({ defaultLayout: 'default' }));
app.set('view engine', 'handlebars');

/* Methode overide */
app.use(methodOveride('newMethod'));
/*Routes */
const defaultroutes = require('./routes/defaultroute')
const adminroutes = require('./routes/adminroutes')
const userroutes = require('./routes/userroutes')

app.use('/', defaultroutes)
app.use('/admin101', adminroutes)
app.use('/user', userroutes)


app.listen(PORT||3000, () => {
    console.log(`Server is running on port number ${PORT}`);
})