const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// // EX 1
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Message: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was change. Do not trust!!');
// }


// // EX 2
// var data = {
//     id: 10
// };

// //https://jwt.io
// var token = jwt.sign(data, '123abc');
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded:', decoded);

// // EX 3
var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$SOfTt.89tMGoRhkNl7JOk.93GP2FbS5UqJvLnHVhyqam51PFt84ZS';

bcrypt.compare(password, hashedPassword, (err, res) => {
    if(err) {
        console.log(err);
    }
    console.log(res);
});