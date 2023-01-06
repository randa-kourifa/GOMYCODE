import React from "react"
import c from "./index.module.css"

export default function Produit({ OurPropProduit }) {
	return (
		<div className={c.container}>
			<div>name: {OurPropProduit.name}</div>
			<div>color: {OurPropProduit.color}</div>
			<img src={OurPropProduit.image} alt="" />
		</div>
	)
}
