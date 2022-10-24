import { useEffect, useState } from "react"
import { timeRemaining } from "../utils/timeRemaining"

const CURR_DATE = new Date().getTime()

const useCountdown = (initialState) => {
	const DEAD_LINE = CURR_DATE + initialState * 24 * 60 * 60 * 1000

	const [currentSec, setCurrentSec] = useState([initialState, 0, 0, 0])
	const [previousSec, setPreviousSec] = useState([initialState - 1, 23, 59, 59])

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSec(timeRemaining(DEAD_LINE).curr)

		}, 1000)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	useEffect(() => {
		setPreviousSec(timeRemaining(DEAD_LINE).prev)
	},[currentSec])

	return {
		currentSec,
		previousSec,
	}
}

export default useCountdown
