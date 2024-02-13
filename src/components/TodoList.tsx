import TodoListItem from "./TodoListItem.tsx";
import {Todo} from "../types/todo.ts";


interface TodoListProps {
    todos: Todo[],
    onCompleted: (id: number, completed: boolean) => void,
    onDelete: (id: number) => void,
}

const TodoList = ({todos, onCompleted, onDelete}: TodoListProps) => {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1
    })
    return (
        <>
            <div className="space-y-2">
                {todosSorted.map(todo => (
                    <TodoListItem key={todo.id} onCompleted={onCompleted} todo={todo} onDelete={onDelete}/>
                ))}
            </div>
            {todos.length === 0 &&
                <p className="text-center text-sm text-zinc-900 font-bold">No todos yet. Please add one.</p>}
        </>

    );
};

export default TodoList;