import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
    const todos = [{ id: '1', text: 'Finsh!' }];

    return (
        <React.Fragment>
            <NewTodo />
            <TodoList items={todos} />
        </React.Fragment>
    );
};

export default App;
