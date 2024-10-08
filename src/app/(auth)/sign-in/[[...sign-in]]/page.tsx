import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Login = () => {
  return (
    <main className='h-screen grid place-content-center'>
        <SignIn/>
    </main>
  )
}

export default Login
