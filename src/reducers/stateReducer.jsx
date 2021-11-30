export function stateReducer(state,{type,payload,toast}){
    switch(type){
        case 'SET_PRODUCTS':
            return {...state,products:payload,toast:toast}
        case 'SET_WISHLIST':
                return{...state,wishListItems:payload,toast:toast}
        case 'SET_CART_ITEMS':
            return{...state,cartItems:payload,toast:toast}
        case 'ADD_ADDRESS_DETAILS':
            return{...state,address:[...state.address,payload],note:''}
        case 'CURRENT_ADDRESS':
            console.log({payload})
            return{...state,currentAddress:payload,note:''}
        case 'REMOVE_TOAST':
            return{
                ...state,toast:''
            }
        
        default: return state
    }

}