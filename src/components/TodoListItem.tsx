import {Todo} from "../types/todo.ts";
import {Trash2} from "lucide-react";

interface TodoListItemProps {
    todo: Todo,
    onCompleted: (id: number, completed: boolean) => void,
    onDelete: (id: number) => void,
}

const TodoListItem = ({todo, onCompleted, onDelete}: TodoListItemProps) => {

    return (
        <div className="flex items-center gap-1">
            <label
                className="flex items-center border-4 gap-2  border-green-950 hover:bg-green-200 p-2 rounded-md grow">
                <input onChange={(e) => onCompleted(todo.id, e.target.checked)} type="checkbox" checked={todo.completed}
                       className="scale-125"/>
                <span className={todo.completed ? "line-through text-black" : ""}>{todo.title}</span>
            </label>
            <button className="p-2" onClick={() => onDelete(todo.id)}>

                <Trash2 size={20} className="text-zinc-900"/>
            </button>
        </div>
    );
};

export default TodoListItem;