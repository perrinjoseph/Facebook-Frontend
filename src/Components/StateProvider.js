import { createContext, useContext, useReducer } from "react";
import {reducer ,initialValue}from './reducer'

export const StateContext = createContext();

export const StateProvider =({children})=>(
    <StateContext.Provider value={useReducer(reducer, initialValue)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = ()=> useContext(StateContext);