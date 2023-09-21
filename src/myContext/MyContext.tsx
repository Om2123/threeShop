// context/MyContext.tsx
"use client";
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

// Define the type for your data

interface MyContextState {
  islogged: string ;
  setIslogged:Dispatch<SetStateAction<string>>,
}

// Create the context
const MyContext = createContext<MyContextState>(
  {
    islogged: '',
    setIslogged: () => "",
  }
);

// Create a custom provider component
export function MyProvider({children}:{children:React.ReactNode}) {
  const [islogged, setIslogged] = useState("");
   
  

  return (
    <MyContext.Provider value={{  islogged, setIslogged}}>
      {children}
    </MyContext.Provider>
  );
}

// Create a custom hook for accessing the context
export default MyContext;