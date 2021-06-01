import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('Await')

  useEffect(() => {
    setCurrentTime(new Date().toString())
  }, [currentTime])

  return (
    <div className={styles.container}>
      <h1>{currentTime}</h1>
    </div>
  )
}
