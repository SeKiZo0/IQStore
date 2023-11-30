'use client'
import Link from 'next/link'
import { Navbar } from './Components/Navbar'
import { collection, onSnapshot, query } from 'firebase/firestore';
import { auth, db } from './api/firebase/firebaseClient';
import { useEffect, useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "product"))
    const getProdFromFB = [];
    const subscriber = onSnapshot(q, (querySnapshot) => {

      querySnapshot.forEach((doc) => {

        getProdFromFB.push({ ...doc.data(), key: doc.id, });
      })

      setProducts(getProdFromFB);
      setLoading(false);
    })
    return () => subscriber
  }, []);
console.log(auth)
console.log(products)

  return (
    <main className={styles.main}>
      <Navbar className={styles.Navbar} />
      <section className={styles.pContainer}>
        {products.map((product, id) => {
          return (
            <div className={styles.card}>
              <div className={styles.image}>
                <h1>Imagine there was a image here</h1>

              </div>
              <Link href={'/product/' + product.key}>
                <div className={styles.body}>
                  <h5>{product.title}</h5>
                  <h6>{product.brand}</h6>
                  <p>{product.price * 10}</p>
                </div>
              </Link>
            </div>)
        })}
      </section>
    </main>
  )
}
