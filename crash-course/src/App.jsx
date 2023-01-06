import "./App.css"
import Button from "./components/Button"
import Container from "./components/Container"
import Form from "./components/Form"
import User from "./components/User"

function App() {
	const name = "react"
	const handleClick = (evenement) => {
		console.log(evenement)
		alert("Button clicked")
	}
	const users = [
		{ name: "John", id: 1, color: "red" },
		{ name: "Jane", id: 2, color: "blue" },
	]

	return (
		<>
			<Container OurProp={name} />
			<Form />
			{users.map((user) => (
				<User AttributeUser={user} />
			))}

			<Button OurPropsAsFunction={handleClick} />
		</>
	)
}

export default App
