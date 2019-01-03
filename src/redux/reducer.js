let initalState = {
    list:[]
}

const handleList = (state,action)=>{
    var list = [...state]
    switch(action.type){
    case 'LIST_DATA':
        return action.payload;
    case 'CHANGE_INDEX':
        list[action.payload].isChecked = !list[action.payload].isChecked
        return list;
    case 'REDUCE_LIST':
        list[action.payload].count = --list[action.payload].count;
        return list;
    case 'ADD_LIST':
        list[action.payload].count = ++list[action.payload].count;
        return list;
    default:return state;
    }
}

export default (state = initalState,action)=>{
    return {
        list:handleList(state.list,action)
    }
}