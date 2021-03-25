export const initialValue = {
    user: null,
    posts:[]
}

export const actionsTypes = {
    SET_USER:"SET_USER",
    CREATE_POST:"CREATE_POST"
}

export const reducer = (state,action)=>
{
    switch(action.type)
    {
        case actionsTypes.SET_USER:
            return{
                ...state,
                user:action.user
            }
        
        case actionsTypes.CREATE_POST:
            return{
                ...state,
                posts:[...state.posts,action.post]
            }

        default: return state;
    }   
}


