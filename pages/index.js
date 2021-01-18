import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="landing">
      <Image src="/ergot.jpg" width="800" height="400" />
    </div>
    </>
  )
}
