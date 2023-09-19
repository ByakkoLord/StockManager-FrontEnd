import { createContext, useState, ReactNode } from "react";

export const TokenContext = createContext()

export const TokenProvider = ({ children } : { children: ReactNode }) => {
    return <TokenContext.Provider value={null}>{children}</TokenContext.Provider>
}

