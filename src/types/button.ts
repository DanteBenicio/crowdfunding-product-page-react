import React from 'react';

export type ButtonProps = {
  text: string
  width?: number
  showModalFn?: React.Dispatch<React.SetStateAction<boolean>>
  showThanksModal?: boolean
  showBackThisProjectModal?: boolean
}
