import React from 'react';

import { Todo } from '../todo.modal';

interface TodoListProps {
    items: Todo[];
}

const TodoList: React.FC<TodoListProps> = props => {
    const { items } = props;

    return (
        <ul>
            {items.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};

export default TodoList;
