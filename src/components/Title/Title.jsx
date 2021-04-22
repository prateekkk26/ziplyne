import React, { useState, useEffect } from 'react'
import styles from './title.module.css'

const getWindowWidth = () => {
	const { innerWidth: width } = window
	return width
}

const Title = ({title, theme, align}) => {
	const [windowWidth, setWindowWidth] = useState(getWindowWidth())

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(getWindowWidth())
		}

		window.addEventListener('resize', handleResize)
		// return () => window.removeEventListener('resize', handleResize)
	}, [])

	console.log(windowWidth)

	return (
		<div className={styles.title}>
			<div className={styles.container}>
				<h3 style={{
					color: theme === "dark" ? '#fff' : "#8b34f9",
					textAlign: align === 'left' ? (windowWidth > 900 ? "left" : "center") : (windowWidth > 900 ? "right" : "center")
				}}>{title}</h3>
			</div>
		</div>
	)
}

export default Title