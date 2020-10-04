import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
    const { reducer, initialContext, children } = props;
    return <StateContext.Provider value={ useReducer(reducer, initialContext) }>
        {children}
    </StateContext.Provider>
}

export const useContextValue = () => useContext(StateContext);