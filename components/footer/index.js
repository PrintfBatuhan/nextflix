import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️
      <Link href="https://twitter.com/Batuhan4281" target='_blank'>
        Batuhan Dedeoglu
      </Link>
    </footer>
  )
}

export default Footer