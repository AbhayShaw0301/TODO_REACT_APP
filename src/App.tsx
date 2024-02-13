import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoSummary from "./components/TodoSummary.tsx";
import useTodo from "./hooks/useTodo.ts";

const App = () => {
    const {todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompleted} = useTodo();
    return (
        <main className="py-10 h-screen space-y-5 overflow-y-auto">
            <h1 className="text-3xl font-bold text-center">Your Todos</h1>
            <div className="max-w-lg mx-auto bg-slate-500 rounded p-5 space-y-6">
                <TodoForm onSubmit={addTodo}/>
                <TodoList todos={todos} onCompleted={setTodoCompleted} onDelete={deleteTodo}/>
            </div>
            <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted}/>
        </main>
    );
};

export default App;