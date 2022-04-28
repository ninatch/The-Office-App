import { useState } from "react"
import Board from "./Board";
import Button from "./Button";
import Dropdown from "./Dropdown"

const SafariPage = ({officeData}) => {

    const [selected, setSelected] = useState("")
    const [officeQuotes, setOfficeQuotes] = []

    return(
        <div>
            <Dropdown 
                officeData={officeData} 
                render={
                    (selectedChar)=>{
                        setSelected(selectedChar)
                    }
                }
            />
            <Button 
                officeData={officeData}
                selected={selected} 
                buttonName="Get Random Quote"
                isRandom={true}
                render={
                    (quotes)=>{
                        setOfficeQuotes(quotes)
                    }
                }
            />
            <Button 
                officeData={officeData} 
                selected={selected}
                buttonName="Get All Quotes"
                isRandom={false}
                render={
                    (quotes)=>{
                        setOfficeQuotes(quotes)
                    }
                }
            />
            <Board
                displayQuotes={officeQuotes}
            />
        </div>
    )
}
export default SafariPage