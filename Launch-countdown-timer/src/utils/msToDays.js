export const msToDays = (remaining) => {
	const days = Math.floor(remaining / (1000 * 60 * 60 * 24)),
		hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
		seconds = Math.floor((remaining % (1000 * 60)) / 1000)

	return [days, hours, minutes, seconds]
}