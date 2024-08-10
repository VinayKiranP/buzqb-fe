import React from 'react'
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ToggleThemeButtonComponent = ({darkTheme, toggleTheme}) => {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        { darkTheme ? <HiOutlineMoon/> : <HiOutlineSun/> }
      </Button>
    </div>
  )
}

export default ToggleThemeButtonComponent
