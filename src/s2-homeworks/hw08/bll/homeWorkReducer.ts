import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    // need to fix any
    switch (action.type) {
        case 'sort': {
                return [...
                    state.sort((a, b) => {
                        if(action.payload === "up") {
                            if (a.name > b.name) {
                                return 1
                            } else {
                                return -1
                            }
                        }else {
                            if (a.name < b.name) {
                                return 1
                            } else {
                                return -1
                            }
                        }
                    })
                ]
        }
        case 'check': {
            return state.filter(el=> el.age >= 18) // need to fix
        }
        default:
            return state
    }
}

// export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
//     switch (action.type) {
//         case 'sort': { // by name
//
//             return state // need to fix
//         }
//         case 'check': {
//
//             return state // need to fix
//         }
//         default:
//             return state
//     }
// }