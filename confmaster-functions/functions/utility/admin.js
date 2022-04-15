const admin = require('firebase-admin'); //import firebase for getting/posting data to the database

admin.initializeApp();


module.exports = {admin};