import { createContext, useContext, useState, ReactNode } from 'react';

interface ActiveTabContextProps {
  activeTab: number;
  changeTab: (tab: number) => void;
}

const ActiveTabContext = createContext<ActiveTabContextProps | undefined>(undefined);

export const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const changeTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <ActiveTabContext.Provider value={{ activeTab, changeTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) throw new Error('useActiveTab must be used within a ActiveTabProvider');
  return context;
};
