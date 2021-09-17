import React, { createContext, useContext, useReducer }from 'react';



export const StateContext = createContext(null);

export const DataProvider = ({reducer, intialState, Children}) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {Children}

    </StateContext.Provider>
);


export const useStateValue = () =>  useContext(StateContext);
