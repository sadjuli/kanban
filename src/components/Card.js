import React from 'react'

import '../assets/styles/styles.css'

function Card({ card }) {
    return (
        <div className="kanban__ticket">
            <a className="kanban__ticket-title" href={`/ticket/${card.id}`}>{ card.title }</a>
        </div>
    )
}

export default Card