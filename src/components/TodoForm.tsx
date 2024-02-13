import React, {useState} from "react";

interface TodoFormProps {
    onSubmit: (title: string) => void,
}

const TodoForm = ({onSubmit}: TodoFormProps) => {
    const [input, setInput] = useState("")
    console.log(input)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }


    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text"
                   className="grow border border-gray-400 rounded-sm-md p-2"
                   placeholder="what do you want to do?"/>
            <button type="submit" className=" w-16 rounded-e-md  hover:bg-zinc-700 bg-zinc-950 text-white">Add</button>
        </form>
    );
};

export default TodoForm;