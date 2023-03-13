const initState = {
    isLoading: false,
}
export type InitialStateType = {
    isLoading : boolean
}
export const loadingReducer = (state:InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING" :
            return {...state, isLoading : !action.isLoading}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)
