import {ITodo} from "../../models/ITodo.ts";
import '../todo-component/TodoComponent.css'

interface TodoComponentProps {
    item: ITodo
}

export const TodoComponent = ({item}: TodoComponentProps) => {
    return (
        <div>
            <h3 className={item.completed ? 'completed' : 'no-completed'}>{item.todo}</h3>
        </div>
    );
};