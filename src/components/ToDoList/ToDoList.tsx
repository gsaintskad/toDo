import './ToDoList.module.css';
import { Todo } from '../../interfaces.ts';

import { ReactNode } from 'react';
import { TodoItem } from '../TodoItem/TodoItem.tsx';
export function ToDoList(props: {
    toDos: Todo[];
    onDelete: (toDo: Todo) => void;
}) {
    return (
        <div className="ToDoList">
            {props.toDos.map((toDo) => (
                <TodoItem todo={toDo} onDelete={props.onDelete} key={toDo.id} />
            ))}
        </div>
    );
}
