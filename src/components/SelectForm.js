import React, { useState } from 'react'

import '../assets/styles/styles.css'

function SelectForm({ items, destState, onSubmit }) {

    const [ mode, setMode ] = useState(1)

    const handleClick = () => {
        setMode(2)
    }
    
    const handleChange = (e) => {
        onSubmit({ ticketId: e.target.value, state: destState })
        setMode(1)
    }

    return (
        <div className="kanban__form">
            { mode === 1 && (
                <div className="kanban__form-add" onClick={handleClick}>+ Add card</div>
            )}
            { mode === 2 && (
                <div className='kanban__form-form'>
                    <div>
                        <select className="kanban__form-select" onChange={handleChange}>
                            <option value="-1">Select...</option>
                            {items.map((item) => (
                                <option value={item.id} key={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div><button className="kanban__form-button">Submit</button></div>
                </div>
            )}
        </div>
    )
}

export default SelectForm