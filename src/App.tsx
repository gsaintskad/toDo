import { useState } from 'react';
import { ToDoList } from './components/ToDoList/ToDoList.tsx';
import { ToDoForm } from './components/ToDoForm/ToDoForm.tsx';
import { TodoItem } from './components/TodoItem/TodoItem.tsx';
import { Todo } from './interfaces.ts';
import './App.css';

function App() {
    const [toDos, setToDos] = useState<Todo[]>([]);
    const [lastId, setLastId] = useState<number>(0);

    const onSubmit = (todoText: string) => {
        try {
            if (!todoText) throw new Error('Please enter a thing to do');
            const toDo: Todo = {
                text: todoText,
                id: lastId,
            };
            setLastId(toDo.id + 1);
            setToDos([...toDos, toDo]);
        } catch (err) {
            alert(err);
        }
    };
    const onDelete = (toDo: Todo) => {
        setToDos(toDos.filter((t: Todo) => t.id !== toDo.id));
    };
    return (
        <>
            <h1>To do project</h1>
            <ToDoForm onSubmit={onSubmit} />
            <ToDoList toDos={toDos} onDelete={onDelete} />
        </>
    );
}

export default App;
