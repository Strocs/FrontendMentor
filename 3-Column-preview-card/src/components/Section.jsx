import './Section.css'

const Section = ({props}) => {
	return (
		<div className={'card-section ' + props.className}>
			{props.image}
			<h1>{props.title}</h1>
			<p>{props.description}</p>
      <button type="submit">
        Learn More
      </button>
		</div>
	)
}
export default Section
