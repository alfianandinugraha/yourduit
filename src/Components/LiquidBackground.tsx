import React from 'react'
import { Liquid1 } from '../Common/Liquid1'

interface Props {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  rotate?: string;
  zIndex?: number;
}

export const LiquidBackground = (props: Props) => {
  return (
    <Liquid1 style={ 
      {
        cursor: 'auto',
        position: 'absolute',
        ...props
      }
    }/>
  )
}
