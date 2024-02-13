import {useEffect, useState} from "react";
import {Todo} from "../types/todo.ts";
import {data} from "../data/todo.ts";

export default function useTodo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : data;
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos]);
    const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) => prevTodos.map(todo => (
            todo.id === id ? {...todo, completed} : todo
        )))
    }


    function addTodo(title: string) {
        setTodos(prevState => [
            {
                id: Date.now(),
                title,
                completed: false,

            }, ...prevState
        ])
    }

    function deleteTodo(id: number) {
        setTodos(prevState =>
            prevState.filter(todo => todo.id !== id)
        )
    }

    function deleteAllCompleted() {
        setTodos(prevState => prevState.filter(todo => !todo.completed))
    }

    return {
        deleteTodo,
        deleteAllCompleted,
        setTodoCompleted, todos, addTodo
    }
}