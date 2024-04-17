import React from 'react'
import main from "../assets/main.png"
import styles from "./login.module.css"

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          
          <p className={styles.textHeading}>Discover new things on Superapp</p>
        </div>
        <img src={main} className={styles.mainImage} />

      </div>
      <div className={styles.loginContainer}>
        
          <p className={styles.heading}>Super app</p>
          <p className={styles.subTitle}>Create your new account</p>
          <input className={styles.loginInput} type="text" placeholder='Name'/><br/><br/>
          <input className={styles.loginInput} type="text" placeholder='UserName'/><br/><br/>
          <input className={styles.loginInput} type="email" placeholder='Email'/><br/><br/>
          <input className={styles.loginInput} type="number" placeholder='Mobile'/><br/><br/>
        
      </div>
    </div>
  )
}

export default Login