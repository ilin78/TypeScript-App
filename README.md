# TypeScript-App

### 1. Install

Установка в существующее приложение React:

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest 
```

### 2. useRef и useState работа с Input

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
    
### 3. Передача функции в компонент
   
1. Вариант записать все в строку

    Для этого необходимо явно указать, что ожидать:
    
кампоненту ```<{}>``` - объект, которая содержит () - функцию типа void и что внутри этой функции принимает title - тип string
    
```tsx
export const TodoForm: React.FC<{onAdd(title: string):void}> = (props) => {}
```
    
2. Вариант задать interface и затем передать в скобки  ``` <TodoFormProps> ```
    
```tsx 
interface TodoFormProps {
    onAdd(title: string) : void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {}

```
    
### 4. Передача параметров в функцию
    

Из interface будет определять тип всех параметров и передаваться в массив newTodo + ...todos

    
```tsx 
    interface ITodo {
    title: string
    id:number
    complited: boolean
}

const App:React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const addHandler = (title: string) => {
    const newTodo = {
        title: title,
        id: Date.now(),
        complited: false
    }
    setTodos([newTodo, ...todos])
    // console.log('Add New Todo', title);
}
```
