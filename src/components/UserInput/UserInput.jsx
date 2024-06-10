function UserInput({ onChange, userInput }) {
    return (
        <section id='user-input'>
            <div className='input-group'>
                <div>
                    <label htmlFor='initial-investment'>Initial Investment</label>
                    <input
                        id='initial-investment'
                        type='number'
                        required
                        value={userInput.initialInvestment}
                        onChange={event => onChange("initialInvestment", event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='annual-investment'>Annual Investment</label>
                    <input
                        id='annual-investment'
                        type='number'
                        required
                        value={userInput.annualInvestment}
                        onChange={event => onChange("annualInvestment", event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='expected-return'>Expected Return</label>
                    <input
                        id='expected-return'
                        type='number'
                        required
                        value={userInput.expectedReturn}
                        onChange={event => onChange("expectedReturn", event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='duration'>Duration</label>
                    <input
                        id='duration'
                        type='number'
                        required
                        value={userInput.duration}
                        onChange={event => onChange("duration", event.target.value)}
                    />
                </div>
            </div>
        </section>
    )
}

export default UserInput
