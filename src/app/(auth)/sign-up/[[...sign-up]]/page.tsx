import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Register = () => {
  return (
    <main className="h-screen grid place-content-center">
      <SignUp />
    </main>
  )
}

export default Register
