//components/Layout.jsx
import React from "react"
import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { SpeedInsights } from '@vercel/speed-insights/next'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>QR_Collar Mascota</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
      <SpeedInsights />
    </div>
  )
}

export default Layout
