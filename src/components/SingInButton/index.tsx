import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SingInButton() {
  const { data: session, status} = useSession()

  // console.log('SingInButton')

  return status === "authenticated" ? (
    <button 
      type="button"
      className={styles.singInButton}
    >
      <FaGithub color="#04d361"/>
      Gabriel Rousselet
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.singInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sing in with Github
    </button>
  )
}