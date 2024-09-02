import React, { useEffect } from 'react'
import Card from './Card'
import SelectForm from './SelectForm'
import AddForm from './AddForm'

import '../assets/styles/styles.css'

function Kanban({ tickets, onChange }) {
    const backlog = tickets.filter((item) => item.state === 'backlog')
    const ready = tickets.filter((item) => item.state === 'ready')
    const inProgress = tickets.filter((item) => item.state === 'in_progress')
    const finished = tickets.filter((item) => item.state === 'finished')

    const handleAdd = ({ title }) => {
        const lastId = tickets.length ? tickets[tickets.length - 1].id : 0
        const item = {
            id: lastId + 1,
            title,
            state: 'backlog',
            text: ''
        }

        const items = [...tickets]
        items.push(item)
        onChange(items)
    }

    const handleOnSubmit = ({ ticketId, state }) => {
        const items = [...tickets]
        const ticketIdx = items.findIndex((item) => item.id == ticketId)
        items[ticketIdx].state = state

        localStorage.setItem('kanban_items', JSON.stringify(items))
        onChange(items)
        window.dispatchEvent(new Event('storage'))
    }

    return (
        <div className="kanban">
            <div className="kanban__cols">
                <div className="kanban__col">
                    <div className="kanban__col-title">Backlog</div>
                    <div className="kanban__tickets">
                        { backlog.length ? backlog.map((item) => (
                            <Card card={item} key={item.id} />
                        )) : ''}
                        {!backlog.length && (
                            <div className='tickets__empty'>No tickets</div>
                        )} 
                    </div>
                    <div className="kanban__controls">
                        <AddForm onSubmit={handleAdd} />
                    </div>
                </div>
                <div className="kanban__col">
                    <div className="kanban__col-title">Ready</div>
                    <div className="kanban__tickets">
                    { ready.length ? ready.map((item) => (
                        <Card card={item} key={item.id} />
                    )) : ''}
                    {!ready.length && (
                        <div className='tickets__empty'>No tickets</div>
                    )} 
                    </div>
                    <div className="kanban__controls">
                        <SelectForm items={backlog} destState="ready" onSubmit={handleOnSubmit} />
                    </div>
                </div>
                <div className="kanban__col">
                    <div className="kanban__col-title">In progress</div>
                    <div className="kanban__tickets">
                        { inProgress.length ? inProgress.map((item) => (
                            <Card card={item} key={item.id} />
                        )) : ''}
                        {!inProgress.length && (
                            <div className='tickets__empty'>No tickets</div>
                        )} 
                    </div>
                    <div className="kanban__controls">
                        <SelectForm items={ready} destState="in_progress" onSubmit={handleOnSubmit} />
                    </div>
                </div>
                <div className="kanban__col">
                    <div className="kanban__col-title">Finished</div>
                    <div className="kanban__tickets">
                        { finished.length ? finished.map((item) => (
                            <Card card={item} key={item.id} />
                        )) : ''}
                        {!finished.length && (
                            <div className='tickets__empty'>No tickets</div>
                        )} 
                    </div>
                    <div className="kanban__controls">
                        <SelectForm items={inProgress} destState="finished" onSubmit={handleOnSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kanban