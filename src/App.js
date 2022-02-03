import "./App.css";
import React from 'react';
import Counter from "./components/Counter";

function App() {
	// const [counter, setCounter] = React.useState(0);
	// //console.log(React.useState(0));
	// const handleIncrement = (value) => {
	// 	setCounter(counter + value);
	// };
	// const handleDecrement = (value) => {
	// 	setCounter(counter - value);
	// };

	// console.log(handleIncrement);
	// console.log(handleDecrement);
	return (
		<div className="App">
			{/* <h1>{ counter }</h1>
			<button onClick={ ()=> handleIncrement(1)}>INCREASE</button>
			<button onClick= {() =>handleDecrement(1)}>DECREASE</button> */}
			
			<Counter />
		</div>
	);
}

export default App;
