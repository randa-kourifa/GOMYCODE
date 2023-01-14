import axios from "axios"
import React, { useEffect, useState } from "react"
import AnimalCard from "../components/AnimalCard"
import AnimalForm from "../components/AnimalForm"
import Counter from "../components/Counter"
import classes from "./Home.module.css"

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)
	const [myanimals, setmyanimals] = useState([])

	const AddAnimal = async (e) => {
		//on empeche le comportement par defaut du form
		e.preventDefault()

		//on creer un genre de courrier "formData"
		//qui contient notre image
		//est on la post sur cloudinary
		const CloundinaryUrl = "https://api.cloudinary.com/v1_1/dyzwu7mr1/upload"
		const myimage = e.target.image.files[0]

		const formData = new FormData()
		formData.append("file", myimage)
		formData.append("upload_preset", "dpnhmxva")

		const response = await axios.post(CloundinaryUrl, formData)

		// on creer notre object newAnimal avec l'url que cloudinary nous
		//donne
		const newAnimal = {
			name: e.target.name.value,
			description: e.target.description.value,
			image: response.data.secure_url, //l'url que cloudinary nous donne
		}

		// on post notre animal cette fois dans le serveur
		const responseServer = await axios.post(
			"https://zoo-api-nhvk.onrender.com/animals/add",
			newAnimal,
		)
		// on ajoute notre nouveau animal au animaux existant (useState)
		setmyanimals([...myanimals, newAnimal])
	}

	useEffect(() => {
		//on creer une fonction async pour ramener nos data
		//dans useEffect: car on a besoin d'attendre que
		// les components soit dans le document(mounted)
		// pour ensuite ramener notre data

		const getAnimals = async () => {
			const res = await axios.get("https://zoo-api-nhvk.onrender.com/animals")
			setmyanimals(res.data) //on met nos données dans notre useState
			setIsLoading(false) //on met isLoading a false pour afficher nos animaux
		}
		getAnimals()
	}, [])

	return (
		<div>
			<Counter />
			<h1>The Zoo</h1>
			<p>Add Your Animal</p>
			<AnimalForm AddAnimal={AddAnimal} />
			{isLoading ? (
				<div> isloading</div>
			) : (
				<div className={classes.animalsWrapper}>
					{myanimals?.map((animal, i) => (
						<AnimalCard key={i} {...animal} />
					))}
				</div>
			)}
		</div>
	)
}
