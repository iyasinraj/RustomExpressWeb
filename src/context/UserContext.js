import React, { createContext } from 'react';


export const AuthContext = createContext()
const UserContext = ({children}) => {

    const test = () =>{
        console.log('test is working')
    }



    const authInfo = {test}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;