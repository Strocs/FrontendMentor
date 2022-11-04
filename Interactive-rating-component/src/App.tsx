import { useState } from 'react'
import { Card } from './components/Card'
import { RateButton } from './components/RateButton'
import { RateButtonsWrapper } from './components/RateButtonsWrapper'
import { RateSelected } from './components/RateSelected'
import { SubmitButton } from './components/SubmitButton'

const TOTAL_RATE_AMOUNT:Array<number> = [1, 2, 3, 4, 5]

function App() {
	//Stateful
	//Management of Rating State and Submit State
	const [rate, setRate] = useState(0)
	const [submit, setSubmit] = useState(false)

	return (
		<main className='h-screen w-screen grid place-items-center bg-very-dark-blue'>
			<Card 
        submit={submit}
        SubmitButton={<SubmitButton setSubmit={setSubmit} />}
        RateSelected={<RateSelected selected={rate} total={TOTAL_RATE_AMOUNT.length} />}
      >
        <RateButtonsWrapper>
				  {TOTAL_RATE_AMOUNT.map(number => (
				  	<RateButton 
              key={number} 
              number={number}
              rate={rate}
              setRate={setRate} 
            />
				  ))}
        </RateButtonsWrapper>
			</Card>
		</main>
	)
}

export default App
