import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthorizationContextType {
  loggedin: boolean | null;
  setLoggedin: React.Dispatch<React.SetStateAction<boolean | null>>;
  response: Items | null;
}

export interface AuthorizationResponse {
  _created: number;
  _data_type: string;
  _is_deleted: boolean;
  _modified: number;
  _self_link: string;
  _user: string;
  _uuid: string;
  password: string;
  username: string;
}

export interface Items {
  cursor: {};
  items: AuthorizationResponse[];
  next_page: {};
}

interface AuthorizationContextProviderProps {
  children: ReactNode;
}

const AuthorizationContext = createContext<
  AuthorizationContextType | undefined
>(undefined);

export const AuthorizationContextProvider: React.FC<
  AuthorizationContextProviderProps
> = ({ children }) => {
  const [loggedin, setLoggedin] = useState<boolean | null>(null);
  const [response, setResponse] = useState(null);
  const AUTH_KEY = "Lc-ptjrvynUIWDeOLXWzp16oSSA0NLlip7BKifqFkIb8GKK_bQ";

  useEffect(() => {
    fetch("/api/v1/authorization", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to get response");
        }
        return res.json();
      })
      .then((data) => {
        setResponse(data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <AuthorizationContext.Provider value={{ loggedin, setLoggedin, response }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorizationContext = () => {
  const context = useContext(AuthorizationContext);
  if (context === undefined) {
    throw new Error(
      "useAuthorizationContext must be used within an AuthorizationContextProvider"
    );
  }
  return context;
};
