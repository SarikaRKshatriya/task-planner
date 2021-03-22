console.log('Starting todos.js');

const fs = require('fs');

var addTodo = (todo) => {
    var todos = fetchTodos();
    var todo = {
        todo
    };

    var duplicatetodos = todos.filter((todo) => todo.todo === todo);

    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};

var deleteTodo = (todoName) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.todo !== todoName);
    saveTodos(filteredtodos);

    return todos.length !== filteredtodos.length;
};

var readTodo = (todoName) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter((todo) => todo.todo === todoName);
    return filteredTodos[0];
};

var listTodos = () => {
    return fetchTodos();
};

var fetchTodos = () => {
    try {
        var todosString = fs.readFileSync('todos-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

var logTodo = (todo) => {
    console.log('------');
    console.log(`It's title is: ${todo.todo}`);
};

module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    logTodo
};