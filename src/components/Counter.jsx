import React from "react";

function Counter() {
	const [counter, setCounter] = React.useState(0);
	// console.log(React.useState(0));
	// console.log(counter,setCounter);
	const handleIncrement = (value) => {
		setCounter(counter + value);
		// console.log(counter);
	};
	const handleDecrement = (value) => {
		setCounter(counter - value);
	};
	// console.log({ counter });
	// console.log({handleIncrement});
	return (
		<>
			<h1>{counter}</h1>
			<button onClick={() => handleIncrement(1)}>INCREASE</button>
			<button onClick={() => handleDecrement(1)}>DECREASE</button>
		</>
	);
}

export default Counter;
