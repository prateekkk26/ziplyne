import React from 'react'
import styles from './navbar.module.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'

const Navbar = ({toggle, setToggle}) => {
	return (
		<div className={styles.navbar}>
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
				<ul className={styles.linksContainer}>
					<li><NavLink to="/" exact className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Home</NavLink></li>
					<li><NavLink to="/product" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Product</NavLink></li>
					<li><NavLink to="/use-case" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Use Cases</NavLink></li>
					<li><NavLink to="/price" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Pricing</NavLink></li>
					<li><NavLink to="/blog" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Blog</NavLink></li>
					<li><NavLink to="/meet-the-zipsters" className={styles.route} activeStyle={{color: "#6f42c1", fontWeight: "bold"}} style={{textDecoration: "none"}}>Meet the Zipsters</NavLink></li>
					<li><NavLink to="/sign-in" className={styles.signin} style={{textDecoration: "none"}}>Sign In</NavLink></li>
					<li><NavLink to="/demo" className={styles.demo} style={{textDecoration: "none"}}>Request a Demo</NavLink></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar