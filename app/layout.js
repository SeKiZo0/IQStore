"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthContext } from "./api/firebase/AuthContext"

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
        {children}
        </AuthContext>
        </body>
    </html>
  )
}
