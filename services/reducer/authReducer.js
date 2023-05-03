const initialState = {
    isLoading: false,
    login: false,
    error: false
};

export default function AuthReducer(state = initialState, action){
    switch (action.type){
        case 'auth/loading':
            return {
                ...state,
                isLoading: true
            }
        case 'auth/success':
            return {
                isLoading: false,
                error: false,
                login: true
            }
        case 'auth/error':
            return {
                isLoading: false,
                error: action.error,
                login: false
            }
        default:
            return state;
    }
}
