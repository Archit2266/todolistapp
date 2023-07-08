import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthStatus from './authstatus'

const Layout = () => {
  return (
    <div className='main-container'>
      <AuthStatus />
      <header className="app-title">
        <h2>Todo application</h2>
      </header>

      <Outlet />
    </div>
  )
}

export default Layout