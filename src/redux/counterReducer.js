const defaultState = {
    todo: []
}

export function counterReducer(state=defaultState, actions) {
    if (actions.type === 'ADD') {
        let copied = JSON.parse(JSON.stringify(state.todo))
        copied.push(actions.payload)
        return {...state, todo: copied}
    } else if (actions.type === 'DELETE') {
        let copied = JSON.parse(JSON.stringify(state.todo))
        copied = copied.filter(el => {
            return el.id != actions.payload
        })
        return {...state, todo: copied}
    } else {
        return state;
    }
    
}