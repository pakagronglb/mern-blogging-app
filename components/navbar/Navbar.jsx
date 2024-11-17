"use client";

import React, { useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

import styles from './navbar.module.css';
import { ThemeContext } from '@/context/ThemeContext';


const Navbar = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
            <Image src="/instagram.png" alt="instagram" width={24} height={24} />
            <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
            <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
        <div className={styles.logo}>
            <Image src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} alt="logo" width={165} height={40} />
        </div>
        <div className={styles.links}>
            <ThemeToggle />
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
            <AuthLinks />
        </div>
    </div>
  )
}

export default Navbar