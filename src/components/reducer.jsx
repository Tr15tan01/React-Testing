import { useReducer, useState } from "react";
import Modal from "./modal";
// import data from "../utils/data";

const initialState = {
    people: [],
    isModalOpen: false,
    modalContent: 'Hello World'
}

const reducer = (state, action) => {

    console.log(state, action)

    switch (action.type) {
        case "ADD_ITEM":
            {
                const newPeople = [...state.people, action.payload]
                console.log(state)
                return {
                    ...state,
                    people: newPeople,
                    isModalOpen: true,
                    modalContent: 'Item added'
                }
            }
        case "NO_VALUE": {
            return {
                ...state,
                isModalOpen: true,
                modalContent: 'No Value'
            }
        }
        case 'CLOSE_MODAL':
            {
                return {
                    ...state,
                    isModalOpen: false
                }
            }
        case 'REMOVE_ITEM':
            {
                const newPeople = state.people.filter((person) => person.id !== action.payload)
                return {
                    ...state,
                    isModalOpen: true,
                    people: newPeople
                }
            }
        default: {
            return {
                state
            }
        }
    }

}

const ReducerComponent = () => {
    const [name, setName] = useState('')
    // const [people, setPeople] = useState(data)
    // const [modal, showModal] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        if (name) {
            const newItem = { id: new Date().toString().slice(6), name }
            dispatch({ type: 'ADD_ITEM', payload: newItem })
            setName('')
        } else {
            dispatch({ type: 'NO_VALUE' })
        }
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>Reducer component</h3>
                {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" >Name Here:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                {state.people.map(person => {
                    return (
                        <>
                            <h3 key={person.id}>
                                Name: {person.name}</h3>
                            <button onClick={() => {
                                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
                            }}>remove</button>
                        </>
                    )
                })}
            </header>
        </div>
    )
}

export default ReducerComponent;