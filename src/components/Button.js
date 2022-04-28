import { useState } from "react"

const Button = ({officeData, selected, render, isRandom, buttonName}) => {

    const [quotes, setQuotes] = useState([])

    const getName = selected.split(" ")
    let newName = getName[0]

    const handleQuotes=()=>{
        if(isRandom){
            getRandomQuote()
        }else{
            getAllQuotes()
        }
    }
    
    const getAllQuotes = () => {
        setQuotes([])
        officeData.map(char => {
            if (newName === char.character.firstname) {
                setQuotes(prev => [...prev, char.content])
            }
        })
    }

    const getRandomQuote = () => {
            setQuotes([])
            const filteredArr = officeData.filter(char => newName === char.character.firstname)
            setQuotes(filteredArr[Math.floor(Math.random() * filteredArr.length)].content)
    }

    return (
        <div>
            {render(quotes)}
            <button onClick={handleQuotes}>{buttonName}</button>
        </div>
    )
}

export default Button