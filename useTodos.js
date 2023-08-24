import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initializer = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], initializer);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const onAddTodo = (value) => {
        const action = {
            type: 'Add todo',
            payload: value
        }

        dispatch(action);
    };

    const onDeleteTodo = (value) => {
        const action = {
            type: 'Delete todo',
            payload: value
        }

        dispatch(action);
    };

    const onToggleTodo = (value) => {
        const action = {
            type: 'Toggle todo',
            payload: value
        }

        dispatch(action);
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        onAddTodo,
        onDeleteTodo,
        onToggleTodo
    }
}