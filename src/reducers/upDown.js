const initial = 0;

const upDownFunction = (state = initial, action) => {
    switch (action.type) {
        case "inc":
            return  state + action.payload
        case "dec":
            return state === 0 ? 0 : state - action.payload
        default:
            return state
    }
}

export default upDownFunction