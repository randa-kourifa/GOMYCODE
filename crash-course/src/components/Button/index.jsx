import React from "react"

function Button({ OurPropsAsFunction }) {
	return <div onClick={(e) => OurPropsAsFunction("fdsfdse")}>Button</div>
}

export default Button
