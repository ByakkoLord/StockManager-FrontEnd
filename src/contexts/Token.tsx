import { createContext, ReactNode } from "react";
import CryptoJS from "crypto-js";


export const TokenContext = createContext<string | null>('')

export const TokenProvider = ({ children } : { children: ReactNode }) => {
  // Chave secreta para assinar o token
  const secretKey = 'byakko';

  
interface userData {
    userId: number;
    username: string;
}
  // Dados do usuário (ou qualquer dado que você deseja incluir no token)
  const userData = {
    userId: 1241243124,
    username: 'ByakkoLord',
  };

  // Gerar um token
  function generateToken(data: userData, secret: string) {
    // Converter os dados em uma string JSON
    const dataString = JSON.stringify(data);

    // Criar um hash HMAC usando a chave secreta
    const token = CryptoJS.HmacSHA256(dataString, secret).toString();
    return token;
  }

  // Gerar um token para os dados do usuário
  const token = generateToken(userData, secretKey);

  console.log('Token gerado:', token);

  return <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
}
