'use client'
import { Navbar } from '@/app/Components/Navbar'
import { db } from '@/app/api/firebase/firebaseClient'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as styles from "./page.module.css"

const page = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const params = useParams();
    console.log()



    useEffect(() => {
        const docRef = doc(db, "product", params.productId)
        //setProductID(params)
        const getD = getDoc(docRef).then((e) => {
            setProduct(e.data())
            //console.log(e.data())
            setLoading(false)
        })

        return () => getD
    }, [])
    console.log(product)
    if (loading) {
        return (
            <div>
                <Navbar />
                Loading
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.productDisplay}>
                    <div className={styles.mainPicture}>

                    </div>
                    <div className={styles.listPictureContainer}>

                    </div>
                </div>
                <div className={styles.productDetails}>
                    {product.title}
                </div>
            </div>
        </div>
    )
}

export default page
