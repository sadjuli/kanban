import React from 'react'

import '../assets/styles/styles.css'

function currentYear() {
    return new Date().getFullYear()
}

function Footer({ active, finished }) {
    return (
        <footer className="footer">
			<div className="footer__info">
				<div className="footer__info-item">
					Active tasks: { active }
				</div>
				<div className="footer__info-item">
					Finished tasks: { finished }
				</div>
			</div>
			<div className="footer__copyright">
				Kanban board by Julia
			</div>
		</footer>
    )
}

export default Footer