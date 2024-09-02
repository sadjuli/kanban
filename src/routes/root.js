import Kanban from '../components/Kanban'

import '../assets/styles/styles.css'
import { useState, useEffect } from 'react'

function Root() {
  const [ tickets, setTickets ] = useState([])

  useEffect(() => {
    let items = localStorage.getItem('kanban_items')
    items = items ? JSON.parse(items) : []
    
    setTickets(items)
  }, [])

  const handleOnChange = (e) => {
    localStorage.setItem('kanban_items', JSON.stringify(e))
    setTickets(e)
  }

  return (
    <Kanban tickets={tickets} onChange={handleOnChange} />
  )
}

export default Root
