export const incNumber = (num) => {
    return {
        type: 'inc',
        payload: num
    }
}

export const decNumber = (num) => {
    return {
        type: 'dec',
        payload: num
    }
}