import * as React from 'react'
import { Link } from 'gatsby'
import { routes } from '../../router/router';
import './button.css';

const Button = ({children}) => {
  return (
    <button className="button">
      {children}
    </button>
  )
}

export default Button
