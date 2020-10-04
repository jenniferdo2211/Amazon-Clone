import { StateContext } from "./StateProvider";

export const initialContext = {
    basket: [],
    user: null,
}

export const reducer = (context, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...context,
                user: action.user
            }

        case "ADD_TO_BASKET":
            return {
                ...context,
                basket: [ ...context.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            return {
                ...context,
                basket: context.basket.filter(item => item.id !== action.itemId)
            };
        default:
            return { ...context };
    }
}