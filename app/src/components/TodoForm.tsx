import React, { useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string) : void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);
    
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // TS считает, что ref может быть null, поэтому устновим ! знак
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return <div>
        <div>Введте название дела</div>
        <input
            onKeyPress={keyPressHandler}
            ref={ref}
            type="text"
        />
    </div>
}