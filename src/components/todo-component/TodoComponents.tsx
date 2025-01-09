import {useEffect, useState} from "react";
import {ITodo, ITodoResp} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-components/TodoComponent.tsx";
import {getTodo} from "../services/api.service.ts";

export const TodoComponents = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        getTodo()
            .then((value: ITodoResp) => {
                setTodos(value.todos)
            });
    }, []);

    return (
        <>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </>
    );
};