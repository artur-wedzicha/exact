import * as React from 'react'
import './button.css';

const Button = ({ children, className = '', type = 'button', ...rest }) => {
  return (
    <button
      type={type}
      className={`button ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
