import TodoComponent from "../todo-component/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getTodo} from "../../services/api.service.ts";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        getTodo()
            .then((value: ITodo[]) => {
                setTodos(value);
            })
    }, [])
    return (
        <>
            {todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)}
        </>
    );
};

export default TodoComponents;