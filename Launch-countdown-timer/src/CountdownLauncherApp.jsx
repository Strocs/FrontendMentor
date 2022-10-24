import { useEffect, useState } from 'react'
import { FaFacebookSquare, FaInstagram, FaPinterest } from 'react-icons/fa'
import CountdownBox from './components/CountdownBox'
import useCountdown from './hooks/useCountdown'

//Set 14 days for launch
const DAYS_TO_LIMIT = 14

const CountdownLauncherApp = () => {
	const { currentSec, previousSec } = useCountdown(DAYS_TO_LIMIT)

	const boxes = ['Days', 'Hours', 'Minutes', 'Seconds']
	
	return (
		<main>
			<section className='launch-container'>
				<h1>We're launching soon</h1>
				<div className='countdown-container'>
					{boxes.map((box, i) => (
						<CountdownBox currentSec={currentSec[i]} previousSec={previousSec[i]} text={box} key={box} />
					))}
				</div>
			</section>
			<section className='icon-container'>
				<a href='#'>
					<FaFacebookSquare className='icon' />
				</a>
				<a href='#'>
					<FaPinterest className='icon' />
				</a>
				<a href='#'>
					<FaInstagram className='icon' />
				</a>
			</section>
		</main>
	)
}

export default CountdownLauncherApp
