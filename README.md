# TypeScript-App

### 1. Install

Установка в существующее приложение React:

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest 
```

### 2. useRef и useState

#### Указываем React.FC и задаем тип в useState <string>

```tsx
import React, { useState } from 'react';

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('')

    // считываем Input
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    // при нажатии Enter производим какое-то действие, затем очищаем ввод
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(title)
            setTitle('')
        }
    }

    return <div>
        <div>Введте название дела</div>
        <input 
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            value={title}
            type="text" 
        />
    </div>
}
```
    
#### Этот же функционал на useRer
```tsx
import React, { useRef } from 'react';

export const TodoForm: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);


    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // TS считает, что ref может быть null, поэтому устновим ! знак
            console.log(ref.current!.value)
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
```