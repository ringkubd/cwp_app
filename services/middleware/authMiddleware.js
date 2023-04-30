const authMiddleware = store => next => action => {
    const state = store.getState();
    if (!state.auth.isAuthenticated) {
        // If user is not authenticated, prevent the action from being dispatched
        return;
    }
    // Otherwise, allow the action to proceed
    return next(action);
};
