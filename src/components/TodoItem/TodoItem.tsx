import styles from './TodoItem.module.css';
import { useState } from 'react';
import { Todo } from '../../interfaces.ts';
import { RiTodoFill } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { MdOutlineDoneOutline } from "react-icons/md";

export function TodoItem(
    props: { todo: Todo; isDone?: boolean; onDelete: (toDo: Todo) => void } = {
        todo: { text: 'something went wrong', id: 777 },
        isDone: false,
        onDelete: (toDo: Todo) => {},
    }
) {
    const [todo, setTodo] = useState(props.todo);
    const [isDone, setIsDone] = useState(props.isDone);
    const onCompletion = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setIsDone(!isDone);
    };
    const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        props.onDelete(todo);
    };

    return (
        <div
            className={`${styles.mainDiv} ${isDone ? styles.doneItem : styles.toDoItem}`}
            role="button"
            onDoubleClick={onCompletion}
        >
            <div
                className={styles.todoNameHolder}
                onClick={() => setIsDone(!isDone)}
            >
                <RiTodoFill
                    className={`${styles.toDoIcon} ${styles.toDoIconSize}`}
                />
                <h2>{todo.text}</h2>
            </div>

            <div className={styles.buttonsHolder}>
                <button className={styles.toDoButton} onClick={onCompletion}>
                    <MdOutlineDoneOutline
                        className={`${styles.toDoIconSize} ${styles.toDoItemDoneIcon}`}
                    />
                </button>
                <button
                    className={styles.toDoButton}
                    onClick={onDelete}
                >
                    <ImCross
                        className={`${styles.toDoIconSize} ${styles.toDoItemDeleteIcon}`}
                    />
                </button>
            </div>
        </div>
    );
}
