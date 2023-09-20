import { createContext, ReactNode, useState } from "react";
import CryptoJS from "crypto-js";


export const TokenContext = createContext<{
    token: string | null
    setToken: (token: string) => void;
  setUsername: (username: string) => void;
  generateToken: (data: string, secret: string) => string;
  secretKey: string;
}>({ token: "" , setToken: () => {} ,setUsername: () => {}, generateToken: () => "", secretKey: "" });

export const TokenProvider = ({ children }: { children: ReactNode }) => {

  const secretKey = "stock-manager";

  

  const [username, setUsername] = useState("");
  const [token, setToken] = useState<string | null>('');


  interface userData {
    username: string
  }

  const userData = {
    username
  };
  console.log(userData);

  function generateToken(data: string, secret: string) {
    const dataString = JSON.stringify(data);
    const generatedToken = CryptoJS.HmacSHA256(dataString, secret).toString();
    return generatedToken;
  }

  return (
    <TokenContext.Provider value={{ token ,setToken ,setUsername, generateToken, secretKey }}>
      {children}
    </TokenContext.Provider>
  );
};
