import React from 'react'
import { MdChatBubble } from 'react-icons/md'
import styles from './chatButton.module.css'

const ChatButton = () => {
	return (
		<div className={styles.btn}>
			<MdChatBubble className={styles.icon} />
		</div>
	)
}

export default ChatButton