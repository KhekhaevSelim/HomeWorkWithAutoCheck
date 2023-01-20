import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string)=> void // need to fix any
}

let nnnn:string;
export const pureAddUser = (name: string, setError: (error:string)=>void, setName: (name:string)=>void, addUserCallback: (name:string)=> void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name.length === 0 || name.includes("    ")){
        setError("Ошибка! Введите имя!")
    } else {
        addUserCallback(name)
        nnnn=name
        setName("")


    }


}

export const pureOnBlur = (name: string, setError: (error:string)=>void) => { // если имя пустое - показать ошибку
    if(name.length === 0 || name.includes("    ")){
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
    // let totalUsers = 0 // need to fix
    // let lastUserName = "c"// need to fix
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)

    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e:KeyboardEvent ) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers : number = users.length // need to fix
    const lastUserName : string = nnnn// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
