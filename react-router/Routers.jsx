import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./src/home"
export default function Routers() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home></Home>} />
				{/*	<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error404 to="/" />} /> */}
			</Routes>
		</BrowserRouter>
	)
}
