import "./App.css"
import ItemCard from "./components/ItemCard"
import { products } from "./products"

function App() {
	return (
		<div className="App">
			<h1>ecommerce website</h1>
			<div className="productContainer">
				{products.map((product) => (
					<ItemCard OurPropProduct={product} />
				))}
			</div>
		</div>
	)
}

export default MyApplication
