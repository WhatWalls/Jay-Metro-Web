import React, { createContext, useState, useContext, createRef } from "react";

//@ts-ignore
const RefContext = createContext();
const heroRef = createRef();
const discRef = createRef();


//@ts-ignore
export const RefProvider = ({children}) => {
    return (
        <RefContext.Provider
            value={{
                heroRef,
                discRef
            }}>
            {children}
        </RefContext.Provider>
    )
}

export const useRefContext = () => useContext(RefContext);

