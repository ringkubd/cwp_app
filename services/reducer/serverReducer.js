const initialState = {
    isLoading: false,
    api_key: '',
    api_base: '',
    name: '',
    error: false
};
export default function ServerReducer(state = initialState, action){
    switch (action.type){
        case 'server/loading':
            return {
                isLoading: true,
                api_key: '',
                api_base: '',
                name: '',
                error: false
            }
        case 'server/error':
            return {
                ...state,
                isLoading: false,
                api_key: '',
                api_base: '',
                name: '',
                error: action.payload.error
            }
        case 'server/store':
            return {
               ...state,
                isLoading: false,
                error: false,
                ...action.payload
            }
        case 'server/get':
            return {
                ...state,
                isLoading: false,
                error: false,
            }
        default:
            return state
    }
}
