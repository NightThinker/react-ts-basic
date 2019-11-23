import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
    const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

    const addTodoHandler = (text: string) => {
        console.log(text);
        setTodos([{ id: Math.random().toString(), text: text }]);
    };

    return (
        <React.Fragment>
            <NewTodo onAddTodo={addTodoHandler} />
            <TodoList items={todos} />
        </React.Fragment>
    );
};

export default App;
