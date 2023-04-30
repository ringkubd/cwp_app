const initialState = {
    isLoading: true,
    api_key: '',
    api_base: '',
    error: false
};
export default function ServerReducer(state = initialState, action){
    switch (action.type){
        case 'server/loading':
            return {
                isLoading: true,
                api_key: '',
                api_base: '',
                error: false
            }
        case 'server/error':
            return {
                ...state,
                isLoading: false,
                api_key: '',
                api_base: '',
                error: action.payload
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
                api_key: state.api_key,
                api_base: state.api_base,
                error: false
            }
    }
}
