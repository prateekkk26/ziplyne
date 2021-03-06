import React, { useState, useEffect  } from 'react'
import styles from './title.module.css'

const getWindowWidth = () => {
	const { innerWidth: width } = window
	return width
}

const Title = React.forwardRef(({title, theme, align}, ref) => {
	const [windowWidth, setWindowWidth] = useState(getWindowWidth())

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(getWindowWidth())
		}

		window.addEventListener('resize', handleResize)
		// return () => window.removeEventListener('resize', handleResize)
	}, [])


	return (
		<div ref={ref} className={styles.title}>
			<div className={styles.container}>
				<h3 style={{
					color: theme === "dark" ? '#fff' : "#262a93",
					textAlign: align === 'left' ? (windowWidth > 900 ? "left" : "center") : (windowWidth > 900 ? "right" : "center")
				}}>{title}</h3>
			</div>
		</div>
	)
})

export default Title