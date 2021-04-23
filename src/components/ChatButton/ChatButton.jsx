import React from 'react'
import { MdChatBubble } from 'react-icons/md'
import styles from './chatButton.module.css'

const ChatButton = () => {
	return (
		<div className={styles.btn}>
			<div className={styles.container}>
				<MdChatBubble className={styles.icon} />
			</div>
		</div>
	)
}

export default ChatButton