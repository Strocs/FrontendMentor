export const getAdvice = async () => {
	const url = `https://api.adviceslip.com/advice`
	const resp = await fetch(url)
	const data = await resp.json()
	return data.slip
}