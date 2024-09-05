"use client"

export const CategoryContext = createContext();

import {createContext, useState} from 'react'

export const CategoryProvider = ({children}) => {
    const [category, setCategory] = useState("");
    const changeCategory = (cat) => {
        setCategory(cat);
    }

    return (
        <CategoryContext.Provider value={{category, changeCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}