import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../assets/styles/styles.css'

function Ticket() {
    const params = useParams()
    const [ ticket, setTicket ] = useState(null)
    const [ text, setText] = useState('')

    const handleChange = (e) => {
        const ticketText = e.target.textContent
        setText(ticketText)
        const item = { ...ticket }
        item.text = ticketText
        setTicket(item)
    }

    useEffect(() => {
        const ticketItem = { ...ticket }
        ticketItem.text = text
        
        let items = localStorage.getItem('kanban_items')
        items = items ? JSON.parse(items) : []
        
        if (ticket) {
            const itemIdx = items.findIndex((i) => i.id == ticket.id)
            if (itemIdx > -1) {
                items[itemIdx] = ticket
                localStorage.setItem('kanban_items', JSON.stringify(items))
            }
        }
    }, [text])

    useEffect(() => {
        let items = localStorage.getItem('kanban_items')
        items = items ? JSON.parse(items) : []

        if (items.length) {
            const item = items.find((i) => i.id == params.id)
            setText(item.text)
            setTicket(item)
        }
      }, [])
    
    return (
        <div className="ticket">
            <a href='/' className="ticket__close"></a>
            <div className="ticket__content">
                { ticket && (
                    <>
                        <div className="ticket__title">{ ticket.title }</div>
                        { ticket &&  ticket.text && (
                            <div className="ticket__text" contentEditable="true" onBlur={handleChange}>
                                { ticket.text }
                            </div>
                        )}
                        { ticket && !ticket.text && (
                            <div className="ticket__text" contentEditable="true" onBlur={handleChange}>(no ticket description)</div>
                        )}
                    </>
                )}
                { !ticket && (
                    <div className="ticket__text">No ticket found</div>
                )}
            </div>
        </div>
    );
}

export default Ticket