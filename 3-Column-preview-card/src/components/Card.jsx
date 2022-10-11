import "./Card.css"
import Section from "./Section"
import { ReactComponent as SedansIcon } from "../assets/icon-sedans.svg"
import { ReactComponent as SuvsIcon } from "../assets/icon-suvs.svg"
import { ReactComponent as LuxuryIcon } from "../assets/icon-luxury.svg"

const Card = () => {
	const sedans = {
		title: "Sedans",
		description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
		image: <SedansIcon />,
		className: "card-sedans",
	}
	const suvs = {
		title: "SUVs",
		description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
		image: <SuvsIcon />,
		className: "card-suvs",
	}
	const luxury = {
		title: "Luxury",
		description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
		image: <LuxuryIcon />,
		className: "card-luxury",
	}

	return (
		<article className="card-container">
			<Section props={sedans} />
			<Section props={suvs} />
			<Section props={luxury} />
		</article>
	)
}

export default Card
