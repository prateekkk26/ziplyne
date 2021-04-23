import React, { useState, useEffect, useRef } from 'react'
import styles from './title.module.css'

import { gsap } from 'gsap'

const getWindowWidth = () => {
	const { innerWidth: width } = window
	return width
}

const Title = ({title, theme, align}) => {
	const [windowWidth, setWindowWidth] = useState(getWindowWidth())
	const titleRef = useRef(null)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(getWindowWidth())
		}

		window.addEventListener('resize', handleResize)
		// return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		titleRef.current.style.visibility = 'visible'
		gsap.from(titleRef.current, {
				y: -50,
				duration: 1,
				delay: 0.1,
				paused: true,
				opacity: 0,
				ease: "power2",
				scrub: true,
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top center",
					end: "20px 80%",
					toggleActions: "restart play complete reverse",
					markers: false,
				}
			})
	})


	return (
		<div  className={styles.title}>
			<div className={styles.container}>
				<h3 ref={titleRef} style={{
					color: theme === "dark" ? '#fff' : "#262a93",
					textAlign: align === 'left' ? (windowWidth > 900 ? "left" : "center") : (windowWidth > 900 ? "right" : "center")
				}}>{title}</h3>
			</div>
		</div>
	)
}

export default Title