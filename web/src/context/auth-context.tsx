import React, {createContext} from 'react';

interface IAuthContext {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({auth: false, setAuth: () => {}});


