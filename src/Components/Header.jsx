import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';



const Header = () => {
     const navigate = useNavigate()
  return (
    <div className={styles.headeflex}>
      <img src="public\Images\logo-7176064.png" alt="logo"  className={styles.logo}/>
      <div >
      <ul className={styles.header}>
          <li className={styles.list} onClick={()=> navigate('/')}>Home</li>
          <li className={styles.list} onClick={()=> navigate('/blog')}>Blog</li>
          <li className={styles.list} onClick={()=> navigate('/bmi')}>BMI</li>
          <li className={styles.list} onClick={()=> navigate('diet')}>Diet</li>
          <li className={styles.list} onClick={()=> navigate('/signin')}>SignIn</li>
      </ul>
      </div>
    </div>
  )
}

export default Header
