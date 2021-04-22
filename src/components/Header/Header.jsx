import React from 'react'
import img from '../../images/review_header.png'
import styles from './header.module.css'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<p>We're Here to Help!</p>
					<p>Let's explore how others have found value to Ziplyne</p>
				</div>
			</div>
		</div>
	)
}

export default Header