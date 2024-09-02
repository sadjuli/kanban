import React from 'react'

import '../assets/styles/styles.css'

function Header() {
    return (
        <header className="header">
			<div className="header__logo">Julia's Kanban Board</div>
			<div className="header__profile">
				<div className="header__profile-user"></div>
				<div className="header__profile-menu">
					<div className="header__profile-menu-item">Profile</div>
					<div className="header__profile-menu-item">Logout</div>
				</div>
			</div>
		</header>
    )
}

export default Header