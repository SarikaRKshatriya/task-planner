console.log('Running app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const todos = require('./todos.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'addTodo') {
    todos.addTodo(argv.todo);
} else if (command === 'deleteTodo') {
    var todoDeleted = todos.deleteTodo(argv.todo);
    var message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
} else if (command === 'readTodo') {
    var todo = todos.readTodo(argv.todo);
    if (todo) {
        console.log('Great! The todo was found.');
        todos.logTodo(todo);
    } else {
        console.log('The todo was not found.');
    }
} else if (command === 'listTodos') {
    var allTodos = todos.listTodos();
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Invalid command.');
}