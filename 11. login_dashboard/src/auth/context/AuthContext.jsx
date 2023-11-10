import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback(
    (user) => {
      setCurrentUser(user);
      localStorage.setItem("currentUser", user);
    },
    [setCurrentUser]
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  });

  const value = {
    currentUser,
    login,
    logout,
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser"))
      setCurrentUser(localStorage.getItem("currentUser"));
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
