import React, { useRef } from 'react';

const NewTodo: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = inputRef.current!.value;
        console.log('enteredText', enteredText);
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
