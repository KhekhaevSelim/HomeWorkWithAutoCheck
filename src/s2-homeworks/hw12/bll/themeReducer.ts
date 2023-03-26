const initState = {
    themeId: 1,
}

export type InitialStateType = {
    themeId : number
}

export const themeReducer = (state: InitialStateType = initState, action: changeThemeIdIdActionType):  InitialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID" :
            return {...state, themeId : action.id}
        default:
            return state
    }
}

export type changeThemeIdIdActionType = {
    type : string
    id : number
}
export const changeThemeId = (id: number): changeThemeIdIdActionType => ({ type: 'SET_THEME_ID', id }as const) // fix any
