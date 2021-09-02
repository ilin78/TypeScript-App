# TypeScript-App

### 1. Install

Установка в существующее приложение React:

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest 
```

### 2. Указываем React.FC и задаем тип <string>

```jsx
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
