"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './page.module.css'
import { Context, userAuth } from "./api/firebase/AuthContext"

export const Navbar = () => {
  const { user, googleSignIn, logOut } = userAuth()
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  }

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className={styles.Navbar}>
      <Link href='/user'>user</Link>
      <Link href='/supplier'>supplier</Link>
      <Link href='/search'>search</Link>
      <Link href='/admin'>admin</Link>
      {!user ? (<div>
        <button onClick={handleSignIn}>Login</button>
      <button onClick={handleSignIn}>Sign up</button>
      </div>) : (<div><p>Welcome {user.displayName}</p><button onClick={handleSignOut}>Sign Out</button></div>)}

    </div>
  )
}
