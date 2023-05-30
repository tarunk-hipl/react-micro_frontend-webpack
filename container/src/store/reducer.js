const intialState = {
    counter : 0
}

export function Reducer(state = intialState, action){
    switch(action.type){
        case 'increment' : 
            return {
                counter : state.counter + 1
            }
        case 'decrement' :
            return {
                counter : state.counter - 1
            }
        default :
            return state
    }
}