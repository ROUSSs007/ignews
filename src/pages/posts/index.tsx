import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>title title title title title</strong>
            <p>p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>title title title title title</strong>
            <p>p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>title title title title title</strong>
            <p>p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p</p>
          </a>
        </div>
      </main>
    </>
  )
}