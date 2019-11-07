

let initialState = {
    user: {}
}

const LOGIN_USER = 'LOGIN_USER'

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_USER:
            return { ...state, user: payload }
        default:
            return state
    }
}