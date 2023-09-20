// context/MyContext.tsx
"use client";
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

// Define the type for your data

interface MyContextState {
  islogged: boolean ;
  setIslogged:Dispatch<SetStateAction<boolean>>,
}

// Create the context
const MyContext = createContext<MyContextState>(
  {
    islogged: false,
    setIslogged: () => false,
  }
);

// Create a custom provider component
export function MyProvider({children}:{children:React.ReactNode}) {
  const [islogged, setIslogged] = useState(false);
   
  

  return (
    <MyContext.Provider value={{  islogged, setIslogged}}>
      {children}
    </MyContext.Provider>
  );
}

// Create a custom hook for accessing the context
export default MyContext;