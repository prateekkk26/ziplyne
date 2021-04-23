import React, { useEffect, useRef } from 'react'
import styles from './navbar.module.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'

import{ TimelineLite, Power3 } from 'gsap'

const Navbar = ({toggle, setToggle}) => {
	let navRef = useRef(null)
	let t1 = new TimelineLite({ delay: 0.3 });

	useEffect(() => {
		navRef.style.visibility = 'visible'
		t1.from(navRef, {
			y: -10,
			opacity: 0,
			ease: Power3.easeOut,
			delay: 0.2,
			duration: 2
		},
		0.35,
		'Start')
	})

	return (
		<div ref={el => navRef = el} className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.toggleContainer}>
					<div className={styles.logoContainer}>
						<Link to="/">
							<img 
								src={logo} 
								alt="Ziplyne Logo"
								className={styles.logo}
							/>
						</Link>
					</div>
				<FaAlignRight className={styles.toggle} onClick={() => setToggle(!toggle)} />
				</div>
				<div className={styles.linksContainer}>
					<NavLink to="/" exact className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Home</NavLink>
					<NavLink to="/product" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Product</NavLink>
					<NavLink to="/use-case" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Use Cases</NavLink>
					<NavLink to="/price" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Pricing</NavLink>
					<NavLink to="/blog" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Blog</NavLink>
					<NavLink to="/meet-the-zipsters" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Meet the Zipsters</NavLink>
					<NavLink to="/sign-in" className={styles.route} style={{textDecoration: "none"}}><p className={styles.signin}>Sign In</p></NavLink>
					<NavLink to="/demo" className={styles.route} style={{textDecoration: "none"}}><p className={styles.demo}>Request a Demo</p></NavLink>
				</div>
			</div>
		</div>
	)
}

export default Navbar