import React, { useState } from 'react'

import '../assets/styles/styles.css'

function SelectForm({ onSubmit }) {

    const [ mode, setMode ] = useState(1)
    const [ title, setTitle ] = useState('')

    const handleClick = () => {
        setMode(2)
    }
    
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        if (!title) {
            setMode(1)
            return
        }
        onSubmit({ title })
        setMode(1)
    }

    return (
        <div className="kanban__form">
            { mode === 1 && (
                <div className="kanban__form-add" onClick={handleClick}>+ Add card</div>
            )}
            { mode === 2 && (
            <div className="kanban__form-form">
                <div><input type="text" className="kanban__form-input" onChange={handleChange} /></div>
                <div><button className="kanban__form-button" onClick={handleSubmit}>Submit</button></div>
            </div>
            )}
        </div>
    )
}

export default SelectForm