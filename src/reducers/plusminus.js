const iniatialState = 0;

const changeValue = (state = iniatialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}

export default changeValue;