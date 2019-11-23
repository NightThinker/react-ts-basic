import React from 'react';

import { Todo } from '../todo.modal';
import './TodoList.css';

interface TodoListProps {
    items: Todo[];
    onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    const { items } = props;

    return (
        <ul>
            {items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => props.onDeleteTodo(todo.id)}>
                        DELETE
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
