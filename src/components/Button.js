import React from 'react'

const Button = ({onClick,customClass,text}) => {
  return (
    <button className={customClass}
      onClick={onClick}>{text}</button>
  )
}

export default Button
