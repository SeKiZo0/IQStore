import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Navbar } from './Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.description}>
      <Link href='/user'>user</Link>
      <Link href='/supplier'>supplier</Link>
      <Link href='/search'>search</Link>
      <Link href='/admin'>admin</Link>
      </div>
    </main>
  )
}
