import React from 'react'
import main from "../assets/main.png"
import styles from "./login.module.css"
import { useForm } from 'react-hook-form';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    let localData = localStorage.getItem("superApp") != null ? JSON.parse(JSON.stringify(localStorage.getItem("superApp"))) : []
    localData?.push(data)
    localStorage.setItem("superApp", data)
  };


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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className={styles.loginInput} type="text" placeholder='Name' {...register("name", { required: true })} />
          {errors.name ? <p><span style={{ color: "red" }} className={styles.errorField}>Field is required</span></p>:<p></p>}

          <input className={styles.loginInput} type="text" placeholder='UserName' {...register("userName", { required: true })} /><br />
          <br />{errors.userName && <span style={{ color: "red" }}>Field is required</span>}<br />

          <input className={styles.loginInput} type="email" placeholder='Email' {...register("email", { required: true })} /><br />
          <br />{errors.email && <span style={{ color: "red" }}>Field is required</span>}<br />

          <input className={styles.loginInput} type="number" placeholder='Mobile' {...register("mobile", { required: true })} /><br />
          <br />{errors.mobile && <span style={{ color: "red" }}>Field is required</span>}<br />

          <input type="checkbox" id="shareData"  {...register("shareData", { required: true })} />

          <label htmlFor="shareData" style={{ color: "#7C7C7C" }}> Share my registration data with Superapp</label>
          <br /> {errors.shareData && <span style={{ color: "red" }}>Field is required</span>}
          <br />
          <button className={styles.signUpButton}>SIGN UP</button>
          <p style={{ color: "#7C7C7C", width: "50%", margin: 'auto' }}>By clicking on Sign up. you agree to
            Superapp <span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span></p>
          <br /> <p style={{ color: "#7C7C7C", width: "60%", margin: 'auto' }}>To learn more about how
            Superapp collects, uses, shares and protects your personal data please head Superapp
            <span style={{ color: "#72DB73" }}>Privacy Policy</span></p>

        </form>
      </div>
    </div>
  )
}

export default Login