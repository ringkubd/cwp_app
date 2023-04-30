const loading = (payload) => {
    return {
        type: 'server/loading',
        payload: {
            isLoading: true
        }
    }
}

const error = (payload) => {
    return {
        type: 'server/error',
        payload: {
            isLoading: false,
            error: payload.error
        }
    }
}
