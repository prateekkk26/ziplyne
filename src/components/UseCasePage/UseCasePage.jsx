import React from 'react'
import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import Reviews from '../Reviews/Reviews'
import styles from './useCasePage.module.css'

const UseCasePage = () => {
	return (
		<Layout>
			<div className={styles.useCasePage}>
				<div className={styles.container}>
					<Header />
					<Reviews />
				</div>
			</div>
		</Layout>
	)
}

export default UseCasePage