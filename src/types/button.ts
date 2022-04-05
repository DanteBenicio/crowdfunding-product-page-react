import React from 'react';

export type ButtonProps = {
  text: string
  width?: number
  fixedWidth?: number
  notResize?: boolean
  showModalFn?: React.Dispatch<React.SetStateAction<boolean>>
  showThanksModal?: boolean
  showBackThisProjectModal?: boolean
}
