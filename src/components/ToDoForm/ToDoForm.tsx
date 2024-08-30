import './ToDoForm.module.css';
import { Todo } from '../../interfaces.ts';
import { MouseEventHandler, useState } from 'react';
export function ToDoForm(props: { onSubmit: (todoText: string) => void }) {
    const [text, setText] = useState('');

    const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onSubmit(text);
        setText('');
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <form>
            <input
                type="text"
                className="formInput"
                value={text}
                onChange={onChangeHandler}
            ></input>
            <button onClick={onSubmitHandler}>Submit</button>
        </form>
    );
}
