import React from "react"
import classes from "./style.module.css"
export default function ItemCard({ price, name }) {
	return (
		<div className={classes.cardContainer}>
			<h3>{name}</h3>
			<img src="/src/assets/greenshoes.png" alt="shoe" />
			<div>
				<p>{price}DA</p>
				<button>Add to card</button>
			</div>
		</div>
	)
}
