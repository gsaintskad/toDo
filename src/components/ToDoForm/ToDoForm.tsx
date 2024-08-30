import styles from './ToDoForm.module.css';
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
        <form className={styles.ToDoForm}>
            <input
                type="text"
                className={styles.formInput}
                value={text}
                onChange={onChangeHandler}
                placeholder={'Enter a thing to do...'}
            ></input>
            <button onClick={onSubmitHandler} className={styles.formButton}>Submit</button>
        </form>
    );
}
