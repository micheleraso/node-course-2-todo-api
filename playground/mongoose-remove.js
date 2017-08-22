const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id:'599c4c4ebd9a980e797285c9'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('599c4c4ebd9a980e797285c9').then((todo) => {
    console.log(todo);
});
