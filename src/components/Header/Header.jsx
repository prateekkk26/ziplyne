import React, { useRef, useEffect } from 'react'
import styles from './header.module.css'

import { TimelineLite, Power3 } from 'gsap'

const Header = () => {
	let line1 = useRef(null)
	let line2 = useRef(null)

	const t1 = new TimelineLite({ delay: 0.2 })

	useEffect(() => {
		t1.from(line1, {
			x: -50,
			opacity: 0,
			ease: Power3.easeOut,
			delay: 0.2,
			duration: 2
		},
		0.35,
		'Start'
		)

		t1.from(line2, {
			x: 150,
			opacity: 0,
			ease: Power3.easeOut,
			delay: 0.4,
			duration: 3
		},
		0.35,
		'Start'
		)

	})

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<p ref={el => line1 = el}>We're Here to Help!</p>
					<p ref={el => line2 = el}>Let's explore how others have found value to Ziplyne</p>
				</div>
			</div>
		</div>
	)
}

export default Header