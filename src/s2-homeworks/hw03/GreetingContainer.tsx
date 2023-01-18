import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { UserType } from './HW3'
import {log} from "util";
import Greeting from "./Greeting";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}
let totalUsers : number = 0 // need to fix
let lastUserName : string = "" // need to fix
export const pureAddUser = (name: string, setError: (errorText: string)=>void, setName: (name:string)=>void, addUserCallback: (name:string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name.length === 0 || name.includes(" ") ) {
        lastUserName = ""
        setError("Ошибка! Введите имя!")
    } else {
        totalUsers++;
        lastUserName = name;
        addUserCallback(name)
        setName("")
    }
}

export const pureOnBlur = (name: string, setError: (errorText: string)=>void) => {
    const check = "  "// если имя пустое - показать ошибку
    if( name.length === 0 || name.includes(" ")) {
        lastUserName = ""
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e: KeyboardEvent, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if(e.key === "Enter") {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }



    return (

        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}/>


    )
}

export default GreetingContainer
