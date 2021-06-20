import { createContext, useContext } from "react";

interface DependancyContext {
  [key: string]: any;
}

const dependenciesContext = createContext<DependancyContext>({});

interface DependancyProviderProps {
  [key: string]: any;
}

const DependanciesProvider: React.FC<DependancyProviderProps> = ({
  children,
  ...services
}) => {
  return (
    <dependenciesContext.Provider value={services}>
      {children}
    </dependenciesContext.Provider>
  );
};

export default DependanciesProvider;

export const useDepsContext = () => useContext(dependenciesContext);
