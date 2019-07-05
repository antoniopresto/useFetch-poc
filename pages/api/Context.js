import React from "react";

export const ApiContext = React.createContext({});

export const useApiProvider = () => {
  const [state, setState] = React.useState({});

  return children => (
    <ApiContext.Provider value={{ state, setState }}>
      {children}
    </ApiContext.Provider>
  );
};

export const Provider = ({ children }) => {
  const renderWithProvider = useApiProvider();
  return renderWithProvider(children);
};
