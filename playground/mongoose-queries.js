const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '599c40a823689d02169060eb';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// } 

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findByid(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
    
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('599c40a823689d02169060eb').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
