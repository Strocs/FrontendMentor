import { msToDays } from "./msToDays"

export const timeRemaining = (deadLine) => {
	const now = new Date().getTime(),
		remaining = deadLine - now,
		curr = msToDays(remaining),
		next = msToDays(remaining + 1000)
	return { curr, next }
}
