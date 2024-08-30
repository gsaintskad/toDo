import { useState } from 'react';
import { ToDoList } from './components/ToDoList/ToDoList.tsx';
import { ToDoForm } from './components/ToDoForm/ToDoForm.tsx';
import { TodoItem } from './components/TodoItem/TodoItem.tsx';
import { Todo } from './interfaces.ts';
import { TfiReload } from 'react-icons/tfi';
import { FaBucket } from 'react-icons/fa6';
import './App.css';

function App() {
    const [toDos, setToDos] = useState<Todo[]>([]);
    const [lastId, setLastId] = useState<number>(0);

    const addTodoHandler = (todoText: string) => {
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
    const deleteTodoHandler = (toDo: Todo) => {
        setToDos(toDos.filter((t: Todo) => t.id !== toDo.id));
    };
    const refreshTodoList = () => setToDos([]);
    // const completeTodoList= (e: React.ChangeEvent<HTMLInputElement>) => {}
    return (
        <>
            <h1>To do project</h1>
            <ToDoForm onSubmit={addTodoHandler} />
            {toDos.length ? (
                <>
                    <div className="buttonsHolder">
                        <button>
                            <TfiReload />
                        </button>
                        <button onClick={refreshTodoList}>
                            <FaBucket />
                        </button>
                    </div>

                    <ToDoList toDos={toDos} onDelete={deleteTodoHandler} />
                </>
            ) : (
                <h2>You don't have anything to do :)</h2>
            )}
        </>
    );
}

export default App;
