"use client"
import { persistor, store } from "@/app/redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import AuthProvider from "./AuthProvider"

function Layout({children} : {children : React.ReactNode}) {
  return (
    <Provider store={store} >
      <PersistGate loading={null}  persistor={persistor}>
        <AuthProvider>
        {children}
        </AuthProvider>
      </PersistGate>
      
    </Provider >
  )
}

export default Layout
