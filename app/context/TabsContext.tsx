"use client";
import React, { useState, createContext } from "react";
type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: TabsContextState = {
  activeState: 1,
  switchTab: () => {},
};

const TabsContext = createContext<TabsContextState>(contextDefaultValues);

export const TabsProvider = ({ children }: Props) => {
  const [activeState, setActiveState] = useState(
    contextDefaultValues.activeState
  );

  const switchTab = () => setActiveState((state) => (state === 1 ? 2 : 1));

  return (
    <TabsContext.Provider value={{ activeState, switchTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsContext;
