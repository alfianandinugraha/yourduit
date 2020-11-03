import React from 'react'
import { Shape } from '../Style/Styled'

interface PlusIconProps extends Shape {
  rotate?: string; 
}

export const PlusIcon = (shape: PlusIconProps = {width: '39px', height: '39px'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"
      style={
        {
          height: shape.height,
          width: shape.width,
          transform: `rotate(${shape.rotate})`
        }
      }
    >
      <g id="plus" transform="translate(-168.5 -742)">
        <rect id="Rectangle_9" data-name="Rectangle 9" width="4" height="39" rx="2" transform="translate(186 742)" fill="#fff" />
        <rect id="Rectangle_10" data-name="Rectangle 10" width="4" height="39" rx="2" transform="translate(168.5 763.5) rotate(-90)" fill="#fff" />
      </g>
    </svg>
  )
}



