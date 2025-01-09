import {ITodo} from "../../models/ITodo.ts";
import "../todo-component/TodoComponent.css";

interface TodoComponentProps {
    item: ITodo
}

const TodoComponent = ({item}: TodoComponentProps) => {
    return (
        <div className='ml-2.5'>
            <h3 className={item.completed ? 'complete' : 'no-complete'}>{item.title}</h3>
        </div>
    );
};

export default TodoComponent;