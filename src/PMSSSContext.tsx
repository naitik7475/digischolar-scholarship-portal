/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

interface PMSSSContextType {
  pmsssId: string;
  setPmsssId: (id: string) => void;
}

const PMSSSContext = createContext<PMSSSContextType>({
  pmsssId: '',
  setPmsssId: () => {},
});

export const PMSSSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pmsssId, setPmsssId] = useState('');
  return (
    <PMSSSContext.Provider value={{ pmsssId, setPmsssId }}>
      {children}
    </PMSSSContext.Provider>
  );
};

export const usePMSSS = () => useContext(PMSSSContext);

export default PMSSSContext;
