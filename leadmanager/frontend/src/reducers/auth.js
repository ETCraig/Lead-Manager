const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null 
}

export default function(state, action) {
    switch(action.type) {
        default:
        return state;
    }
}