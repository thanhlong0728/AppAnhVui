// Action Type
export const ACT_ADD_ACTION    = 'ACT_ADD_ACTION'
export const ACT_REMOVE_ACTION = 'ACT_REMOVE_ACTION'



// Action Creator
export function addAction (id,status) {
    return {
        type : ACT_ADD_ACTION,
        payload : {
            id,
            status
        }
    }
}


export function removeAction (id) {
    return {
        type : ACT_REMOVE_ACTION,
        payload : {
            id
        }
    }
}



