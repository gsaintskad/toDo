import styles from './TodoItem.module.css';
import { useState } from 'react';
import { Todo } from '../../interfaces.ts';

export function TodoItem(
    props: { todo: Todo; isDone?: boolean; onDelete: (toDo: Todo) => void } = {
        todo: { text: 'something went wrong', id: 777 },
        isDone: false,
        onDelete: (toDo: Todo) => {},
    }
) {
    const [todo, setTodo] = useState(props.todo);
    const [isDone, setIsDone] = useState(props.isDone);
    const toDoItemClickHandler = () => {
        console.log(`${todo.text} clicked!`);
        // k setIsDone(!isDone);
        props.onDelete(todo);
    };
    return (
        isDone || (
            <div
                className={styles.toDoItem}
                role="button"
                onClick={toDoItemClickHandler}
            >
                <h2>{todo.text}</h2>

                <div className={styles.buttonsHolder}>
                    <button>complete</button>
                    <button>delete</button>
                </div>
            </div>
        )
    );
}
