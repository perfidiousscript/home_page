import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <Link href="/bio">
          <Image src="/ergot.jpg" width="800" height="400" />
        </Link>
      </div>
    </>
  )
}
