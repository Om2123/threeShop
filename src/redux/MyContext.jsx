// context/MyContext.tsx
"use client";
import { createContext, useContext, useState } from 'react';

// Define the type for your data


// Create the context
const MyContext = createContext(undefined);

// Create a custom provider component
export function MyProvider({children}) {
  const [user, setUser] = useState(null);

  

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}

// Create a custom hook for accessing the context
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
}
