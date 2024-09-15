const initState = {
    themeId: 1,
}

type ChangeThemeId = {
    type: 'SET_THEME_ID',
    id: number
}

type ActionType = ChangeThemeId

export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeId => ({ type: 'SET_THEME_ID', id } as const) // fix any


