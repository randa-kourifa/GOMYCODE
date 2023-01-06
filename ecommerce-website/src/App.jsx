import { useState } from "react"
import "./App.css"
import ItemCard from "./components/ItemCard"
import { products } from "./products"

function App() {
	const [count, setCount] = useState(0)
	const [Product, setProduct] = useState(products)

	const handleAddProduct = (e) => {
		e.preventDefault()
		console.log(e)
		const formData = new FormData(e.target)
		const file = formData.get("file")
		console.log(file)
		const data = Object.fromEntries(formData)
		setProduct([...Product, data])
	}
	return (
		<div className="App">
			<h1>ecommerce website</h1>
			<div className="addingSection">
				add item to cart
				<form onSubmit={handleAddProduct}>
					<label htmlFor="name">product name</label>
					<input type="text" name="name" />
					<input type="file" name="file" />
					<label htmlFor="price">price</label>
					<input type="text" name="price" />
					<button type="submit">add</button>
				</form>
			</div>
			{Product.map((product, i) => {
				return <ItemCard key={i} {...product} />
			})}
		</div>
	)
}

export default App
