import React, { createContext, useMemo, useState } from 'react';
import { ContextDefaultValue, ContextProviderProps } from '../types/context';

export const AppContext = createContext<ContextDefaultValue>({
  showBackThisProjectModal: false,
  showThanksModal: false,
  setShowThanksModal: () => {},
  setShowBackThisProjectModal: () => {},
});

export function ContextProvider({ children }: ContextProviderProps) {
  const [showThanksModal, setShowThanksModal] = useState<boolean>(false);
  const [showBackThisProjectModal, setShowBackThisProjectModal] = useState<boolean>(false);

  const ContextAppValue = useMemo(() => ({
    showBackThisProjectModal,
    showThanksModal,
    setShowThanksModal,
    setShowBackThisProjectModal,
  }), [setShowThanksModal, setShowBackThisProjectModal, showThanksModal, showBackThisProjectModal]);

  return (
    <AppContext.Provider value={ContextAppValue}>
      {children}
    </AppContext.Provider>
  );
}
