import React from 'react';

export interface ContextDefaultValue {
  showBackThisProjectModal: boolean
  showThanksModal: boolean
  setShowThanksModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowBackThisProjectModal : React.Dispatch<React.SetStateAction<boolean>>
}

export type ContextProviderProps = {
  children: React.ReactNode
}
