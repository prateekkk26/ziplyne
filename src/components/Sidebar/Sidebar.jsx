import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.css'

import { TimelineLite } from 'gsap'

const Sidebar = ({toggle}) => {
	const sidebarRef = useRef(null)

	const t1 = new TimelineLite({ delay: 0.2 })

	useEffect(() => {
		sidebarRef.current.style.visibility = 'visible'
		t1.from(sidebarRef.current, {
			y: -50,
			opacity: 0,
			ease: "power2",
			duration: 1
		},
		0.35,
		'Start'
		)
	})

	return (
		<div ref={sidebarRef} className={`${styles.sidebar}`}>
			<div className={styles.container}>
				<div className={styles.linksContainer}>
					<NavLink to="/" exact className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>
						Home
					</NavLink>
					<NavLink to="/product" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>
						Product
					</NavLink>
					<NavLink to="/use-case" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>
						Use Cases
					</NavLink>
					<NavLink to="/pricing" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>
						Pricing
					</NavLink>
					<NavLink to="/blog" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>
						Blog
					</NavLink>
					<NavLink to="/meet-the-zipsters" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>
						Meet the Zipsters
					</NavLink>
					<NavLink to="/sign-in" className={`${styles.route}`} style={{textDecoration: "none"}}>
						<p className={styles.signin}>Sign In</p>
					</NavLink>
					<NavLink to="/demo" className={`${styles.route}`} style={{textDecoration: "none"}}>
						<p className={styles.demo}>Request a Demo</p>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Sidebar