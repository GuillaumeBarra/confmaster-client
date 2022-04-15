const {admin} = require('../utility/admin');

const firebaseConfig = require('../utility/firebaseConfig');

//const firebase = require('firebase');
//firebase.initializeApp(firebaseConfig);

exports.signup = (request, response) => {
    const newUser = {
        email: request.body.email,
        password: request.body.password,
        confirmPassword: request.body.confirmPassword,
        user: request.body.user
    };

    //TODO: Add data validation
    //TODO: give default profile picture on signup

firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then(data => {
    return response.status(201).json({message: `user ${data.user.uid} signed up successfully`});
    }).catch(error =>{
        console.error(error);
        return response.status(500).json({error: error.code});
    });
 }

 //Add optional information to profile
 //exports.addUserInfo = (request, response) => {
     //let userInfo = reduceUserInfo(request.body);
 //}

 //Add profile picture
 //TODO: Add validation for login before users can upload pictures
 exports.uploadPicture = (request, response) => {
    let imageName;
    let imageUpload = {};

     const BusBoy = require('busboy');
     const path = require('path');
     const os = require('os');
     const fs = require('fs');

     const busboy = new BusBoy({headers: request.headers}); //use busboy for image handling

     busboy.on('file', (fieldname, file, filename, encoding, mimetype) => { //instantiate busboy
        if(mimetype !== 'image/jpeg' && mimetype !== 'image/png'){
            return response.status(400).json({error: 'Please submit a jpeg or png file'});
        }
        //get image format
        const imageExtension = filename.split('.')[filename.split('.').length-1]; //split filename at every dot and get the last element
        const imageName = `${Math.round(Math.random()*1000000)}.${imageExtension}`; //give image a random name to save
        const filePath = path.join(os.tmpdir(), imageName);
        imageUpload = {filePath, mimetype}
        file.pipe(fs.createWriteStream(filePath));
     });
     busboy.on('finish', () => {
         admin.storage().bucket().upload(imageUpload.filePath, {
             resumable: false,
             metadata: {
                 metadata: {
                     contentType: imageUpload.mimetype
                 }
             }
         }).then(() => {
             const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageName}?alt=media`
             return debug.admin.firestore().doc(`/users/${request.user.handle}`).update({imageUrl});
         }).then(() => {
             return response.json({message: 'Image uploaded succesfully!'})
         }).catch(error => {
             console.error(error);
             return response.status(500).json({error: error.code});
         });
     });
     busboy.end(request.rawBody);
}