import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.modal';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        console.log(text);
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Math.random().toString(), text: text },
        ]);
    };

    const deleteTodoHandler = (todoId: string) => {
        console.log('id', todoId);
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };

    return (
        <React.Fragment>
            <NewTodo onAddTodo={addTodoHandler} />
            <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
        </React.Fragment>
    );
};

export default App;
