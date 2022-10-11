import "./Card.css"
import { useEffect, useState } from "react"
import { getAdvice } from "../helpers/getAdvice"

import dice from "../assets/icon-dice.svg"
import dividerDesktop from "../assets/pattern-divider-desktop.svg"
import dividerMobile from "../assets/pattern-divider-mobile.svg"

const Card = () => {
  const [advice, setAdvice] = useState({
    id: "",
    advice: "",
  })

  const handleGetAdvice = () => {
    getAdvice().then(val => setAdvice(val))
  }

  useEffect(() => {
    handleGetAdvice()
  }, [])
  
	return (
		<div className="advice-container">
			<h1 className="advice-id">ADVICE {`#${advice.id}`}</h1>
			<p className="advice-text">“{advice.advice}”</p>
			<picture className="advice-divider">
				<source media="(min-width: 44rem)" srcSet={dividerDesktop} />
				<img src={dividerMobile} alt="Divider" />
			</picture>
			<div onClick={handleGetAdvice} className="advice-dice">
				<img src={dice} alt="Dice Icon" />
			</div>
		</div>
	)
}

export default Card
