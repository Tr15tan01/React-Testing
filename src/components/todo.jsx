import { useState } from "react";

const ToDo = () => {

    const [text, setText] = useState('')
    const [people, setPeople] = useState('')

    const handleChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        setPeople(text)

    }

    return (

        <div className="App">
            <header className="App-header">
                <h3>Input to do some task</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task">Input Task</label>
                    <input type="text" value={text || ''} onChange={handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                <h3>text is: {text}</h3>
                <h3>people is: {people}</h3>
            </header>
        </div>
    )
}

export default ToDo;