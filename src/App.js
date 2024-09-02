import Header from './components/Header'
import Footer from './components/Footer'

import Root from './routes/root'
import Ticket from './routes/ticket'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { useEffect, useState } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/ticket/:id',
    element: <Ticket />
  }
])

function App() {
  const [tickets, setTickets] = useState([])

  const updateTickets = () => {
    let items = localStorage.getItem('kanban_items')
        items = items ? JSON.parse(items) : []
        setTickets(items)
  }

  window.addEventListener('storage', () => {
    updateTickets()
  })

  useEffect(() => {
    updateTickets()
  }, [])

  return (
    <>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer active={tickets.filter((i) => i.state === 'backlog').length} finished={tickets.filter((i) => i.state === 'finished').length} />
    </>
  )
}

export default App
