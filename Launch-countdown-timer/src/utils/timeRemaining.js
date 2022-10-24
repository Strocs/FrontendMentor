import { msToDays } from "./msToDays"

export const timeRemaining = (deadLine) => {
	const now = new Date().getTime(),
		remaining = deadLine - now,
		curr = msToDays(remaining),
		prev = msToDays(remaining - 1000)
	return { curr, prev }
}
