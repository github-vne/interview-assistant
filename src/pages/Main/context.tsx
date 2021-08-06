import React, { useCallback, useContext, useMemo, useState } from 'react';
import { parseFormFields } from './helpers';

export const MainContext = React.createContext<any>({} as any);

export const MainProvider: React.FC = ({ children }) => {
  const [formValues, setFormValues] = useState({});

  const onSubmitForm = useCallback((values: any) => setFormValues(values), []);

  const textAreaValues = useMemo(() => parseFormFields(formValues), [formValues]);

  const value = { formValues, textAreaValues, onSubmitForm };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMain = () => {
  return useContext(MainContext);
};
