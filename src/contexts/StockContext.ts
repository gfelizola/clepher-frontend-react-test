import { createContext } from "react";
import { StockContextType } from "../types/index.types";

export const StockContext = createContext<StockContextType>({ 
    actualStock: 'IBM', 
    setActualStock: () => {} 
});