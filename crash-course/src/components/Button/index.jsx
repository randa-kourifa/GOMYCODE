import React from "react"

function Button({ OurPropsAsFunction }) {
	return <div onClick={() => OurPropsAsFunction(fullname)}>Button</div>
}

export default Button
