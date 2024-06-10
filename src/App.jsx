import { useState } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"
import Results from "./components/Results/Results"

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 5,
    })

    const inputIsValid = userInput.duration >= 1

    function handleInputChange(inputId, value) {
        setUserInput(prevValue => {
            return {
                ...prevValue,
                [inputId]: +value,
            }
        })
    }

    return (
        <>
            <Header />
            <UserInput onChange={handleInputChange} userInput={userInput} />
            {inputIsValid && <Results input={userInput} />}
            {!inputIsValid && <p className='center'>Enter a duration greater than 0 to show the results!</p>}
        </>
    )
}

export default App
