import React from "react"

export function ItemCard({ price, name, image }) {
	return (
		<div className={classe.cardContainer}>
			<h3>{name}</h3>
			<img src={image} alt="shoe" />
			<div>
				<p>{price}DA</p>
				<button>Add to card</button>
			</div>
		</div>
	)
}
