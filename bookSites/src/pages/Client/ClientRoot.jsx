import React from 'react'
import ClientNavbar from "../../components/Client/ClientNavbar"
import ClientFooter from "../../components/Client/ClientFooter"
import { Outlet } from "react-router"



function ClientRoot() {
  return (
    
    <>
        <ClientNavbar/>
        <Outlet/>
        <ClientFooter/>
    </>
  )
}

export default ClientRoot
