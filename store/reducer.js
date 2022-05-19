import {ACT_ADD_ACTION, ACT_REMOVE_ACTION} from './action'

const initState = {
    listData: []
}

function reducer(state = initState, action){
    switch (action.type) {
        case ACT_ADD_ACTION:
            let newListData
            const find = state.listData.find((item) => item.id === action.payload.id)
            if (find) {
                newListData = state.listData.map((item) =>{
                    if(item.id === action.payload.id){
                        return{
                            ...item,
                            status : action.payload.status
                        } 
                    }
                    return item;
                })
            } else {
                newListData = [...state.listData,{id : action.payload.id, status : action.payload.status}]
            }
            return {
                listData: newListData
            };
        case ACT_REMOVE_ACTION:
            return{
                listData : state.listData.filter((items) => items.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export default reducer;