import { useState } from "react"

const Dropdown = ({officeData, render}) => {

    const [characters, setCharacters] = useState([])
    const [selectedChar, setSelectedChar] = useState("")

    const officeCharacters = officeData
        .map(char => `${char.character.firstname} ${char.character.lastname}`)
        .filter((value, index, self) => self.indexOf(value) === index)
        .map(char => <option>{char}</option>)
    
    const setOfficeCharacters = () => {
        setCharacters(officeCharacters)
    }

    const setSelectedCharacter = event => {
        setSelectedChar(event.target.value)
    }
    
    return (
        <div className="nav-bar">
            {render(selectedChar)}
            <select onClick={setOfficeCharacters} onChange={setSelectedCharacter}>
                <option value="selected" hidden>Choose a character</option>
                {officeCharacters}
            </select>
        </div>
    )
}

export default Dropdown