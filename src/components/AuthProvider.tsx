"use client"
import { GoogleOAuthProvider } from '@react-oauth/google';

import React from 'react'

function AuthProvider({children} : {children : React.ReactNode}) {
  return (
      <GoogleOAuthProvider  clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string} >{children}</GoogleOAuthProvider>
  )
}

export default AuthProvider
