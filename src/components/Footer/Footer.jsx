import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import { 
	FaFacebookSquare, 
	FaInstagramSquare,
	FaTwitterSquare,
	FaLinkedin
} from "react-icons/fa";

import { gsap } from 'gsap'
import {ScrollTrigger}  from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause reverse pause",
  markers: false
});

const Footer = () => {
	let footerRef = useRef(null)
	let iconsRef= useRef(null)
	let linksRef = useRef(null)
	let boxRef = useRef(null)

	useEffect(() => {
		gsap.from(iconsRef.current, {
	      	x: -50,
			duration: 1,
			paused: true,
			opacity: 0,
			ease: "power2",
			scrub: true,
	        scrollTrigger: {
				trigger: footerRef.current,
				start: "top center",
				end: "20px 80%",
				toggleActions: "restart play complete reverse",
				markers: false,
	        },
	    });
	})

	useEffect(() => {
		gsap.from(linksRef.current, {
	      	y: -50,
			duration: 1,
			delay: 0.5,
			opacity: 0,
			ease: "power2",
			scrub: true,
	        scrollTrigger: {
				trigger: linksRef.current,
				start: "top center",
				end: "20px 80%",
				toggleActions: "restart play complete reverse",
				markers: false,
	        },
	    });
	})

	useEffect(() => {
		gsap.from(boxRef.current, {
	      	x: 150,
			duration: 1,
			delay: 0.5,
			opacity: 0,
			ease: "power2",
			scrub: true,
	        scrollTrigger: {
				trigger: linksRef.current,
				start: "top center",
				end: "20px 80%",
				toggleActions: "restart play complete reverse",
				markers: false,
	        },
	    });
	})

	return (
		<div ref={footerRef} className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerInfo}>
					<div ref={iconsRef} className={styles.iconsContainer}>
						<img
							src="https://www.ziplyne.com/static/media/logonoword.3a8992f0.png" 
							className={styles.logo} 
						/>
						<div className={styles.icons}>
							<a href="https://www.facebook.com/ziplyne" target="_blank"><FaFacebookSquare className={styles.icon} /></a>
							<a href="https://www.instagram.com/ziplyneinc/" target="_blank"><FaInstagramSquare className={styles.icon} /></a>
							<a href="https://twitter.com/ziplyne" target="_blank"><FaTwitterSquare className={styles.icon} /></a>
							<a href="https://www.linkedin.com/company/ziplyne/" target="_blank"><FaLinkedin className={styles.icon} /></a>
						</div>
					</div>
					<div ref={linksRef} className={styles.links}>
						<p>Quick Links</p>
						<ul>
							<li><Link to="/" style={{textDecoration: "none"}} className={styles.route}>Home</Link></li>
							<li><Link to="/product" style={{textDecoration: "none"}} className={styles.route}>Product</Link></li>
							<li><Link to="/use-case" style={{textDecoration: "none"}} className={styles.route}>Use Case</Link></li>
						</ul>
					</div>
					<div ref={boxRef} className={styles.box}>
						<img src="data:image/png;base64,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" className={styles.topPicture} />
						<p>Ziplyne sit on top of any web-based application</p>
						<p>Ready to see for yourself?</p>
						<p className={styles.btn}>Show us what you got</p>
					</div>
				</div>
				<p className={styles.copy}>&copy;-2020 <span>Ziplyne</span>. All rights reserved</p>
			</div>
		</div>
	)
}

export default Footer