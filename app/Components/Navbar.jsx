"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from '../page.module.css'
import { Context, userAuth } from "../api/firebase/AuthContext"
//import 'bootstrap/dist/css/bootstrap.min.css'; 

export const getServerSideProps = async () => {
  const api = process.env.API_KEY
  console.log(api)
  return {
    props: {
      env: "hello"
    }
  }

}

//TODO: Add Home button, add condition for admin

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
      <div className={styles.navItems}>
      <Link href='/'>Home</Link>
        <Link href='/user'>user</Link>
        <Link href='/supplier'>supplier</Link>
        <Link href='/search'>Search</Link>
        <Link href='/admin'>admin</Link>
      </div>
      <div style={{marginLeft: "auto"}}>
        {!user ? (<div className={styles.logButtons}>
          <button className='btn btn-primary' onClick={handleSignIn}>Login</button>
          <button className='btn btn-primary' onClick={handleSignIn}>Sign up</button>
        </div>) : (<div><p>Welcome {user.displayName}</p><button onClick={handleSignOut}>Sign Out</button></div>)}
      </div>
    </div>
  )
}
