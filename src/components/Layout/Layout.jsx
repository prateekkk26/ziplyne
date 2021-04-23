import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import ChatButton from '../ChatButton/ChatButton'

const Layout = ({children}) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div style={{display: "flex", "flexDirection": "column", width: "100%"}}>
			<Navbar toggle={toggle} setToggle={setToggle} />
			{
				toggle && <Sidebar toggle={toggle} setToggle={setToggle} />
			}
			{
				!toggle && <main>{children}</main>
			}	
			{
				!toggle && <Footer />
			}
			<ChatButton />
		</div>
	)
}

export default Layout