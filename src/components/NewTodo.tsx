import React, { useRef } from 'react';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = inputRef.current!.value;
        console.log('enteredText', enteredText);
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={addTodoHandler}>
            <div>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type='text' id='todo-text' ref={inputRef} />
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    );
};

export default NewTodo;
