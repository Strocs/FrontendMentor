import { useEffect, useState } from "react"
import { FaFacebookSquare, FaInstagram, FaPinterest } from "react-icons/fa"
import CountdownBox from "./components/CountdownBox"
import useCountdown from "./hooks/useCountdown"

//Set 14 days for launch
const DAYS_TO_LIMIT = 14

const CountdownLauncherApp = () => { 
	const { currentSec, nextSec } = useCountdown(DAYS_TO_LIMIT)
	const [ flipTime, setFlipTime ] = useState(currentSec)
	const boxes = ['Days', 'Hours', 'Minutes', 'Seconds']

	return (
		<main>
			<h1>We're launching soon</h1>
			<section className="countdown-container">
				{boxes.map((box, i) => 
					<CountdownBox currentSec={currentSec[i]} nextSec={currentSec[i]} flipTime={flipTime[i]} text={box} />
				)}
			</section>
			<section className="icon-container">
				<a href="#">
					<FaFacebookSquare className="icon" />
				</a>
				<a href="#">
					<FaPinterest className="icon" />
				</a>
				<a href="#">
					<FaInstagram className="icon" />
				</a>
			</section>
		</main>
	)
}

export default CountdownLauncherApp
