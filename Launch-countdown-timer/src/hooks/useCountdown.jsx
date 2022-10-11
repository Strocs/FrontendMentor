import { useEffect, useState } from "react"
import { timeRemaining } from "../utils/timeRemaining"

const CURR_DATE = new Date().getTime()

const useCountdown = (daysToDeadLine) => {
	const DEAD_LINE = CURR_DATE + daysToDeadLine * 24 * 60 * 60 * 1000

	const [currentSec, setCurrentSec] = useState([daysToDeadLine, 0, 0, 0])
	const [nextSec, setNextSec] = useState([daysToDeadLine - 1, 23, 59, 59])

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSec(timeRemaining(DEAD_LINE).curr)
			setNextSec(timeRemaining(DEAD_LINE).next)
		}, 1000)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return {
		currentSec,
		nextSec,
	}
}

export default useCountdown
