import React from "react";

import { ITodo } from '../interface';

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void     // 1 синтаксис
    onRemove: (id: number) => void  // 2 синтаксис
    // onRemove?: (id: number) => void  // 3 синтаксис - можно указывать необходимость передачи (? означает не обязательно)
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    if(todos.length === 0) {
        return <h4>Пока дел нет!</h4>
    }

    return (
        <ul>
            {todos.map((todo) => {
                return <li key={todo.id}>
                    <label>{todo.completed}
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={onToggle.bind(null, todo.id)}
                        />
                        <span>{todo.title}</span>
                        <button onClick={() => onRemove(todo.id)}>delete</button>
                    </label>
                </li>
            })}
        </ul>
    )
}