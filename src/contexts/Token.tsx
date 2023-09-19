import { createContext, ReactNode, useState } from "react";
import CryptoJS from "crypto-js";


export const TokenContext = createContext<{
    token: string
    setToken: (token: string) => void;
  setUsername: (username: string) => void;
  generateToken: (data: string, secret: string) => string;
  secretKey: string;
}>({ token: "" , setToken: () => {} ,setUsername: () => {}, generateToken: () => "", secretKey: "" });

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  // Chave secreta para assinar o token
  const secretKey = "stock-manager";

  

  const [username, setUsername] = useState("");
  const [token, setToken] = useState<string>('');


  interface userData {
    username: string
  }
  // Dados do usuário (ou qualquer dado que você deseja incluir no token)
  const userData = {
    username
  };
  console.log(userData);

  // Gerar um token
  function generateToken(data: string, secret: string) {
    // Converter os dados em uma string JSON
    const dataString = JSON.stringify(data);

    // Criar um hash HMAC usando a chave secreta
    const generatedToken = CryptoJS.HmacSHA256(dataString, secret).toString();
    setToken(generatedToken);
    return generatedToken;


  }

  return (
    <TokenContext.Provider value={{ token ,setToken ,setUsername, generateToken, secretKey }}>
      {children}
    </TokenContext.Provider>
  );
};
