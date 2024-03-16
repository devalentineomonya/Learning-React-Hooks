import React, { createContext, useState } from "react";
export const LoginContext = createContext(null);
const LoginContextProvider = (props) => {
  const [LoginSate, setLoginState] = useState(true);
  return (
    <div>
      <LoginContext.Provider value={LoginSate}>
        {props.children}
      </LoginContext.Provider>
    </div>
  );
};

export default LoginContextProvider;
