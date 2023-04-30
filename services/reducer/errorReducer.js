export function ErrorsReducer(state = {message: 'There is something wrong.'}, action){
    switch (action.type){
        case 'error/parse_error':
            return {
                message: state.message
            }
        default:
            return {
                message: 'There is something wrong. Please try again latter.'
            }
    }
}
