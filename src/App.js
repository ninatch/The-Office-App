import './styles.css'
import { useState, useEffect } from 'react'
import SafariPage from './components/SafariPage'

function App() {
    const [officeData, setOfficeData] = useState([])
    
    const fetchOfficeData = () => {
        fetch('https://www.officeapi.dev/api/quotes')
        .then(res => res.json())
        .then(dataDump => setOfficeData(dataDump.data))
    }

    useEffect(() => {
        fetchOfficeData()
    }, [])
    
    return (
        <div className="App">
            <h1>Office Quotes</h1>
            <SafariPage officeData={officeData}/>
        </div>
    )
}

export default App
