import "./App.css"
import ItemCard from "./components/ItemCard"
import items from "./constants/items.json"
function App() {
	console.log(items)
	return (
		<div className="App">
			{/* <NavBar />
			<CardButton /> */}
			{/* <SignInCard /> */}
			<div className="itemsContainer">
				{items.map((item) => (
					<ItemCard {...item} />
				))}
			</div>
		</div>
	)
}

export default App
